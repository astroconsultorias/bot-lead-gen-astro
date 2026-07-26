import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

// Minimal typed wrapper around the beta supabase.auth.oauth namespace.
type OAuthResult = {
  data?: {
    client?: { name?: string; client_uri?: string; redirect_uris?: string[] };
    scope?: string;
    redirect_url?: string;
    redirect_to?: string;
  } | null;
  error?: { message: string } | null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const oauth = (supabase.auth as any).oauth as {
  getAuthorizationDetails: (id: string) => Promise<OAuthResult>;
  approveAuthorization: (id: string) => Promise<OAuthResult>;
  denyAuthorization: (id: string) => Promise<OAuthResult>;
};

const OAuthConsent: React.FC = () => {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<OAuthResult["data"] | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Missing authorization_id");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/login?next=" + encodeURIComponent(next);
        return;
      }
      setEmail(sess.session.user?.email ?? null);
      const res = await oauth.getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (res.error) {
        setError(res.error.message);
        return;
      }
      const immediate = res.data?.redirect_url ?? res.data?.redirect_to;
      if (immediate && !res.data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(res.data ?? null);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    const res = approve
      ? await oauth.approveAuthorization(authorizationId)
      : await oauth.denyAuthorization(authorizationId);
    if (res.error) {
      setBusy(false);
      setError(res.error.message);
      return;
    }
    const target = res.data?.redirect_url ?? res.data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center">
          <h1 className="text-xl font-bold text-foreground mb-2">
            Não foi possível carregar esta autorização
          </h1>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
      </main>
    );
  }

  if (!details) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Carregando…</p>
      </main>
    );
  }

  const clientName = details.client?.name ?? "esse aplicativo";
  const scope = details.scope ?? "openid email profile";

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8">
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">
          Conectar {clientName} à Astro Consultoria
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          Isso permite que <strong>{clientName}</strong> use os recursos desta conta
          enquanto você estiver conectado.
        </p>

        {email && (
          <div className="mb-4 text-sm text-foreground">
            Conta: <span className="font-medium">{email}</span>
          </div>
        )}

        <div className="mb-6 border border-border rounded-lg p-4 bg-muted/30">
          <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">
            Permissões
          </p>
          <ul className="text-sm text-foreground space-y-1">
            <li>• Ver seu perfil básico e e-mail</li>
            <li>• Chamar as ferramentas habilitadas neste app como você</li>
          </ul>
          <p className="text-xs text-muted-foreground mt-3">
            Escopos: <code>{scope}</code>
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            className="flex-1"
            disabled={busy}
            onClick={() => decide(true)}
          >
            Aprovar
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            disabled={busy}
            onClick={() => decide(false)}
          >
            Cancelar conexão
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Isso não ignora as permissões do app nem as políticas do backend.
        </p>
      </div>
    </main>
  );
};

export default OAuthConsent;

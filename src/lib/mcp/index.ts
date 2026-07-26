import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getContactTool from "./tools/get-contact";
import whoamiTool from "./tools/whoami";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "astro-consultoria-mcp",
  title: "Astro Consultoria",
  version: "0.1.0",
  instructions:
    "Ferramentas da Astro Consultoria: consulte os serviços e preços, obtenha os canais de contato oficiais e identifique a conta autenticada.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listServicesTool, getContactTool, whoamiTool],
});

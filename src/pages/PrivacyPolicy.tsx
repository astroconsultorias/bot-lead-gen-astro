import React from "react";
import Layout from "@/components/layout/Layout";

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <article className="max-w-3xl mx-auto prose prose-invert prose-headings:font-heading prose-a:text-accent">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Privacidade
            </p>
            <h1>Política de Privacidade</h1>
            <p>
              Esta página explica, em linguagem simples, como a Astro Consultoria trata as informações enviadas por visitantes e potenciais clientes.
            </p>

            <h2>Informações que podem ser recebidas</h2>
            <p>
              Podemos receber dados fornecidos voluntariamente por você, como nome, empresa, cidade, telefone, e-mail, serviço de interesse e descrição da necessidade.
            </p>

            <h2>Finalidades</h2>
            <p>
              As informações são utilizadas para responder ao contato, compreender a demanda, preparar diagnóstico ou proposta, executar serviços contratados e manter registros administrativos necessários.
            </p>

            <h2>WhatsApp e serviços externos</h2>
            <p>
              Ao clicar em links de WhatsApp, Instagram, Google ou outros serviços, o tratamento de dados também fica sujeito às políticas dessas plataformas.
            </p>

            <h2>Compartilhamento</h2>
            <p>
              A Astro não vende dados pessoais. Informações podem ser compartilhadas apenas quando necessário para a execução do serviço, atendimento de obrigação legal ou uso de fornecedores tecnológicos essenciais, observando acesso limitado à finalidade.
            </p>

            <h2>Segurança e retenção</h2>
            <p>
              São adotadas medidas razoáveis de organização e segurança. Os dados são mantidos pelo período necessário ao atendimento, à relação comercial e às obrigações administrativas aplicáveis.
            </p>

            <h2>Seus direitos e contato</h2>
            <p>
              Para solicitar informação, correção ou exclusão de dados sob controle da Astro, entre em contato pelo e-mail{" "}
              <a href="mailto:astroconsultorias@gmail.com">astroconsultorias@gmail.com</a>.
            </p>

            <p className="text-sm text-muted-foreground">
              Última atualização: julho de 2026. Este texto é informativo e deve ser revisado quando novos formulários, integrações ou ferramentas de coleta forem adicionados.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;

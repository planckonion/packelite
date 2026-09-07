import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/landing/Legal";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Pack Elite" },
      {
        name: "description",
        content: "Saiba como o Pack Elite coleta, usa e protege seus dados pessoais.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout title="Política de Privacidade">
      <LegalSection title="1. Dados que coletamos">
        <p>
          Ao acessar nosso site e realizar uma compra, podemos coletar: nome, e-mail e dados de
          pagamento (processados diretamente pela plataforma de pagamento), além de dados de
          navegação como endereço IP, tipo de dispositivo e páginas visitadas, por meio de cookies
          e ferramentas de análise e publicidade (como o Pixel do Meta e ferramentas do Google).
        </p>
      </LegalSection>
      <LegalSection title="2. Como usamos seus dados">
        <p>Utilizamos os dados para:</p>
        <p>
          • Processar e entregar seu pedido; • Enviar comunicações sobre sua compra e suporte; •
          Melhorar a experiência do site; • Realizar campanhas de marketing e remarketing, conforme
          permitido pela legislação.
        </p>
      </LegalSection>
      <LegalSection title="3. Cookies e ferramentas de publicidade">
        <p>
          Utilizamos cookies e tecnologias semelhantes, incluindo o Pixel do Meta (Facebook) e
          ferramentas do Google Ads, para medir a eficácia dos nossos anúncios e exibir publicidade
          relevante. Você pode desativar os cookies nas configurações do seu navegador.
        </p>
      </LegalSection>
      <LegalSection title="4. Compartilhamento de dados">
        <p>
          Não vendemos seus dados pessoais. Compartilhamos informações apenas com operadores
          essenciais à operação, como a plataforma de pagamento e ferramentas de análise, sempre
          respeitando a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
        </p>
      </LegalSection>
      <LegalSection title="5. Seus direitos">
        <p>
          Conforme a LGPD, você pode solicitar a confirmação, o acesso, a correção, a anonimização,
          a portabilidade ou a exclusão dos seus dados pessoais, bem como revogar consentimentos,
          entrando em contato conosco.
        </p>
      </LegalSection>
      <LegalSection title="6. Segurança">
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não
          autorizados, perda ou alteração. Os dados de pagamento são processados em ambiente seguro
          pela plataforma de pagamento e não ficam armazenados em nossos servidores.
        </p>
      </LegalSection>
      <LegalSection title="7. Contato">
        <p>
          Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato pelo
          e-mail de suporte informado na página de compra.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

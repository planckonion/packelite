import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/landing/Legal";

export const Route = createFileRoute("/politica-de-reembolso")({
  head: () => ({
    meta: [
      { title: "Política de Reembolso — Pack Elite" },
      {
        name: "description",
        content: "Condições de reembolso do Pack Elite conforme o Código de Defesa do Consumidor.",
      },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <LegalLayout title="Política de Reembolso">
      <LegalSection title="1. Prazo de arrependimento">
        <p>
          Conforme o artigo 49 do Código de Defesa do Consumidor, você tem até 7 (sete) dias
          corridos, a partir da data da compra, para solicitar o cancelamento e o reembolso
          integral do valor pago, sem necessidade de justificativa.
        </p>
      </LegalSection>
      <LegalSection title="2. Como solicitar">
        <p>
          Para solicitar o reembolso, entre em contato pelo e-mail de suporte informado no seu
          comprovante de compra, indicando o e-mail utilizado na compra e o número do pedido. O
          reembolso é processado pela mesma forma de pagamento utilizada.
        </p>
      </LegalSection>
      <LegalSection title="3. Prazo de processamento">
        <p>
          Após a solicitação, o estorno é processado em até 7 dias úteis. No caso de cartão de
          crédito, o prazo para o valor aparecer na fatura depende da administradora do cartão,
          podendo levar até 2 faturas.
        </p>
      </LegalSection>
      <LegalSection title="4. Após o prazo de 7 dias">
        <p>
          Por se tratar de produto digital com acesso imediato e vitalício, após o prazo legal de
          arrependimento não são realizados reembolsos, exceto em caso de problema técnico comprovado
          que impeça o acesso ao conteúdo e que não possa ser resolvido pelo suporte.
        </p>
      </LegalSection>
      <LegalSection title="5. Suporte">
        <p>
          Nosso suporte está disponível para ajudar com qualquer dificuldade de acesso ou dúvida
          sobre o produto, antes ou depois da compra.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

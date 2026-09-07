import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/landing/Legal";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Pack Elite" },
      {
        name: "description",
        content: "Condições de uso e compra do Pack Elite, produto digital com entrega imediata.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout title="Termos de Uso">
      <LegalSection title="1. Sobre o produto">
        <p>
          O Pack Elite é um produto digital composto por arquivos e conteúdos para edição de vídeo
          e criação de conteúdo. Após a confirmação do pagamento, o acesso é liberado de forma
          automática e imediata, com acesso vitalício ao conteúdo adquirido.
        </p>
      </LegalSection>
      <LegalSection title="2. Licença de uso">
        <p>
          A compra concede uma licença de uso pessoal e intransferível do conteúdo. É vedada a
          redistribuição gratuita dos arquivos, bem como qualquer uso que viole direitos autorais
          de terceiros. A revenda do pack, quando praticada pelo comprador, é de sua inteira
          responsabilidade.
        </p>
      </LegalSection>
      <LegalSection title="3. Resultados e ganhos">
        <p>
          Os valores e exemplos de resultados apresentados neste site são estimativas e não
          constituem garantia de ganhos. Os resultados individuais dependem de fatores como
          dedicação, experiência e estratégia de cada pessoa.
        </p>
      </LegalSection>
      <LegalSection title="4. Pagamento e acesso">
        <p>
          O pagamento é processado por plataforma segura de terceiros. Em caso de problemas com o
          acesso após a confirmação do pagamento, nosso suporte está disponível para resolver em
          até 24 horas úteis.
        </p>
      </LegalSection>
      <LegalSection title="5. Propriedade intelectual">
        <p>
          Todo o conteúdo deste site, incluindo marca, textos, imagens e layout, é protegido por
          direitos autorais e não pode ser reproduzido sem autorização.
        </p>
      </LegalSection>
      <LegalSection title="6. Alterações dos termos">
        <p>
          Podemos atualizar estes Termos de Uso a qualquer momento. A versão vigente estará sempre
          disponível nesta página, com a data da última atualização.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

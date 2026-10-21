# Atualizar preço, checkout e formas de pagamento

## Preço (R$97,00 / R$19,90 → R$197 / R$87)
- Topo da página: "De R$97,00" → "De R$197"; "R$19,90" → "R$87"
- Botão do menu: "Comprar — R$19,90" → "Comprar — R$87"
- Seção "Revenda e lucre": "Compre por R$19,90" → "Compre por R$87"
- Passo "Confirme o pagamento": "R$19,90 — PIX, cartão ou boleto" → "R$87 — PIX, cartão"
- Chamada final: "Por apenas R$19,90" → "Por apenas R$87"; botão "Quero o pack agora — R$19,90" → "Quero o pack agora — R$87"
- Título da página (aba do navegador): "... por R$19,90" → "... por R$87"

## Checkout
- Todos os botões de compra passam a abrir: https://checkout.wiven.com.br/checkout/cmvhesl260kgt01pwzempqr73?offer=4UF3HX5 (o link fica definido num único lugar, então todos os botões mudam juntos)

Nada mais será alterado.

## Detalhes técnicos
- `shared.tsx`: CHECKOUT_URL
- `Hero.tsx`, `Navbar.tsx`, `Sections.tsx` (linhas 176, 240, 310, 321), `routes/index.tsx` (title)

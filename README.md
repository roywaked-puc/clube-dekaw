# Clube DEKAW — landing page

Landing de marketing do app **DEKAW · Donos da Bola**, publicada em
`clube.dekaw.com.br`. O app em si fica em `app.dekaw.com.br` (projeto
separado). Esta landing não tem login, banco nem integração com o app:
só leva a pessoa pro cadastro (`/cadastro`) ou login (`/login`) do app.

Projeto Lovable (TanStack Start + Vite). A página inteira está em
`src/routes/index.tsx`; hover, foco e o menu no celular ficam no fim de
`src/styles.css`; título, fontes e meta tags gerais em
`src/routes/__root.tsx`.

## Versão 3 (03/10/2026)

Refeita do zero pra bater com o que o app faz hoje. A versão 3 manteve o
conteúdo da 2 e trocou o visual: mais leve, como a página antiga, com a logo
DEKAW. Antes de mudar a copy, conferir com a BÍBLIA do app.

**O que a página pode prometer:**

- Conta grátis e aberta pra todo mundo. Cada tribo escolhe quem entra:
  aberta, com pedido de entrada ou só por convite.
- Convite pessoal pelo WhatsApp ou QR Code, vale pra uma pessoa só. Quem
  entra por convite aparece com o nome de quem trouxe.
- Aviso de jogo aberto só do esporte da pessoa, nos dias e horários que ela
  escolher.
- Chat dentro de cada jogo (existe depois que o jogo é criado).
- Depois do jogo: foto, comentários, quem foi e quem pagou (o organizador
  marca, o app não cobra nada) e avaliação anônima em até 24h.
- Selo de confiabilidade: Novo na comunidade, Sempre confirma presença,
  Geralmente confiável, Histórico de faltas frequentes. Cancelar com 24h de
  antecedência nunca pesa.
- Aviso de nível antes de entrar num jogo muito acima ou abaixo do nível
  da pessoa.
- Pontos: organizar jogo +10, jogar +2. Níveis Bronze (0–49), Prata
  (50–149), Ouro (150–349) e Lendário (350+).
- Grátis, sem anúncios e sem cobrança pelo app.

**O que a página não deve prometer** (o app não faz):

- "Clube fechado, só por convite".
- Prêmio, brinde, desconto ou temporada no ranking.
- Ponto por avaliar ou por postar.
- Condições especiais na loja pra quem é da tribo.
- Placar/resultado do jogo.

**Mantido por decisão do dono:** os textos de Professor (abre a tribo e
chama os alunos) e Dono de quadra (abre o horário e chama a galera da
quadra).

## Marca

- Cor principal: `#00AB84`, o verde da logo. Site e app usam o mesmo verde
  (decisão de 03/10/2026, à tarde; substitui o `#00A850`).
- Apoio: `#00694F` (texto pequeno verde e início do degradê dos botões),
  `#E6F6F1` (etiquetas), `#EEF9F6` → branco (degradê dos fundos), `#13201C`
  (títulos), `#4F5D58` (texto). Branco sobre `#00AB84` só em logo, ícone e
  área grande: letra pequena não tem contraste suficiente.
- Visual leve: fundo branco e verde-claro, botões em pílula, cantos
  arredondados, nenhuma seção escura. Nunca preto como fundo, nunca roxo.
- Logos em `public/logos/`: logo completa (com o slogan) verde e branca,
  símbolo verde e branco. A logo completa vai no menu, na seção da loja e
  na faixa verde do rodapé.
- Ícone da aba: `public/favicon.ico`, `public/icon-512.png`,
  `public/apple-touch-icon.png`. Imagem de compartilhamento:
  `public/og-dekaw.png` (1200×630).
- Fontes: Archivo (títulos) e Instrument Sans (texto).
- Nome: "DEKAW · Donos da Bola" (igual à Play Store). Slogan: "Você Dono da
  Bola".
- Palavras da marca: galera, jogo, quadra, tribo. Evitar: usuário,
  plataforma, solução, recurso.

## Pendências

- Confirmar se o app tem lista de histórico de partidas (card "Jogador":
  "Seus jogos e pontos no perfil").

## Rodar localmente

```bash
bun install
bun run dev
bun run build
```

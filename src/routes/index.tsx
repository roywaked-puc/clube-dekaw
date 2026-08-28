import { createFileRoute } from "@tanstack/react-router";
import {
  ArtJogadores,
  IconChat,
  IconConvite,
  IconEscudo,
  IconProfessor,
  IconQuadra,
  IconRaquete,
  IconRelogio,
  IconTribo,
  IconTrofeu,
} from "@/components/dekaw/icons";

const CTA = "https://app.dekaw.com.br/";

/*
 * VARIAÇÕES DE HEADLINE DO HERO
 * (1) USADA: "Nunca mais fique sem ter com quem jogar."
 * (2) Alternativa: "Seu clube de raquete começa na sua tribo."
 * (3) Alternativa: "Você dono da bola: chame a tribo, marque o jogo, entre em quadra."
 */

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DEKAW — Você Dono da Bola" },
      {
        name: "description",
        content:
          "Organize partidas de beach tennis, padel, squash e pickleball com segurança: tribos por convite, chat interno e ranking com prêmios Dekaw.",
      },
      { property: "og:title", content: "DEKAW — Você Dono da Bola" },
      {
        property: "og:description",
        content:
          "Organize partidas de beach tennis, padel, squash e pickleball com segurança: tribos por convite, chat interno e ranking com prêmios Dekaw.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Cta({
  children,
  variant = "solid",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-lift hover:-translate-y-0.5"
      : "border border-primary/30 text-primary hover:bg-accent";
  return (
    <a href={CTA} className={`${base} ${styles} ${className}`}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
      {children}
    </span>
  );
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-5 py-20 md:px-8 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-2">
            <IconRaquete className="h-7 w-7 text-primary" />
            <span className="font-display text-lg font-extrabold tracking-tight">DEKAW</span>
            <span className="hidden text-xs font-medium text-muted-foreground sm:inline">você dono da bola</span>
          </div>
          <Cta className="px-5 py-2.5 text-xs">Entrar no clube</Cta>
        </div>
      </header>

      {/* 1. HERO */}
      <Section className="surface-soft pt-14 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Clube fechado · só por convite</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] md:text-6xl">
              Nunca mais fique sem ter
              <span className="text-gradient-primary"> com quem jogar.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              O Dekaw é o clube digital onde amadores de beach tennis, padel, squash e pickleball se organizam em
              tribos. Você entra convidado por alguém que já está dentro, encontra parceiros do seu nível e marca o jogo
              pelo chat — sem precisar sair pedindo telefone para desconhecido.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Cta>Quero entrar na minha tribo</Cta>
              <Cta variant="ghost">Ver como funciona</Cta>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Gratuito · para maiores de 18 anos · beach tennis, padel, squash e pickleball
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/5 blur-2xl" />
            <div className="relative rounded-[2rem] border border-primary/15 bg-card p-4 shadow-lift">
              <ArtJogadores className="w-full text-primary" />
              <div className="mt-2 flex items-center gap-3 rounded-2xl bg-accent px-4 py-3">
                <IconTribo className="h-8 w-8 shrink-0 text-primary" />
                <p className="text-sm font-medium text-accent-foreground">
                  "Chadi, convidado do Roy" — na Dekaw, todo mundo tem referência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. PROBLEMA */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>O problema</Eyebrow>
          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
            A raquete está no carro. O que falta é o jogo.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Quem joga esporte de raquete conhece a rotina: grupo de mensagem lotado, ninguém confirma, quadra reservada
            e alguém desiste na última hora.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: <IconRaquete className="h-10 w-10 text-primary" />,
              t: "Não tenho com quem jogar",
              d: "Você evoluiu, quer jogar mais vezes na semana, mas sempre depende das mesmas duas pessoas — e quando elas não podem, o jogo morre.",
            },
            {
              icon: <IconRelogio className="h-10 w-10 text-primary" />,
              t: "Quadra vazia em horário bom",
              d: "Donos de quadra veem horários ociosos todos os dias, enquanto tem gente querendo jogar e sem saber que aquele slot está livre.",
            },
            {
              icon: <IconEscudo className="h-10 w-10 text-primary" />,
              t: "Insegurança com desconhecido",
              d: "Marcar com alguém que ninguém conhece, passar telefone, não saber o nível nem se a pessoa aparece. Falta referência de confiança.",
            },
          ].map((c) => (
            <article
              key={c.t}
              className="rounded-3xl border border-border bg-card p-7 transition-shadow duration-300 hover:shadow-soft"
            >
              {c.icon}
              <h3 className="mt-5 text-lg font-bold">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 3. SOLUÇÃO */}
      <Section className="surface-soft">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>A solução</Eyebrow>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
              Um clube onde todo mundo tem nome, referência e vontade de jogar.
            </h2>
            <p className="mt-4 text-muted-foreground">
              O Dekaw não é mais um app de agenda. É a sua tribo organizada: gente apresentada por gente, conversa no
              lugar certo e jogo marcado em minutos.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Entrada só por convite — a tribo cresce por confiança, não por algoritmo.",
                "Cada convidado aparece referenciado a quem o convidou.",
                "Chat interno para combinar horário, nível e quadra sem trocar telefone.",
                "Pontos por organizar, avaliar e postar depois do jogo — quem move a tribo é reconhecido.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <IconEscudo className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Cta>Entrar no clube agora</Cta>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                i: <IconTribo className="h-9 w-9 text-primary" />,
                t: "Tribos",
                d: "Seu círculo de jogo, sempre com referência.",
              },
              { i: <IconChat className="h-9 w-9 text-primary" />, t: "Chat seguro", d: "Combine tudo dentro do app." },
              {
                i: <IconTrofeu className="h-9 w-9 text-primary" />,
                t: "Ranking",
                d: "Pontos e prêmios a cada período.",
              },
              {
                i: <IconQuadra className="h-9 w-9 text-primary" />,
                t: "Quadras",
                d: "Horários livres na mão de quem joga.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-3xl border border-primary/15 bg-card p-6 shadow-soft">
                {c.i}
                <h3 className="mt-4 font-bold">{c.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. COMO FUNCIONA */}
      <Section>
        <div className="max-w-2xl">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
            Três passos entre o convite e a primeira partida.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              i: <IconConvite className="h-10 w-10 text-primary" />,
              t: "Você é convidado",
              d: "Alguém da tribo te chama. Dentro do clube, seu perfil sempre mostra quem te trouxe — como 'Chadi, convidado do Roy'. Isso cria compromisso dos dois lados.",
            },
            {
              n: "02",
              i: <IconChat className="h-10 w-10 text-primary" />,
              t: "Combina no chat",
              d: "Encontre gente do seu nível e converse no chat interno: dia, horário, quadra e dúvidas. Sem grupos paralelos, sem passar telefone para desconhecido.",
            },
            {
              n: "03",
              i: <IconQuadra className="h-10 w-10 text-primary" />,
              t: "Entra em quadra",
              d: "Jogo confirmado. Depois, avalie a partida e poste o resultado: você soma pontos e a tribo passa a jogar cada vez mais.",
            },
          ].map((s) => (
            <li key={s.n} className="relative rounded-3xl border border-border bg-card p-7">
              <span className="font-display text-5xl font-extrabold text-primary/15">{s.n}</span>
              <div className="mt-2">{s.i}</div>
              <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 5. PARA QUEM É */}
      <Section className="surface-soft">
        <div className="max-w-2xl">
          <Eyebrow>Para quem é</Eyebrow>
          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
            Você entra pela porta que faz sentido para o seu jogo.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              i: <IconRaquete className="h-10 w-10 text-primary" />,
              t: "Jogador",
              d: "Quer jogar mais vezes na semana, com gente do seu nível e sem ficar implorando confirmação em grupo.",
              b: ["Parceiros com referência", "Convites diretos da tribo", "Histórico das suas partidas"],
              cta: "Entrar como jogador",
            },
            {
              i: <IconProfessor className="h-10 w-10 text-primary" />,
              t: "Professor",
              d: "Coloque seus alunos na sua tribo: eles acham parceiros para treinar fora da aula, evoluem mais rápido e ficam mais tempo com você.",
              b: ["Alunos conectados entre si", "Mais motivação e retenção", "Sua turma organizada em um lugar"],
              cta: "Entrar como professor",
            },
            {
              i: <IconQuadra className="h-10 w-10 text-primary" />,
              t: "Dono de quadra",
              d: "Cadastre seus clientes e divulgue horários vagos direto para quem já quer jogar. Horário ocioso vira quadra cheia.",
              b: ["Divulgação de slots livres", "Base de clientes ativa", "Mais ocupação fora do pico"],
              cta: "Entrar como dono de quadra",
            },
          ].map((c) => (
            <article key={c.t} className="flex flex-col rounded-3xl border border-primary/15 bg-card p-7 shadow-soft">
              {c.i}
              <h3 className="mt-5 text-xl font-bold">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {c.b.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-primary">•</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Cta className="mt-7 w-full" variant="ghost">
                {c.cta}
              </Cta>
            </article>
          ))}
        </div>
      </Section>

      {/* 6. GAMIFICAÇÃO */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 rounded-[2rem] border border-primary/15 bg-card p-8 shadow-lift md:order-1">
            <div className="flex items-center gap-3">
              <IconTrofeu className="h-10 w-10 text-primary" />
              <p className="font-display text-lg font-bold">Ranking da temporada</p>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                ["1º", "Roy M.", "1.480 pts", "Brinde Dekaw + desconto"],
                ["2º", "Chadi A.", "1.220 pts", "Desconto na loja"],
                ["3º", "Marina P.", "1.075 pts", "Desconto na loja"],
              ].map(([pos, nome, pts, premio]) => (
                <li
                  key={pos}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-accent px-4 py-3"
                >
                  <span className="flex items-center gap-3 font-semibold">
                    <span className="text-primary">{pos}</span>
                    {nome}
                  </span>
                  <span className="text-sm text-muted-foreground">{pts}</span>
                  <span className="w-full text-xs font-medium text-accent-foreground sm:w-auto">{premio}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">Exemplo ilustrativo de ranking (dados fictícios).</p>
          </div>
          <div className="order-1 md:order-2">
            <Eyebrow>Gamificação</Eyebrow>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
              Quem move a tribo <span className="text-gradient-primary">ganha por isso.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cada ação que faz o clube girar vale ponto. No fim do período, os 3 primeiros colocados levam descontos ou
              brindes da Dekaw.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Organizar jogo", "Marcou a partida e juntou a galera? Ponto."],
                ["Avaliar a partida", "Feedback ajuda todo mundo a achar nível certo."],
                ["Postar depois do jogo", "Foto, resultado, resenha — a tribo se anima."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-border p-5">
                  <p className="font-bold">{t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <Cta>Começar a pontuar</Cta>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. PROVA SOCIAL */}
      <Section className="surface-soft">
        <div className="max-w-2xl">
          <Eyebrow>A tribo fala</Eyebrow>
          <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">Gente jogando mais, quadra mais cheia.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            "Convidado por um amigo, virou jogo fixo em duas semanas — nunca mais ficou sem dupla.",
            "Professor coloca os alunos pra treinarem entre si fora da aula — a evolução acelera e ninguém abandona o esporte.",
            "Dono de arena divulga o horário vago direto na tribo — o período que era morto vira o mais disputado.",
          ].map((c) => (
            <article key={c} className="rounded-3xl border border-border bg-card p-7">
              <p className="text-sm leading-relaxed">{c}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 8. PARCERIA DEKAW / HEAD */}
      <Section>
        <div className="grid items-center gap-10 rounded-[2rem] border border-primary/15 bg-card p-8 shadow-soft md:grid-cols-[1fr_1.2fr] md:p-12">
          <IconRaquete className="h-24 w-24 text-primary" />
          <div>
            <Eyebrow>Ecossistema Dekaw</Eyebrow>
            <h2 className="mt-5 text-2xl font-bold leading-tight md:text-3xl">
              O clube é da tribo. A loja está aqui quando a raquete pedir.
            </h2>
            <p className="mt-4 text-muted-foreground">
              O Dekaw nasceu dentro da loja Dekaw, revendedora Head para beach tennis, padel, squash e pickleball. Por
              isso o app é e continua gratuito: quem joga mais evolui mais, e quando chega a hora de trocar a raquete, o
              overgrip ou a bolsa, você já sabe quem entende do seu jogo — com condições especiais para a tribo e
              prêmios do ranking saindo direto da loja.
            </p>
          </div>
        </div>
      </Section>

      {/* 9. CTA FINAL */}
      <Section className="surface-soft">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Clube fechado por convite</Eyebrow>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight md:text-5xl">
            A tribo já está jogando.
            <span className="text-gradient-primary"> Falta você em quadra.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            O Dekaw não é aberto para todo mundo: cada membro entra referenciado por quem já está dentro. Se você
            recebeu um convite, ele é a sua porta de entrada — e o começo dos seus próximos jogos.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Cta className="px-9 py-4 text-base">Acessar meu convite</Cta>
            <Cta variant="ghost" className="px-9 py-4 text-base">
              Entrar no clube
            </Cta>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Gratuito · maiores de 18 anos · beach tennis · padel · squash · pickleball
          </p>
        </div>
      </Section>

      <footer className="border-t border-border px-5 py-10 md:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <IconRaquete className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-foreground">DEKAW</span>
            <span>· você dono da bola</span>
          </div>
          <a href={CTA} className="font-semibold text-primary hover:underline">
            clube.dekaw.com.br
          </a>
        </div>
      </footer>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";

/*
 * Landing do Clube DEKAW (clube.dekaw.com.br) — versão 2, 03/10/2026.
 *
 * Regras de conteúdo (bater com o app em app.dekaw.com.br, ver BIBLIA.md):
 * - Pontos: organizar jogo +10, jogar +2. Níveis Bronze 0–49, Prata 50–149,
 *   Ouro 150–349, Lendário 350+. Sem prêmio e sem temporada.
 * - Conta aberta e grátis; cada tribo escolhe: aberta, pedido de entrada ou
 *   só por convite. Não dizer "clube fechado, só por convite".
 * - Chat é da partida (existe depois que o jogo é criado).
 * - Professor e Dono de quadra: texto mantido por decisão do dono.
 * - Cores: só verdes DEKAW (#00A850, #004D25, fundo #EBF8F1). Sem preto.
 */

const TITLE = "DEKAW · Donos da Bola";
const DESCRIPTION =
  "Organize jogos de beach tennis, padel, squash, pickleball e tênis com a sua tribo. Você chama a galera e o jogo acontece. Grátis e sem anúncios.";
const URL = "https://clube.dekaw.com.br/";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});

function Index() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#FFFFFF",
        color: "#1A1A1A",
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
        fontSize: "17px",
        lineHeight: "1.55",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: "0",
          zIndex: "30",
          background: "#004D25",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "12px clamp(16px, 5vw, 64px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <a
            href="#topo"
            aria-label="DEKAW Donos da Bola, voltar ao início"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              minHeight: "44px",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "900",
                fontStretch: "118%",
                fontSize: "24px",
                letterSpacing: "0.03em",
                color: "#FFFFFF",
              }}
            >
              DEKAW
            </span>
            <span
              className="brand-sub"
              style={{
                fontSize: "13px",
                fontWeight: "600",
                letterSpacing: "0.02em",
                color: "#8BE3B0",
              }}
            >
              Donos da Bola
            </span>
          </a>
          <nav
            className="nav-links"
            aria-label="Seções da página"
            style={{ display: "flex", alignItems: "center", gap: "28px" }}
          >
            <a
              className="navlink"
              href="#como-funciona"
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Como funciona
            </a>
            <a
              className="navlink"
              href="#para-quem-e"
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Para quem é
            </a>
            <a
              className="navlink"
              href="#ranking"
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Ranking
            </a>
            <a
              className="navlink"
              href="#loja"
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Loja
            </a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <a
              className="navlink"
              href="https://app.dekaw.com.br/login"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "44px",
                padding: "0 12px",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Entrar
            </a>
            <a
              className="btn"
              href="https://app.dekaw.com.br/cadastro"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "44px",
                padding: "0 18px",
                borderRadius: "12px",
                background: "#00A850",
                color: "#062E1A",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              Criar conta
            </a>
          </div>
        </div>
      </header>
      <section
        id="topo"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#00A850",
          color: "#062E1A",
        }}
      >
        <div
          className="court-decor"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "48px",
            right: "-170px",
            width: "640px",
            height: "900px",
            border: "3px solid rgba(255,255,255,0.32)",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "50%",
              borderTop: "4px solid rgba(255,255,255,0.6)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "22%",
              borderTop: "3px solid rgba(255,255,255,0.32)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "78%",
              borderTop: "3px solid rgba(255,255,255,0.32)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "22%",
              bottom: "22%",
              borderLeft: "3px solid rgba(255,255,255,0.32)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(56px, 8vw, 104px) clamp(16px, 5vw, 64px) clamp(64px, 9vw, 120px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "56px",
          }}
        >
          <div
            style={{
              flex: "1 1 520px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
            }}
          >
            <p
              style={{
                margin: "0",
                padding: "6px 14px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.28)",
                color: "#062E1A",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Grátis · beach tennis, padel, squash, pickleball e tênis
            </p>
            <h1
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "900",
                fontStretch: "72%",
                textTransform: "uppercase",
                fontSize: "clamp(46px, 7vw, 88px)",
                lineHeight: "0.9",
                letterSpacing: "-0.01em",
                color: "#062E1A",
              }}
            >
              Nunca mais fique sem ter <span style={{ color: "#FFFFFF" }}>com quem jogar.</span>
            </h1>
            <p style={{ margin: "0", maxWidth: "34em", fontSize: "19px", color: "#062E1A" }}>
              O Dekaw é o clube digital onde amadores de esportes de raquete se organizam em tribos
              de confiança. Você chama a galera, a tribo recebe o aviso e quem topa confirma
              presença. Sem grupo lotado e sem passar telefone pra desconhecido.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                className="btn"
                href="https://app.dekaw.com.br/cadastro"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  minHeight: "52px",
                  padding: "0 24px",
                  borderRadius: "12px",
                  background: "#004D25",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "17px",
                }}
              >
                Criar minha conta{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a
                className="btn"
                href="#como-funciona"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: "52px",
                  padding: "0 22px",
                  borderRadius: "12px",
                  border: "2px solid #062E1A",
                  color: "#062E1A",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "17px",
                }}
              >
                Ver como funciona
              </a>
            </div>
            <p
              style={{
                margin: "0",
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
                maxWidth: "30em",
                fontSize: "15px",
                color: "#062E1A",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: "none", marginTop: "3px" }}
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <span>
                <strong style={{ fontWeight: "700" }}>Recebeu um convite?</strong> Abra o link que
                te mandaram: ele já te leva direto pra tribo certa.
              </span>
            </p>
          </div>
          <div style={{ flex: "1 1 340px", maxWidth: "430px", minWidth: "0" }}>
            <div
              role="img"
              aria-label="Ilustração da tela de um jogo no app: quem vai jogar, quem convidou cada pessoa e o chat da partida"
              style={{
                background: "#FFFFFF",
                color: "#1A1A1A",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 30px 70px rgba(0,61,30,0.4)",
              }}
            >
              <div
                style={{
                  background: "#004D25",
                  padding: "14px 18px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "20px",
                    background: "#00A850",
                    color: "#062E1A",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Beach tennis
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.9)",
                    color: "#004D25",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Intermediário
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.9)",
                    color: "#004D25",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Mista
                </span>
              </div>
              <div style={{ padding: "18px 20px 6px" }}>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#6B6B6B",
                  }}
                >
                  Tribo Amigos do Léo
                </div>
                <div
                  style={{
                    marginTop: "4px",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "800",
                    fontSize: "28px",
                    lineHeight: "1.1",
                    color: "#004D25",
                  }}
                >
                  Sábado, 08:00
                </div>
                <div
                  style={{
                    marginTop: "6px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    color: "#4A4A4A",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Quadra Central · 90 min
                </div>
              </div>
              <div style={{ padding: "14px 20px 4px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#1A1A1A",
                  }}
                >
                  <span>Quem vai jogar</span>
                  <span style={{ color: "#004D25" }}>3 de 4</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        width: "38px",
                        height: "38px",
                        flex: "none",
                        borderRadius: "50%",
                        background: "#004D25",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                        fontWeight: "700",
                      }}
                    >
                      LA
                    </span>
                    <span
                      style={{
                        flex: "1",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "1.25",
                      }}
                    >
                      <span style={{ fontWeight: "600", fontSize: "15px" }}>Léo A.</span>
                      <span style={{ fontSize: "13px", color: "#6B6B6B" }}>Organizador</span>
                    </span>
                    <span
                      style={{
                        padding: "4px 8px",
                        borderRadius: "20px",
                        background: "rgba(0,168,80,0.12)",
                        color: "#004D25",
                        fontSize: "11px",
                        fontWeight: "700",
                      }}
                    >
                      Sempre confirma presença
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        width: "38px",
                        height: "38px",
                        flex: "none",
                        borderRadius: "50%",
                        background: "#00A850",
                        color: "#062E1A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                        fontWeight: "700",
                      }}
                    >
                      MP
                    </span>
                    <span
                      style={{
                        flex: "1",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "1.25",
                      }}
                    >
                      <span style={{ fontWeight: "600", fontSize: "15px" }}>Marina P.</span>
                      <span style={{ fontSize: "13px", color: "#6B6B6B" }}>convidada do Léo</span>
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        width: "38px",
                        height: "38px",
                        flex: "none",
                        borderRadius: "50%",
                        background: "#DDF2E6",
                        color: "#004D25",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                        fontWeight: "700",
                      }}
                    >
                      BT
                    </span>
                    <span
                      style={{
                        flex: "1",
                        minWidth: "0",
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "1.25",
                      }}
                    >
                      <span style={{ fontWeight: "600", fontSize: "15px" }}>Bia T.</span>
                      <span style={{ fontSize: "13px", color: "#6B6B6B" }}>
                        convidada da Marina
                      </span>
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        width: "38px",
                        height: "38px",
                        flex: "none",
                        boxSizing: "border-box",
                        borderRadius: "50%",
                        border: "2px dashed #9FD6B8",
                        color: "#004D25",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14"></path>
                        <path d="M5 12h14"></path>
                      </svg>
                    </span>
                    <span style={{ flex: "1", minWidth: "0", fontSize: "15px", color: "#6B6B6B" }}>
                      Vaga aberta
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  margin: "16px 20px 0",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: "#EBF8F1",
                  fontSize: "14px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#004D25",
                  }}
                >
                  Chat do jogo
                </div>
                <div style={{ marginTop: "6px" }}>
                  <strong style={{ fontWeight: "700" }}>Marina:</strong> levo bolinha nova. Alguém
                  tem raquete reserva?
                </div>
              </div>
              <div style={{ padding: "16px 20px 20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#00A850",
                    color: "#062E1A",
                    fontWeight: "700",
                  }}
                >
                  Entrar no jogo
                </div>
              </div>
            </div>
            <p
              style={{
                margin: "12px 0 0",
                textAlign: "center",
                fontSize: "13px",
                fontWeight: "600",
                color: "#062E1A",
              }}
            >
              Ilustração com dados fictícios
            </p>
          </div>
        </div>
      </section>
      <section style={{ background: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
            <p
              style={{
                margin: "0",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#00A850",
              }}
            >
              O problema
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "900",
                fontStretch: "75%",
                textTransform: "uppercase",
                fontSize: "clamp(38px, 5.2vw, 64px)",
                lineHeight: "0.95",
                color: "#004D25",
              }}
            >
              A raquete está no carro. O que falta é o jogo.
            </h2>
            <p style={{ margin: "0", fontSize: "19px", color: "#4A4A4A" }}>
              Quem joga esporte de raquete conhece a rotina: grupo de mensagem lotado, ninguém
              confirma, quadra reservada e alguém desiste na última hora.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                padding: "28px",
                border: "1px solid #D5EBDE",
                borderRadius: "12px",
                background: "#FFFFFF",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "#00A850",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "23px",
                  lineHeight: "1.15",
                  color: "#004D25",
                }}
              >
                Não tenho com quem jogar
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4A4A4A" }}>
                Você evoluiu, quer jogar mais vezes na semana, mas sempre depende das mesmas duas
                pessoas. Quando elas não podem, o jogo morre.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                padding: "28px",
                border: "1px solid #D5EBDE",
                borderRadius: "12px",
                background: "#FFFFFF",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "#00A850",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "23px",
                  lineHeight: "1.15",
                  color: "#004D25",
                }}
              >
                Quadra vazia em horário bom
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4A4A4A" }}>
                Donos de quadra veem horários ociosos todos os dias, enquanto tem gente querendo
                jogar e sem saber que aquele slot está livre.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                padding: "28px",
                border: "1px solid #D5EBDE",
                borderRadius: "12px",
                background: "#FFFFFF",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "#00A850",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "23px",
                  lineHeight: "1.15",
                  color: "#004D25",
                }}
              >
                Insegurança com desconhecido
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4A4A4A" }}>
                Marcar com alguém que ninguém conhece, passar telefone, não saber o nível nem se a
                pessoa aparece. Falta referência de confiança.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#EBF8F1" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: "56px",
          }}
        >
          <div
            style={{
              flex: "1 1 460px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#004D25",
              }}
            >
              O jeito Dekaw
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "900",
                fontStretch: "75%",
                textTransform: "uppercase",
                fontSize: "clamp(36px, 4.6vw, 56px)",
                lineHeight: "0.95",
                color: "#004D25",
              }}
            >
              Um clube onde todo mundo tem nome, referência e vontade de jogar.
            </h2>
            <p style={{ margin: "0", fontSize: "18px", color: "#4A4A4A" }}>
              O Dekaw não é mais um app de agenda. É a sua tribo organizada: gente apresentada por
              gente, conversa no lugar certo e jogo marcado em minutos.
            </p>
            <ul
              style={{
                margin: "4px 0 0",
                padding: "0",
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "26px",
                    height: "26px",
                    marginTop: "1px",
                    borderRadius: "50%",
                    background: "#00A850",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span>
                  Cada tribo decide quem entra: aberta, com pedido de entrada ou só por convite.
                </span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "26px",
                    height: "26px",
                    marginTop: "1px",
                    borderRadius: "50%",
                    background: "#00A850",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span>
                  Convite pessoal pelo WhatsApp ou QR Code. Vale pra uma pessoa só, e ela aparece
                  com o nome de quem a trouxe.
                </span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "26px",
                    height: "26px",
                    marginTop: "1px",
                    borderRadius: "50%",
                    background: "#00A850",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span>
                  Aviso de jogo aberto só do seu esporte, nos dias e horários que você escolher.
                </span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "26px",
                    height: "26px",
                    marginTop: "1px",
                    borderRadius: "50%",
                    background: "#00A850",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span>Chat dentro de cada jogo pra acertar os detalhes, sem trocar telefone.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "26px",
                    height: "26px",
                    marginTop: "1px",
                    borderRadius: "50%",
                    background: "#00A850",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span>Pontos por organizar e por jogar: quem move a tribo sobe de nível.</span>
              </li>
            </ul>
            <a
              className="btn"
              href="https://app.dekaw.com.br/cadastro"
              style={{
                marginTop: "8px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "52px",
                padding: "0 24px",
                borderRadius: "12px",
                background: "#00A850",
                color: "#062E1A",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
              }}
            >
              Criar minha conta{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div
            style={{
              flex: "1 1 420px",
              minWidth: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                minHeight: "180px",
                padding: "24px",
                borderRadius: "12px",
                background: "#FFFFFF",
                boxShadow: "0 2px 8px rgba(0,77,37,0.08)",
              }}
            >
              <span
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#004D25",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "80%",
                  textTransform: "uppercase",
                  fontSize: "26px",
                  lineHeight: "1",
                  color: "#004D25",
                }}
              >
                Tribos
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#4A4A4A" }}>
                Seu círculo de jogo, com gente de confiança.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                minHeight: "180px",
                padding: "24px",
                borderRadius: "12px",
                background: "#FFFFFF",
                boxShadow: "0 2px 8px rgba(0,77,37,0.08)",
              }}
            >
              <span
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#004D25",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "80%",
                  textTransform: "uppercase",
                  fontSize: "26px",
                  lineHeight: "1",
                  color: "#004D25",
                }}
              >
                Chat do jogo
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#4A4A4A" }}>
                Combine tudo dentro da partida.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                minHeight: "180px",
                padding: "24px",
                borderRadius: "12px",
                background: "#FFFFFF",
                boxShadow: "0 2px 8px rgba(0,77,37,0.08)",
              }}
            >
              <span
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#004D25",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="6"></circle>
                  <path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"></path>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "80%",
                  textTransform: "uppercase",
                  fontSize: "26px",
                  lineHeight: "1",
                  color: "#004D25",
                }}
              >
                Ranking
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#4A4A4A" }}>
                Pontos e níveis pra quem faz o jogo acontecer.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                minHeight: "180px",
                padding: "24px",
                borderRadius: "12px",
                background: "#FFFFFF",
                boxShadow: "0 2px 8px rgba(0,77,37,0.08)",
              }}
            >
              <span
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#004D25",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="16" rx="1"></rect>
                  <path d="M3 12h18"></path>
                  <path d="M12 7v10"></path>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "80%",
                  textTransform: "uppercase",
                  fontSize: "26px",
                  lineHeight: "1",
                  color: "#004D25",
                }}
              >
                Quadras
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#4A4A4A" }}>
                Horários livres na mão de quem joga.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="como-funciona"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#004D25",
          color: "#FFFFFF",
        }}
      >
        <div
          className="court-decor"
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-220px",
            bottom: "-120px",
            width: "560px",
            height: "760px",
            border: "3px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "50%",
              borderTop: "4px solid rgba(0,168,80,0.6)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "22%",
              bottom: "22%",
              borderLeft: "3px solid rgba(255,255,255,0.1)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
            <p
              style={{
                margin: "0",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#8BE3B0",
              }}
            >
              Como funciona
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "900",
                fontStretch: "75%",
                textTransform: "uppercase",
                fontSize: "clamp(38px, 5.2vw, 64px)",
                lineHeight: "0.95",
                color: "#FFFFFF",
              }}
            >
              Três passos entre a tribo e a primeira partida.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "28px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.16)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "75%",
                  fontSize: "64px",
                  lineHeight: "1",
                  color: "#00A850",
                }}
              >
                01
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "24px",
                  lineHeight: "1.15",
                }}
              >
                Entre numa tribo
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "rgba(255,255,255,0.85)" }}>
                Pelo convite de quem já está dentro, pedindo entrada ou numa tribo aberta. Não achou
                a sua? Crie uma e chame a galera.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "28px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.16)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "75%",
                  fontSize: "64px",
                  lineHeight: "1",
                  color: "#00A850",
                }}
              >
                02
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "24px",
                  lineHeight: "1.15",
                }}
              >
                Chame a galera
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "rgba(255,255,255,0.85)" }}>
                Monte o jogo em 3 passos: esporte, nível, dia, horário, quadra e vagas. A tribo é
                avisada na hora, só quem joga aquele esporte e quer aviso naquele horário.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "28px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.16)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "75%",
                  fontSize: "64px",
                  lineHeight: "1",
                  color: "#00A850",
                }}
              >
                03
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "24px",
                  lineHeight: "1.15",
                }}
              >
                Combine e entre em quadra
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "rgba(255,255,255,0.85)" }}>
                Quem topa confirma presença e garante a vaga. Dúvida de quadra, horário ou quem leva
                a bolinha? Resolve no chat do jogo.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "32px",
              padding: "clamp(24px, 4vw, 40px)",
              borderRadius: "16px",
              background: "#FFFFFF",
              color: "#1A1A1A",
            }}
          >
            <div
              style={{
                flex: "1 1 240px",
                minWidth: "0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p
                style={{
                  margin: "0",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#00A850",
                }}
              >
                Depois do jogo
              </p>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "78%",
                  textTransform: "uppercase",
                  fontSize: "34px",
                  lineHeight: "0.98",
                  color: "#004D25",
                }}
              >
                Reviva o jogo e feche o dia.
              </h3>
            </div>
            <div
              style={{
                flex: "2 1 520px",
                minWidth: "0",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
                gap: "20px",
              }}
            >
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "#EBF8F1",
                    color: "#004D25",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <strong style={{ fontWeight: "700", fontSize: "16px", color: "#004D25" }}>
                    Foto do jogo
                  </strong>
                  <span style={{ fontSize: "15px", color: "#4A4A4A" }}>
                    A galera sobe a foto do dia.
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "#EBF8F1",
                    color: "#004D25",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 11 3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <strong style={{ fontWeight: "700", fontSize: "16px", color: "#004D25" }}>
                    Quem foi e quem pagou
                  </strong>
                  <span style={{ fontSize: "15px", color: "#4A4A4A" }}>
                    O organizador marca a parte de cada um. O app não cobra nada.
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "#EBF8F1",
                    color: "#004D25",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <strong style={{ fontWeight: "700", fontSize: "16px", color: "#004D25" }}>
                    Comentários
                  </strong>
                  <span style={{ fontSize: "15px", color: "#4A4A4A" }}>
                    A resenha fica guardada no próprio jogo.
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "#EBF8F1",
                    color: "#004D25",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26z"></path>
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <strong style={{ fontWeight: "700", fontSize: "16px", color: "#004D25" }}>
                    Avaliação da galera
                  </strong>
                  <span style={{ fontSize: "15px", color: "#4A4A4A" }}>
                    Em até 24h, e é anônima.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="para-quem-e" style={{ background: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
            <p
              style={{
                margin: "0",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#00A850",
              }}
            >
              Para quem é
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "900",
                fontStretch: "75%",
                textTransform: "uppercase",
                fontSize: "clamp(38px, 5.2vw, 64px)",
                lineHeight: "0.95",
                color: "#004D25",
              }}
            >
              Você entra pela porta que faz sentido para o seu jogo.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                border: "1px solid #D5EBDE",
                borderRadius: "12px",
                background: "#FFFFFF",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "#004D25",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "80%",
                  textTransform: "uppercase",
                  fontSize: "32px",
                  lineHeight: "1",
                  color: "#004D25",
                }}
              >
                Jogador
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4A4A4A" }}>
                Quer jogar mais vezes na semana, com gente de confiança e sem ficar implorando
                confirmação em grupo.
              </p>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      flex: "none",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00A850",
                    }}
                  ></span>
                  Parceiros com referência
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      flex: "none",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00A850",
                    }}
                  ></span>
                  Aviso de jogo no seu esporte e horário
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      flex: "none",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00A850",
                    }}
                  ></span>
                  Seus jogos e pontos no perfil
                </li>
              </ul>
              <a
                className="btn"
                href="https://app.dekaw.com.br/cadastro"
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  minHeight: "48px",
                  padding: "0 20px",
                  borderRadius: "12px",
                  border: "2px solid #004D25",
                  color: "#004D25",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                Entrar como jogador{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                border: "1px solid #D5EBDE",
                borderRadius: "12px",
                background: "#FFFFFF",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "#004D25",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 10 12 5 2 10l10 5 10-5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "80%",
                  textTransform: "uppercase",
                  fontSize: "32px",
                  lineHeight: "1",
                  color: "#004D25",
                }}
              >
                Professor
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4A4A4A" }}>
                Coloque seus alunos na sua tribo: eles acham parceiros para treinar fora da aula,
                evoluem mais rápido e ficam mais tempo com você.
              </p>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      flex: "none",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00A850",
                    }}
                  ></span>
                  Alunos conectados entre si
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      flex: "none",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00A850",
                    }}
                  ></span>
                  Mais motivação e retenção
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      flex: "none",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00A850",
                    }}
                  ></span>
                  Sua turma organizada em um lugar
                </li>
              </ul>
              <a
                className="btn"
                href="https://app.dekaw.com.br/cadastro"
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  minHeight: "48px",
                  padding: "0 20px",
                  borderRadius: "12px",
                  border: "2px solid #004D25",
                  color: "#004D25",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                Entrar como professor{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                border: "1px solid #D5EBDE",
                borderRadius: "12px",
                background: "#FFFFFF",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "#004D25",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="16" rx="1"></rect>
                  <path d="M3 12h18"></path>
                  <path d="M12 7v10"></path>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "80%",
                  textTransform: "uppercase",
                  fontSize: "32px",
                  lineHeight: "1",
                  color: "#004D25",
                }}
              >
                Dono de quadra
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4A4A4A" }}>
                Cadastre seus clientes e divulgue horários vagos direto para quem já quer jogar.
                Horário ocioso vira quadra cheia.
              </p>
              <ul
                style={{
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  fontSize: "16px",
                }}
              >
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      flex: "none",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00A850",
                    }}
                  ></span>
                  Divulgação de slots livres
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      flex: "none",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00A850",
                    }}
                  ></span>
                  Base de clientes ativa
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      flex: "none",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00A850",
                    }}
                  ></span>
                  Mais ocupação fora do pico
                </li>
              </ul>
              <a
                className="btn"
                href="https://app.dekaw.com.br/cadastro"
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  minHeight: "48px",
                  padding: "0 20px",
                  borderRadius: "12px",
                  border: "2px solid #004D25",
                  color: "#004D25",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                Entrar como dono de quadra{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#EBF8F1" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
            <p
              style={{
                margin: "0",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#004D25",
              }}
            >
              Confiança
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "900",
                fontStretch: "75%",
                textTransform: "uppercase",
                fontSize: "clamp(38px, 5.2vw, 64px)",
                lineHeight: "0.95",
                color: "#004D25",
              }}
            >
              Na quadra, palavra vale.
            </h2>
            <p style={{ margin: "0", fontSize: "19px", color: "#4A4A4A" }}>
              Marcar com quem você ainda não conhece fica mais fácil quando dá pra ver quem trouxe a
              pessoa e como ela costuma cumprir o combinado.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "20px" }}>
            <div
              style={{
                flex: "1.2 1 460px",
                minWidth: "0",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "clamp(24px, 4vw, 36px)",
                borderRadius: "16px",
                background: "#FFFFFF",
                boxShadow: "0 2px 8px rgba(0,77,37,0.08)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "800",
                    fontSize: "26px",
                    lineHeight: "1.15",
                    color: "#004D25",
                  }}
                >
                  Selo de confiabilidade
                </h3>
                <p style={{ margin: "0", fontSize: "16px", color: "#4A4A4A" }}>
                  Todo perfil mostra um destes selos, calculado pelos jogos de cada pessoa.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "8px 14px",
                    padding: "14px 16px",
                    border: "1px solid #E3EFE8",
                    borderRadius: "12px",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      background: "#EEF1F4",
                      color: "#2B3A4A",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Novo na comunidade
                  </span>
                  <span style={{ flex: "1 1 200px", fontSize: "15px", color: "#4A4A4A" }}>
                    Ainda tem menos de 3 jogos.
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "8px 14px",
                    padding: "14px 16px",
                    border: "1px solid #E3EFE8",
                    borderRadius: "12px",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      background: "rgba(0,168,80,0.14)",
                      color: "#004D25",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Sempre confirma presença
                  </span>
                  <span style={{ flex: "1 1 200px", fontSize: "15px", color: "#4A4A4A" }}>
                    Nenhuma falta e nenhum cancelamento em cima da hora.
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "8px 14px",
                    padding: "14px 16px",
                    border: "1px solid #E3EFE8",
                    borderRadius: "12px",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      background: "#FFF3D6",
                      color: "#7A4B00",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Geralmente confiável
                  </span>
                  <span style={{ flex: "1 1 200px", fontSize: "15px", color: "#4A4A4A" }}>
                    Falhou em até 1 de cada 4 jogos.
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "8px 14px",
                    padding: "14px 16px",
                    border: "1px solid #E3EFE8",
                    borderRadius: "12px",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      background: "#FBE3E3",
                      color: "#A32020",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Histórico de faltas frequentes
                  </span>
                  <span style={{ flex: "1 1 200px", fontSize: "15px", color: "#4A4A4A" }}>
                    Falhou em mais de 1 de cada 4 jogos.
                  </span>
                </div>
              </div>
              <p
                style={{
                  margin: "0",
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#004D25",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00A850"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: "none", marginTop: "2px" }}
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Só pesa faltar ou cancelar em cima da hora. Cancelar com 24h de antecedência nunca
                prejudica o selo.
              </p>
            </div>
            <div
              style={{
                flex: "1 1 340px",
                minWidth: "0",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "24px",
                  borderRadius: "16px",
                  background: "#FFFFFF",
                  boxShadow: "0 2px 8px rgba(0,77,37,0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      flex: "none",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#00A850",
                      color: "#062E1A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    MP
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", lineHeight: "1.25" }}>
                    <strong style={{ fontWeight: "700" }}>Marina P.</strong>
                    <span style={{ fontSize: "14px", color: "#6B6B6B" }}>convidada do Léo</span>
                  </span>
                </div>
                <h3
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "800",
                    fontSize: "21px",
                    lineHeight: "1.2",
                    color: "#004D25",
                  }}
                >
                  Convite com nome
                </h3>
                <p style={{ margin: "0", fontSize: "15px", color: "#4A4A4A" }}>
                  Quem entra por convite carrega o nome de quem trouxe. Isso cria compromisso dos
                  dois lados.
                </p>
              </div>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "24px",
                  borderRadius: "16px",
                  background: "#FFFFFF",
                  boxShadow: "0 2px 8px rgba(0,77,37,0.08)",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "800",
                    fontSize: "21px",
                    lineHeight: "1.2",
                    color: "#004D25",
                  }}
                >
                  Avaliação da galera
                </h3>
                <p style={{ margin: "0", fontSize: "15px", color: "#4A4A4A" }}>
                  Depois do jogo, você avalia quem jogou com você: habilidade, harmonia e se jogaria
                  de novo. É anônimo, e a média só aparece no perfil depois de 5 avaliações.
                </p>
              </div>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "24px",
                  borderRadius: "16px",
                  background: "#FFFFFF",
                  boxShadow: "0 2px 8px rgba(0,77,37,0.08)",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "800",
                    fontSize: "21px",
                    lineHeight: "1.2",
                    color: "#004D25",
                  }}
                >
                  Aviso de nível
                </h3>
                <p style={{ margin: "0", fontSize: "15px", color: "#4A4A4A" }}>
                  Cada jogo tem nível. Se ele estiver bem acima ou abaixo do seu, o app avisa antes
                  de você entrar, e a decisão continua sua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ranking" style={{ background: "#00A850", color: "#062E1A" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "56px",
          }}
        >
          <div
            style={{
              flex: "1 1 460px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#062E1A",
              }}
            >
              Ranking
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "900",
                fontStretch: "75%",
                textTransform: "uppercase",
                fontSize: "clamp(38px, 5.2vw, 64px)",
                lineHeight: "0.95",
                color: "#062E1A",
              }}
            >
              Quem move a tribo <span style={{ color: "#FFFFFF" }}>sobe de nível.</span>
            </h2>
            <p style={{ margin: "0", fontSize: "19px", color: "#062E1A" }}>
              Organizou o jogo e juntou a galera? Ponto. Entrou em quadra? Ponto também. Os pontos
              levam você de Bronze a Lendário, e o ranking mostra quem faz o jogo acontecer.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", width: "100%" }}>
              <div
                style={{
                  flex: "1 1 180px",
                  padding: "18px 20px",
                  borderRadius: "12px",
                  background: "#004D25",
                  color: "#FFFFFF",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "900",
                    fontStretch: "75%",
                    fontSize: "52px",
                    lineHeight: "1",
                    color: "#8BE3B0",
                  }}
                >
                  +10
                </div>
                <div style={{ marginTop: "6px", fontWeight: "600" }}>por organizar um jogo</div>
              </div>
              <div
                style={{
                  flex: "1 1 180px",
                  padding: "18px 20px",
                  borderRadius: "12px",
                  background: "#004D25",
                  color: "#FFFFFF",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "900",
                    fontStretch: "75%",
                    fontSize: "52px",
                    lineHeight: "1",
                    color: "#8BE3B0",
                  }}
                >
                  +2
                </div>
                <div style={{ marginTop: "6px", fontWeight: "600" }}>por jogar</div>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 120px), 1fr))",
                gap: "10px",
                width: "100%",
              }}
            >
              <div style={{ padding: "14px 16px", borderRadius: "12px", background: "#FFFFFF" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: "700",
                    color: "#1A1A1A",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#A86A35",
                    }}
                  ></span>
                  Bronze
                </div>
                <div style={{ fontSize: "14px", color: "#4A4A4A" }}>0 a 49 pts</div>
              </div>
              <div style={{ padding: "14px 16px", borderRadius: "12px", background: "#FFFFFF" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: "700",
                    color: "#1A1A1A",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#9AA3AD",
                    }}
                  ></span>
                  Prata
                </div>
                <div style={{ fontSize: "14px", color: "#4A4A4A" }}>50 a 149 pts</div>
              </div>
              <div style={{ padding: "14px 16px", borderRadius: "12px", background: "#FFFFFF" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: "700",
                    color: "#1A1A1A",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#D4A017",
                    }}
                  ></span>
                  Ouro
                </div>
                <div style={{ fontSize: "14px", color: "#4A4A4A" }}>150 a 349 pts</div>
              </div>
              <div style={{ padding: "14px 16px", borderRadius: "12px", background: "#FFFFFF" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: "700",
                    color: "#1A1A1A",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: "12px",
                      height: "12px",
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      background: "#004D25",
                      border: "2px solid #00A850",
                    }}
                  ></span>
                  Lendário
                </div>
                <div style={{ fontSize: "14px", color: "#4A4A4A" }}>350 pts ou mais</div>
              </div>
            </div>
            <a
              className="btn"
              href="https://app.dekaw.com.br/cadastro"
              style={{
                marginTop: "4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "52px",
                padding: "0 24px",
                borderRadius: "12px",
                background: "#004D25",
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
              }}
            >
              Começar a pontuar{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div style={{ flex: "1 1 380px", maxWidth: "480px", minWidth: "0" }}>
            <div
              style={{
                padding: "24px",
                borderRadius: "16px",
                background: "#FFFFFF",
                color: "#1A1A1A",
                boxShadow: "0 24px 50px rgba(0,61,30,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "12px",
                  paddingBottom: "14px",
                  borderBottom: "1px solid #E3EFE8",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "800",
                    fontSize: "22px",
                    color: "#004D25",
                  }}
                >
                  Ranking
                </span>
                <span style={{ fontSize: "13px", color: "#6B6B6B" }}>pontos acumulados</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 0",
                    borderBottom: "1px solid #EEF6F1",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "900",
                      fontSize: "26px",
                      color: "#00A850",
                    }}
                  >
                    1
                  </span>
                  <span
                    style={{
                      flex: "none",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#00A850",
                      color: "#062E1A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    MP
                  </span>
                  <span
                    style={{
                      flex: "1",
                      minWidth: "0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "3px",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>Marina P.</span>
                    <span
                      style={{
                        padding: "2px 8px",
                        borderRadius: "20px",
                        background: "#FFF3D6",
                        color: "#7A4B00",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      Ouro
                    </span>
                  </span>
                  <span
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "800",
                      fontSize: "20px",
                      color: "#004D25",
                    }}
                  >
                    186 pts
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 0",
                    borderBottom: "1px solid #EEF6F1",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "900",
                      fontSize: "26px",
                      color: "#004D25",
                    }}
                  >
                    2
                  </span>
                  <span
                    style={{
                      flex: "none",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#004D25",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    LA
                  </span>
                  <span
                    style={{
                      flex: "1",
                      minWidth: "0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "3px",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>Léo A.</span>
                    <span
                      style={{
                        padding: "2px 8px",
                        borderRadius: "20px",
                        background: "#EEF1F4",
                        color: "#2B3A4A",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      Prata
                    </span>
                  </span>
                  <span
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "800",
                      fontSize: "20px",
                      color: "#004D25",
                    }}
                  >
                    142 pts
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 0",
                    borderBottom: "1px solid #EEF6F1",
                  }}
                >
                  <span
                    style={{
                      width: "28px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "900",
                      fontSize: "26px",
                      color: "#004D25",
                    }}
                  >
                    3
                  </span>
                  <span
                    style={{
                      flex: "none",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#DDF2E6",
                      color: "#004D25",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    BT
                  </span>
                  <span
                    style={{
                      flex: "1",
                      minWidth: "0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "3px",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>Bia T.</span>
                    <span
                      style={{
                        padding: "2px 8px",
                        borderRadius: "20px",
                        background: "#EEF1F4",
                        color: "#2B3A4A",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      Prata
                    </span>
                  </span>
                  <span
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "800",
                      fontSize: "20px",
                      color: "#004D25",
                    }}
                  >
                    98 pts
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 0" }}
                >
                  <span
                    style={{
                      width: "28px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "900",
                      fontSize: "26px",
                      color: "#004D25",
                    }}
                  >
                    4
                  </span>
                  <span
                    style={{
                      flex: "none",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#DDF2E6",
                      color: "#004D25",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    CR
                  </span>
                  <span
                    style={{
                      flex: "1",
                      minWidth: "0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "3px",
                    }}
                  >
                    <span style={{ fontWeight: "600" }}>Caio R.</span>
                    <span
                      style={{
                        padding: "2px 8px",
                        borderRadius: "20px",
                        background: "#F6E7DA",
                        color: "#7A3E12",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      Bronze
                    </span>
                  </span>
                  <span
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "800",
                      fontSize: "20px",
                      color: "#004D25",
                    }}
                  >
                    46 pts
                  </span>
                </div>
              </div>
              <p style={{ margin: "8px 0 0", fontSize: "13px", color: "#6B6B6B" }}>
                Exemplo ilustrativo, dados fictícios.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
            <p
              style={{
                margin: "0",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#00A850",
              }}
            >
              Como a galera usa
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "900",
                fontStretch: "75%",
                textTransform: "uppercase",
                fontSize: "clamp(38px, 5.2vw, 64px)",
                lineHeight: "0.95",
                color: "#004D25",
              }}
            >
              Gente jogando mais, quadra mais cheia.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "14px",
                padding: "28px",
                borderRadius: "12px",
                background: "#EBF8F1",
              }}
            >
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: "20px",
                  background: "#004D25",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.04em",
                }}
              >
                Jogador
              </span>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.45", color: "#1A1A1A" }}>
                Convidado por um amigo, virou jogo fixo em duas semanas e nunca mais ficou sem
                dupla.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "14px",
                padding: "28px",
                borderRadius: "12px",
                background: "#EBF8F1",
              }}
            >
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: "20px",
                  background: "#004D25",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.04em",
                }}
              >
                Professor
              </span>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.45", color: "#1A1A1A" }}>
                Professor coloca os alunos pra treinarem entre si fora da aula: a evolução acelera e
                ninguém abandona o esporte.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "14px",
                padding: "28px",
                borderRadius: "12px",
                background: "#EBF8F1",
              }}
            >
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: "20px",
                  background: "#004D25",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.04em",
                }}
              >
                Dono de arena
              </span>
              <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.45", color: "#1A1A1A" }}>
                Dono de arena divulga o horário vago direto na tribo: o período que era morto vira o
                mais disputado.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="loja" style={{ background: "#EBF8F1" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <div
            style={{
              flex: "1 1 520px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "18px",
            }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#004D25",
              }}
            >
              Ecossistema Dekaw
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "900",
                fontStretch: "75%",
                textTransform: "uppercase",
                fontSize: "clamp(36px, 4.6vw, 56px)",
                lineHeight: "0.95",
                color: "#004D25",
              }}
            >
              O clube é da tribo. A loja está aqui quando a raquete pedir.
            </h2>
            <p style={{ margin: "0", fontSize: "18px", color: "#4A4A4A" }}>
              O Dekaw nasceu dentro da loja Dekaw, representante oficial HEAD no Brasil para beach
              tennis, padel, squash e pickleball. Por isso o app é e continua gratuito: quem joga
              mais evolui mais. E quando chega a hora de trocar a raquete, o overgrip ou a bolsa,
              você já sabe quem entende do seu jogo.
            </p>
            <a
              className="btn"
              href="https://www.dekaw.com.br"
              style={{
                marginTop: "4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "52px",
                padding: "0 22px",
                borderRadius: "12px",
                border: "2px solid #004D25",
                color: "#004D25",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
              }}
            >
              Conhecer a loja Dekaw{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div
            style={{
              flex: "1 1 340px",
              minWidth: "0",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "12px",
            }}
          >
            <div style={{ padding: "20px", borderRadius: "12px", background: "#FFFFFF" }}>
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "78%",
                  textTransform: "uppercase",
                  fontSize: "28px",
                  lineHeight: "1",
                  color: "#00A850",
                }}
              >
                Grátis
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#4A4A4A" }}>
                O app é e continua gratuito.
              </div>
            </div>
            <div style={{ padding: "20px", borderRadius: "12px", background: "#FFFFFF" }}>
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "78%",
                  textTransform: "uppercase",
                  fontSize: "28px",
                  lineHeight: "1",
                  color: "#00A850",
                }}
              >
                Sem anúncio
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#4A4A4A" }}>
                Nada de propaganda no meio do jogo.
              </div>
            </div>
            <div style={{ padding: "20px", borderRadius: "12px", background: "#FFFFFF" }}>
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "78%",
                  textTransform: "uppercase",
                  fontSize: "28px",
                  lineHeight: "1",
                  color: "#00A850",
                }}
              >
                Sem cobrança
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#4A4A4A" }}>
                O valor da quadra é combinado entre a galera.
              </div>
            </div>
            <div style={{ padding: "20px", borderRadius: "12px", background: "#FFFFFF" }}>
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "78%",
                  textTransform: "uppercase",
                  fontSize: "28px",
                  lineHeight: "1",
                  color: "#00A850",
                }}
              >
                5 esportes
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#4A4A4A" }}>
                Beach tennis, padel, squash, pickleball e tênis.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#004D25",
          color: "#FFFFFF",
        }}
      >
        <div
          className="court-decor"
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "-200px",
            width: "900px",
            height: "1100px",
            marginLeft: "-450px",
            border: "3px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "50%",
              borderTop: "4px solid rgba(0,168,80,0.5)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "22%",
              borderTop: "3px solid rgba(255,255,255,0.08)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              top: "78%",
              borderTop: "3px solid rgba(255,255,255,0.08)",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "relative",
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "clamp(72px, 9vw, 120px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#8BE3B0",
            }}
          >
            Grátis · sem anúncios
          </p>
          <h2
            style={{
              margin: "0",
              fontFamily: "'Archivo', sans-serif",
              fontWeight: "900",
              fontStretch: "72%",
              textTransform: "uppercase",
              fontSize: "clamp(44px, 7vw, 88px)",
              lineHeight: "0.9",
              color: "#FFFFFF",
            }}
          >
            A tribo já está jogando. <span style={{ color: "#00A850" }}>Falta você em quadra.</span>
          </h2>
          <p
            style={{
              margin: "0",
              maxWidth: "36em",
              fontSize: "19px",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Crie sua conta e entre numa tribo, ou monte a sua e chame a galera. Recebeu um convite?
            Abra o link que te mandaram: ele te leva direto pra tribo certa.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <a
              className="btn"
              href="https://app.dekaw.com.br/cadastro"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                minHeight: "52px",
                padding: "0 24px",
                borderRadius: "12px",
                background: "#00A850",
                color: "#062E1A",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
              }}
            >
              Criar minha conta{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a
              className="btn"
              href="https://app.dekaw.com.br/login"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "52px",
                padding: "0 22px",
                borderRadius: "12px",
                border: "2px solid rgba(255,255,255,0.6)",
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "17px",
              }}
            >
              Já tenho conta
            </a>
          </div>
          <p style={{ margin: "0", fontSize: "14px", color: "rgba(255,255,255,0.75)" }}>
            Funciona no navegador do celular. App Android em breve.
          </p>
        </div>
      </section>
      <footer style={{ background: "#003D1E", color: "rgba(255,255,255,0.78)", fontSize: "15px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "44px clamp(16px, 5vw, 64px) 32px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <div
            style={{
              flex: "1 1 280px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "900",
                  fontStretch: "118%",
                  fontSize: "22px",
                  letterSpacing: "0.03em",
                  color: "#FFFFFF",
                }}
              >
                DEKAW
              </span>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#8BE3B0" }}>
                Donos da Bola
              </span>
            </div>
            <span>Você Dono da Bola.</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.68)" }}>
              Representante oficial HEAD no Brasil · Curitiba, PR
            </span>
          </div>
          <nav
            aria-label="Links do rodapé"
            style={{
              flex: "2 1 480px",
              minWidth: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
              gap: "0 24px",
            }}
          >
            <a
              className="navlink"
              href="https://app.dekaw.com.br"
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: "44px",
                color: "rgba(255,255,255,0.88)",
                textDecoration: "none",
              }}
            >
              Abrir o app
            </a>
            <a
              className="navlink"
              href="https://www.dekaw.com.br"
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: "44px",
                color: "rgba(255,255,255,0.88)",
                textDecoration: "none",
              }}
            >
              Loja Dekaw
            </a>
            <a
              className="navlink"
              href="https://instagram.com/dekawoficial"
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: "44px",
                color: "rgba(255,255,255,0.88)",
                textDecoration: "none",
              }}
            >
              Instagram @dekawoficial
            </a>
            <a
              className="navlink"
              href="mailto:suporte@dekaw.com.br"
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: "44px",
                color: "rgba(255,255,255,0.88)",
                textDecoration: "none",
              }}
            >
              suporte@dekaw.com.br
            </a>
            <a
              className="navlink"
              href="https://app.dekaw.com.br/privacidade"
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: "44px",
                color: "rgba(255,255,255,0.88)",
                textDecoration: "none",
              }}
            >
              Política de privacidade
            </a>
            <a
              className="navlink"
              href="https://app.dekaw.com.br/excluir-conta"
              style={{
                display: "flex",
                alignItems: "center",
                minHeight: "44px",
                color: "rgba(255,255,255,0.88)",
                textDecoration: "none",
              }}
            >
              Excluir minha conta
            </a>
          </nav>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "16px clamp(16px, 5vw, 64px)",
              fontSize: "13px",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            © 2026 DEKAW
          </div>
        </div>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

/*
 * Landing do Clube DEKAW (clube.dekaw.com.br) — versão 3, 03/10/2026.
 *
 * Regras de conteúdo (bater com o app em app.dekaw.com.br, ver README.md):
 * - Pontos: organizar jogo +10, jogar +2. Níveis Bronze 0–49, Prata 50–149,
 *   Ouro 150–349, Lendário 350+. Sem prêmio e sem temporada.
 * - Conta aberta e grátis; cada tribo escolhe: aberta, pedido de entrada ou
 *   só por convite. Não dizer "clube fechado, só por convite".
 * - Chat é da partida (existe depois que o jogo é criado).
 * - Professor e Dono de quadra: texto mantido por decisão do dono.
 * - Cores: verde DEKAW #00A850 (o mesmo do app) como principal, #006B33 pra
 *   texto pequeno verde, fundos claros (#EEF9F2 → branco). Sem seção escura.
 * - Logos em /public/logos (aplicadas em #00A850).
 */

const TITLE = "DEKAW · Donos da Bola";
const DESCRIPTION =
  "Organize jogos de beach tennis, padel, squash, pickleball e tênis com a sua tribo. Você chama a galera e o jogo acontece. Grátis e sem anúncios.";
const URL = "https://clube.dekaw.com.br/";
const OG_IMAGE = "https://clube.dekaw.com.br/og-dekaw.png";

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
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Logo DEKAW, Você Dono da Bola, sobre fundo verde" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
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
        color: "#13201A",
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
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #E3F1E8",
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
            aria-label="DEKAW, voltar ao início"
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "44px",
              textDecoration: "none",
            }}
          >
            <img
              className="hdr-logo"
              src="/logos/logo-dekaw-verde.png"
              alt="DEKAW, Você Dono da Bola"
              style={{ display: "block", height: "52px", width: "auto" }}
            />
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
                color: "#33413A",
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
                color: "#33413A",
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
                color: "#33413A",
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
                color: "#33413A",
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
              className="navlink hdr-entrar"
              href="https://app.dekaw.com.br/login"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: "44px",
                padding: "0 12px",
                color: "#006B33",
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
                padding: "0 20px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #006B33 0%, #008A42 55%, #00A850 100%)",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: "700",
                boxShadow: "0 10px 24px -12px rgba(0,168,80,0.6)",
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
          background: "linear-gradient(180deg, #EEF9F2 0%, #FFFFFF 100%)",
        }}
      >
        <img
          className="decor"
          src="/logos/simbolo-dekaw-verde.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-140px",
            top: "30px",
            width: "640px",
            height: "auto",
            opacity: "0.06",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(48px, 7vw, 96px) clamp(16px, 5vw, 64px) clamp(56px, 8vw, 112px)",
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
              gap: "22px",
            }}
          >
            <p
              style={{
                margin: "0",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "#E6F6EE",
                border: "1px solid #CDEBD8",
                color: "#006B33",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Grátis · beach tennis, padel, squash, pickleball e tênis
            </p>
            <h1
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(42px, 6vw, 72px)",
                lineHeight: "1.02",
                letterSpacing: "-0.025em",
                color: "#13201A",
              }}
            >
              Nunca mais fique sem ter{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #006B33 0%, #00A850 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                com quem jogar.
              </span>
            </h1>
            <p style={{ margin: "0", maxWidth: "34em", fontSize: "19px", color: "#4F5D55" }}>
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
                  padding: "0 26px",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #006B33 0%, #008A42 55%, #00A850 100%)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "17px",
                  boxShadow: "0 14px 30px -14px rgba(0,168,80,0.7)",
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
                  padding: "0 24px",
                  borderRadius: "999px",
                  border: "1.5px solid #BFE3CC",
                  background: "#FFFFFF",
                  color: "#006B33",
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
                color: "#4F5D55",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00A850"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: "none", marginTop: "3px" }}
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
              <span>
                <strong style={{ fontWeight: "700", color: "#13201A" }}>Recebeu um convite?</strong>{" "}
                Abra o link que te mandaram: ele já te leva direto pra tribo certa.
              </span>
            </p>
          </div>
          <div style={{ flex: "1 1 340px", maxWidth: "430px", minWidth: "0" }}>
            <div
              role="img"
              aria-label="Ilustração da tela de um jogo no app: quem vai jogar, quem convidou cada pessoa e o chat da partida"
              style={{
                background: "#FFFFFF",
                color: "#13201A",
                borderRadius: "28px",
                border: "1px solid #D7EDDF",
                overflow: "hidden",
                boxShadow: "0 30px 70px -24px rgba(0,168,80,0.45)",
              }}
            >
              <div
                style={{
                  background: "#00A850",
                  padding: "14px 18px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "#006B33",
                    color: "#FFFFFF",
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
                    borderRadius: "999px",
                    background: "#FFFFFF",
                    color: "#006B33",
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
                    borderRadius: "999px",
                    background: "#FFFFFF",
                    color: "#006B33",
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
                    color: "#63716A",
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
                    letterSpacing: "-0.02em",
                    color: "#13201A",
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
                    color: "#4F5D55",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00A850"
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
                    color: "#13201A",
                  }}
                >
                  <span>Quem vai jogar</span>
                  <span style={{ color: "#006B33" }}>3 de 4</span>
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
                        background: "#006B33",
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
                      <span style={{ fontSize: "13px", color: "#63716A" }}>Organizador</span>
                    </span>
                    <span
                      style={{
                        padding: "4px 8px",
                        borderRadius: "999px",
                        background: "#E6F6EE",
                        color: "#006B33",
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
                        background: "#E6F6EE",
                        color: "#006B33",
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
                      <span style={{ fontSize: "13px", color: "#63716A" }}>convidada do Léo</span>
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        width: "38px",
                        height: "38px",
                        flex: "none",
                        borderRadius: "50%",
                        background: "#F1F5F4",
                        color: "#33413A",
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
                      <span style={{ fontSize: "13px", color: "#63716A" }}>
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
                        border: "2px dashed #A3DCB9",
                        color: "#00A850",
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
                    <span style={{ flex: "1", minWidth: "0", fontSize: "15px", color: "#63716A" }}>
                      Vaga aberta
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  margin: "16px 20px 0",
                  padding: "12px 14px",
                  borderRadius: "16px",
                  background: "#EEF9F2",
                  fontSize: "14px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#006B33",
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
                    borderRadius: "999px",
                    background: "linear-gradient(135deg, #006B33 0%, #008A42 55%, #00A850 100%)",
                    color: "#FFFFFF",
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
                color: "#63716A",
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
            gap: "44px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              maxWidth: "760px",
            }}
          >
            <p
              style={{
                margin: "0",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "#E6F6EE",
                border: "1px solid #CDEBD8",
                color: "#006B33",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              O problema
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(32px, 4.2vw, 48px)",
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
                color: "#13201A",
              }}
            >
              A raquete está no carro. O que falta é o jogo.
            </h2>
            <p style={{ margin: "0", fontSize: "19px", color: "#4F5D55" }}>
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
                border: "1px solid #DCEFE3",
                borderRadius: "24px",
                background: "#FFFFFF",
              }}
            >
              <span
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#E6F6EE",
                  color: "#008A42",
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
                  fontWeight: "700",
                  fontSize: "21px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                  color: "#13201A",
                }}
              >
                Não tenho com quem jogar
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4F5D55" }}>
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
                border: "1px solid #DCEFE3",
                borderRadius: "24px",
                background: "#FFFFFF",
              }}
            >
              <span
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#E6F6EE",
                  color: "#008A42",
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
                  fontWeight: "700",
                  fontSize: "21px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                  color: "#13201A",
                }}
              >
                Quadra vazia em horário bom
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4F5D55" }}>
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
                border: "1px solid #DCEFE3",
                borderRadius: "24px",
                background: "#FFFFFF",
              }}
            >
              <span
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#E6F6EE",
                  color: "#008A42",
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
                  fontWeight: "700",
                  fontSize: "21px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                  color: "#13201A",
                }}
              >
                Insegurança com desconhecido
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4F5D55" }}>
                Marcar com alguém que ninguém conhece, passar telefone, não saber o nível nem se a
                pessoa aparece. Falta referência de confiança.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "linear-gradient(180deg, #EEF9F2 0%, #FFFFFF 100%)" }}>
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
              gap: "18px",
            }}
          >
            <p
              style={{
                margin: "0",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "#E6F6EE",
                border: "1px solid #CDEBD8",
                color: "#006B33",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              O jeito Dekaw
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(32px, 4.2vw, 48px)",
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
                color: "#13201A",
              }}
            >
              Um clube onde todo mundo tem nome, referência e{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #006B33 0%, #00A850 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                vontade de jogar.
              </span>
            </h2>
            <p style={{ margin: "0", fontSize: "18px", color: "#4F5D55" }}>
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
                padding: "0 26px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #006B33 0%, #008A42 55%, #00A850 100%)",
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
                boxShadow: "0 14px 30px -14px rgba(0,168,80,0.7)",
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
                minHeight: "176px",
                padding: "24px",
                borderRadius: "24px",
                background: "#FFFFFF",
                border: "1px solid #E3F1E8",
                boxShadow: "0 12px 30px -16px rgba(0,168,80,0.35)",
              }}
            >
              <span
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: "#00A850",
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
                  fontWeight: "700",
                  fontSize: "21px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                  color: "#13201A",
                }}
              >
                Tribos
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#4F5D55" }}>
                Seu círculo de jogo, com gente de confiança.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                minHeight: "176px",
                padding: "24px",
                borderRadius: "24px",
                background: "#FFFFFF",
                border: "1px solid #E3F1E8",
                boxShadow: "0 12px 30px -16px rgba(0,168,80,0.35)",
              }}
            >
              <span
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: "#00A850",
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
                  fontWeight: "700",
                  fontSize: "21px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                  color: "#13201A",
                }}
              >
                Chat do jogo
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#4F5D55" }}>
                Combine tudo dentro da partida.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                minHeight: "176px",
                padding: "24px",
                borderRadius: "24px",
                background: "#FFFFFF",
                border: "1px solid #E3F1E8",
                boxShadow: "0 12px 30px -16px rgba(0,168,80,0.35)",
              }}
            >
              <span
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: "#00A850",
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
                  fontWeight: "700",
                  fontSize: "21px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                  color: "#13201A",
                }}
              >
                Ranking
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#4F5D55" }}>
                Pontos e níveis pra quem faz o jogo acontecer.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                minHeight: "176px",
                padding: "24px",
                borderRadius: "24px",
                background: "#FFFFFF",
                border: "1px solid #E3F1E8",
                boxShadow: "0 12px 30px -16px rgba(0,168,80,0.35)",
              }}
            >
              <span
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "14px",
                  background: "#00A850",
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
                  fontWeight: "700",
                  fontSize: "21px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                  color: "#13201A",
                }}
              >
                Quadras
              </h3>
              <p style={{ margin: "0", fontSize: "15px", color: "#4F5D55" }}>
                Horários livres na mão de quem joga.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="como-funciona" style={{ background: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: "44px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              maxWidth: "760px",
            }}
          >
            <p
              style={{
                margin: "0",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "#E6F6EE",
                border: "1px solid #CDEBD8",
                color: "#006B33",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Como funciona
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(32px, 4.2vw, 48px)",
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
                color: "#13201A",
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
                borderRadius: "24px",
                background: "#FFFFFF",
                border: "1px solid #DCEFE3",
              }}
            >
              <span
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "56px",
                  lineHeight: "1",
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #00A850 0%, #8FDCB0 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                01
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "700",
                  fontSize: "22px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                  color: "#13201A",
                }}
              >
                Entre numa tribo
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4F5D55" }}>
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
                borderRadius: "24px",
                background: "#FFFFFF",
                border: "1px solid #DCEFE3",
              }}
            >
              <span
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "56px",
                  lineHeight: "1",
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #00A850 0%, #8FDCB0 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                02
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "700",
                  fontSize: "22px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                  color: "#13201A",
                }}
              >
                Chame a galera
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4F5D55" }}>
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
                borderRadius: "24px",
                background: "#FFFFFF",
                border: "1px solid #DCEFE3",
              }}
            >
              <span
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "56px",
                  lineHeight: "1",
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #00A850 0%, #8FDCB0 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                03
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "700",
                  fontSize: "22px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                  color: "#13201A",
                }}
              >
                Combine e entre em quadra
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4F5D55" }}>
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
              borderRadius: "28px",
              background: "linear-gradient(135deg, #E6F6EE 0%, #F5FBF7 100%)",
              border: "1px solid #DCEFE3",
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
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#006B33",
                }}
              >
                Depois do jogo
              </p>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "30px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  color: "#13201A",
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
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    color: "#008A42",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 16px -10px rgba(0,168,80,0.6)",
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
                  <strong style={{ fontWeight: "700", fontSize: "16px" }}>Foto do jogo</strong>
                  <span style={{ fontSize: "15px", color: "#4F5D55" }}>
                    A galera sobe a foto do dia.
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    color: "#008A42",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 16px -10px rgba(0,168,80,0.6)",
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
                  <strong style={{ fontWeight: "700", fontSize: "16px" }}>
                    Quem foi e quem pagou
                  </strong>
                  <span style={{ fontSize: "15px", color: "#4F5D55" }}>
                    O organizador marca a parte de cada um. O app não cobra nada.
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    color: "#008A42",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 16px -10px rgba(0,168,80,0.6)",
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
                  <strong style={{ fontWeight: "700", fontSize: "16px" }}>Comentários</strong>
                  <span style={{ fontSize: "15px", color: "#4F5D55" }}>
                    A resenha fica guardada no próprio jogo.
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flex: "none",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    color: "#008A42",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 16px -10px rgba(0,168,80,0.6)",
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
                  <strong style={{ fontWeight: "700", fontSize: "16px" }}>
                    Avaliação da galera
                  </strong>
                  <span style={{ fontSize: "15px", color: "#4F5D55" }}>
                    Em até 24h, e é anônima.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="para-quem-e"
        style={{ background: "linear-gradient(180deg, #EEF9F2 0%, #FFFFFF 100%)" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: "44px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              maxWidth: "760px",
            }}
          >
            <p
              style={{
                margin: "0",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "#E6F6EE",
                border: "1px solid #CDEBD8",
                color: "#006B33",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Para quem é
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(32px, 4.2vw, 48px)",
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
                color: "#13201A",
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
                padding: "30px",
                borderRadius: "24px",
                background: "#FFFFFF",
                border: "1px solid #E3F1E8",
                boxShadow: "0 12px 30px -16px rgba(0,168,80,0.35)",
              }}
            >
              <span
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "16px",
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "26px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  color: "#13201A",
                }}
              >
                Jogador
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4F5D55" }}>
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
                  padding: "0 22px",
                  borderRadius: "999px",
                  border: "1.5px solid #BFE3CC",
                  color: "#006B33",
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
                padding: "30px",
                borderRadius: "24px",
                background: "#FFFFFF",
                border: "1px solid #E3F1E8",
                boxShadow: "0 12px 30px -16px rgba(0,168,80,0.35)",
              }}
            >
              <span
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "16px",
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
                  <path d="M22 10 12 5 2 10l10 5 10-5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "26px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  color: "#13201A",
                }}
              >
                Professor
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4F5D55" }}>
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
                  padding: "0 22px",
                  borderRadius: "999px",
                  border: "1.5px solid #BFE3CC",
                  color: "#006B33",
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
                padding: "30px",
                borderRadius: "24px",
                background: "#FFFFFF",
                border: "1px solid #E3F1E8",
                boxShadow: "0 12px 30px -16px rgba(0,168,80,0.35)",
              }}
            >
              <span
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "16px",
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
                  <rect x="3" y="4" width="18" height="16" rx="1"></rect>
                  <path d="M3 12h18"></path>
                  <path d="M12 7v10"></path>
                </svg>
              </span>
              <h3
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "26px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  color: "#13201A",
                }}
              >
                Dono de quadra
              </h3>
              <p style={{ margin: "0", fontSize: "16px", color: "#4F5D55" }}>
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
                  padding: "0 22px",
                  borderRadius: "999px",
                  border: "1.5px solid #BFE3CC",
                  color: "#006B33",
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
      <section style={{ background: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: "44px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              maxWidth: "760px",
            }}
          >
            <p
              style={{
                margin: "0",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "#E6F6EE",
                border: "1px solid #CDEBD8",
                color: "#006B33",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Confiança
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(32px, 4.2vw, 48px)",
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
                color: "#13201A",
              }}
            >
              Na quadra,{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #006B33 0%, #00A850 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                palavra vale.
              </span>
            </h2>
            <p style={{ margin: "0", fontSize: "19px", color: "#4F5D55" }}>
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
                borderRadius: "28px",
                background: "linear-gradient(180deg, #F5FBF7 0%, #FFFFFF 100%)",
                border: "1px solid #DCEFE3",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "800",
                    fontSize: "24px",
                    lineHeight: "1.15",
                    letterSpacing: "-0.02em",
                    color: "#13201A",
                  }}
                >
                  Selo de confiabilidade
                </h3>
                <p style={{ margin: "0", fontSize: "16px", color: "#4F5D55" }}>
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
                    borderRadius: "16px",
                    background: "#FFFFFF",
                    border: "1px solid #E3F1E8",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: "#EEF1F4",
                      color: "#2B3A4A",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Novo na comunidade
                  </span>
                  <span style={{ flex: "1 1 200px", fontSize: "15px", color: "#4F5D55" }}>
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
                    borderRadius: "16px",
                    background: "#FFFFFF",
                    border: "1px solid #E3F1E8",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: "#E6F6EE",
                      color: "#006B33",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Sempre confirma presença
                  </span>
                  <span style={{ flex: "1 1 200px", fontSize: "15px", color: "#4F5D55" }}>
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
                    borderRadius: "16px",
                    background: "#FFFFFF",
                    border: "1px solid #E3F1E8",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: "#FFF3D6",
                      color: "#7A4B00",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Geralmente confiável
                  </span>
                  <span style={{ flex: "1 1 200px", fontSize: "15px", color: "#4F5D55" }}>
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
                    borderRadius: "16px",
                    background: "#FFFFFF",
                    border: "1px solid #E3F1E8",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      background: "#FBE3E3",
                      color: "#A32020",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    Histórico de faltas frequentes
                  </span>
                  <span style={{ flex: "1 1 200px", fontSize: "15px", color: "#4F5D55" }}>
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
                  color: "#006B33",
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
                  borderRadius: "24px",
                  background: "#FFFFFF",
                  border: "1px solid #E3F1E8",
                  boxShadow: "0 12px 30px -18px rgba(0,168,80,0.35)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      flex: "none",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#E6F6EE",
                      color: "#006B33",
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
                    <span style={{ fontSize: "14px", color: "#63716A" }}>convidada do Léo</span>
                  </span>
                </div>
                <h3
                  style={{
                    margin: "4px 0 0",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "1.2",
                    letterSpacing: "-0.01em",
                    color: "#13201A",
                  }}
                >
                  Convite com nome
                </h3>
                <p style={{ margin: "0", fontSize: "15px", color: "#4F5D55" }}>
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
                  borderRadius: "24px",
                  background: "#FFFFFF",
                  border: "1px solid #E3F1E8",
                  boxShadow: "0 12px 30px -18px rgba(0,168,80,0.35)",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "1.2",
                    letterSpacing: "-0.01em",
                    color: "#13201A",
                  }}
                >
                  Avaliação da galera
                </h3>
                <p style={{ margin: "0", fontSize: "15px", color: "#4F5D55" }}>
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
                  borderRadius: "24px",
                  background: "#FFFFFF",
                  border: "1px solid #E3F1E8",
                  boxShadow: "0 12px 30px -18px rgba(0,168,80,0.35)",
                }}
              >
                <h3
                  style={{
                    margin: "0",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "1.2",
                    letterSpacing: "-0.01em",
                    color: "#13201A",
                  }}
                >
                  Aviso de nível
                </h3>
                <p style={{ margin: "0", fontSize: "15px", color: "#4F5D55" }}>
                  Cada jogo tem nível. Se ele estiver bem acima ou abaixo do seu, o app avisa antes
                  de você entrar, e a decisão continua sua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="ranking"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, #EEF9F2 0%, #FFFFFF 100%)",
        }}
      >
        <img
          className="decor"
          src="/logos/simbolo-dekaw-verde.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-180px",
            bottom: "-160px",
            width: "520px",
            height: "auto",
            opacity: "0.05",
          }}
        />
        <div
          style={{
            position: "relative",
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
              gap: "18px",
            }}
          >
            <p
              style={{
                margin: "0",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "#E6F6EE",
                border: "1px solid #CDEBD8",
                color: "#006B33",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Ranking
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(32px, 4.2vw, 48px)",
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
                color: "#13201A",
              }}
            >
              Quem move a tribo{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #006B33 0%, #00A850 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                sobe de nível.
              </span>
            </h2>
            <p style={{ margin: "0", fontSize: "19px", color: "#4F5D55" }}>
              Organizou o jogo e juntou a galera? Ponto. Entrou em quadra? Ponto também. Os pontos
              levam você de Bronze a Lendário, e o ranking mostra quem faz o jogo acontecer.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", width: "100%" }}>
              <div
                style={{
                  flex: "1 1 180px",
                  padding: "18px 22px",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #006B33 0%, #008A42 60%, #00A850 100%)",
                  color: "#FFFFFF",
                  boxShadow: "0 16px 34px -18px rgba(0,168,80,0.7)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "800",
                    fontSize: "48px",
                    lineHeight: "1",
                    letterSpacing: "-0.03em",
                  }}
                >
                  +10
                </div>
                <div style={{ marginTop: "6px", fontWeight: "600" }}>por organizar um jogo</div>
              </div>
              <div
                style={{
                  flex: "1 1 180px",
                  padding: "18px 22px",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #006B33 0%, #008A42 60%, #00A850 100%)",
                  color: "#FFFFFF",
                  boxShadow: "0 16px 34px -18px rgba(0,168,80,0.7)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "800",
                    fontSize: "48px",
                    lineHeight: "1",
                    letterSpacing: "-0.03em",
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
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "#FFFFFF",
                  border: "1px solid #E3F1E8",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700" }}
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
                <div style={{ fontSize: "14px", color: "#4F5D55" }}>0 a 49 pts</div>
              </div>
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "#FFFFFF",
                  border: "1px solid #E3F1E8",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700" }}
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
                <div style={{ fontSize: "14px", color: "#4F5D55" }}>50 a 149 pts</div>
              </div>
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "#FFFFFF",
                  border: "1px solid #E3F1E8",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700" }}
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
                <div style={{ fontSize: "14px", color: "#4F5D55" }}>150 a 349 pts</div>
              </div>
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "#FFFFFF",
                  border: "1px solid #E3F1E8",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700" }}
                >
                  <span
                    style={{
                      flex: "none",
                      width: "12px",
                      height: "12px",
                      boxSizing: "border-box",
                      borderRadius: "50%",
                      background: "#00A850",
                      border: "2px solid #006B33",
                    }}
                  ></span>
                  Lendário
                </div>
                <div style={{ fontSize: "14px", color: "#4F5D55" }}>350 pts ou mais</div>
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
                padding: "0 26px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #006B33 0%, #008A42 55%, #00A850 100%)",
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
                boxShadow: "0 14px 30px -14px rgba(0,168,80,0.7)",
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
                borderRadius: "28px",
                background: "#FFFFFF",
                border: "1px solid #DCEFE3",
                boxShadow: "0 30px 70px -26px rgba(0,168,80,0.45)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                  paddingBottom: "14px",
                  borderBottom: "1px solid #E3F1E8",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: "800",
                    fontSize: "22px",
                    letterSpacing: "-0.02em",
                    color: "#13201A",
                  }}
                >
                  <span
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "12px",
                      background: "#E6F6EE",
                      color: "#008A42",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                    >
                      <circle cx="12" cy="8" r="6"></circle>
                      <path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"></path>
                    </svg>
                  </span>
                  Ranking
                </span>
                <span style={{ fontSize: "13px", color: "#63716A" }}>pontos acumulados</span>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 14px",
                    borderRadius: "16px",
                    background: "#E6F6EE",
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "800",
                      fontSize: "24px",
                      color: "#006B33",
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
                      background: "#006B33",
                      color: "#FFFFFF",
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
                        borderRadius: "999px",
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
                      fontSize: "19px",
                      color: "#006B33",
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
                    padding: "12px 14px",
                    borderRadius: "16px",
                    background: "#F5FBF7",
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "800",
                      fontSize: "24px",
                      color: "#33413A",
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
                      background: "#E6F6EE",
                      color: "#006B33",
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
                        borderRadius: "999px",
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
                      fontSize: "19px",
                      color: "#13201A",
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
                    padding: "12px 14px",
                    borderRadius: "16px",
                    background: "#F5FBF7",
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "800",
                      fontSize: "24px",
                      color: "#33413A",
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
                      background: "#E6F6EE",
                      color: "#006B33",
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
                        borderRadius: "999px",
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
                      fontSize: "19px",
                      color: "#13201A",
                    }}
                  >
                    98 pts
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 14px",
                    borderRadius: "16px",
                    background: "#F5FBF7",
                  }}
                >
                  <span
                    style={{
                      width: "24px",
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: "800",
                      fontSize: "24px",
                      color: "#33413A",
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
                      background: "#E6F6EE",
                      color: "#006B33",
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
                        borderRadius: "999px",
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
                      fontSize: "19px",
                      color: "#13201A",
                    }}
                  >
                    46 pts
                  </span>
                </div>
              </div>
              <p style={{ margin: "12px 0 0", fontSize: "13px", color: "#63716A" }}>
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
            gap: "44px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              maxWidth: "760px",
            }}
          >
            <p
              style={{
                margin: "0",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "#E6F6EE",
                border: "1px solid #CDEBD8",
                color: "#006B33",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Como a galera usa
            </p>
            <h2
              style={{
                margin: "0",
                fontFamily: "'Archivo', sans-serif",
                fontWeight: "800",
                fontSize: "clamp(32px, 4.2vw, 48px)",
                lineHeight: "1.08",
                letterSpacing: "-0.02em",
                color: "#13201A",
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
                borderRadius: "24px",
                background: "#F5FBF7",
                border: "1px solid #E3F1E8",
              }}
            >
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#E6F6EE",
                  color: "#006B33",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Jogador
              </span>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.5", color: "#13201A" }}>
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
                borderRadius: "24px",
                background: "#F5FBF7",
                border: "1px solid #E3F1E8",
              }}
            >
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#E6F6EE",
                  color: "#006B33",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Professor
              </span>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.5", color: "#13201A" }}>
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
                borderRadius: "24px",
                background: "#F5FBF7",
                border: "1px solid #E3F1E8",
              }}
            >
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#E6F6EE",
                  color: "#006B33",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Dono de arena
              </span>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.5", color: "#13201A" }}>
                Dono de arena divulga o horário vago direto na tribo: o período que era morto vira o
                mais disputado.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="loja"
        style={{ background: "linear-gradient(180deg, #EEF9F2 0%, #FFFFFF 100%)" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 104px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "stretch",
              gap: "0",
              borderRadius: "32px",
              overflow: "hidden",
              background: "#FFFFFF",
              border: "1px solid #DCEFE3",
              boxShadow: "0 24px 60px -30px rgba(0,168,80,0.45)",
            }}
          >
            <div
              style={{
                flex: "1 1 380px",
                minWidth: "0",
                minHeight: "260px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
                background: "#00A850",
              }}
            >
              <img
                src="/logos/logo-dekaw-branco.png"
                alt="DEKAW, Você Dono da Bola"
                style={{ display: "block", width: "100%", maxWidth: "380px", height: "auto" }}
              />
            </div>
            <div
              style={{
                flex: "1.3 1 420px",
                minWidth: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                padding: "clamp(28px, 4vw, 48px)",
              }}
            >
              <p
                style={{
                  margin: "0",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "#E6F6EE",
                  border: "1px solid #CDEBD8",
                  color: "#006B33",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Ecossistema Dekaw
              </p>
              <h2
                style={{
                  margin: "0",
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "clamp(28px, 3.4vw, 40px)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  color: "#13201A",
                }}
              >
                O clube é da tribo. A loja está aqui quando a raquete pedir.
              </h2>
              <p style={{ margin: "0", fontSize: "17px", color: "#4F5D55" }}>
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
                  minHeight: "50px",
                  padding: "0 24px",
                  borderRadius: "999px",
                  border: "1.5px solid #BFE3CC",
                  color: "#006B33",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "16px",
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
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
              gap: "12px",
            }}
          >
            <div
              style={{
                padding: "20px 22px",
                borderRadius: "20px",
                background: "#FFFFFF",
                border: "1px solid #E3F1E8",
              }}
            >
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "24px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  color: "#006B33",
                }}
              >
                Grátis
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#4F5D55" }}>
                O app é e continua gratuito.
              </div>
            </div>
            <div
              style={{
                padding: "20px 22px",
                borderRadius: "20px",
                background: "#FFFFFF",
                border: "1px solid #E3F1E8",
              }}
            >
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "24px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  color: "#006B33",
                }}
              >
                Sem anúncio
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#4F5D55" }}>
                Nada de propaganda no meio do jogo.
              </div>
            </div>
            <div
              style={{
                padding: "20px 22px",
                borderRadius: "20px",
                background: "#FFFFFF",
                border: "1px solid #E3F1E8",
              }}
            >
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "24px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  color: "#006B33",
                }}
              >
                Sem cobrança
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#4F5D55" }}>
                O valor da quadra é combinado entre a galera.
              </div>
            </div>
            <div
              style={{
                padding: "20px 22px",
                borderRadius: "20px",
                background: "#FFFFFF",
                border: "1px solid #E3F1E8",
              }}
            >
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: "800",
                  fontSize: "24px",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  color: "#006B33",
                }}
              >
                5 esportes
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#4F5D55" }}>
                Beach tennis, padel, squash, pickleball e tênis.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EEF9F2 100%)" }}>
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            padding: "clamp(64px, 8vw, 112px) clamp(16px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "22px",
            textAlign: "center",
          }}
        >
          <img
            src="/logos/simbolo-dekaw-verde.png"
            alt=""
            aria-hidden="true"
            style={{ display: "block", width: "64px", height: "64px" }}
          />
          <h2
            style={{
              margin: "0",
              fontFamily: "'Archivo', sans-serif",
              fontWeight: "800",
              fontSize: "clamp(36px, 5.4vw, 64px)",
              lineHeight: "1.04",
              letterSpacing: "-0.025em",
              color: "#13201A",
            }}
          >
            A tribo já está jogando.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #006B33 0%, #00A850 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Falta você em quadra.
            </span>
          </h2>
          <p style={{ margin: "0", maxWidth: "36em", fontSize: "19px", color: "#4F5D55" }}>
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
                padding: "0 26px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #006B33 0%, #008A42 55%, #00A850 100%)",
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
                boxShadow: "0 14px 30px -14px rgba(0,168,80,0.7)",
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
                padding: "0 24px",
                borderRadius: "999px",
                border: "1.5px solid #BFE3CC",
                background: "#FFFFFF",
                color: "#006B33",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
              }}
            >
              Já tenho conta
            </a>
          </div>
          <p style={{ margin: "0", fontSize: "14px", color: "#63716A" }}>
            Grátis e sem anúncios. Funciona no navegador do celular. App Android em breve.
          </p>
        </div>
      </section>
      <footer style={{ background: "#FFFFFF" }}>
        <div style={{ position: "relative", overflow: "hidden", background: "#00A850" }}>
          <img
            className="decor"
            src="/logos/simbolo-dekaw-branco.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-90px",
              top: "-110px",
              width: "420px",
              height: "auto",
              opacity: "0.12",
            }}
          />
          <div
            style={{
              position: "relative",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "48px clamp(16px, 5vw, 64px)",
            }}
          >
            <img
              src="/logos/logo-dekaw-branco.png"
              alt="DEKAW, Você Dono da Bola"
              style={{ display: "block", width: "min(100%, 360px)", height: "auto" }}
            />
          </div>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "32px clamp(16px, 5vw, 64px) 24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "24px",
            color: "#4F5D55",
            fontSize: "15px",
          }}
        >
          <span style={{ flex: "1 1 260px", minWidth: "0" }}>
            Representante oficial HEAD no Brasil · Curitiba, PR
          </span>
          <nav
            aria-label="Links do rodapé"
            style={{
              flex: "2 1 520px",
              minWidth: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 170px), 1fr))",
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
                color: "#33413A",
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
                color: "#33413A",
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
                color: "#33413A",
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
                color: "#33413A",
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
                color: "#33413A",
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
                color: "#33413A",
                textDecoration: "none",
              }}
            >
              Excluir minha conta
            </a>
          </nav>
        </div>
        <div style={{ borderTop: "1px solid #E3F1E8" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "16px clamp(16px, 5vw, 64px)",
              fontSize: "13px",
              color: "#63716A",
            }}
          >
            © 2026 DEKAW
          </div>
        </div>
      </footer>
    </div>
  );
}

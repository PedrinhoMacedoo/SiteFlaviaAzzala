import bgImage from '../assets/hero-desktop.webp';
import bgMobile from '../assets/hero_section_mobile.webp';
import logoImg from '../assets/logo.webp';
import { SovereignButton } from './SovereignButton';

export const Hero = () => {
    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            width: '100%',
            overflow: 'hidden',
            fontFamily: 'Sora, sans-serif'
        }}>
            {/* Fixed Background Layer */}
            <div
                className="hero-bg"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    willChange: 'filter'
                }}
            />

            {/* Dark Overlay com Gradiente de Contraste para Leitura */}
            <div className="hero-overlay" />

            {/* Content Container */}
            <div className="responsive-flex" style={{
                position: 'relative',
                zIndex: 50,
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 1rem',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>

                {/* Left Column: Text Content */}
                <div className="hero-content" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    maxWidth: '48rem',
                    gap: '0px',
                    transform: 'scale(0.90)',
                    transformOrigin: 'top left',
                    marginTop: '3rem',
                    marginLeft: '2rem'
                }}>
                    {/* Logo (Oculta no mobile a pedido do usuário) */}
                    <img
                        src={logoImg}
                        alt="Mapa do Dolar"
                        className="hero-logo hidden md:block"
                        style={{
                            width: '260px',
                            marginBottom: '1.2rem',
                            objectFit: 'contain'
                        }}
                    />

                    {/* Tag removida a pedido do usuário */}

                    {/* Headline */}
                    <h1 style={{
                        width: '100%',
                        color: '#FFF',
                        fontFamily: 'var(--title-font)',
                        /* Usando variável global para padronização */
                        fontSize: 'var(--desktop-title-size)',
                        fontWeight: 900,
                        lineHeight: 1.25,
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        textShadow: '0 4px 20px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.8)',
                        letterSpacing: '-0.01em'
                    }}>
                        DESCUBRA COMO LUCRAR EM DÓLAR E<br className="desktop-br" /> ESCALAR PRODUTOS NA GRINGA.<br className="desktop-br" />{' '}
                        <span style={{
                            color: '#F5D060', /* Dourado puro e limpo como era "no título antes" */
                            textShadow: '0 0 12px rgba(245, 208, 96, 0.4)'
                        }}>
                            FATURE DE 50 A 100 MIL TODOS OS MESES.
                        </span>
                    </h1>

                    {/* Subheadline (Copy Restaurada, Estilos Novos) */}
                    <p style={{
                        display: 'block',
                        width: '100%',
                        maxWidth: '43rem',
                        color: '#a0a8b8',
                        fontFamily: 'var(--subtitle-font)',
                        fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                        fontWeight: 400,
                        lineHeight: '1.4',
                        marginTop: '0',
                        marginBottom: '1rem'
                    }}>
                        Mesmo que hoje você esteja travado no Brasil, operando com ticket baixo e margem apertada.
                    </p>

                    <p style={{
                        display: 'block',
                        width: '100%',
                        maxWidth: '43rem',
                        color: '#a0a8b8',
                        fontFamily: 'var(--subtitle-font)',
                        fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                        fontWeight: 400,
                        lineHeight: '1.4',
                        marginTop: '0',
                        marginBottom: '2rem'
                    }}>
                        <strong style={{ color: '#fff', fontWeight: 600 }}>Se você for selecionado</strong>, eu vou criar um plano estratégico personalizado para você começar a vender em alta escala no mercado americano e ganhar em dólar.
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center md:justify-start w-full relative z-20">
                        <SovereignButton>🔘 CLIQUE AGORA PARA AGENDAR SUA REUNIÃO</SovereignButton>
                    </div>

                    <div style={{
                        marginTop: '1rem',
                        color: '#a0a8b8',
                        fontSize: '0.85rem',
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        justifyContent: 'flex-start'
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5D060" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Restam apenas 4 vagas esta semana
                    </div>

                </div>
            </div>

            <style>{`
                .hero-bg {
                    background-image: url(${bgImage});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%);
                    z-index: 0;
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .hero-bg {
                        background-image: url(${bgMobile}) !important;
                        background-position: center top !important;
                        background-size: cover !important;
                        filter: brightness(1.15) contrast(1.05); /* Mais clareza na imagem real */
                    }

                    .hero-overlay {
                        /* Inicia 100% transparente no topo para o rosto respirar, e escurece mais embaixo pro texto */
                        background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.95) 75%, #000 100%) !important;
                    }

                    .responsive-flex {
                        flex-direction: column !important;
                        align-items: center !important;
                        justify-content: flex-start !important;
                        text-align: center !important;
                        margin-left: 0 !important;
                        padding-left: 1rem !important;
                        padding-right: 1rem !important;
                        width: 100% !important;
                        padding-top: 5vh !important;
                    }

                    .hero-content {
                        transform: scale(1) !important;
                        margin-top: 50vh !important; /* Ajustando para o botão subir e o rosto continuar visível */
                        margin-left: 0 !important;
                        align-items: center !important;
                        text-align: center !important;
                    }

                    .desktop-br {
                        display: none !important;
                    }

                    .hero-logo {
                        width: clamp(140px, 40vw, 200px) !important;
                        margin-bottom: 1rem !important;
                    }
                    
                    h1 {
                        /* Fonte um pouco menor para economizar espaço vertical */
                        font-size: clamp(1.1rem, 5vw, 1.4rem) !important; 
                        line-height: 1.25 !important;
                        margin-bottom: 1rem !important;
                        text-shadow: 0 4px 16px rgba(0,0,0,1), 0 1px 4px rgba(0,0,0,1) !important;
                    }

                    p {
                        font-size: 0.85rem !important; /* Subheadline mais compacta */
                        line-height: 1.3 !important;
                        margin-bottom: 1rem !important; /* Menos espaço entre os textos */
                    }
                        font-size: var(--mobile-subtitle-size) !important; 
                        line-height: var(--mobile-subtitle-line-height) !important;
                    }
                }
            `}</style>

            {/* Mobile Bottom Gradient */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '150px',
                background: 'linear-gradient(to top, #000 10%, transparent 100%)',
                zIndex: 20,
                pointerEvents: 'none'
            }} />
        </div >
    );
};

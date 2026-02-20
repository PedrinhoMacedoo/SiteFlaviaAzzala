import bgImage from '../assets/bg12.webp';
import bgMobile from '../assets/bg_mobile.webp';
import logoImg from '../assets/logo.webp';

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
                    // backgroundImage is handled by CSS class .hero-bg
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0,
                    animation: 'flashAleatorio 8s infinite ease-in-out',
                    willChange: 'filter'
                }}
            />

            {/* Dark Overlay - BRIGHTER */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.15)', // Much lighter overlay to show color/brightness
                zIndex: 0,
                pointerEvents: 'none' // Ensure clicks pass through
            }} />

            {/* Content Container */}
            <div style={{
                position: 'relative', // Unfixed so it scrolls
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 1rem',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start', // Changed to flex-start for single column focus
                paddingTop: '0',
            }}>

                {/* Left Column: Text Content - SCALED DOWN as requested */}
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
                    marginLeft: '2rem' // Add some left padding
                }}>
                    {/* Logo - Mapa do Dolar */}
                    <img
                        src={logoImg}
                        alt="Mapa do Dolar"
                        className="hero-logo scroll-top delay-200"
                        style={{
                            width: '260px',
                            marginBottom: '1.2rem',
                            objectFit: 'contain'
                        }}
                    />

                    {/* Headline */}
                    <h1 className="scroll-txt delay-400" style={{
                        display: 'block',
                        width: '100%',
                        maxWidth: '52rem',
                        color: '#FFF',
                        fontFamily: 'var(--title-font)',
                        fontSize: 'var(--desktop-title-size)',
                        fontWeight: 700,
                        lineHeight: 'var(--desktop-title-line-height)',
                        textTransform: 'uppercase',
                        marginBottom: '1.2rem',
                        textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                        letterSpacing: '-0.01em'
                    }}>
                        DESCUBRA COMO <span style={{ fontWeight: 800 }}>ESCALAR</span><br className="desktop-br" />
                        <span style={{ fontWeight: 800 }}>NOS EUA</span> E FATURAR DE <span style={{ fontWeight: 800, color: '#1a0e00', background: 'linear-gradient(135deg, #F5D060 0%, #D4A017 50%, #C9922A 100%)', padding: '2px 10px', borderRadius: '4px', display: 'inline-block' }}>$50.000</span> A<br className="desktop-br" />
                        <span style={{ fontWeight: 800, color: '#1a0e00', background: 'linear-gradient(135deg, #F5D060 0%, #D4A017 50%, #C9922A 100%)', padding: '2px 10px', borderRadius: '4px', display: 'inline-block' }}>$100.000</span> TODOS OS MESES
                    </h1>

                    {/* Subheadline - EXACT USER SPECS */}
                    <p className="scroll-top delay-600" style={{
                        display: 'block',
                        width: '100%',
                        maxWidth: '43rem', // Reduced to force better wrapping if needed
                        color: '#a0a8b8',
                        fontFamily: 'var(--subtitle-font)',
                        fontSize: 'var(--desktop-subtitle-size)',
                        fontWeight: 300,
                        lineHeight: 'var(--desktop-subtitle-line-height)',
                        marginTop: '0',
                        marginBottom: '2.5rem'
                    }}>
                        A maioria dos operadores tenta escalar infoprodutos ou Dropshipping no Brasil brigando por tickets de R$97. Enquanto isso, no mercado americano de Nutra, pedidos de $200, $300 e até $500 são a regra, não a exceção.
                    </p>

                    {/* Liquid CTA Button */}
                    <button className="liquid-btn scroll-bottom delay-800">
                        <div className="border-layer"></div>
                        <div className="glass-body">
                            <span className="text-content">GARANTIR MINHA VAGA</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-arrow">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </button>

                </div>

                {/* Right Column Removed (Badge moved to left) */}
            </div>

            {/* Mobile Responsive Style Injection & Animations */}
            {/* Mobile Responsive Style Injection & Animations */}
            <style>{`
                /* Degular Font */
                @font-face {
                    font-family: "Degular";
                    src: url("https://tassiorenam.com.br/wp-content/uploads/2025/02/Degular-Semibold.ttf") format("truetype");
                    font-weight: normal;
                    font-style: normal;
                }

                /* ===== LIQUID BUTTON ===== */
                @property --angle {
                    syntax: '<angle>';
                    initial-value: 0deg;
                    inherits: false;
                }

                .liquid-btn {
                    position: relative;
                    background: transparent;
                    padding: 0;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    border-radius: 9999px;
                    isolation: isolate;
                    transform: scale(1);
                    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                    margin-bottom: 1.5rem;
                }

                .liquid-btn:active {
                    transform: scale(0.97);
                }

                /* Glow layer */
                .liquid-btn::before {
                    content: '';
                    position: absolute;
                    inset: -4px;
                    background: conic-gradient(
                        from var(--angle),
                        #7a5500,
                        #F5D060,
                        #D4A017,
                        #F5D060,
                        #7a5500
                    );
                    border-radius: inherit;
                    z-index: -1;
                    opacity: 0;
                    filter: blur(25px);
                    transition: opacity 1s ease, filter 1s ease;
                    animation: spin 8s linear infinite;
                }

                /* Border layer */
                .border-layer {
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    padding: 2px;
                    background: conic-gradient(
                        from var(--angle),
                        #7a5500,
                        #F5D060,
                        #D4A017,
                        #F5D060,
                        #7a5500
                    );
                    -webkit-mask:
                        linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    z-index: 1;
                    opacity: 0.6;
                    transition: opacity 0.8s ease;
                    animation: spin 8s linear infinite;
                }

                /* Glass body */
                .glass-body {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    background:
                        radial-gradient(70% 50% at 50% 0%, rgba(245, 208, 96, 0.12) 0%, transparent 100%),
                        radial-gradient(60% 30% at 50% 100%, rgba(212, 160, 23, 0.06) 0%, transparent 100%),
                        linear-gradient(180deg, rgba(40, 30, 0, 0.7) 0%, rgba(0, 0, 0, 0.95) 100%);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-radius: inherit;
                    padding: 18px 48px;
                    z-index: 2;
                    overflow: hidden;
                    border: 1px solid rgba(212, 160, 23, 0.12);
                    box-shadow:
                        inset 0 2px 0 0 rgba(245, 208, 96, 0.35),
                        inset 0 5px 8px 0 rgba(245, 208, 96, 0.08),
                        inset 0 0 30px 10px rgba(0, 0, 0, 0.8),
                        inset 0 -2px 0 0 rgba(212, 160, 23, 0.2),
                        inset 0 -5px 8px 0 rgba(212, 160, 23, 0.04),
                        0 25px 50px -10px rgba(0, 0, 0, 0.9);
                    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                }

                /* Sheen sweep */
                .glass-body::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -120%;
                    width: 50%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(245, 208, 96, 0.0),
                        rgba(245, 208, 96, 0.35),
                        rgba(245, 208, 96, 0.0),
                        transparent
                    );
                    transform: skewX(-20deg);
                    transition: 1s cubic-bezier(0.19, 1, 0.22, 1);
                }

                /* Text */
                .text-content {
                    color: #ffffff;
                    font-family: 'Sora', sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    transition: all 0.6s ease;
                    z-index: 10;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.8);
                }

                /* Arrow */
                .icon-arrow {
                    color: #ffffff;
                    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                    transform-origin: center;
                }

                /* Hover states */
                .liquid-btn:hover::before {
                    opacity: 0.7;
                    filter: blur(25px);
                }

                .liquid-btn:hover .border-layer {
                    opacity: 1;
                }

                .liquid-btn:hover .glass-body {
                    background:
                        radial-gradient(70% 50% at 50% 0%, rgba(245, 208, 96, 0.22) 0%, transparent 100%),
                        radial-gradient(60% 30% at 50% 100%, rgba(212, 160, 23, 0.1) 0%, transparent 100%),
                        linear-gradient(180deg, rgba(60, 45, 0, 0.7) 0%, rgba(10, 8, 0, 0.98) 100%);
                    border-color: rgba(245, 208, 96, 0.35);
                    box-shadow:
                        inset 0 2px 0 0 rgba(245, 208, 96, 0.6),
                        inset 0 5px 12px 0 rgba(245, 208, 96, 0.12),
                        inset 0 0 40px 10px rgba(0, 0, 0, 0.95),
                        inset 0 -2px 0 0 rgba(212, 160, 23, 0.4),
                        inset 0 -5px 12px 0 rgba(212, 160, 23, 0.08),
                        0 35px 70px -10px rgba(0, 0, 0, 0.95);
                }

                .liquid-btn:hover .glass-body::after {
                    left: 150%;
                    transition: 1.2s ease-in-out;
                }

                .liquid-btn:hover .text-content {
                    color: #F5D060;
                    text-shadow: 0 0 20px rgba(245, 208, 96, 0.7);
                    letter-spacing: 0.25em;
                    transform: translateX(-4px);
                }

                .liquid-btn:hover .icon-arrow {
                    transform: translateX(6px) scale(1.1);
                    color: #F5D060;
                    filter: drop-shadow(0 0 8px rgba(245, 208, 96, 0.8));
                }

                @keyframes spin {
                    to { --angle: 360deg; }
                }

                /* Mobile liquid btn */
                @media (max-width: 768px) {
                    .liquid-btn { width: 100%; }
                    .glass-body { padding: 16px 24px; }
                    .text-content { font-size: 12px; letter-spacing: 0.1em; }
                }

                /* Shiny CTA Custom Properties */


                @property --gradient-angle {
                    syntax: "<angle>";
                    initial-value: 0deg;
                    inherits: false;
                }
                @property --gradient-angle-offset {
                    syntax: "<angle>";
                    initial-value: 0deg;
                    inherits: false;
                }
                @property --gradient-percent {
                    syntax: "<percentage>";
                    initial-value: 5%;
                    inherits: false;
                }
                @property --gradient-shine {
                    syntax: "<color>";
                    initial-value: white;
                    inherits: false;
                }

                /* Shiny CTA Button Styles */
                .shiny-cta {
                    --shiny-cta-bg: #000000;
                    --shiny-cta-bg-subtle: #1a1818;
                    --shiny-cta-fg: #ffffff;
                    --shiny-cta-highlight: #F0C040;
                    --shiny-cta-highlight-subtle: white;
                    --animation: gradient-angle linear infinite;
                    --duration: 3s;
                    --shadow-size: 2px;
                    isolation: isolate;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    outline-offset: 4px;
                    padding: 1.25rem 2.5rem;
                    font-family: "Degular", sans-serif;
                    font-size: 1.325rem;
                    line-height: 1.2;
                    border: 1px solid transparent;
                    border-radius: 360px;
                    color: var(--shiny-cta-fg);
                    background: linear-gradient(var(--shiny-cta-bg), var(--shiny-cta-bg)) padding-box,
                        conic-gradient(
                            from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
                            transparent,
                            var(--shiny-cta-highlight) var(--gradient-percent),
                            var(--gradient-shine) calc(var(--gradient-percent) * 2),
                            var(--shiny-cta-highlight) calc(var(--gradient-percent) * 3),
                            transparent calc(var(--gradient-percent) * 4)
                        ) border-box;
                    box-shadow: inset 0 0 0 1px var(--shiny-cta-bg-subtle);
                    transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);
                    transition-property: --gradient-angle-offset, --gradient-percent, --gradient-shine;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .shiny-cta::before,
                .shiny-cta::after,
                .shiny-cta span::before {
                    content: "";
                    pointer-events: none;
                    position: absolute;
                    inset-inline-start: 50%;
                    inset-block-start: 50%;
                    translate: -50% -50%;
                    z-index: -1;
                }

                .shiny-cta::before {
                    --size: calc(100% - var(--shadow-size) * 3);
                    --position: 2px;
                    --space: calc(var(--position) * 2);
                    width: var(--size);
                    height: var(--size);
                    background: radial-gradient(
                        circle at var(--position) var(--position),
                        white calc(var(--position) / 4),
                        transparent 0
                    ) padding-box;
                    background-size: var(--space) var(--space);
                    background-repeat: space;
                    mask-image: conic-gradient(
                        from calc(var(--gradient-angle) + 45deg),
                        black,
                        transparent 10% 90%,
                        black
                    );
                    border-radius: inherit;
                    opacity: 0.4;
                }

                .shiny-cta::after {
                    --animation: shimmer linear infinite;
                    width: 100%;
                    aspect-ratio: 1;
                    background: linear-gradient(
                        -50deg,
                        transparent,
                        var(--shiny-cta-highlight),
                        transparent
                    );
                    mask-image: radial-gradient(circle at bottom, transparent 40%, black);
                    opacity: 0.6;
                }

                .shiny-cta span {
                    z-index: 1;
                    position: relative;
                }

                .shiny-cta span::before {
                    width: 370px;
                    height: 90px;
                    box-shadow: inset 0 -1ex 2rem 4px var(--shiny-cta-highlight);
                    opacity: 0;
                    transition: opacity 1500ms cubic-bezier(0.25, 1, 0.5, 1);
                }

                .shiny-cta:hover,
                .shiny-cta:focus-visible {
                    --gradient-percent: 20%;
                    --gradient-angle-offset: 95deg;
                    --gradient-shine: var(--shiny-cta-highlight-subtle);
                    box-shadow: inset 0 0 0 1px var(--shiny-cta-bg-subtle),
                        0 0 30px rgba(255, 176, 38, 0.4), /* Reduced from 0.7 to 0.4 */
                        0 0 80px rgba(255, 176, 38, 0.2), /* Reduced from 0.4 to 0.2 */
                        0 0 120px rgba(255, 176, 38, 0.1); /* Reduced from 0.2 to 0.1 */
                    transform: scale(1.03);
                }

                .shiny-cta:hover span::before {
                    opacity: 1;
                }

                .shiny-cta,
                .shiny-cta::before,
                .shiny-cta::after {
                    animation: var(--animation) var(--duration),
                        var(--animation) calc(var(--duration) / 0.4) reverse;
                    animation-composition: add;
                }

                .shiny-cta {
                    animation: gradient-angle 3s linear infinite, pulse-glow 3s ease-in-out infinite;
                }

                .shiny-cta:hover,
                .shiny-cta:hover::before,
                .shiny-cta:hover::after {
                    animation-play-state: running;
                }

                @keyframes gradient-angle {
                    to { --gradient-angle: 360deg; }
                }
                @keyframes shimmer {
                    to { transform: rotate(360deg); }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: inset 0 0 0 1px #1a1818, 0 0 8px rgba(255, 176, 38, 0.15); }
                    50% { box-shadow: inset 0 0 0 1px #1a1818, 0 0 20px rgba(255, 176, 38, 0.35), 0 0 40px rgba(255, 176, 38, 0.1); }
                }

                /* Default Desktop Background */
                .hero-bg {
                    background-image: url(${bgImage});
                    background-size: cover;
                    background-position: center;
                }

                @keyframes flashAleatorio {
                    0%, 10%   { filter: brightness(1); }
                    12%       { filter: brightness(3.5) contrast(1.2); } /* Muito mais estourado */
                    14%       { filter: brightness(1); }
                    25%, 40%  { filter: brightness(1); }
                    42%       { filter: brightness(2.5) contrast(1.1); }
                    44%       { filter: brightness(1); }
                    60%, 70%  { filter: brightness(1); }
                    72%       { filter: brightness(3) contrast(1.2); }
                    74%       { filter: brightness(1); }
                    90%, 100% { filter: brightness(1); }
                }

                @media (max-width: 768px) {
                    /* Mobile Background Switch */
                    .hero-bg {
                        background-image: url(${bgMobile}) !important;
                        background-position: center top !important;
                        background-size: cover !important;
                    }

                    /* Content Layout Overrides */
                     div[style*="display: flex"] {
                        flex-direction: column !important;
                        align-items: center !important;
                        justify-content: flex-start !important;
                        text-align: center !important;
                        margin-left: 0 !important;
                        padding-left: 1rem !important; /* Reduced padding to give more space to content */
                        padding-right: 1rem !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        box-sizing: border-box !important;
                    }

                    /* Reset margin-top to lift content from footer */
                    .hero-content {
                        transform: scale(1) !important;
                        transform-origin: center top !important;
                        margin-top: 36vh !important;
                        margin-left: 0 !important;
                        align-items: center !important;
                        text-align: center !important;
                        width: 100% !important;
                        position: relative !important;
                        z-index: 10 !important;
                    }

                    /* CONTROLLED LINE BREAKS */
                    .mobile-block {
                        display: block !important;
                        width: 100% !important;
                        white-space: nowrap !important; /* Force single line per block */
                        text-align: center !important;
                        letter-spacing: -0.01em !important;
                    }
                    .desktop-br {
                        display: none !important;
                    }

                    /* Logo mobile */
                    .hero-logo {
                        width: 140px !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                        display: block !important;
                        margin-bottom: 1rem !important;
                    }
                    
                    /* Headline Refinement - Balanced Size */
                    h1 {
                        font-family: var(--title-font) !important;
                        font-size: var(--mobile-title-size) !important; 
                        line-height: var(--mobile-title-line-height) !important;
                        text-align: center !important;
                        width: 100% !important;
                        max-width: 98% !important; /* Almost full width */
                        margin-left: auto !important;
                        margin-right: auto !important;
                        margin-bottom: 0.75rem !important;
                        letter-spacing: -0.01em !important;
                        text-shadow: 0 2px 10px rgba(0,0,0,0.8) !important;
                    }

                    h1 span[style*="background-color"] {
                        padding: 1px 4px !important;
                        border-radius: 4px !important;
                        white-space: nowrap !important;
                        display: inline-block !important;
                        margin: 0 1px !important; /* Tighter padding */
                    }
                    
                    /* Subheadline Refinement */
                    p {
                        font-family: var(--subtitle-font) !important;
                        font-size: var(--mobile-subtitle-size) !important; 
                        line-height: var(--mobile-subtitle-line-height) !important;
                        text-align: center !important;
                        color: #ccc !important;
                        width: 100% !important;
                        max-width: 100% !important; /* Full width within container padding */
                        margin-left: auto !important;
                        margin-right: auto !important;
                        margin-bottom: 1.5rem !important;
                    }

                    /* CTA Button - Mobile */
                    .shiny-cta {
                        padding: 1.25rem 1.5rem !important;
                        font-size: 1rem !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                        margin-bottom: 2rem !important;
                    }

                    /* Trust Badges Grid */
                    div[style*="grid-template-columns: 1fr 1fr 1fr"] {
                        grid-template-columns: 1fr 1fr 1fr !important;
                        gap: 0px !important;
                        margin-top: 2.5rem !important;
                        width: 100% !important;
                        max-width: 320px !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    
                    div[style*="grid-template-columns"] > div {
                        border-left: 1px solid rgba(255,255,255,0.2) !important;
                        border-right: none !important;
                    }
                    div[style*="grid-template-columns"] > div:first-child {
                        border-left: none !important;
                    }
                    
                    /* Trust Badge Text */
                    div[style*="grid-template-columns"] p {
                        font-size: 10px !important; /* Smaller text for badges */
                        margin-bottom: 0 !important;
                        padding: 0 !important;
                    }
                }
            `}</style>
            {/* Mobile Bottom Gradient for Smooth Transition */}
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
        </div>
    );
};

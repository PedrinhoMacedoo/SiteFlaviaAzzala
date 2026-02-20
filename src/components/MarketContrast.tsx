import React, { useState, useRef } from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, AlertCircle, CheckCircle2 } from 'lucide-react';

const COLORS = {
    brazil: '#FF5C5C',
    usa: '#FFD700',
    bg: '#020202',
    cardBg: '#080808',
    cardBorder: 'rgba(255, 255, 255, 0.08)',
    text: {
        primary: '#ffffff',
        secondary: '#a0a0a0',
        muted: '#525252',
    }
};

const useTilt = (active: boolean) => {
    const ref = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({});
    const [contentStyle, setContentStyle] = useState<React.CSSProperties>({});

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current || !active) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const rotateX = (y - 0.5) * 5;
        const rotateY = (x - 0.5) * -5;

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.005, 1.005, 1.005)`,
            transition: 'none'
        });

        setContentStyle({
            transform: `translateX(${(x - 0.5) * 5}px) translateY(${(y - 0.5) * 5}px)`,
            transition: 'none'
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
        });
        setContentStyle({
            transform: 'translateX(0) translateY(0)',
            transition: 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
        });
    };

    return { ref, style, contentStyle, handleMouseMove, handleMouseLeave };
};

interface CardMarketProps {
    subtitle: string;
    title: string;
    items: string[];
    flag: string;
    themeColor: string;
    icon: React.ReactNode;
    type: 'negative' | 'positive';
}

const CardMarket = ({ subtitle, title, items, flag, themeColor, icon, type }: CardMarketProps) => {
    const { ref, style, contentStyle, handleMouseMove, handleMouseLeave } = useTilt(true);

    return (
        <div
            className="group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                position: 'relative',
                perspective: '1200px',
                cursor: 'default',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            {/* Hover Glow Behind */}
            <div
                style={{
                    position: 'absolute',
                    inset: '10%',
                    borderRadius: '3rem',
                    background: themeColor,
                    filter: 'blur(50px)',
                    opacity: 0,
                    transition: 'opacity 0.8s ease',
                    zIndex: -1
                }}
                className="hover-back-glow"
            />
            <style>{`.group:hover .hover-back-glow { opacity: 0.1 !important; }`}</style>

            <div ref={ref}
                className="market-card-container"
                style={{
                    ...style,
                    backgroundColor: COLORS.cardBg,
                    border: `1px solid ${COLORS.cardBorder}`,
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    width: '100%',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 10,
                    boxShadow: '0 0 0 1px rgba(0,0,0,1), 0 20px 40px -10px rgba(0,0,0,0.8)'
                }}
            >
                {/* Hero Image / Top Section */}
                <div
                    className="market-card-hero"
                    style={{
                        position: 'relative',
                        height: '180px',
                        width: '100%',
                        overflow: 'hidden',
                        backgroundColor: '#000',
                        borderBottom: '1px solid rgba(255,255,255,0.03)',
                        flexShrink: 0
                    }}>

                    {/* Mesh Gradient Background */}
                    <div style={{
                        position: 'absolute', inset: 0, opacity: 0.2,
                        background: `radial-gradient(circle at 50% 120%, ${themeColor}, transparent 60%)`
                    }}></div>

                    {/* Flag Parallax */}
                    <div style={{
                        ...contentStyle,
                        position: 'absolute', inset: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 1
                    }}>
                        <span style={{
                            fontSize: '6rem',
                            opacity: 0.1,
                            filter: 'grayscale(100%) blur(0.5px)',
                            transform: 'scale(1.1)',
                            transition: 'all 0.8s ease'
                        }} className="flag-bg">
                            {flag}
                        </span>
                    </div>
                </div>

                {/* Content Container */}
                <div
                    className="market-card-content"
                    style={{
                        padding: '2rem 2rem 2.5rem 2rem',
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        zIndex: 5,
                        alignItems: 'flex-start',
                        textAlign: 'left'
                    }}>
                    {/* Floating Badge */}
                    <div
                        className="market-card-badge"
                        style={{
                            marginTop: '-3rem',
                            marginBottom: '1.5rem',
                            alignSelf: 'flex-start',
                            background: 'rgba(15,15,15,0.9)',
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${themeColor}30`,
                            padding: '0.5rem 1rem',
                            borderRadius: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 8px 16px -4px rgba(0,0,0,0.6)'
                        }}>
                        <div style={{ color: themeColor, display: 'flex', alignItems: 'center' }}>{icon}</div>
                        <span style={{
                            color: '#fff',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            fontFamily: 'Plus Jakarta Sans, sans-serif'
                        }}>
                            {subtitle}
                        </span>
                    </div>

                    {/* Title Group */}
                    <div className="market-card-header-group" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'flex-start', textAlign: 'left' }}>
                        <span style={{
                            fontFamily: 'var(--title-font)',
                            fontStyle: 'italic',
                            fontSize: '1.1rem',
                            color: COLORS.text.secondary,
                            opacity: 0.8
                        }}>
                            Análise:
                        </span>
                        <h2 className="market-card-title" style={{
                            fontFamily: 'var(--title-font)',
                            fontSize: '2.2rem',
                            fontWeight: 700,
                            color: '#fff',
                            lineHeight: 1,
                            textAlign: 'left'
                        }}>
                            {title}
                        </h2>
                    </div>

                    {/* Divider */}
                    <div style={{
                        width: '100%',
                        height: '1px',
                        background: 'rgba(255,255,255,0.08)',
                        marginBottom: '1.5rem',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            left: 0, top: -1,
                            height: '3px',
                            width: '0%',
                            background: themeColor,
                            transition: 'width 1s cubic-bezier(0.2, 0.8, 0.2, 1)'
                        }} className="progress-line"></div>
                    </div>
                    <style>{`.group:hover .progress-line { width: 100% !important; }`}</style>

                    {/* List Items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }} className="market-card-list">
                        {items.map((item, i) => {
                            const parts = item.split(':');
                            const boldPart = parts[0];
                            const restPart = parts.slice(1).join(':');

                            return (
                                <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }} className="list-row">
                                    <div style={{
                                        marginTop: '0.3rem',
                                        color: themeColor,
                                        opacity: 0.7,
                                        transform: 'scale(0.85)',
                                        transition: 'transform 0.3s',
                                        flexShrink: 0,
                                        display: 'flex',
                                        alignItems: 'center'
                                    }} className="list-icon">
                                        {type === 'negative' ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}
                                    </div>
                                    <p className="list-text" style={{
                                        fontFamily: 'Lexend, sans-serif',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.5,
                                        color: '#ccc',
                                        fontWeight: 300,
                                        margin: 0,
                                        textAlign: 'left'
                                    }}>
                                        {restPart ? (
                                            <>
                                                <strong style={{ color: '#fff', fontWeight: 600 }}>{boldPart}:</strong>{restPart}
                                            </>
                                        ) : (
                                            item
                                        )}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export const MarketContrast = () => {
    // Force specific mobile styles with high specificity using ID selector
    const responsiveStyles = `
        @media (max-width: 768px) {
            #market-section .market-pad { padding-top: 4rem !important; padding-bottom: 4rem !important; }
            #market-section .market-header { margin-bottom: 2.5rem !important; }
            #market-section .market-title { 
                font-size: var(--mobile-title-size) !important; 
                line-height: var(--mobile-title-line-height) !important; 
            }
            #market-section .market-desc { 
                font-size: var(--mobile-subtitle-size) !important; 
                line-height: var(--mobile-subtitle-line-height) !important;
                margin-bottom: 2rem !important; 
            }
            
            /* Mobile Card Adjustments: Strict Left Alignment */
            #market-section .market-grid { grid-template-columns: 1fr !important; } 
            
            #market-section .market-card-container { min-height: auto !important; }
            
            #market-section .market-card-content { 
                padding: 1.25rem 0.75rem !important; /* Balanced side padding */
                align-items: flex-start !important; 
                text-align: left !important;
            }
            
            #market-section .market-card-hero { height: 120px !important; }
            
            #market-section .market-card-header-group { 
                align-items: flex-start !important; 
                text-align: left !important; 
                width: 100% !important;
            }
            
            #market-section .market-card-title { 
                font-size: 1.8rem !important; 
                margin-bottom: 0.5rem !important; 
                text-align: left !important; 
            }
            
            /* Badge Fix: Strict packing */
            #market-section .market-card-badge { 
                margin-top: -2rem !important; 
                padding: 0.4rem 0.8rem !important; 
                font-size: 0.65rem !important; 
                margin-bottom: 1rem !important; 
                align-self: flex-start !important; 
                justify-content: flex-start !important; 
                display: inline-flex !important; /* Force hug content */
                width: fit-content !important;   /* Force hug content */
                min-width: 0 !important;
                flex-direction: row !important; 
                align-items: center !important;
                gap: 0.15rem !important; /* Ultra-tight gap */
                max-width: 100% !important;
                white-space: nowrap !important; /* Prevent text wrap */
            }
            
            #market-section .market-card-badge span {
                white-space: nowrap !important;
                text-align: left !important;
            }

            #market-section .market-card-list { 
                gap: 1rem !important; 
                align-items: flex-start !important; 
                width: 100% !important;
                padding-left: 0 !important; /* Reset padding to align left */
            }
            
            /* CSS GRID for Indestructible Layout */
            #market-section .list-row { 
                display: grid !important;
                grid-template-columns: 22px 1fr !important; /* Balanced icon column */
                gap: 0.8rem !important; /* More separation */
                align-items: start !important; 
                text-align: left !important; 
                width: 100% !important;
            }
             
             #market-section .list-icon {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                margin-top: 0.3rem !important; 
             }
             
             #market-section .list-text {
                font-size: 0.95rem !important; /* Larger text */
                line-height: 1.6 !important;    /* Better readability */
                color: #e5e5e5 !important;      /* Brighter text */
                letter-spacing: 0.02em !important;
                text-align: left !important;
             }
            
            #market-section .flag-bg { font-size: 4rem !important; }
        }
    `;

    return (
        <section id="market-section"
            className="market-pad"
            style={{
                backgroundColor: COLORS.bg,
                paddingTop: '8rem',
                paddingBottom: '8rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <style>{responsiveStyles}</style>

            {/* Subtle Grid Background */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                backgroundSize: '80px 80px',
                pointerEvents: 'none',
                opacity: 0.4
            }}></div>

            {/* Header */}
            <div className="market-header" style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', zIndex: 10 }}>
                <h2 className="market-title" style={{
                    fontFamily: 'var(--title-font)',
                    fontSize: 'var(--desktop-title-size)',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '1.5rem',
                    lineHeight: 'var(--desktop-title-line-height)',
                    maxWidth: '1000px',
                    margin: '0 auto 1.5rem auto',
                    textTransform: 'uppercase'
                }}>
                    O PROBLEMA NÃO É SUA CAPACIDADE. <span style={{ color: '#F5D060' }}>É O MERCADO ONDE VOCÊ TENTA ESCALAR.</span>
                </h2>
                <p className="market-desc" style={{
                    fontFamily: 'var(--subtitle-font)',
                    fontSize: 'var(--desktop-subtitle-size)',
                    color: '#999',
                    fontWeight: 300,
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: 'var(--desktop-subtitle-line-height)'
                }}>
                    Se você já entendeu que o jogo não é trabalhar mais — é escolher o mercado certo — preste atenção nesta comparação:
                </p>
            </div>

            {/* Grid Container - CSS Grid Implementation */}
            <div className="market-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)', // Strict 2 columns
                gap: '2rem',
                alignItems: 'stretch', // Strict equal height
                position: 'relative',
                zIndex: 10,
                maxWidth: '960px', // 2x cards + gap
                margin: '0 auto'
            }}>
                <CardMarket
                    type="negative"
                    subtitle="O OCEANO VERMELHO"
                    title="NO BRASIL"
                    items={[
                        "Poder de compra limitado: Corroído pela inflação.",
                        "CPM Alto: Custo por mil impressões cada vez mais caro.",
                        "Público sensível a preço: Difícil vender tickets altos.",
                        "Margens apertadas: O lucro não sustenta a escala."
                    ]}
                    flag="🇧🇷"
                    themeColor={COLORS.brazil}
                    icon={<TrendingDown size={14} />}
                />

                <CardMarket
                    type="positive"
                    subtitle="O OCEANO AZUL"
                    title="NOS EUA"
                    items={[
                        "Maior mercado consumidor do mundo: Volume massivo.",
                        "Cultura de compra online: O uso do cartão de crédito é padrão e imediato.",
                        "Decisão rápida: Menos objeções na hora da compra.",
                        "Tolerância a High Ticket: É normal pagar caro por qualidade."
                    ]}
                    flag="🇺🇸"
                    themeColor={COLORS.usa}
                    icon={<ArrowUpRight size={14} />}
                />
            </div>

            {/* Footer Statement */}
            <div style={{ position: 'relative', zIndex: 10, marginTop: '5rem', textAlign: 'center' }}>
                <p style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontStyle: 'italic',
                    fontFamily: 'serif',
                    fontSize: '1.25rem',
                    cursor: 'default',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    "Você não precisa trabalhar mais horas. Você precisa operar onde existe dinheiro circulando."
                </p>
            </div>
        </section>
    );
};

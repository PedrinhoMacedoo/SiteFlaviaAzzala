import React, { useState } from 'react';

const ACCENT = '#F5D060';

const deliverables = [
    {
        number: '01',
        title: 'Diagnóstico Estratégico do Seu Momento Atual',
        description: (
            <>
                Vamos analisar sua estrutura, experiência e capacidade de execução para identificar exatamente onde você está e o que precisa ajustar para operar no mercado americano com margem real.
            </>
        ),
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Mapa de Entrada no Mercado de Nutra EUA',
        description: (
            <>
                Você vai entender como funciona o modelo de operação em Nutra no mercado americano, incluindo estrutura de funil, categoria, lógica de monetização e posicionamento em dólar.<br /><br />
                <span className="font-semibold text-white">Direcionamento aplicado ao seu perfil.<br />Sem teoria genérica.</span>
            </>
        ),
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Plano Inicial de Escala em Dólar',
        description: (
            <>
                Se houver alinhamento de perfil, você receberá os próximos passos claros para estruturar ou acelerar sua operação no mercado americano, com foco na faixa de $50k–$100k por mês.<br /><br />
                <span className="font-medium" style={{ color: ACCENT }}>Não é promessa vazia.<br />É direcionamento estratégico.</span>
            </>
        ),
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
    },
];

export const Entregaveis: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40; // Parallax depth
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        setMousePosition({ x: xPos, y: yPos });
    };

    return (
        <section
            id="entregaveis-section"
            className="relative w-full py-10 sm:py-28 px-4 sm:px-8 flex justify-center overflow-hidden z-20"
            style={{ backgroundColor: '#000' }}
            onMouseMove={handleMouseMove}
        >
            {/* Background EFEITO LUZ (Hover Parallax) */}
            <div
                className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none transition-transform duration-[1000ms] ease-out mix-blend-screen"
                style={{
                    backgroundColor: `${ACCENT}15`,
                    transform: `translate3d(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px, 0)`
                }}
            />
            <div
                className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none transition-transform duration-[1000ms] ease-out mix-blend-screen"
                style={{
                    backgroundColor: `${ACCENT}1A`,
                    transform: `translate3d(${mousePosition.x * 2}px, ${mousePosition.y * 2}px, 0)`
                }}
            />

            <div className="max-w-[1100px] w-full flex flex-col items-center gap-16 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center gap-4 text-center scroll-top delay-200">
                    <h2
                        className="text-[length:var(--mobile-title-size)] sm:text-[length:var(--desktop-title-size)] font-bold text-white leading-tight text-center uppercase"
                        style={{ fontFamily: 'var(--title-font)' }}
                    >
                        O QUE VOCÊ VAI RECEBER NA <span style={{ color: ACCENT }}>ESTRATÉGIA MAPA DO DÓLAR</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 scroll-top delay-200">
                    {deliverables.map((item, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <div
                                key={index}
                                className="relative group flex flex-col gap-6 p-8 rounded-2xl cursor-default"
                                style={{
                                    backgroundColor: isHovered ? '#0d0d0d' : '#080808',
                                    border: `1px solid ${isHovered ? `${ACCENT}30` : 'rgba(255,255,255,0.06)'}`,
                                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                                    boxShadow: isHovered
                                        ? `0 20px 40px rgba(0,0,0,0.5), 0 0 30px ${ACCENT}10`
                                        : '0 2px 8px rgba(0,0,0,0.3)',
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Top shine line */}
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full transition-all duration-500"
                                    style={{
                                        width: isHovered ? '60%' : '0%',
                                        background: `linear-gradient(90deg, transparent, ${ACCENT}60, transparent)`,
                                    }}
                                />

                                {/* Number + Icon Row */}
                                <div className="flex items-center justify-between">

                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{
                                            backgroundColor: isHovered ? `${ACCENT}15` : `${ACCENT}08`,
                                            border: `1px solid ${isHovered ? `${ACCENT}30` : `${ACCENT}10`}`,
                                            transition: 'all 0.4s ease',
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-xl font-bold text-white leading-snug"
                                    style={{ fontFamily: 'var(--title-font)' }}
                                >
                                    {item.title}
                                </h3>

                                {/* Divider */}
                                <div
                                    className="h-px w-full transition-all duration-500"
                                    style={{
                                        background: isHovered
                                            ? `linear-gradient(90deg, ${ACCENT}40, transparent)`
                                            : 'linear-gradient(90deg, rgba(255,255,255,0.06), transparent)',
                                    }}
                                />

                                {/* Description */}
                                <div
                                    className="text-sm leading-relaxed"
                                    style={{
                                        fontFamily: 'var(--subtitle-font)',
                                        color: isHovered ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)',
                                        transition: 'color 0.4s ease',
                                    }}
                                >
                                    {item.description}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

import React from 'react';

const ACCENT = '#F5D060';

const items = [
    "Mais faturamento por cliente",
    "Mais margem para tráfego",
    "Mais previsibilidade de escala",
];

export const InfoTicker: React.FC = () => {
    return (
        <section className="w-full bg-black py-8 sm:py-16 overflow-hidden relative z-20">
            <div className="max-w-7xl mx-auto px-6 mb-2 sm:mb-12 text-center">
                <h2
                    id="force-title-info"
                    className="text-3xl sm:text-2xl font-black sm:font-bold text-white/90 tracking-[0.2em] uppercase leading-tight sm:leading-relaxed"
                    style={{ fontFamily: 'var(--title-font)', fontSize: '60px' }}
                >
                    <span className="line1">DIFERENTE DE INFOPRODUTO…</span>
                    <span className="line2" style={{ color: ACCENT }}>AQUI VOCÊ TEM:</span>
                </h2>
                <style>{`
                    @media (max-width: 768px) {
                        #force-title-info {
                            font-size: clamp(1rem, 5.5vw, 2.5rem) !important;
                            color: white !important;
                            line-height: 1.2 !important;
                            display: flex !important;
                            flex-direction: column !important;
                            align-items: center !important;
                            text-align: center !important;
                            width: 100% !important;
                            letter-spacing: 0.02em !important;
                            padding: 0 15px !important;
                        }
                        #force-title-info .line1 {
                            display: block !important;
                            white-space: nowrap !important;
                        }
                        #force-title-info .line2 {
                            display: block !important;
                            white-space: nowrap !important;
                        }
                    }
                `}</style>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="flex animate-ticker whitespace-nowrap gap-4 sm:gap-8">
                    {[...items, ...items, ...items, ...items].map((text, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-6 py-4 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm"
                        >
                            <div className="w-2 h-2 rounded-full shadow-[0_0_10px_rgba(245,208,96,0.6)]" style={{ backgroundColor: ACCENT }} />
                            <span className="text-white font-bold text-base sm:text-lg tracking-tight">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Secondary list for seamless loop */}
                <div className="absolute top-0 flex animate-ticker2 whitespace-nowrap gap-4 sm:gap-8 min-w-full">
                    {[...items, ...items, ...items, ...items].map((text, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-6 py-4 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm"
                        >
                            <div className="w-2 h-2 rounded-full shadow-[0_0_10px_rgba(245,208,96,0.6)]" style={{ backgroundColor: ACCENT }} />
                            <span className="text-white font-bold text-base sm:text-lg tracking-tight">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                @keyframes ticker2 {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0); }
                }
                .animate-ticker {
                    animation: ticker 30s linear infinite;
                }
                .animate-ticker2 {
                    animation: ticker2 30s linear infinite;
                }
            `}</style>
        </section>
    );
};

import React from 'react';

interface SovereignButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export const SovereignButton: React.FC<SovereignButtonProps> = ({ children, className = '', ...props }) => {
    // Retira o emoji 🔘 que eu usava como ícone antes para substituir pelo ponto vermelho real
    const stringChildren = typeof children === 'string' ? children.replace('🔘', '').trim() : children;

    return (
        <button
            className={`group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(229,9,20,0.8)] focus:outline-none text-[11px] sm:text-xs md:text-sm font-bold text-white tracking-widest sm:tracking-[0.1em] rounded-[40px] py-4 px-6 sm:py-5 sm:px-12 relative items-center justify-center border border-red-500/50 ${className}`}
            style={{
                background: 'linear-gradient(90deg, #5a0000 0%, #e60000 50%, #5a0000 100%)',
                boxShadow: '0 0 30px rgba(229,9,20,0.3)',
            }}
            {...props}
        >
            {/* Grain Texture para dar a sensação do botão físico (opcional) */}
            <div
                className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                {/* Red Glowing Circle Indicator */}
                <div
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff3333] shrink-0"
                    style={{
                        boxShadow: '0 0 10px #ff3333, inset 0 0 4px white'
                    }}
                />

                {/* Conteúdo do Texto */}
                <span className="text-white whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-none" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    {stringChildren}
                </span>

                {/* Seta Branca */}
                <div className="ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </div>
            </div>
        </button>
    );
};

import React from 'react';

interface SovereignButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export const SovereignButton: React.FC<SovereignButtonProps> = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_-15px_rgba(245,208,96,0.5)] focus:outline-none text-xs sm:text-sm font-semibold text-white tracking-[0.15em] sm:tracking-[0.2em] rounded-full py-4 px-6 sm:py-5 sm:px-12 relative items-center justify-center border border-white/5 ${className}`}
            {...props}
        >
            {/* Borda Animada (Feixe Dourado Vibrante) */}
            <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1.5px]">
                {/* Gradiente Dourado (#d4a017 para #f5d060) */}
                <div
                    className="absolute inset-[-250%] bg-[conic-gradient(from_0deg,transparent_0_200deg,#d4a017_280deg,#f5d060_320deg,transparent_360deg)]"
                    style={{ animation: 'beam-spin 2s linear infinite' }}
                ></div>
                {/* Fundo para criar o recorte da borda */}
                <div className="absolute inset-[1px] rounded-full bg-black"></div>
            </div>

            {/* Corpo do Botão e Efeitos de Luz */}
            <div className="-z-10 overflow-hidden bg-black rounded-full absolute inset-[1.5px]">
                {/* Esfumaçado/Radial Branco Central */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,transparent_70%)]"></div>

                {/* Padrão de Pontos (Sutil no fundo escuro) */}
                <div
                    className="opacity-20 absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)',
                        backgroundSize: '14px 14px',
                        animation: 'dots-move 12s linear infinite'
                    }}
                ></div>

                {/* Glow Branco Lateral no Hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Conteúdo */}
            <span className="relative z-10 text-white/90 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] whitespace-normal sm:whitespace-nowrap px-1 sm:px-2 text-center leading-relaxed">
                {children}
            </span>

            {/* Seta Branca com Animação Corrigida */}
            <div className="relative z-10 ml-3 transition-all duration-300 animate-indicate shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
            </div>
        </button>
    );
};

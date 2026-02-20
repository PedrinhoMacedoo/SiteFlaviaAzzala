import React from 'react';

export const Bio: React.FC = () => {
    return (
        <section id="bio-section" className="relative w-full bg-[#000000] py-24 px-6 sm:px-12 flex justify-center items-center overflow-hidden z-20">

            {/* Glow Background Top Left */}
            <div
                className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{ backgroundColor: '#F5D060' }}
            ></div>

            <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">

                {/* Imagem do Especialista (Esquerda) */}
                <div className="md:col-span-5 scroll-left delay-200">
                    <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden group">

                        {/* Box Placeholder for Image */}
                        <div className="absolute inset-0 bg-[#080808] border border-white/5 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-[#F5D060]/50">
                            <span className="text-white/20 uppercase tracking-widest text-sm font-semibold mb-2" style={{ fontFamily: 'var(--subtitle-font)' }}>
                                [Sua Foto Aqui]
                            </span>
                            <span className="text-[#F5D060]/50 text-xs text-center px-4" style={{ fontFamily: 'var(--subtitle-font)' }}>
                                Envie a imagem para eu colocar!
                            </span>
                        </div>

                        {/* Hover Outline Glow */}
                        <div className="absolute inset-0 border border-[#F5D060]/0 group-hover:border-[#F5D060]/30 rounded-3xl transition-colors duration-500 pointer-events-none shadow-[inset_0_0_0_0_transparent] group-hover:shadow-[inset_0_0_30px_0_rgba(245,208,96,0.1)]"></div>
                    </div>
                </div>

                {/* Conteúdo Textual (Direita) */}
                <div className="flex flex-col gap-8 md:col-span-7 scroll-right delay-400">

                    {/* Badge BIO */}
                    <div className="inline-flex items-center self-start px-4 py-2 rounded-full border border-white/10 bg-white/5">
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#F5D060' }}></span>
                        <span className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--subtitle-font)' }}>BIO</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]" style={{ fontFamily: 'var(--title-font)' }}>
                        Fundador do <br />
                        <span style={{ color: '#F5D060' }}>Zap Convert</span>
                    </h2>

                    <div className="text-[#a0a8b8] text-lg font-light leading-[1.6] space-y-6" style={{ fontFamily: 'var(--subtitle-font)' }}>
                        <p>
                            Substitua este texto pela sua história real. Esta é a seção onde você gera <strong>autoridade</strong> e <strong>conexão</strong> com as pessoas que estão visitando a sua página.
                        </p>
                        <p>
                            Fale brevemente sobre como você construiu o Zap Convert, quais foram as dificuldades que você superou e por que decidiu ajudar outras pessoas a alcançarem os mesmos resultados.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--title-font)' }}>+1000</span>
                            <span className="text-sm text-white/50 uppercase tracking-widest" style={{ fontFamily: 'var(--subtitle-font)' }}>Alunos Ativos</span>
                        </div>
                        <div className="w-[1px] h-12 bg-white/10"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold" style={{ color: '#F5D060', fontFamily: 'var(--title-font)' }}>100%</span>
                            <span className="text-sm text-white/50 uppercase tracking-widest" style={{ fontFamily: 'var(--subtitle-font)' }}>Focado em Conversão</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

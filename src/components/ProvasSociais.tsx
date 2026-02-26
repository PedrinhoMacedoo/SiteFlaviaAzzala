import React, { useState, useRef, useEffect } from 'react';
import { SovereignButton } from './SovereignButton';

// Assets: Videos
import case1Vid from '../assets/destaques/case1.webm';
import case2Vid from '../assets/destaques/case2.webm';
import case3Vid from '../assets/destaques/case3.webm';
import case4Vid from '../assets/destaques/case4.webm';
import case5Vid from '../assets/destaques/case5.webm';

// Assets: Images/Prints
import resultado1Img from '../assets/destaques/resultado1.webp';
import resultado2Img from '../assets/destaques/resultado2.webp';
import resultado3Img from '../assets/destaques/resultado3.webp';
import resultado4Img from '../assets/destaques/resultado4.webp';
import mentoria1Img from '../assets/destaques/mentoria1.webp';
import mentoria2Img from '../assets/destaques/mentoria2.webp';
import mentoria3Img from '../assets/destaques/mentoria3.webp';

const ACCENT = '#F5D060';

interface Testimonial {
    id: number;
    type: 'video' | 'image';
    src: string;
    name: string;
    role: string;
}

const testimonials: Testimonial[] = [
    { id: 1, type: 'video', src: case1Vid, name: 'Omar', role: 'Sócio Milionário' },
    { id: 2, type: 'image', src: resultado1Img, name: 'Resultado', role: 'Vendas Diárias' },
    { id: 3, type: 'video', src: case2Vid, name: 'Aluno 1', role: 'Faturou R$2M' },
    { id: 4, type: 'image', src: mentoria1Img, name: 'Feedback', role: 'Mentoria Elite' },
    { id: 5, type: 'video', src: case3Vid, name: 'Aluno 2', role: 'Operador de Drop' },
    { id: 6, type: 'image', src: resultado2Img, name: 'Resultado', role: 'Escala' },
    { id: 7, type: 'video', src: case4Vid, name: 'Aluno 3', role: 'Mentorando' },
    { id: 8, type: 'image', src: resultado3Img, name: 'Resultado', role: 'Mapa do Dólar' },
    { id: 9, type: 'video', src: case5Vid, name: 'Aluno 4', role: 'Resultados Reais' },
    { id: 10, type: 'image', src: mentoria2Img, name: 'Feedback', role: 'Estratégia' },
    { id: 11, type: 'image', src: resultado4Img, name: 'Resultado', role: 'Consistência' },
    { id: 12, type: 'image', src: mentoria3Img, name: 'Feedback', role: 'Acompanhamento' },
];

export const ProvasSociais: React.FC = () => {
    const [activeMedia, setActiveMedia] = useState<Testimonial | null>(null);
    const scroll1Ref = useRef<HTMLDivElement>(null);
    const scroll2Ref = useRef<HTMLDivElement>(null);

    // Auto-scroll logic (with speed adjustment)
    useEffect(() => {
        const s1 = scroll1Ref.current;
        const s2 = scroll2Ref.current;
        if (!s1 || !s2) return;

        let animationFrameId: number;
        let lastTimestamp: number = 0;

        const scroll = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const delta = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (delta > 0 && delta < 100) {
                s1.scrollTop += 0.05 * delta;
                s2.scrollTop += 0.08 * delta;
            }

            if (s1.scrollTop >= s1.scrollHeight / 2) s1.scrollTop = 0;
            if (s2.scrollTop >= s2.scrollHeight / 2) s2.scrollTop = 0;

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const col1 = testimonials.filter((_, i) => i % 2 === 0);
    const col2 = testimonials.filter((_, i) => i % 2 !== 0);

    const openMedia = (item: Testimonial) => setActiveMedia(item);
    const closeMedia = () => setActiveMedia(null);

    const LazyVideo: React.FC<{ src: string }> = ({ src }) => {
        const videoRef = useRef<HTMLVideoElement>(null);

        useEffect(() => {
            const currentVideo = videoRef.current;
            if (!currentVideo || !window.IntersectionObserver) return;

            const observer = new IntersectionObserver((entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    currentVideo.play().catch(() => { });
                } else {
                    currentVideo.pause();
                }
            }, { rootMargin: '200px', threshold: 0.1 });

            observer.observe(currentVideo);
            return () => observer.disconnect();
        }, []);

        return (
            <video
                ref={videoRef}
                src={src}
                preload="none"
                className="w-full h-full object-cover opacity-60 group-hover/card:opacity-90 transition-opacity duration-700"
                muted loop playsInline
            />
        );
    };

    const renderCard = (t: Testimonial, i: number) => (
        <div
            key={i}
            className="relative flex-shrink-0 w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group/card transition-all duration-500 cursor-pointer"
            onClick={() => openMedia(t)}
            style={{ transitionProperty: 'border-color' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = `${ACCENT}66`}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
        >
            {t.type === 'video' ? (
                <div className="relative w-full aspect-[9/16]">
                    <LazyVideo src={t.src} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col items-center justify-center p-3 sm:p-4 text-center">
                        <div className="transform scale-75 sm:scale-90 group-hover/card:scale-110 transition-all duration-500 flex flex-col items-center gap-2 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,208,96,0.3)]" style={{ backgroundColor: ACCENT }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="black">
                                    <path d="M8 5v14l11-7z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-white font-bold tracking-widest text-[8px] sm:text-[9px] uppercase drop-shadow-lg">
                                Ver Depoimento
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative w-full">
                    <img
                        src={t.src}
                        alt={t.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto opacity-70 group-hover/card:opacity-100 transition-opacity duration-700 block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
            )}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-left opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
                <p className="font-bold text-[10px] sm:text-sm" style={{ color: ACCENT }}>{t.name}</p>
                <p className="text-white/60 text-[8px] sm:text-[10px]">{t.role}</p>
            </div>
        </div>
    );

    return (
        <section id="provas-sociais" className="relative w-full py-10 sm:py-32 bg-black overflow-hidden z-20">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-20" style={{ backgroundColor: `${ACCENT}0D` }} />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* LEFT COLUMN: Content */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1 items-center lg:items-start text-center lg:text-left">
                        <div className="flex flex-col gap-4 items-center lg:items-start">
                            <span className="font-bold tracking-[0.3em] text-xs sm:text-sm uppercase text-center lg:text-left" style={{ color: ACCENT, fontFamily: 'var(--subtitle-font)' }}>

                            </span>
                            <h2 className="text-[length:var(--mobile-title-size)] sm:text-[length:var(--desktop-title-size)] font-bold text-white leading-tight uppercase text-center lg:text-left" style={{ fontFamily: 'var(--title-font)' }}>
                                VEJA O QUE ACONTECE QUANDO A <span style={{ color: ACCENT }}>ESTRUTURA CERTA</span> É APLICADA
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6 text-[#a0a8b8] text-sm sm:text-lg leading-relaxed font-light max-w-xl items-center lg:items-start text-center lg:text-left" style={{ fontFamily: 'var(--subtitle-font)' }}>
                            <div className="flex flex-col gap-3 items-center lg:items-start">
                                <div className="flex items-start gap-2 text-center lg:text-left">
                                    <span className="text-green-500 shrink-0">✔</span>
                                    <p className="text-white font-medium">De mentorado a sócio milionário após estruturar a operação</p>
                                </div>
                                <div className="flex items-start gap-2 text-center lg:text-left">
                                    <span className="text-green-500 shrink-0">✔</span>
                                    <p className="text-white font-medium">De operador de DropShipping a R$2.000.000 faturados em 60 dias aplicando nossa estrutura</p>
                                </div>
                            </div>

                            <p className="mt-2 sm:mt-4 italic decoration-ACCENT underline underline-offset-4 decoration-1 text-white/90 text-xs sm:text-base text-center lg:text-left">E esses não são casos isolados.</p>
                            <p className="text-xs sm:text-base text-center lg:text-left">Hoje existem mais de <span className="text-white font-semibold">200 depoimentos reais</span> de operadores que aplicaram o mesmo modelo apresentado na <span className="font-semibold" style={{ color: ACCENT }}>Estratégia Mapa do Dólar</span>.</p>
                        </div>

                        <div className="flex flex-col gap-6 border-l-0 sm:border-l pl-0 sm:pl-8 py-2 sm:py-4 mt-2 sm:mt-4 items-center lg:items-start text-center lg:text-left" style={{ borderColor: `${ACCENT}33` }}>
                            <div className="flex flex-col gap-1 items-center lg:items-start">
                                <p className="text-white font-black text-lg sm:text-xl uppercase italic text-center lg:text-left" style={{ fontFamily: 'var(--title-font)' }}>
                                    Resultado não é promessa.
                                </p>
                                <p className="font-medium text-base sm:text-lg uppercase text-center lg:text-left" style={{ color: ACCENT, fontFamily: 'var(--subtitle-font)' }}>
                                    É execução com direcionamento estratégico.
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 sm:mt-8 flex flex-col gap-5 items-center lg:items-start w-full">
                            <SovereignButton onClick={() => window.open('https://api.whatsapp.com/send?phone=55...', '_blank')}>
                                🔘 CLIQUE AGORA PARA AGENDAR SUA REUNIÃO
                            </SovereignButton>
                            <div className="flex items-center gap-2 text-[#a0a8b8] text-xs sm:text-sm opacity-80 justify-center lg:justify-start">

                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Mural (Mobile & Desktop: 2 columns) */}
                    <div className="relative h-[500px] sm:h-[750px] order-1 lg:order-2">
                        {/* Mask/Fade Overlay */}
                        <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

                        <div className="grid grid-cols-2 gap-2 sm:gap-4 h-full overflow-hidden">
                            {/* Column 1 */}
                            <div ref={scroll1Ref} className="flex flex-col gap-2 sm:gap-4 overflow-hidden pt-8">
                                {[...col1, ...col1, ...col1].map((t, i) => renderCard(t, i))}
                            </div>
                            {/* Column 2 */}
                            <div ref={scroll2Ref} className="flex flex-col gap-2 sm:gap-4 overflow-hidden pt-12">
                                {[...col2, ...col2, ...col2].map((t, i) => renderCard(t, i))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* LIGHTBOX */}
            {activeMedia && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
                    <button onClick={closeMedia} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[110]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/10" style={{ boxShadow: `0 0 80px ${ACCENT}1A` }}>
                        {activeMedia.type === 'video' ? (
                            <div className="aspect-video w-full bg-black flex items-center justify-center"><video src={activeMedia.src} className="max-w-full max-h-full" controls autoPlay /></div>
                        ) : (
                            <img src={activeMedia.src} alt={activeMedia.name} className="w-full h-auto max-h-[85vh] object-contain bg-black mx-auto" />
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

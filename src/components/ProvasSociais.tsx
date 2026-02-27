import React, { useState, useRef, useEffect, useCallback } from 'react';
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

/* ─── Instagram-Style Reels Popup ─── */
const InstagramPopup: React.FC<{ media: Testimonial; onClose: () => void }> = ({ media, onClose }) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';
        return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
    }, [onClose]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
            style={{
                backgroundColor: 'rgba(0,0,0,0.92)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                animation: 'igFadeIn 0.25s ease-out forwards'
            }}
        >
            {/* Phone-like container */}
            <div
                className="relative flex flex-col"
                style={{
                    width: 'min(380px, 90vw)',
                    maxHeight: '85vh',
                    animation: 'igSlideUp 0.3s cubic-bezier(0.2,0.8,0.2,1) forwards'
                }}
            >
                {/* Top Bar (IG style) */}
                <div className="flex items-center justify-between px-4 py-3 rounded-t-2xl"
                    style={{ background: 'linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(15,15,15,0.9) 100%)' }}>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                            style={{ background: `linear-gradient(135deg, ${ACCENT}, #D4A017)`, color: '#000' }}>
                            {media.name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-white text-sm font-semibold leading-tight">{media.name}</p>
                            <p className="text-white/50 text-[10px]">{media.role}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="relative overflow-hidden rounded-b-2xl bg-black" style={{ aspectRatio: media.type === 'video' ? '9/16' : undefined }}>
                    {media.type === 'video' ? (
                        <video
                            src={media.src}
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            playsInline
                            style={{ borderRadius: '0 0 1rem 1rem' }}
                        />
                    ) : (
                        <img
                            src={media.src}
                            alt={media.name}
                            className="w-full h-auto object-contain"
                            style={{ borderRadius: '0 0 1rem 1rem', maxHeight: '75vh' }}
                        />
                    )}

                    {/* Progress bar (decorative, IG-like) */}
                    {media.type === 'video' && (
                        <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                            <div className="h-full w-full" style={{
                                background: `linear-gradient(90deg, ${ACCENT}, transparent)`,
                                animation: 'igProgress 15s linear infinite'
                            }} />
                        </div>
                    )}
                </div>
            </div>

            {/* Animations CSS */}
            <style>{`
                @keyframes igFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes igSlideUp {
                    from { opacity: 0; transform: translateY(40px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes igProgress {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
            `}</style>
        </div>
    );
};

/* ─── Lazy Video Component ─── */
const LazyVideo: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
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
            className={className || "w-full h-full object-cover"}
            muted loop playsInline
        />
    );
};

/* ─── Carousel Card ─── */
const CarouselCard: React.FC<{ item: Testimonial; onClick: () => void }> = ({ item, onClick }) => (
    <div
        className="relative flex-shrink-0 w-full rounded-2xl overflow-hidden border border-white/[0.06] group/card transition-all duration-500 cursor-pointer hover:border-white/20"
        onClick={onClick}
        style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
    >
        {item.type === 'video' ? (
            <div className="relative w-full aspect-[9/16]">
                <LazyVideo src={item.src} className="w-full h-full object-cover opacity-50 group-hover/card:opacity-80 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col items-center justify-center">
                    <div className="transform scale-90 group-hover/card:scale-110 transition-all duration-500 flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 group-hover/card:bg-[#F5D060]/80 group-hover/card:border-[#F5D060]/40 transition-all duration-500">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="ml-0.5 group-hover/card:fill-black transition-colors duration-500"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="relative w-full">
                <img src={item.src} alt={item.name} loading="lazy" decoding="async"
                    className="w-full h-auto opacity-60 group-hover/card:opacity-100 transition-opacity duration-700 block" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
        )}
        {/* Card footer label */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
            <p className="font-semibold text-[11px]" style={{ color: ACCENT }}>{item.name}</p>
            <p className="text-white/50 text-[9px]">{item.role}</p>
        </div>
    </div>
);

/* ─── Main Component ─── */
export const ProvasSociais: React.FC = () => {
    const [activeMedia, setActiveMedia] = useState<Testimonial | null>(null);
    const openMedia = useCallback((item: Testimonial) => setActiveMedia(item), []);
    const closeMedia = useCallback(() => setActiveMedia(null), []);

    // Carousel refs & auto-scroll
    const scroll1Ref = useRef<HTMLDivElement>(null);
    const scroll2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const s1 = scroll1Ref.current;
        const s2 = scroll2Ref.current;
        if (!s1 || !s2) return;

        let animId: number;
        let last = 0;

        const tick = (ts: number) => {
            if (!last) last = ts;
            const dt = ts - last;
            last = ts;

            if (dt > 0 && dt < 100) {
                s1.scrollTop += 0.04 * dt;
                s2.scrollTop += 0.06 * dt;
            }
            if (s1.scrollTop >= s1.scrollHeight / 2) s1.scrollTop = 0;
            if (s2.scrollTop >= s2.scrollHeight / 2) s2.scrollTop = 0;

            animId = requestAnimationFrame(tick);
        };

        animId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animId);
    }, []);

    const col1 = testimonials.filter((_, i) => i % 2 === 0);
    const col2 = testimonials.filter((_, i) => i % 2 !== 0);

    return (
        <section id="provas-sociais" className="relative w-full bg-black overflow-hidden z-20">

            {/* ═══ PART 1: Highlight Cases ═══ */}
            <div className="relative py-4">
                {/* BG glow */}
                <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] rounded-full blur-[200px] -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-[0.04]" style={{ backgroundColor: ACCENT }} />

                <div className="max-w-3xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center">

                    {/* Title */}
                    <div className="flex flex-col gap-2 items-center text-center mb-14">
                        <h2 className="text-[length:var(--mobile-title-size)] sm:text-[length:var(--desktop-title-size)] font-bold text-white leading-tight uppercase" style={{ fontFamily: 'var(--title-font)' }}>
                            VEJA O QUE ACONTECE<br />
                            QUANDO A <span style={{ color: ACCENT }}>ESTRUTURA<br />CERTA</span> É APLICADA
                        </h2>
                    </div>

                    {/* Stacked Highlight Videos */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 w-full max-w-[850px] items-start mb-14">
                        {/* Case 1 */}
                        <div className="flex flex-col items-center w-full">
                            <div className="bg-[#0c0c0c] border border-white/[0.06] rounded-xl px-5 py-3 mb-[-12px] text-center z-10 relative"
                                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }}>
                                <p className="text-white/70 text-[13px] font-medium italic" style={{ fontFamily: 'var(--subtitle-font)' }}>
                                    De mentorado a sócio milionário<br />
                                    após estruturar a operação
                                </p>
                            </div>
                            <div
                                className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group/card border border-white/[0.06] transition-all duration-500 hover:border-[#F5D060]/30"
                                onClick={() => openMedia(testimonials[2])}
                                style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
                            >
                                <LazyVideo src={case2Vid} className="w-full h-full object-cover opacity-50 group-hover/card:opacity-80 transition-opacity duration-700" />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 group-hover/card:bg-[#F5D060]/80 group-hover/card:border-[#F5D060]/40 transition-all duration-500 shadow-[0_0_40px_rgba(245,208,96,0.15)]">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1 group-hover/card:fill-black transition-colors duration-500"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Case 2 */}
                        <div className="flex flex-col items-center w-full">
                            <div className="bg-[#0c0c0c] border border-white/[0.06] rounded-xl px-5 py-3 mb-[-12px] text-center z-10 relative"
                                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }}>
                                <p className="text-white/70 text-[13px] font-medium italic" style={{ fontFamily: 'var(--subtitle-font)' }}>
                                    De operador de DropShipping a<br />
                                    R$2.000.000 faturados em 60 dias<br />
                                    aplicando nossa estrutura
                                </p>
                            </div>
                            <div
                                className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group/card border border-white/[0.06] transition-all duration-500 hover:border-[#F5D060]/30"
                                onClick={() => openMedia(testimonials[4])}
                                style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
                            >
                                <LazyVideo src={case3Vid} className="w-full h-full object-cover opacity-50 group-hover/card:opacity-80 transition-opacity duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 group-hover/card:bg-[#F5D060]/80 group-hover/card:border-[#F5D060]/40 transition-all duration-500 shadow-[0_0_40px_rgba(245,208,96,0.15)]">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1 group-hover/card:fill-black transition-colors duration-500"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion Text */}
                    <style>{`
                        .provas-impact-white {
                            font-family: var(--title-font) !important;
                            font-size: clamp(1.5rem, 4vw, 2.8rem) !important;
                            line-height: 1.1 !important;
                            text-align: center !important;
                            margin-bottom: 0px !important;
                            display: block !important;
                        }
                        .provas-impact-gold {
                            font-family: var(--subtitle-font) !important;
                            font-size: clamp(1.1rem, 3vw, 1.8rem) !important;
                            line-height: 1.1 !important;
                            text-align: center !important;
                            text-shadow: 0 4px 20px rgba(245,208,96,0.3) !important;
                            display: block !important;
                            margin-top: 4px !important;
                        }
                        .provas-text-sm {
                            font-family: var(--subtitle-font) !important;
                            font-size: clamp(1rem, 2.5vw, 1.35rem) !important;
                            line-height: 1.4 !important;
                            text-align: center !important;
                            text-decoration-line: underline !important;
                            text-decoration-color: rgba(255,255,255,0.2) !important;
                            text-underline-offset: 4px !important;
                            font-weight: 300 !important;
                        }
                        .provas-text-lg {
                            font-family: var(--subtitle-font) !important;
                            font-size: clamp(1.1rem, 3vw, 1.5rem) !important;
                            line-height: 1.4 !important;
                            text-align: center !important;
                            font-weight: 300 !important;
                            margin-top: 8px !important;
                        }
                    `}</style>
                    <div className="flex flex-col items-center text-center max-w-2xl gap-2 mb-2 mt-4">
                        <p className="text-[#a0a8b8] provas-text-sm">
                            E esses não são casos isolados.
                        </p>

                        <p className="text-white/90 provas-text-lg">
                            Hoje existem mais de <span className="font-bold text-white">200 depoimentos</span><br />
                            reais de operadores que aplicaram o<br />
                            mesmo modelo apresentado na <span className="font-bold" style={{ color: ACCENT }}>Estratégia<br />Mapa do Dólar.</span>
                        </p>

                        <div className="flex flex-col gap-0 items-center mt-6 w-full">
                            <p className="text-white font-black uppercase tracking-tighter provas-impact-white">
                                RESULTADO NÃO É PROMESSA.
                            </p>
                            <p className="font-black uppercase tracking-tight provas-impact-gold" style={{ color: ACCENT }}>
                                É EXECUÇÃO COM DIRECIONAMENTO ESTRATÉGICO.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ PART 2: Auto-Scroll Carousel Mural ═══ */}
            <div className="relative h-[550px] sm:h-[700px] w-full max-w-5xl mx-auto">
                {/* Fade masks top/bottom */}
                <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

                <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full overflow-hidden px-4 sm:px-8">
                    {/* Column 1 – scrolling up */}
                    <div ref={scroll1Ref} className="flex flex-col gap-3 sm:gap-4 overflow-hidden pt-8">
                        {[...col1, ...col1, ...col1].map((t, i) => (
                            <CarouselCard key={`c1-${i}`} item={t} onClick={() => openMedia(t)} />
                        ))}
                    </div>
                    {/* Column 2 – scrolling up (offset) */}
                    <div ref={scroll2Ref} className="flex flex-col gap-3 sm:gap-4 overflow-hidden pt-16">
                        {[...col2, ...col2, ...col2].map((t, i) => (
                            <CarouselCard key={`c2-${i}`} item={t} onClick={() => openMedia(t)} />
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="relative z-10 flex justify-center py-10 sm:py-14">
                <SovereignButton onClick={() => window.open('https://api.whatsapp.com/send?phone=55...', '_blank')}>
                    🔘 CLIQUE AGORA PARA AGENDAR SUA REUNIÃO
                </SovereignButton>
            </div>

            {/* ═══ Instagram Popup ═══ */}
            {activeMedia && <InstagramPopup media={activeMedia} onClose={closeMedia} />}
        </section>
    );
};

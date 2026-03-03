

const ACCENT = '#E50914';

export const TicketContrast = () => {
    return (
        <section className="w-full bg-black py-[var(--section-py-mobile)] md:py-[var(--section-py)] md:hidden px-6 md:px-12 flex justify-center relative overflow-hidden">
            <style>{`
                /* Estilos Focados na Referência para Mobile */
                @media (max-width: 768px) {
                    .mobile-card {
                        padding: 0.5rem 1rem !important;
                        gap: 0.2rem !important;
                    }
                    .mobile-text-1 {
                        font-size: 1.15rem !important;
                        line-height: 1.4 !important;
                        letter-spacing: 0.05em !important;
                    }
                    .mobile-text-2 {
                        font-size: 1.1rem !important;
                        line-height: 1.5 !important;
                        letter-spacing: 0.05em !important;
                    }
                    .mobile-title-1 {
                        font-size: 1.25rem !important;
                        line-height: 1.3 !important;
                        letter-spacing: 0.05em !important;
                    }
                    .mobile-title-2 {
                        font-size: 1.1rem !important;
                        line-height: 1.2 !important;
                        letter-spacing: 0.05em !important;
                        white-space: nowrap !important;
                    }
                    .mobile-gap-small {
                        gap: 0.2rem !important;
                    }
                    .mobile-gap-micro {
                        gap: 0.2rem !important;
                    }
                    .mobile-pt {
                        padding-top: 0 !important;
                    }
                    
                    /* Custom Divider */
                    .ref-divider {
                        height: 1px;
                        width: 100%;
                        background: radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 80%);
                        margin: 0 !important;
                    }
                }
            `}</style>

            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.03)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-[1000px] w-full relative z-10 flex flex-col items-center">

                {/* Styled Card */}
                <div
                    className="w-full rounded-3xl relative overflow-hidden flex flex-col text-center mobile-card"
                    style={{
                        backgroundColor: '#080808',
                        border: '1px solid rgba(255,255,255,0.06)',
                    }}
                >
                    {/* Corner accent */}
                    <div
                        className="absolute top-0 left-0 w-40 h-40 opacity-10 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at top left, ${ACCENT}30, transparent 70%)`,
                        }}
                    />

                    {/* Top Texts */}
                    <div className="relative z-10 flex flex-col mobile-gap-small">
                        <p
                            className="text-white uppercase italic font-bold mobile-text-1"
                            style={{ fontFamily: 'var(--title-font)' }}
                        >
                            A MAIORIA TENTA ESCALAR<span className="text-[#F5D060]"> INFOPRODUTOS OU DROPSHIPPING </span>
                            COM TICKETS DE R$97 A R$297.
                        </p>

                        <p
                            className="text-white/70 uppercase font-light mobile-text-2"
                            style={{ fontFamily: 'var(--subtitle-font)' }}
                        >
                            ENQUANTO ISSO, NO MERCADO AMERICANO
                            DE NUTRA É COMUM PEDIDOS DE $200, $300
                            A ATÉ $500 EM UM ÚNICO CHECKOUT.
                        </p>
                    </div>

                    {/* Custom Divider */}
                    <div className="ref-divider relative z-10" />

                    {/* Bottom Texts */}
                    <div
                        className="relative z-10 flex flex-col mobile-gap-micro mobile-pt"
                    >
                        <p
                            className="text-white uppercase italic font-black mobile-title-1"
                            style={{ fontFamily: 'var(--title-font)' }}
                        >
                            VOCÊ NÃO PRECISA DE MILHARES
                            DE VENDAS.
                        </p>
                        <p
                            className="text-[#E50914] uppercase italic font-black mobile-title-2"
                            style={{ fontFamily: 'var(--title-font)' }}
                        >
                            PRECISA DO MERCADO CERTO.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

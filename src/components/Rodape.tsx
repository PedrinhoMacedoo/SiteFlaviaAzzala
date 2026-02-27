import React from 'react';

export const Rodape: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="w-full flex justify-center items-center relative z-20 py-8"
            style={{
                backgroundColor: '#000000',
                borderTop: '1px solid rgba(255,255,255,0.05)',
            }}
        >
            <div className="w-full max-w-[1200px] flex justify-center items-center">
                <p
                    className="text-white text-center"
                    style={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: 1.5,
                        textWrap: 'balance',
                        opacity: 0.8,
                    }}
                >
                    Copyright &copy; {currentYear} Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

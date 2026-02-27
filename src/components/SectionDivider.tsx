import React from 'react';

const ACCENT = '#F5D060';

export const SectionDivider: React.FC = () => {
    return (
        <div className="w-full flex justify-center py-4 overflow-hidden relative z-20">
            <div className="max-w-7xl w-full px-12 sm:px-24">
                <div
                    className="h-[1px] w-full"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${ACCENT}80 20%, ${ACCENT} 50%, ${ACCENT}80 80%, transparent)`,
                        boxShadow: `0 0 15px ${ACCENT}40`
                    }}
                />
            </div>
        </div>
    );
};

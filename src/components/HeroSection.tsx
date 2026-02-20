import bgImage from '../assets/bg.webp';
import heroPerson from '../assets/hero-person.png';
import iconArrow from '../assets/icon-arrow.svg';

const IconAccess = () => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" className="mb-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 4L27 9V15C27 21 23 27 17.5 29C12 27 8 21 8 15V9L17.5 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15L15 18L23 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconSecure = () => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" className="mb-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2H4V12C4 18 12 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(6 6)" />
        <rect x="10" y="10" width="15" height="15" rx="2" stroke="white" strokeWidth="1.5" />
    </svg>
);

const IconGuarantee = () => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" className="mb-2" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.5" cy="17.5" r="10" stroke="white" strokeWidth="1.5" />
        <path d="M17.5 12V17.5L21 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const Hero = () => {
    return (
        <div className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#000000] font-lexend">
            {/* Background Layer with Overlay */}
            <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                {/* Dark gradients to match Figma atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

                {/* Ambient Glows */}
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#FF9500] opacity-10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            </div>

            <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col justify-center lg:flex-row lg:items-center">

                {/* Left Content */}
                <div className="w-full lg:w-[60%] flex flex-col items-start text-left pt-20">

                    {/* Badge "GANHE EM DOLAR" (Visible on mobile/tablet top, or part of design?) 
                        The Figma design has this associated closer to the image, but let's keep the main text clean.
                    */}

                    <h1 className="font-sora text-white leading-[1.05] mb-8">
                        {/* Row 1: DESCUBRA COMO (Regular) */}
                        <span className="block text-[32px] md:text-[42px] font-normal tracking-wide">
                            DESCUBRA COMO
                        </span>
                        {/* Row 2: ESCALAR NOS EUA (ExtraBold) */}
                        <span className="block text-[36px] md:text-[46px] lg:text-[54px] font-extrabold mt-1">
                            ESCALAR NOS EUA
                        </span>
                        {/* Row 3: E FATURAR DE... */}
                        <span className="block text-[32px] md:text-[42px] font-normal mt-2 flex flex-wrap items-center gap-x-2">
                            E FATURAR DE
                            <span className="relative inline-block bg-[#FF9500] px-3 py-0 mx-1 transform -skew-x-12">
                                <span className="block font-extrabold text-white transform skew-x-12 text-[32px] md:text-[42px]">$50.000</span>
                            </span>
                        </span>
                        {/* Row 4: A ... TODOS OS MESES */}
                        <span className="block text-[32px] md:text-[42px] font-normal mt-2 flex flex-wrap items-center gap-x-2">
                            A
                            <span className="relative inline-block bg-[#FF9500] px-3 py-0 mx-1 transform -skew-x-12">
                                <span className="block font-extrabold text-white transform skew-x-12 text-[32px] md:text-[42px]">$100.000</span>
                            </span>
                            TODOS OS MESES
                        </span>
                    </h1>

                    <p className="text-[#BBC4DB] font-lexend font-light text-[18px] md:text-[24px] lg:text-[26px] leading-[1.4] max-w-[700px] mb-12">
                        A maioria dos operadores tenta escalar infoprodutos ou Dropshipping no Brasil brigando por tickets de R$97. Enquanto isso, no mercado americano de Nutra, pedidos de $200, $300 e até $500 são a regra, não a exceção.
                    </p>

                    {/* Gradient Button */}
                    <a href="#" className="group relative w-full md:w-[500px] h-[80px] rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_30px_rgba(255,149,0,0.4)]">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9500] via-[#FFD984] to-[#FF8800]" />

                        <div className="relative w-full h-full flex items-center justify-between px-8">
                            {/* Invisible Text for A11y / spacing */}
                            <span className="opacity-0">CTA</span>

                            {/* Arrow Icon */}
                            <div className="w-10 h-10 flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                                <img src={iconArrow} alt="Arrow" className="w-8 h-8 md:w-10 md:h-10 text-white invert-0" />
                            </div>
                        </div>
                    </a>

                    {/* Trust Badges */}
                    <div className="w-full md:w-[500px] mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                        <div className="flex flex-col items-center justify-center flex-1 border-r border-white/10 last:border-r-0 px-2">
                            <IconAccess />
                            <p className="text-white text-[13px] font-light font-jakarta text-center leading-tight">Acesso<br />imediato</p>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 border-r border-white/10 last:border-r-0 px-2">
                            <IconSecure />
                            <p className="text-white text-[13px] font-light font-jakarta text-center leading-tight">Compra<br />Segura</p>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 px-2">
                            <IconGuarantee />
                            <p className="text-white text-[13px] font-light font-jakarta text-center leading-tight">Garantia<br />de 7 dias</p>
                        </div>
                    </div>

                </div>

                {/* Right Content - Image Composition */}
                <div className="w-full lg:w-[40%] relative h-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0 pointer-events-none">
                    <div className="relative w-[300px] md:w-[400px] lg:w-[450px] aspect-[3/4]">

                        {/* Badge "GANHE EM DOLAR" */}
                        <div className="absolute top-[15%] -left-[10%] z-30 pointer-events-auto">
                            <div className="backdrop-blur-md bg-white/10 border border-[#FF9500] rounded-full px-6 py-3 shadow-[0_0_40px_rgba(255,70,70,0.25)]">
                                <span className="text-white font-lexend font-medium text-[16px] md:text-[20px] whitespace-nowrap tracking-wide">
                                    GANHE EM DOLAR
                                </span>
                            </div>
                        </div>

                        {/* Main Person Image with Mask/Container */}
                        {/* Using a rotated container to simulate the dynamic feel if needed, or just straight */}
                        <div className="relative z-20 w-full h-full rounded-[40px] overflow-hidden border-[3px] border-[#FF9500]/20 shadow-[0_0_80px_rgba(255,149,0,0.15)] bg-gradient-to-b from-[#FF9500]/10 to-transparent">
                            <img
                                src={heroPerson}
                                alt="Operator"
                                className="w-full h-full object-cover object-top transform scale-105"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

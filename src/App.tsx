import React, { useEffect, Suspense } from 'react';
import { Hero } from './components/Hero';
import { SectionDivider } from './components/SectionDivider';

// Lazy load components that are below the fold
const MarketContrast = React.lazy(() => import('./components/MarketContrast').then(module => ({ default: module.MarketContrast })));
const ParaQuem = React.lazy(() => import('./components/ParaQuem').then(module => ({ default: module.ParaQuem })));
const NutraCarousel = React.lazy(() => import('./components/NutraCarousel').then(module => ({ default: module.NutraCarousel })));
const ProvasSociais = React.lazy(() => import('./components/ProvasSociais').then(module => ({ default: module.ProvasSociais })));
const Entregaveis = React.lazy(() => import('./components/Entregaveis').then(module => ({ default: module.Entregaveis })));
const Autoridade = React.lazy(() => import('./components/Autoridade').then(module => ({ default: module.Autoridade })));
const Rodape = React.lazy(() => import('./components/Rodape').then(module => ({ default: module.Rodape })));

function App() {
  useEffect(() => {
    const fadeScroll = () => {
      const elementos = document.querySelectorAll(".scroll-left, .scroll-left2, .scroll-right, .scroll-right2, .scroll-top, .scroll-top2, .scroll-bottom, .scroll-bottom2, .scroll-escala, .scroll-txt, .perspectivax");
      const alturaJanela = window.innerHeight;

      elementos.forEach(elemento => {
        const elementoTop = elemento.getBoundingClientRect().top;
        if (elementoTop < alturaJanela * 0.85) {
          elemento.classList.add("ativo7");
        }
      });
    }

    // Scroll Activity Detector for Custom Scrollbar Glow
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScrollActivity = () => {
      document.body.classList.add('is-scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 1000); // Keep glow for 1s after scrolling stops
    };

    window.addEventListener("scroll", fadeScroll);
    window.addEventListener("scroll", handleScrollActivity);
    fadeScroll(); // Run on mount

    return () => {
      window.removeEventListener("scroll", fadeScroll);
      window.removeEventListener("scroll", handleScrollActivity);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col gap-0 w-full overflow-x-hidden">
      <Hero />
      <SectionDivider />

      <Suspense fallback={null}>
        <ParaQuem />
      </Suspense>
      <SectionDivider />

      <Suspense fallback={null}>
        <MarketContrast />
      </Suspense>
      <SectionDivider />

      <Suspense fallback={null}>
        <NutraCarousel />
      </Suspense>
      <SectionDivider />

      <Suspense fallback={null}>
        <ProvasSociais />
      </Suspense>
      <SectionDivider />

      <Suspense fallback={null}>
        <Entregaveis />
      </Suspense>
      <SectionDivider />

      <Suspense fallback={null}>
        <Autoridade />
      </Suspense>
      <SectionDivider />

      <Suspense fallback={null}>
        <Rodape />
      </Suspense>
    </div>
  );
}

export default App;

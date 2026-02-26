import React, { useEffect, Suspense } from 'react';
import { Hero } from './components/Hero';
import { SectionDivider } from './components/SectionDivider';
import { LazySection } from './components/LazySection';

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
        } else {
          // Keep it visible once animated for better stability
          // elemento.classList.remove("ativo7");
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
    <div className="min-h-screen bg-black">
      <Hero />
      <SectionDivider />

      <LazySection minHeight="600px" rootMargin="200px 0px">
        <Suspense fallback={<div className="h-[600px]" />}>
          <MarketContrast />
        </Suspense>
      </LazySection>
      <SectionDivider />

      <LazySection minHeight="600px" rootMargin="200px 0px">
        <Suspense fallback={<div className="h-[600px]" />}>
          <ParaQuem />
        </Suspense>
      </LazySection>
      <SectionDivider />

      <LazySection minHeight="800px" rootMargin="300px 0px">
        <Suspense fallback={<div className="h-[800px]" />}>
          <NutraCarousel />
        </Suspense>
      </LazySection>
      <SectionDivider />

      <LazySection minHeight="800px" rootMargin="300px 0px">
        <Suspense fallback={<div className="h-[800px]" />}>
          <ProvasSociais />
        </Suspense>
      </LazySection>
      <SectionDivider />

      <LazySection minHeight="600px" rootMargin="200px 0px">
        <Suspense fallback={<div className="h-[600px]" />}>
          <Entregaveis />
        </Suspense>
      </LazySection>
      <SectionDivider />

      <LazySection minHeight="600px" rootMargin="200px 0px">
        <Suspense fallback={<div className="h-[600px]" />}>
          <Autoridade />
        </Suspense>
      </LazySection>
      <SectionDivider />

      <LazySection minHeight="200px" rootMargin="100px 0px">
        <Suspense fallback={<div className="h-[200px]" />}>
          <Rodape />
        </Suspense>
      </LazySection>
    </div>
  );
}

export default App;

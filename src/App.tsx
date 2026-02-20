import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { MarketContrast } from './components/MarketContrast';
import { ParaQuem } from './components/ParaQuem';
import { NutraCarousel } from './components/NutraCarousel';

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
          elemento.classList.remove("ativo7");
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
      <MarketContrast />
      <ParaQuem />
      <NutraCarousel />
    </div>
  );
}

export default App;

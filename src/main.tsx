import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header/Header.tsx';
import BannerTop from './components/BannerTop/BannerTop.tsx';
import SobreMin from './components/SobreMin/SobreMin.tsx';
import Transformacoes from './components/Transformacoes/Transformacoes2.tsx';
import PrecosFixos from './components/PrecosFixos/PrecosFixos.tsx';
import Promocoes from './components/Promocoes/Promocoes.tsx';
import Contato from './components/Contato/Contato.tsx';
import Footer from './components/Footer/Footer.tsx';
import Jeff from './components/Jeff/Jeff.tsx';
import Instagram from './components/Instagram/Instagram.tsx';
import "animate.css/animate.compat.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({once: true,delay: 200});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <BannerTop />
    <SobreMin />
    <Jeff />
    <Transformacoes />
    <Promocoes />
    <PrecosFixos />
    <Instagram />
    <Contato />
    <Footer />
  </StrictMode>,
)

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Timeline from './components/Timeline';
import Gallery from './components/Galery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Timeline />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
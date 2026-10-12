import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import ServiceShowcase from './components/ServiceShowcase';
import Projects from './components/Projects';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import RajasthanServiceArea from './components/RajasthanServiceArea';
import ConsultationBanner from './components/ConsultationBanner';
import InstagramFeed from './components/InstagramFeed';
import FinalCta from './components/FinalCta';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('New Construction');
  const [selectedLocation, setSelectedLocation] = useState<string>('Ajmer');

  const scrollToContact = (projectType?: string, location?: string) => {
    if (projectType) {
      // Map service/project names to valid select options if possible
      if (projectType.toLowerCase().includes('interior')) {
        setSelectedProjectType('Interior Design');
      } else if (projectType.toLowerCase().includes('renovation')) {
        setSelectedProjectType('Renovation');
      } else if (projectType.toLowerCase().includes('turnkey')) {
        setSelectedProjectType('Turnkey Project');
      } else if (projectType.toLowerCase().includes('commercial')) {
        setSelectedProjectType('Commercial Project');
      } else if (projectType.toLowerCase().includes('residential')) {
        setSelectedProjectType('Residential Project');
      } else {
        setSelectedProjectType('New Construction');
      }
    }

    if (location) {
      setSelectedLocation(location);
    }

    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#26312B] flex flex-col selection:bg-[#71866A]/20 selection:text-[#26312B]">
      {/* 1. Sticky Navigation */}
      <Navbar onOpenConsultation={() => scrollToContact()} />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero onOpenConsultation={() => scrollToContact()} />

        {/* 3. Trust Bar */}
        <TrustBar />

        {/* 4. About */}
        <About onOpenConsultation={() => scrollToContact()} />

        {/* 5. Services */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* 6. Service Showcase */}
        <ServiceShowcase onOpenConsultation={() => scrollToContact()} />

        {/* 7. Projects */}
        <Projects onEnquireProject={(project) => scrollToContact(project)} />

        {/* 8. Working Process */}
        <Process />

        {/* 9. Why Choose Us */}
        <WhyChooseUs />

        {/* 10. Rajasthan Service Area */}
        <RajasthanServiceArea
          onSelectLocation={(city) => scrollToContact(undefined, city)}
        />

        {/* 11. Client Experiences / Consultation Invite */}
        <ConsultationBanner onOpenConsultation={() => scrollToContact()} />

        {/* 12. Instagram Feed */}
        <InstagramFeed />

        {/* 13. Call To Action Banner */}
        <FinalCta onOpenConsultation={() => scrollToContact()} />

        {/* 14. Contact Section & Form */}
        <ContactSection
          initialProjectType={selectedProjectType}
          initialLocation={selectedLocation}
        />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 16. Floating Contact Buttons */}
      <FloatingActions />
    </div>
  );
}

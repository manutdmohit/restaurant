import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import GallerySection from '@/components/GallerySection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

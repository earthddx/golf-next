import styles from "./App.module.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import AffiliateSection from "@/components/AffiliateSection";
import MedPartnersSection from "@/components/MedPartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.app}>
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <ServicesSection />
      <MethodSection />
      <AffiliateSection />
      <MedPartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

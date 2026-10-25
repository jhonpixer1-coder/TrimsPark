import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import DeliverySection from "./components/DeliverySection";
import BackToTop from "./components/BackToTop";
import HeroSection from "./components/HeroSection";
import MachinesSection from "./components/MachinesSection";
import ProductsSection from "./components/ProductsSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import WhySection from "./components/WhySection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <HeroSection />
        <ProductsSection />
        <DeliverySection />
        <MachinesSection />
        <WhySection />
        <ClientsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}

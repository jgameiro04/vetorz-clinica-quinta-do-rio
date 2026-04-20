import { ConveniosSection } from "@/components/clinic/ConveniosSection";
import { CtaMarcacaoSection } from "@/components/clinic/CtaMarcacaoSection";
import { DiferenciaisSection } from "@/components/clinic/DiferenciaisSection";
import { EquipaSection } from "@/components/clinic/EquipaSection";
import { HeroSection } from "@/components/clinic/HeroSection";
import { ServicosSection } from "@/components/clinic/ServicosSection";
import { TestemunhosSection } from "@/components/clinic/TestemunhosSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicosSection />
      <DiferenciaisSection />
      <EquipaSection />
      <ConveniosSection />
      <TestemunhosSection />
      <CtaMarcacaoSection />
    </>
  );
}

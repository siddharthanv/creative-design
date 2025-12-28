import FoundersNote from "@/components/sections/portfolio2/FounderNote";
import Mission from "@/components/sections/portfolio2/Mission";
import Process from "@/components/sections/portfolio2/Process";
import Promise from "@/components/sections/portfolio2/Promise";
import Strengths from "@/components/sections/portfolio2/Strengths";
import Vision from "@/components/sections/portfolio2/Vision";
import WelcomeSection from "@/components/sections/portfolio2/WelcomeSection";

export default function Portfolio() {
  return (
    <>
      <WelcomeSection />
      <FoundersNote />
      <Mission />
      <Vision />
      <Process />
      <Strengths />
      <Promise />
    </>
  );
}

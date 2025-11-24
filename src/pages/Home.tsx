import { Hero } from "@/components";
import VisitForm from "@/components/hero/VisitForm";
// import AboutUs from "@/components/sections/home/AboutUs";
// import BrandsSection from "@/components/sections/home/BrandsSection";
import ProjectsHome from "@/components/sections/home/ProjectsHome";
import Services from "@/components/sections/home/Services";
import UserReviews from "@/components/sections/home/UserReviews";
import WhyTrust from "@/components/sections/home/WhyTrust";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <AboutUs /> */}
      <WhyTrust />
      <Services />
      <ProjectsHome />
      {/* <BrandsSection /> */}
      <UserReviews />
      <VisitForm />
    </>
  );
}

import HeroPortfolio from "@/components/sections/portfolio/HeroPortfolio";
// import PortfolioFilterTabs from "@/components/sections/portfolio/PortfolioFilterBar";
// import ProjectsDummyList from "@/components/sections/portfolio/ProjectsDummyList";
import ProjectGalleryGrid from "@/components/sections/portfolio/ProjectsList";

export default function ProjectsPage() {
  return (
    <>
      <HeroPortfolio />
      {/* <PortfolioFilterTabs /> */}
      {/* <ProjectsDummyList /> */}
      <ProjectGalleryGrid />
    </>
  );
}

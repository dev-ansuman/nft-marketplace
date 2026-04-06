import BrowseCategoriesSection from "@/components/sections/BrowseCategoriesSection";
import DiscoverMoreNFTsSection from "@/components/sections/DiscoverMoreNFTsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TopCreatorsSection from "@/components/sections/TopCreatorsSection";
import WeeklyDigestSection from "@/components/sections/WeeklyDigestSection";

export default function Home() {
  return (
    <main>
      <TopCreatorsSection />
      <BrowseCategoriesSection />
      <DiscoverMoreNFTsSection />
      <HowItWorksSection />
      <WeeklyDigestSection />
    </main>
  );
}

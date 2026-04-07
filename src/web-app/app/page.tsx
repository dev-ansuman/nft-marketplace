import BrowseCategoriesSection from "@/components/sections/BrowseCategoriesSection";
import DiscoverDigitalArtSection from "@/components/sections/DiscoverDigitalArtSection";
import DiscoverMoreNFTsSection from "@/components/sections/DiscoverMoreNFTsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import MagicMashroomsSection from "@/components/sections/MagicMashroomsSection";
import TopCreatorsSection from "@/components/sections/TopCreatorsSection";
import TrendingCollectionSection from "@/components/sections/TrendingCollectionSection";
import WeeklyDigestSection from "@/components/sections/WeeklyDigestSection";

export default function Home() {
  return (
    <main>
      <DiscoverDigitalArtSection />
      <TrendingCollectionSection />
      <TopCreatorsSection />
      <BrowseCategoriesSection />
      <DiscoverMoreNFTsSection />
      < MagicMashroomsSection />
      <HowItWorksSection />
      <WeeklyDigestSection />
    </main>
  );
}

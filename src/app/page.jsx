import Bookapp from "@/components/Bookapp";
import Collective from "@/components/Collective";
import Download from "@/components/Download";
import EarningOpportunity from "@/components/EarningOpportunity";
import Faq from "@/components/Faq";
import GamingPlatform from "@/components/GamingPlatform";
import Multichain from "@/components/Multichain";
import SecondOpportunity from "@/components/SecondOpportunity";
import Started from "@/components/Started";
import Statistics from "@/components/Statistics";
import SuperCharged from "@/components/SuperCharged";
import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import JoinParty from "@/components/join/JoinParty";
import Footer from "@/components/shared/footer/Footer";

export default function Home() {
  return (
    <main>
      {/* <div className="max-page-screen"> */}
      <Banner />
      <SecondOpportunity />
      {/* </div> */}
      <SuperCharged />
      {/* <div className="max-page-screen"> */}
      <Features />
      <EarningOpportunity />
      <Bookapp />
      <Multichain />
      <Collective />
      <GamingPlatform />
      <Started />
      <JoinParty />
      <Faq />
      <Statistics />
      <Download />
      <Footer />
      {/* </div> */}
    </main>
  );
}

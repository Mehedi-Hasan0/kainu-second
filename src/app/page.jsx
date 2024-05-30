import Bookapp from "@/components/Bookapp";
import EarningOpportunity from "@/components/EarningOpportunity";
import Multichain from "@/components/Multichain";
import Started from "@/components/Started";
import SuperCharged from "@/components/SuperCharged";
import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";

export default function Home() {
  return (
    <main className="max-page-screen">
      <Banner />
      <Started />
      <SuperCharged />
      <Features />
      <EarningOpportunity />
      <Bookapp />
      <Multichain />
    </main>
  );
}

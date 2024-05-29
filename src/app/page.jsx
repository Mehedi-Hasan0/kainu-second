import Started from "@/components/Started";
import SuperCharged from "@/components/SuperCharged";
import Banner from "@/components/banner/Banner";

export default function Home() {
  return (
    <main className="max-page-screen">
      <Banner />
      <Started />
      <SuperCharged />
    </main>
  );
}

import CoinChips from "@/components/page-sections/coin-chips";
import InfoCard from "@/components/page-sections/info-card";
import NewsCards from "@/components/page-sections/news";
import Nav from "@/components/top-nav/nav";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <CoinChips />
      <InfoCard />
      <NewsCards />
      <Footer />
    </>
  );
}

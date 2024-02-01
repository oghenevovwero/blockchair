import NewsCards from "@/components/sections/news";
import Nav from "@/components/top-nav/nav";
import Footer from "@/components/footer/footer";
import CoinChips from "@/components/sections/coin-chips";
import InfoCard from "@/components/sections/info-card";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="bg-[#E6EAF2] pt-24 pb-14">
        <CoinChips />
        <InfoCard />
      </div>
      <div className="bg-[#FFFFFF] py-11">
      <NewsCards />
      </div>
      <Footer />
    </>
  );
}

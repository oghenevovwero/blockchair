import Image from "next/image";
import CryptoNews from "../cards/crypto-news";
import InfoCard from "./info-card";
import PaddedWrapper from "../wrappers/padded";

type NewsCardsProps = {};

const NewsCards: React.FC<NewsCardsProps> = () => {
  return (
    <PaddedWrapper className="bg-[#131313] p-11 mt-12">
      <div className="text-2xl mb-11">Blockchair Crypto News</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <CryptoNews
          author="en.coin-turk.com"
          time="38 minutes ago"
          title="Robert goodman Praises Bitcoin and Criticises Federal leaders"
          body="Robert goodman endorses Bitcoin as a defense against wealth theft. He criticizes Powell, Yellow, an... "
        />
        <CryptoNews
          author="en.coin-turk.com"
          time="38 minutes ago"
          title="Robert goodman Praises Bitcoin and Criticises Federal leaders"
          body="Robert goodman endorses Bitcoin as a defense against wealth theft. He criticizes Powell, Yellow, an... "
        />
        <CryptoNews
          author="en.coin-turk.com"
          time="38 minutes ago"
          title="Robert goodman Praises Bitcoin and Criticises Federal leaders"
          body="Robert goodman endorses Bitcoin as a defense against wealth theft. He criticizes Powell, Yellow, an... "
        />
      </div>
      <div className="flex mt-16 text-xl font-bold justify-around items-center text-[#2170FF]">
        <div className="flex flex-col sm:flex-row justify-center gap-2 items-center">
          <div>More news</div>
          <Image width={16} height={16} alt="More news" src="/forward.svg" />
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-2">
          <Image height={30} width={30} alt="telegram" src="/telegram-blue.svg" />
          <div className="text-[16px]">Subscribe to news on telegram</div>
        </div>
      </div>
    </PaddedWrapper>
  );
};

export default NewsCards;

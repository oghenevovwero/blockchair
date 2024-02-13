import Image from "next/image";
import CryptoNews from "../cards/crypto-news";
import PaddedWrapper from "../wrappers/padded";

type NewsCardsProps = {};

const NewsCards: React.FC<NewsCardsProps> = () => {
  return (
    <PaddedWrapper>
      <div className="text-2xl text-black dark:text-white font-bold mb-10 ml-5">
        Blockchair Crypto News
      </div>
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
      <div className="flex flex-col lg:flex-row mt-16 gap-5 text-xl font-bold justify-between items-center text-[#2170FF]">
        <div className="flex justify-center gap-2 items-center">
          <div>More news</div>
          <div>
            <Image
              width={18}
              height={18}
              alt="More news"
              src="/forward.svg"
            />
          </div>
        </div>
        <div className="flex lg:flex-row justify-center items-center gap-2">
          <Image height={35} width={35} alt="telegram" src="/telegram-blue.svg" />
          <div>Subscribe to telegram</div>
        </div>
      </div>
    </PaddedWrapper>
  );
};

export default NewsCards;

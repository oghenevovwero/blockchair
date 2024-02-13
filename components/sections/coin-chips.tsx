import Image from "next/image";
import PaddedWrapper from "../wrappers/padded";

const CoinChips = () => {
  return (
    <PaddedWrapper className="flex flex-col xl:flex-row text-black dark:text-white justify-between xl:items-center mb-10">
      <div className="flex items-center max-xl:mb-8">
        <Image className="mr-4" src="/bitcoin.svg" width={60} height={60} alt="Chart" />
        <div>
          <div className="opacity-45 font-[400] flex items-center">
            Bitcoin <span className="font-extrabold mb-2 mx-1">.</span> transactions
          </div>
          <div className="flex flex-col min-[352px]:flex-row justify-start">
            <div className="mr-4 text-xl font-bold">Bitcoin transaction</div>
            <div className="border-[0.5px] w-fit h-fit border-white dark:opacity-45 dark:border-[#262626] dark:bg-[#362d16] font-[300] px-2 py-[3px] text-xs rounded-md bg-[#E7EBF5]">
              API
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-[6px]">
          <Chip title="Get 7 BTC" icon="/flower.png" className="bg-[#F29913]" />
          <Chip title="Win 8.88 BTC" icon="/pen.png" className="bg-[#F13261]" />
          <Chip title="20% Cashback" icon="/kangaroo.png" className="bg-[#A542F0]" />
          <div className="max-sm:hidden">
            <Chip title="Claim 9.99 BTC" icon="/gift-box.png" className="bg-[#4ACA1E]" />
          </div>
          <Chip title="200% Bonus" icon="/rocket.png" className="bg-[#FF0000]" />
        </div>
        <div className="flex justify-end">
          <div className="flex text-xs opacity-35 items-center font-[400] mt-2">
            Sponsored<span className="font-extrabold mb-2 mx-1">.</span>
            Advertise here <span className="font-extrabold mb-2 mx-1">.</span>
            Turn off ads
          </div>
        </div>
      </div>
    </PaddedWrapper>
  );
};

type ChipProps = {
  title: string;
  icon: string;
  className?: string;
};

const Chip: React.FC<ChipProps> = ({ title, icon, className = "" }) => {
  return (
    <div
      className={`flex flex-row justify-around items-center px-5 py-[7px] rounded-full ${className}`}
    >
      <div className="text-white text-xs md:text-sm">{title}</div>
      <Image src={icon} width={20} height={20} alt={`${title} coin`} />
      <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.8" d="M4.76314 3L-9.53674e-07 5.75V0.25L4.76314 3Z" fill="#FFFFFF"></path>
      </svg>
    </div>
  );
};

export default CoinChips;

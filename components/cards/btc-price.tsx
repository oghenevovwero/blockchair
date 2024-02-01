import Image from "next/image";
import ThemeAwareChart from "../chart";

type BtcPriceProps = {};

const BtcPrice: React.FC<BtcPriceProps> = () => {
  return (
    <div className="rounded-lg flex flex-col border-white border p-5 text-black dark:text-white dark:border-[#262626] dark:border-[#262626] dark:text-white dark:shadow-none shadow-md shadow-[#B0BDC7]">
      <div className="flex gap-2 justify-between items-center">
        <span>BTC price</span>
        <span className="font-light text-sm">43,391.00 USD</span>
        <div className="text-[#4AC91E] flex gap-1">
          <Image src="/up-green.svg" width={10} height={10} alt="Increment" />
          <span>0.63%</span>
        </div>
      </div>
      <span className="flex justify-start mb-3 font-[400] text-sm text-[#7691A5]">Last month</span>
      <div>
        <div className="mb-3">
          <ThemeAwareChart />
        </div>
        <span className="font-[200] text-sm text-[#7691A5]">Recommended transaction fee</span>
        <div className="mb-6 text-sm">26 satoshi per byte</div>
        <div className="flex gap-2 items-center">
          <Image src="/charts-small.png" width={25} height={25} alt="Chart" />
          <span>Other bitcoin charts</span>
          <svg
            id="arrow-right"
            width="14"
            height="13"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM1 9H16V7H1V9Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BtcPrice;

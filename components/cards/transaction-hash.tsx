import Image from "next/image";
import ThemeAwareQmarkIcon from "../qmark";

const TransactionHash = () => {
  return (
    <div className="rounded-lg border border-white flex flex-col dark:border-[#262626] dark:shadow-none shadow-lg shadow-[#B0BDC7]">
      <div className="flex flex-col p-5 bg-[#FFFFFF] dark:bg-[#131313] gap-2 rounded-t-lg">
        <span className="font-[400] mb-1 text-[16px] text-[#3f3f3f]">Transaction hash</span>
        <span className="text-[16px] text-black dark:text-white break-all">
          647f80ce042d0df273d48acf3eef325f97f3d1a2049d03d96e8d155dd7897de7
          <Image className="float-right m-0" src="/copy.svg" height={18} width={18} alt="copy" />
        </span>
      </div>
      <div className="flex flex-col bg-[#EFF2F9] dark:bg-[#0E0E0E] rounded-b-lg">
        <div className="flex flex-col p-3  gap-2">
          <div className="flex gap-1 bg">
            <span className="font-[400] text-sm text-[#3f3f3f]">Amount transacted</span>
            <ThemeAwareQmarkIcon />
          </div>
          <span className="text-black dark:text-white text-sm">0.00511252BTC224.99USD</span>
        </div>
        <div className="flex flex-col p-3  gap-2">
          <div className="flex gap-1">
            <span className="font-[400] text-sm text-[#3f3f3f]">Transaction fee</span>
            <ThemeAwareQmarkIcon />
          </div>
          <span className="text-black dark:text-white text-sm">0.00511252BTC224.99USD</span>
        </div>
        <div className="flex flex-col p-3  gap-2">
          <div className="flex gap-1">
            <span className="font-[400] text-sm text-[#3f3f3f]">Free per vbyte</span>
            <ThemeAwareQmarkIcon />
          </div>
          <span className="text-black dark:text-white">165 satoshi</span>
        </div>

        <div className="flex flex-col p-3  gap-2 text-[#3f3f3f] text-sm font-[400]">
          <span>3 weeks ago .</span>
          <span>Jan 7, 2024 12:56 AM UTC</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionHash;

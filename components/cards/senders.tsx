import Image from "next/image";
import { useState } from "react";
import { Transaction } from "../records";

function Senders({ transaction }: { transaction: Transaction }) {
  return (
    <div>
      <div className="max-lg:hidden">
        <ExpandedSenders transaction={transaction} />
      </div>
      <div className="lg:hidden">
        <MinimizedSenders transaction={transaction} />
      </div>
    </div>
  );
}

function MinimizedSenders({ transaction }: { transaction: Transaction }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShowDetails((prev) => !prev)}
        className="p-4 border dark:border-[#262626] 
  flex items-center gap-2 w-full font-[400] text-sm text-[#B0BDC7] rounded-2xl
   dark:bg-[#0E0E0E] bg-[#F6F9FF]"
      >
        <div className={`w-[6px] h-[6px] ${showDetails && "rotate-90"}`}>
          <svg viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3.5L8.34742e-08 7L0 7.15493e-08L6 3.5Z" fill="blue"></path>
          </svg>
        </div>
        <div className="flex">
          Senders{" "}
          <div className="w-[18px] h-[18px] flex items-center justify-center  text-sm ml-1 bg-white text-gray-500 font-normal rounded-full">
            1
          </div>
        </div>
      </div>
      {showDetails && <MinimizedDetails transaction={transaction} />}
    </div>
  );
}

function MinimizedDetails({ transaction }: { transaction: Transaction }) {
  return (
    <div className="flex flex-col gap-2 mt-1 dark:text-white rounded-lg py-3 px-5 bg-[#FFFFFF] dark:bg-[#131313]">
      <span className="text-[#2170FF] break-all">
        {transaction.sender}
        <div className="float-right">
          <Image className="float-right" src="/copy.svg" height={15} width={15} alt="copy" />
        </div>
      </span>
      <div className="flex items-center gap-2">
        <Image className="float-right" src="/back-arrow.svg" height={15} width={15} alt="back" />
        <div className="text-sm">
          0.00534540 BTC 229<span>.</span>12 USD
        </div>
      </div>
    </div>
  );
}

function ExpandedSenders({ transaction }: { transaction: Transaction }) {
  return (
    <div className="flex flex-col h-fit text-black dark:text-white">
      <div className="p-2 border-x border-t dark:border-[#262626] flex justify-center w-full font-[400] text-sm text-[#B0BDC7] rounded-t-lg dark:bg-[#0E0E0E] bg-[#F6F9FF]">
        Senders{" "}
        <span className="py-0 px-[6px] text-sm ml-1 bg-white text-black font-normal rounded-full">
          1
        </span>
      </div>
      <div className="flex flex-col gap-2 rounded-b-lg py-3 px-5 bg-[#FFFFFF] dark:bg-[#131313]">
        <span className="text-[#2170FF] break-all">
          {transaction.sender}
          <div className="float-right">
            <Image className="float-right" src="/copy.svg" height={15} width={15} alt="copy" />
          </div>
        </span>
        <div className="flex items-center gap-2">
          <Image className="float-right" src="/back-arrow.svg" height={15} width={15} alt="back" />
          <div className="text-sm">
            0.00534540 BTC 229<span>.</span>12 USD
          </div>
        </div>
      </div>
    </div>
  );
}

export default Senders;

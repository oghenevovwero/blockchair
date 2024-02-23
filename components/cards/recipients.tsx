import Image from "next/image";
import { useState } from "react";
import { Transaction } from "../records";

function Recipients({ transaction, price }: { transaction: Transaction, price: number }) {
  return (
    <div>      
      <div className="max-lg:hidden">
        <ExpandedRecipients transaction={transaction} price={price} />
      </div>
      <div className="lg:hidden">
        <MinimizedRecipients transaction={transaction} price={price} />
      </div>
    </div>
  );
}

function MinimizedRecipients({ transaction , price}: { transaction: Transaction, price: number }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <div onClick={() => setShowDetails((prev) => !prev)}
        className="p-4 border dark:border-[#262626] 
      flex items-center gap-2 w-full font-[400] text-sm text-[#B0BDC7] rounded-2xl
       dark:bg-[#0E0E0E] bg-[#F6F9FF]"
      >
        <div
          
          className={`w-[6px] h-[6px] ${showDetails && "rotate-90"}`}
        >
          <svg viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3.5L8.34742e-08 7L0 7.15493e-08L6 3.5Z" fill="blue"></path>
          </svg>
        </div>
        <div className="flex">
          Recipients{" "}
          <div className="w-[18px] h-[18px] flex items-center justify-center  text-sm ml-1 bg-white text-gray-500 font-normal rounded-full">
            2
          </div>
        </div>
      </div>
      {showDetails && <MinimizedDetails transaction={transaction} price={price} />}
    </div>
  );
}

function MinimizedDetails({ transaction , price}: { transaction: Transaction, price: number }) {
  return (
    <div>
      <div className="flex flex-col h-fit my-1 dark:text-white text-sm">
        <div className="flex flex-col gap-2 px-5 py-3 rounded-lg bg-[#FFFFFF] dark:bg-[#131313]">
          <span className="text-[#2170FF] break-all flex items-center gap-1">
            {transaction.recipient}
            <div className="float-right">
              <Image className="float-right" src="/copy.svg" height={15} width={15} alt="copy" />
            </div>
          </span>
          <div className="text-xs">
            {(transaction.amount / price).toFixed(8)} BTC {(0.68488 * transaction.amount).toFixed(2)} USD
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-5 py-3 rounded-lg bg-[#FFFFFF] dark:bg-[#131313] h-fit">
        <span className="text-[#2170FF] break-all text-sm">
          {transaction.sender}
          <div className="flex gap-2 float-right">
            <Image src="/copy.svg" height={15} width={15} alt="copy" />
            <span className="border h-fit text-black dark:text-white border-[#FCBB19] px-2 rounded-full font-light text-[100] text-xs">
              Change
            </span>
          </div>
        </span>
        <div className="flex items-center gap-2">
          <div className="dark:text-white text-xs">
            {(transaction.amount / price).toFixed(8)} BTC {(0.31513 * transaction.amount).toFixed(2)} USD
          </div>
          <Image
            className="float-right"
            src="/arrow-forward.svg"
            height={15}
            width={15}
            alt="back"
          />
        </div>
      </div>
    </div>
  );
}

function ExpandedRecipients({ transaction, price }: { transaction: Transaction, price: number }) {
  return (
    <div className="flex flex-col gap-1 text-black dark:text-white">
      <div className="flex flex-col h-fit">
        <div className="p-2 border-x border-t dark:border-[#262626] flex justify-center w-full font-[400] text-sm text-[#B0BDC7] rounded-t-lg  dark:bg-[#0E0E0E] bg-[#F6F9FF]">
          Recipients{" "}
          <span className="py-0 px-[6px] text-sm ml-1 bg-white font-normal text-black rounded-full">
            2
          </span>
        </div>
        <div className="flex flex-col gap-2 px-5 py-3 rounded-b-lg bg-[#FFFFFF] dark:bg-[#131313]">
          <span className="text-[#2170FF] break-all">
            {transaction.recipient}
            <div className="float-right">
              <Image className="float-right" src="/copy.svg" height={15} width={15} alt="copy" />
            </div>
          </span>
          <div className="text-sm">
            {(transaction.amount / price).toFixed(8)} BTC {(0.68488 * transaction.amount).toFixed(2)} USD
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-5 py-3 rounded-lg bg-[#FFFFFF] dark:bg-[#131313] h-fit">
        <span className="text-[#2170FF] break-all">
          {transaction.sender}
          <div className="flex gap-2 float-right">
            <Image src="/copy.svg" height={15} width={15} alt="copy" />
            <span className="border h-fit text-black dark:text-white border-[#FCBB19] px-2 rounded-full font-light text-[100] text-xs">
              Change
            </span>
          </div>
        </span>
        <div className="flex items-center gap-2">
          <div className="text-sm">
            {(transaction.amount / price).toFixed(8)} BTC {(0.31513 * transaction.amount).toFixed(2)} USD
          </div>
          <Image
            className="float-right"
            src="/arrow-forward.svg"
            height={15}
            width={15}
            alt="back"
          />
        </div>
      </div>
    </div>
  );
}

export default Recipients;

import Image from "next/image";
import ThemeAwareQmarkIcon from "../qmark";
import { Transaction } from "../records";

function TransactionStatus({transaction}: {transaction: Transaction}){
  return (
    <div className="flex flex-col rounded-lg text-black border border-white dark:text-white dark:border-[#262626] dark:shadow-none shadow-md shadow-[#B0BDC7]">
      <div className="flex gap-5 p-5  bg-[#FFFFEE] dark:bg-[#131313] rounded-t-lg">
        <div className="p-7 w-fit h-fit flex items-center justify-center rounded-full  bg-gradient-to-b from-[#57F630] via-[#3BB09A] to-[#257AEF]">
          <Image className="font-extralight" src="/tick.svg" width={20} height={20} alt="Checked" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-[400] text-sm text-[#8191B5]">Transaction status</span>
          <div className="flex justify-start flex-col min-[515px]:flex-row items-start gap-2">
            <span className="text-sm  md:text-lg">Confirmed 3482 confirmations</span>
            <div className="flex items-center justify-start gap-2">
              <Image src="/qmark.svg" height={20} width={20} alt="copy" />
              <div className="rounded-full bg-[#21BAF7]  text-sm px-2 py-[2px]">segWit</div>
            </div>
          </div>
          <div className="flex gap-2 justify-start text-sm">
            <span className="font-extralight ">Block id</span>
            <span className="text-[#2170FF] font-extrabold">824,689</span>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <InfoSection transaction={transaction} />
      </div>

      <div className="flex pl-4 lg:pl-2 py-2 pr-2 justify-between rounded-b-lg bg-[#EFF2F9] dark:bg-[#0E0E0E]">
        <div className="flex gap-2 items-center">
          <div className="w-[6px] h-[6px]">
            <svg viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3.5L8.34742e-08 7L0 7.15493e-08L6 3.5Z" fill="blue"></path>
            </svg>
          </div>
          <span className="text-xs font-bold sm:text-[14px] sm:font-normal">Additional info</span>
        </div>
        <div className="flex gap-2 text-xs font-bold sm:text-xl sm:font-normal items-center justify-between">
          <Image src="/pdf.svg" width={25} height={25} alt="Pdf receipt" />
          <span>Transaction receipt</span>
        </div>
      </div>
    </div>
  );
};

function InfoSection({ transaction }: { transaction: Transaction }) {
  return (
    <div className="flex flex-col h-full justify-center rounded-b-lg pl-4 mb-1">
      <div className="flex flex-col p-3  gap-2">
        <div className="flex gap-1 bg">
          <span className="font-[400] text-sm text-[#3f3f3f]">Amount transacted</span>
          <ThemeAwareQmarkIcon />
        </div>
        <span className="text-black dark:text-white text-sm">
          0.00511252 BTC {transaction.amount} USD
        </span>
      </div>
      <div className="flex flex-col p-3  gap-2">
        <div className="flex gap-1">
          <span className="font-[400] text-sm text-[#3f3f3f]">Transaction fee</span>
          <ThemeAwareQmarkIcon />
        </div>
        <span className="text-black dark:text-white text-sm">
          0.00511252 BTC {transaction.fee} USD
        </span>
      </div>
      <div className="flex flex-col p-3  gap-2">
        <div className="flex gap-1">
          <span className="font-[400] text-sm text-[#3f3f3f]">Free per vbyte</span>
          <ThemeAwareQmarkIcon />
        </div>
        <span className="text-black dark:text-white">165 satoshi</span>
      </div>
    </div>
  );
}

export default TransactionStatus;

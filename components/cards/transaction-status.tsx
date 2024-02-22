import Image from "next/image";
import ThemeAwareQmarkIcon from "../qmark";
import { Transaction } from "../records";
import { useState } from "react";

function TransactionStatus({ transaction }: { transaction: Transaction }) {
  const [additionalInfo, setOpenAdditionalInfo] = useState(false);
  return (
    <div className="flex flex-col rounded-lg text-black border border-white dark:text-white dark:border-[#262626] dark:shadow-none shadow-md shadow-[#B0BDC7]">
      <div className="bg-[#FFFFFF] dark:bg-[#131313] rounded-t-lg">
        <div className="flex gap-5 px-5 py-4 md:py-6 rounded-t-lg">
          <div className="p-7 w-fit h-fit flex items-center justify-center rounded-full  bg-gradient-to-b from-[#57F630] via-[#3BB09A] to-[#257AEF]">
            <Image
              className="font-extralight"
              src="/tick.svg"
              width={20}
              height={20}
              alt="Checked"
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-[400] text-sm text-[#8191B5]">Transaction status</span>
            <div className="font-semibold">{transaction.status}</div>
            <div className="flex justify-start items-center gap-1">
              <span className="text-xs  md:text-lg"><span className="text-sm">{transaction.confirmed}/12</span> confirmations</span>
              <Image src="/qmark.svg" height={20} width={20} alt="copy" />
              <div className="rounded-full font-semibold bg-[#21BAF7]  text-xs md:text-sm px-1 md:px-2 py-[1px] md:py-[2px]">
                segWit
              </div>
            </div>
            <div className="flex gap-2 justify-start text-sm">
              <span className="font-extralight ">Block id</span>
              <span className="text-[#2170FF] font-extrabold">824,689</span>
            </div>
          </div>
        </div>

        <div className="lg:hidden bg-[#EFF2F9] dark:bg-[#131313]">
          <InfoSection transaction={transaction} />
        </div>

        {additionalInfo && <AdditionalInfo />}
      </div>

      <div
        className="flex pl-4 lg:pl-2 py-3 pr-2 justify-between rounded-b-lg
       bg-[#EFF2F9] dark:bg-[#0E0E0E]"
      >
        <div
          onClick={() => setOpenAdditionalInfo((prev) => !prev)}
          className="flex gap-2 items-center"
        >
          <div className={`w-[6px] h-[6px] ${additionalInfo && "-rotate-90"}`}>
            <svg viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3.5L8.34742e-08 7L0 7.15493e-08L6 3.5Z" fill="blue"></path>
            </svg>
          </div>
          <span className="text-xs max-lg:text-[#2170FF] font-bold sm:text-[14px] sm:font-normal">
            Additional info
          </span>
        </div>
        <div
          className="flex gap-2 text-xs font-bold sm:text-xl sm:font-normal 
        items-center justify-between"
        >
          <Image src="/pdf.svg" width={25} height={25} alt="Pdf receipt" />
          <span>Transaction receipt</span>
        </div>
      </div>
    </div>
  );
}

function AdditionalInfo() {
  return (
    <div className="flex p-5 text-xs">
      <div className="text-[#808080] flex flex-col gap-[14px]">
        <div>Size</div>
        <div>Coindays destroyed</div>
        <div>Weight</div>
        <div>Fee per kB</div>
        <div>Fee per kWU</div>
        <div>Is coinbase?</div>
        <div>Has witness data</div>
        <div>RBF Enabled</div>
        <div>Lock time</div>
        <div>Version</div>
      </div>
      <div className="dark:text-white ml-10 sm:ml-40 font-medium lg:font-bold flex flex-col gap-[14px]">
        <div>223</div>
        <div>0.01</div>
        <div>565</div>
        <div>
          104,430 satoshi <span>.</span> 45.96 USD
        </div>
        <div>
          104,430 satoshi <span>.</span> 45.96 USD
        </div>
        <div>No</div>
        <div>Yes</div>
        <div>No</div>
        <div>0</div>
        <div>
          1 <span className="text-[#8191B5] align-sub font-light">10</span>
        </div>
      </div>
    </div>
  );
}

function InfoSection({ transaction }: { transaction: Transaction }) {
  return (
    <div className="flex flex-col h-full justify-center rounded-b-lg pl-2">
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

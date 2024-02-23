import Image from "next/image";
import ThemeAwareQmarkIcon from "../qmark";
import { Transaction } from "../records";
import {DM_Mono } from "next/font/google";

const dmMono = DM_Mono({weight: "500", subsets: ["latin"]})

function ago(timeStamp: number) {
  const passedSeconds = (new Date().getTime() - timeStamp) / 1000;
  if (passedSeconds < 60) {
    return `${Math.floor(passedSeconds)} secs ago`;
  } else if (passedSeconds < 3600) {
    return `${Math.floor(passedSeconds / 60)} ${passedSeconds / 60 < 2 ? "min" : "mins"} ago`;
  } else if (passedSeconds < 3600 * 24) {
    return `${Math.floor(passedSeconds / 3600)} ${passedSeconds / 3600 < 2 ? "hour" : "hours"} ago`;
  } else if(passedSeconds / 86400 < 7){
    return `${(Math.floor(passedSeconds / 86400))} ${passedSeconds / 86400 < 2 ? "day" : "days"} ago`;
  }else{
    const weeks = passedSeconds / (86400 * 7)
    if((weeks / 4) > 1){
      return `${Math.floor((weeks / 4))} ${weeks / 4 < 2 ? "month" : "months"} ago`
    }
    return `${(Math.floor(weeks))} ${weeks < 2 ? "week" : "weeks"} ago`
  }
}

const TransactionHash = ({ transaction, price }: { transaction: Transaction, price: number }) => {
  return (
    <div className="rounded-lg border h-fit bg-[#EFF2F9] dark:bg-[#0E0E0E] border-white flex flex-col dark:border-[#262626] dark:shadow-none shadow-lg shadow-[#B0BDC7]">
      <div className="flex flex-col p-5 bg-[#FFFFFF] dark:bg-[#131313] gap-2 rounded-t-lg">
        <span className={`${dmMono.className} font-sans mb-1 text-[16px] text-[#3f3f3f]`}>
          Transaction hash
        </span>
        <span className="text-[18px] font-mono font-semibold gap-2 text-black dark:text-white break-all">
          {transaction.hash}
          <Image className="float-right m-0" src="/copy.svg" height={18} width={18} alt="copy" />
        </span>
      </div>
      <InfoSection transaction={transaction} price={price} />
    </div>
  );
};

function InfoSection({ transaction, price }: { transaction: Transaction, price: number }) {
  return (
    <div className="flex flex-col h-full justify-center rounded-b-lg lg:py-[15px]">
      <div className="max-lg:hidden">
        <div className="flex flex-col p-3  gap-2">
          <div className="flex gap-1 bg">
            <span className="font-[400] text-sm text-[#3f3f3f]">Amount transacted</span>
            <ThemeAwareQmarkIcon />
          </div>
          <span className="text-black dark:text-white text-sm">
            {(transaction.amount / price).toFixed(8)} BTC {transaction.amount} USD
          </span>
        </div>
        <div className="flex flex-col p-3  gap-2">
          <div className="flex gap-1">
            <span className="font-[400] text-sm text-[#3f3f3f]">Transaction fee</span>
            <ThemeAwareQmarkIcon />
          </div>
          <span className="text-black dark:text-white text-sm">
            {(transaction.amount / price).toFixed(8)} BTC {transaction.fee} USD
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
      <div className="flex lg:flex-col justify-between py-6 lg:py-3 px-6 lg:px-3  gap-2 text-[#3f3f3f] text-sm font-[400]">
        <span>{ago(transaction.timeStamp)}</span>
        <span>
          {new Date(transaction.timeStamp).toDateString() +
            ", " +
            new Date(transaction.timeStamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}

export default TransactionHash;

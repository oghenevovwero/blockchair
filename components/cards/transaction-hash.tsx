import Image from "next/image";
import ThemeAwareQmarkIcon from "../qmark";
import { Transaction } from "../records";

function ago(timeStamp: number) {
  const passedSeconds = (new Date().getTime() - timeStamp) / 1000;
  if (passedSeconds < 60) {
    return `${passedSeconds.toFixed()} secs ago}`;
  } else if (passedSeconds < 3600) {
    return `${(passedSeconds / 60).toFixed()} ${passedSeconds / 60 < 2 ? "min" : "mins"} ago`;
  } else if (passedSeconds < 3600 * 24) {
    return `${(passedSeconds / 3600).toFixed()} ${passedSeconds / 3600 < 2 ? "hour" : "hours"} ago`;
  }
}

const TransactionHash = ({ transaction }: { transaction: Transaction }) => {
  return (
    <div className="rounded-lg border h-fit lg:h-[432px] bg-[#EFF2F9] dark:bg-[#0E0E0E] border-white flex flex-col dark:border-[#262626] dark:shadow-none shadow-lg shadow-[#B0BDC7]">
      <div className="flex flex-col px-5 py-7 bg-[#FFFFFF] dark:bg-[#131313] gap-2 rounded-t-lg">
        <span className="font-[400] mb-1 text-[16px] text-[#3f3f3f]">Transaction hash</span>
        <span className="text-[16px] flex gap-2 text-black dark:text-white break-all">
          {transaction.hash}
          <Image className="float-right m-0" src="/copy.svg" height={18} width={18} alt="copy" />
        </span>
      </div>
      <InfoSection transaction={transaction} />
    </div>
  );
};

function InfoSection({ transaction }: { transaction: Transaction }) {
  return (
    <div className="flex flex-col h-full justify-center rounded-b-lg">
      <div className="max-lg:hidden">
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
      <div className="flex justify-between p-3  gap-2 text-[#3f3f3f] text-sm font-[400]">
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

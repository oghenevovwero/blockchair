import { useState } from "react";
import AltExplorers from "../cards/alt-explorers";
import BlockchairAwesome from "../cards/blockchair-awesome";
import BtcPrice from "../cards/btc-price";
import Recipients from "../cards/recipients";
import Senders from "../cards/senders";
import TransactionHash from "../cards/transaction-hash";
import TransactionStatus from "../cards/transaction-status";
import WatchOnly from "../cards/watch-only";
import PrivacyControl from "../privacy-control";
import { Transaction } from "../records";
import PaddedWrapper from "../wrappers/padded";

function InfoCard({ transaction}: {transaction: Transaction }) {
  const [price, setPrice] = useState(1);
  return (
    <PaddedWrapper className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
      <div className="col-span-3 grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
        <div className="max-lg:mb-5">
          <TransactionHash transaction={transaction} />
        </div>
        <div className="col-span-2">
          <div className="mb-1">
            <TransactionStatus transaction={transaction} price={price}/>
          </div>
          <div
            className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-2 
          rounded-lg 
          dark:border-[#262626] 
        border-white
          dark:shadow-none 
          shadow-lg 
          shadow-[#B0BDC7]
          bg-[#EFF2F9]
             dark:bg-[#0E0E0E]
          border p-2
          max-lg:hidden
          "
          >
            <Senders transaction={transaction} />
            <Recipients transaction={transaction} />
          </div>
          <div className="lg:hidden">
            <Senders transaction={transaction} />
            <div className="mt-1">
              <Recipients transaction={transaction} />
            </div>
          </div>
        </div>
        <PrivacyControl />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:gap-[10px]">
        <div className="max-lg:mb-5">
          <BtcPrice setBtcPrice={setPrice} />
        </div>
        <div className="max-lg:mb-5">
          <BlockchairAwesome />
        </div>
        <div className="max-lg:mb-5">
          <WatchOnly />
        </div>
        <div className="max-lg:mb-5">
          <AltExplorers />
        </div>
      </div>
    </PaddedWrapper>
  );
}

export default InfoCard;

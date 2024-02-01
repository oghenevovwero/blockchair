import AltExplorers from "../cards/alt-explorers";
import BlockchairAwesome from "../cards/blockchair-awesome";
import BtcPrice from "../cards/btc-price";
import Recipients from "../cards/recipients";
import Senders from "../cards/senders";
import TransactionHash from "../cards/transaction-hash";
import TransactionStatus from "../cards/transaction-status";
import WatchOnly from "../cards/watch-only";
import PrivacyControl from "../privacy-control";
import PaddedWrapper from "../wrappers/padded";

type InfoCardProps = {};

const InfoCard: React.FC<InfoCardProps> = () => {
  return (
    <PaddedWrapper className="grid grid-cols-1 lg:grid-cols-4 gap-5">
      <div className="flex flex-col">
        <TransactionHash />
        <PrivacyControl />
      </div>
      <div className="lg:col-span-2">
        <div className="mb-3">
          <TransactionStatus />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-lg border-white shadow-lg shadow-[#B0BDC7] bg-[#EFF2F9] border p-3">
          <Senders />
          <Recipients />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
        <BtcPrice />
        <BlockchairAwesome />
        <WatchOnly />
        <AltExplorers />
      </div>
    </PaddedWrapper>
  );
};

export default InfoCard;

import Image from "next/image";

type SendersProps = {};

const Senders: React.FC<SendersProps> = () => {
  return (
    <div className="flex flex-col h-fit text-black">
      <div className="p-2 flex justify-center w-full font-[400] text-sm text-[#B0BDC7] rounded-t-lg bg-[#F6F9FF]">
        Senders{" "}
        <span className="py-0 px-1 text-sm ml-1 bg-white text-black font-normal rounded-full">1</span>
      </div>
      <div className="flex flex-col gap-2 rounded-b-lg p-5 bg-[#FFFFFF]">
        <span className="text-[#2170FF] break-all">
          bc1q0fhw64ksytynkkgteprc8gz7mstw5v0dr9l05m
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
};

export default Senders;

import Image from "next/image";

type RecipientsProps = {};

const Recipients: React.FC<RecipientsProps> = () => {
  return (
    <div className="flex flex-col gap-1 text-black">
      <div className="flex flex-col h-fit">
        <div className="p-2 flex justify-center w-full font-[400] text-sm text-[#B0BDC7] rounded-t-lg bg-[#F6F9FF]">
          Recipients{" "}
          <span className="py-0 px-1 text-sm ml-1 bg-white font-normal text-black rounded-full">
            2
          </span>
        </div>
        <div className="flex flex-col gap-2 p-5 rounded-b-lg bg-[#FFFFFF]">
          <span className="text-[#2170FF] break-all">
            bc1q0fhw64ksytynkkgteprc8gz7mstw5v0dr9l05s
            <div className="float-right">
              <Image className="float-right" src="/copy.svg" height={15} width={15} alt="copy" />
            </div>
          </span>
          <div className="text-sm">
            0.00534540 BTC 229<span>.</span>12 USD
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5 rounded-lg bg-[#FFFFFF] h-fit">
        <span className="text-[#2170FF] break-all">
          bc1q0fhw64ksytynkkgteprc8gz7mstw5v0dr9l05s
          <div className="flex gap-2 float-right">
            <Image src="/copy.svg" height={15} width={15} alt="copy" />
            <span className="border h-fit text-black border-[#FCBB19] px-2 rounded-full font-light text-[100] text-xs">
              Change
            </span>
          </div>
        </span>
        <div className="text-sm">
          0.00534540 BTC 229<span>.</span>12 USD
        </div>
      </div>
    </div>
  );
};

export default Recipients;

import Image from "next/image";

type RecipientsProps = {};

const Recipients: React.FC<RecipientsProps> = () => {
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
      <div className="flex flex-col gap-2 px-5 py-3 rounded-lg bg-[#FFFFFF] dark:bg-[#131313] h-fit">
        <span className="text-[#2170FF] break-all">
          bc1q0fhw64ksytynkkgteprc8gz7mstw5v0dr9l05s
          <div className="flex gap-2 float-right">
            <Image src="/copy.svg" height={15} width={15} alt="copy" />
            <span className="border h-fit text-black dark:text-white border-[#FCBB19] px-2 rounded-full font-light text-[100] text-xs">
              Change
            </span>
          </div>
        </span>
        <div className="flex items-center gap-2">
          <div className="text-sm">
            0.00534540 BTC 229<span>.</span>12 USD
          </div>
          <Image className="float-right" src="/arrow-forward.svg" height={15} width={15} alt="back" />
        </div>
      </div>
    </div>
  );
};

export default Recipients;

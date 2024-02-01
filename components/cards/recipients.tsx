import Image from "next/image";

type RecipientsProps = {};

const Recipients: React.FC<RecipientsProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col rounded-lg border-gray-800 border h-fit">
        <div className="p-2 mx-auto text-xs font-[100]">
          Recipients{" "}
          <span className="py-0 px-1 text-sm bg-[#FFFFFF] font-normal text-black rounded-3xl">
            2
          </span>
        </div>
        <div className="flex flex-col gap-2 p-5 bg-[#131313]">
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
      <div className="flex flex-col gap-2 p-5 bg-[#131313] rounded-lg border-gray-800 border h-fit">
        <span className="text-[#2170FF] break-all">
          bc1q0fhw64ksytynkkgteprc8gz7mstw5v0dr9l05s
          <div className="flex gap-2 float-right">
            <Image src="/copy.svg" height={15} width={15} alt="copy" />
            <span className="border h-fit border-[#FCBB19] text-white px-2 rounded-full font-light text-[100] text-xs">
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

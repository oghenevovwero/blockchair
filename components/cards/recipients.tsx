import Image from "next/image";

type RecipientsProps = {};

const Recipients: React.FC<RecipientsProps> = () => {
  return (
    <div>
      <div className="max-lg:hidden">
        <ExpandedRecipients />
      </div>
      <div className="lg:hidden">
        <MinimizedRecipients />
      </div>
    </div>
  );
};

function MinimizedRecipients() {
  return (
      <div
        className="p-4 border dark:border-[#262626] 
      flex items-center gap-2 w-full font-[400] text-sm text-[#B0BDC7] rounded-2xl
       dark:bg-[#0E0E0E] bg-[#F6F9FF]"
      >
        <div className="w-[6px] h-[6px]">
          <svg viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3.5L8.34742e-08 7L0 7.15493e-08L6 3.5Z" fill="blue"></path>
          </svg>
        </div>
        <div className="flex"> 
          Recipients{" "}
          <div className="w-[18px] h-[18px] flex items-center justify-center  text-sm ml-1 bg-white text-gray-500 font-normal rounded-full">
            2
          </div>
        </div>
    </div>
  );
}

function ExpandedRecipients() {
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
          <Image
            className="float-right"
            src="/arrow-forward.svg"
            height={15}
            width={15}
            alt="back"
          />
        </div>
      </div>
    </div>
  );
}

export default Recipients;

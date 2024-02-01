import Image from "next/image";

type TransactionSTatusProps = {};

const TransactionStatus: React.FC<TransactionSTatusProps> = () => {
  return (
    <div className="flex flex-col rounded-lg border-gray-800 border">
      <div className="flex gap-5 p-5  bg-[#131313] rounded-t-lg">
        <div className="p-7 w-fit h-fit flex items-center justify-center rounded-full  bg-gradient-to-b from-[#57F630] via-[#3BB09A] to-[#257AEF]">
          <Image className="font-extralight" src="/tick.svg" width={20} height={20} alt="Checked" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-[200] text-sm text-[#7691A5]">Transaction status</span>
          <div className="flex flex-col min-[515px]:flex-row items-center gap-2">
            <span className="text-sm md:text-lg">Confirmed 3482 confirmations</span>
            <div className="flex items-center justify-center gap-2">
              <Image src="/qmark.svg" height={20} width={20} alt="copy" />
              <div className="rounded-full bg-[#21BAF7] text-sm px-2 py-[2px]">segWit</div>
            </div>
          </div>
          <div className="flex gap-2 justify-center min-[515px]:justify-start text-sm">
            <span className="font-extralight">Block id</span>
            <span className="text-[#2170FF] font-extrabold">824,689</span>
          </div>
        </div>
      </div>
      <div className="flex p-5 justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-[6px] h-[6px]">
            <svg viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3.5L8.34742e-08 7L0 7.15493e-08L6 3.5Z" fill="blue"></path>
            </svg>
          </div>
          <span>Additional info</span>
        </div>
        <div className="flex gap-2">
          <Image src="/pdf.svg" width={25} height={25} alt="Pdf receipt" />
          <span>Transaction receipt</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionStatus;

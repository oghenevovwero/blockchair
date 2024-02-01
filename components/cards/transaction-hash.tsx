import Image from "next/image";

type TransactionHashProps = {};

const TransactionHash: React.FC<TransactionHashProps> = () => {
  return (
    <div className="rounded-lg flex flex-col">
      <div className="flex flex-col p-5  bg-[#FFFFFF] rounded-t-lg gap-2">
        <span className="font-[400] text-sm text-[#B0BDC7]">Transaction hash</span>
        <span className="text-[16px] text-black break-all">
          647f80ce042d0df273d48acf3eef325f97f3d1a2049d03d96e8d155dd7897de7
          <Image className="float-right m-0" src="/copy.svg" height={20} width={20} alt="copy" />
        </span>
      </div>
      <div className="flex flex-col bg-[#EFF2F9]">
        <div className="flex flex-col p-5  gap-2">
          <div className="flex gap-1">
            <span className="font-[400] text-sm text-[#B0BDC7]">Amount transacted</span>
            <Image src="/qmark.svg" height={20} width={20} alt="copy" />
          </div>
          <span className="text-black">0.00511252BTC224.99USD</span>
        </div>
        <div className="flex flex-col p-5  gap-2">
          <div className="flex gap-1">
            <span className="font-[400] text-sm text-[#B0BDC7]">Amount transacted</span>
            <Image src="/qmark.svg" height={20} width={20} alt="copy" />
          </div>
          <span className="text-black">0.00511252BTC224.99USD</span>
        </div>
        <div className="flex flex-col p-5  gap-2">
          <div className="flex gap-1">
            <span className="font-[400] text-sm text-[#B0BDC7]">Free per vbyte</span>
            <Image src="/qmark.svg" height={20} width={20} alt="copy" />
          </div>
          <span className="text-black">165 satoshi</span>
        </div>
        
        <div className="flex flex-col p-5  gap-2">
          <span className="font-[100] text-sm opacity-50">3 weeks ago .</span>
          <span className="font-[100] text-sm opacity-50">Jan 7, 2024 12:56 AM UTC</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionHash;

import Image from "next/image";

type SendersProps = {};

const Senders: React.FC<SendersProps> = () => {
  return (
    <div className="flex flex-col rounded-lg border-gray-800 border h-fit">
      <div className="p-2 mx-auto text-sm font-[100]">
        Senders{" "}
        <span className="py-0 px-1 text-sm bg-[#FFFFFF] text-black font-normal rounded-3xl">1</span>
      </div>
      <div className="flex flex-col gap-2 p-5 bg-[#131313]">
        <span className="text-[#2170FF] break-all">
          bc1q0fhw64ksytynkkgteprc8gz7mstw5v0dr9l05m
          <div className="float-right">
            <Image className="float-right" src="/copy.svg" height={15} width={15} alt="copy" />
          </div>
        </span>
        <div className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.05"
              cx="9"
              cy="9"
              r="9"
              transform="rotate(180 9 9)"
              fill="grey"
            ></circle>
            <path
              transform="rotate(180 9 9)"
              d="M12.9536 9.35355C13.1488 9.15829 13.1488 8.84171 12.9536 8.64645L9.77157 5.46447C9.57631 5.2692 9.25973 5.2692 9.06447 5.46447C8.8692 5.65973 8.8692 5.97631 9.06447 6.17157L11.8929 9L9.06447 11.8284C8.8692 12.0237 8.8692 12.3403 9.06447 12.5355C9.25973 12.7308 9.57631 12.7308 9.77157 12.5355L12.9536 9.35355ZM4.5 9.5L12.6 9.5L12.6 8.5L4.5 8.5L4.5 9.5Z"
              fill="grey"
            ></path>
          </svg>
          <div className="text-sm">
            0.00534540 BTC 229<span>.</span>12 USD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Senders;

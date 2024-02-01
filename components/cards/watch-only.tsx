import Image from "next/image";

type WatchOnlyProps = {};

const WatchOnly: React.FC<WatchOnlyProps> = () => {
  return (
    <div className="rounded-lg flex gap-4 border-white text-black border p-5 shadow-md shadow-[#B0BDC7]">
      <Image src="/watch-only.svg" width={50} height={50} alt="Awesome" />
      <div className="flex flex-col gap-3">
        <div className="text-sm font-bold">Watch-only wallet</div>
        <div className="text-sm text-[#7691A5] font-light">
          Keep track of your crypto assets without putting them at risk
        </div>
        <div className="text-[10px] w-fit h-fit bg-white font-bold border-white border rounded-lg px-2 py-1">
          Explore awesome
        </div>
      </div>
    </div>
  );
};

export default WatchOnly;

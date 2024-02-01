import Image from "next/image";

type WatchOnlyProps = {};

const WatchOnly: React.FC<WatchOnlyProps> = () => {
  return (
    <div className="rounded-lg flex gap-4 border-gray-800 border p-5">
      <Image src="/watch-only.svg" width={50} height={50} alt="Awesome" />
      <div className="flex flex-col gap-3">
        <div className="text-sm font-bold">Watch-only wallet</div>
        <div className="text-sm text-[#7691A5] font-light">
          Keep track of your crypto assets without putting them at risk
        </div>
        <div className="text-xs w-fit h-fit font-bold border-gray-800 border rounded-xl p-2">
          Explore awesome
        </div>
      </div>
    </div>
  );
};

export default WatchOnly;

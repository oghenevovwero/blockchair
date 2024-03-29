import Image from "next/image";

type BlockchairAwesomeProps = {};

const BlockchairAwesome: React.FC<BlockchairAwesomeProps> = () => {
  return (
    <div className="rounded-lg flex gap-4 border-white border text-black p-5 items-start dark:text-white dark:border-[#262626] dark:shadow-none shadow-md shadow-[#B0BDC7]">
      <Image src="/awesome.svg" width={50} height={50} alt="Awesome" />
      <div className="flex flex-col gap-3">
        <div className="text-sm font-bold">Blockchair awesome</div>
        <div className="text-sm text-[#7691A5] font-light"> Explore and compare the most ambitious projects in the cryptocurrency industry </div>
        <div className="text-[10px] w-fit h-fit bg-white dark:bg-[#262626] border-white dark:border-none border rounded-lg px-2 py-1">Explore awesome</div>
      </div>
    </div>
  );
};

export default BlockchairAwesome;

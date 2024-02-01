type AltExplorersProps = {};

const AltExplorers: React.FC<AltExplorersProps> = () => {
  return (
    <div className="rounded-lg flex flex-col border-white text-black dark:border-[#262626] dark:bg-[#100D06] border p-5 text-sm bg-[#EFF2F9] dark:text-white">
      <div className="font-[400] text-sm text-[#B0BDC7]">Alternative explorers</div>
      <div className="text-[#2170FF] break-all mb-4">
        3xpl.combtc.comviabtc.com <br />
        oraclus.com
      </div>
      <div className="font-[400] text-sm text-[#B0BDC7] mb-1">For developers</div>
      <div className="text-[#2170FF] text-xs">Raw tx</div>
    </div>
  );
};

export default AltExplorers;

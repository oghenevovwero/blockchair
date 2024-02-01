type AltExplorersProps = {};

const AltExplorers: React.FC<AltExplorersProps> = () => {
  return (
    <div className="rounded-lg flex flex-col border-white text-black border p-5 text-sm bg-[#EFF2F9]">
      <div className="font-[400] text-sm text-[#B0BDC7]">Alternative explorers</div>
      <div className="text-[#2170FF] break-all mb-4">
        3xpl.combtc.comviabtc.com <br />
        oraclus.com
      </div>
      <div className="font-[400] text-sm text-[#B0BDC7]">For developers</div>
      <div className="text-[#2170FF]">Raw tx</div>
    </div>
  );
};

export default AltExplorers;

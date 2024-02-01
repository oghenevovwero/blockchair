type AltExplorersProps = {};

const AltExplorers: React.FC<AltExplorersProps> = () => {
  return (
    <div className="rounded-lg flex flex-col border-gray-800 border p-5 text-sm bg-[#0a0804]">
      <div className="font-[100] opacity-50">Alternative explorers</div>
      <div className="text-[#2170FF] break-all mb-4">
        3xpl.combtc.comviabtc.com <br />
        oraclus.com
      </div>
      <div className="font-[100] opacity-50">For developers</div>
      <div className="text-[#2170FF]">Raw tx</div>
    </div>
  );
};

export default AltExplorers;

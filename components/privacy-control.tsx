import Image from "next/image";

type PrivacyControlProps = {};

const PrivacyControl: React.FC<PrivacyControlProps> = () => {
  return (
    <div className="mt-7 text-black dark:text-white">
      <div className="flex gap-2">
        <div className="h-fit w-fit">
          <Image src="/bc-game.png" width={50} height={50} alt="Bc game" />
        </div>
        <div className="text-[#2170FF] font-light text-sm mb-5">
          BC.GAME - the best crypto casino. Up to 5 BTC daily bonus, 760% deposit bonus. Play now.
        </div>
      </div>
      <div>
        <div className="text-xs text-[#363636] font-light mb-6 flex items-center">
          Sponsored<span className="font-extrabold text-xl mx-1 mb-3">.</span>Advertise here
          <span className="font-extrabold text-xl mx-1 mb-3">.</span>Turn off adds
        </div>
        <div className="rounded-lg p-5 hover:bg-[#FFFFFF] dark:hover:bg-[#131313] hover:cursor-pointer">
          <div className="flex gap-3 mb-4">
            <Image src="/crest.svg" width={50} height={50} alt="Privacy crest" />
            <div className="flex flex-col gap-1">
              <span className="font-light text-sm">Privacy</span>
              <div className="flex gap-2 items-center">
                <div className="bg-[#FF0078] text-white px-2 rounded-full">0</div>
                <div className="font-[500]">Critical</div>
                <Image src="/qmark.svg" height={20} width={20} alt="copy" />
              </div>
              <span className="text-[#FF63AD] mr-1">
                Issues: <span className="text-black dark:text-gray-500 font-extralight">2</span>
              </span>
            </div>
          </div>
          <div className="text-sm text-[#2B2B2B] font-light break-words">
            Privacy-o-meter shows the level of traceability of a transaction via various tracking
            tools
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyControl;

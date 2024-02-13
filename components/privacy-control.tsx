import Image from "next/image";
import ThemeAwareQmarkIcon from "./qmark";

type PrivacyControlProps = {};

const PrivacyControl: React.FC<PrivacyControlProps> = () => {
  return (
    <div className="mt-2 lg:mt-7 text-black dark:text-white flex flex-col max-lg:flex-col-reverse">
      <div className="flex gap-2">
        <div className="h-fit w-fit">
          <Image src="/bc-game.png" width={50} height={50} alt="Bc game" />
        </div>
        <div>
          <div className="text-[#2170FF] font-light text-xs mb-1">
            <span className="text-[11px]">BC.GAME</span> - the best crypto casino. Up to 5 BTC daily bonus, 760% deposit bonus. Play now.
          </div>
          <div className="text-xs text-[#555] font-light mb-3 flex items-center">
            Sponsored<span className="font-extrabold text-xl mx-1 mb-3">.</span>Advertise here
            <span className="font-extrabold text-xl mx-1 mb-3">.</span>Turn off adds
          </div>
        </div>
      </div>
      <div className="max-lg:dark:bg-[#100D06] mb-3 max-lg:dark:border max-lg:dark:border-[#262626] max-lg:dark:rounded-lg">
        <div className="rounded-lg p-5 mb-5 hover:bg-[#FFFFFF] dark:hover:bg-[#131313] hover:cursor-pointer">
          <div className="flex gap-3 mb-4">
            <Image src="/crest.svg" width={50} height={50} alt="Privacy crest" />
            <div className="flex flex-col gap-1">
              <span className="font-light text-sm">Privacy</span>
              <div className="flex gap-2 items-center">
                <div className="bg-[#FF0078] text-white px-2 rounded-full">0</div>
                <div className="font-[500]">Critical</div>
                <ThemeAwareQmarkIcon />
              </div>
              <span className="text-[#FF63AD] mr-1">
                Issues: <span className="text-black dark:text-gray-500 font-extralight">2</span>
              </span>
            </div>
          </div>
          <div className="text-sm text-[#808080] font-light break-words">
            Privacy-o-meter shows the level of traceability of a transaction via various tracking
            tools
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyControl;

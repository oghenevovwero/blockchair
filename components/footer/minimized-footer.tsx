import Image from "next/image";

const MinimizedFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 pb-28 pt-8 text-white">
      <div>About Blockchair</div>
      <div>FAQ</div>
      <div>Changelog</div>
      <div>Careers</div>
      <div>Terms of service</div>
      <div className="flex justify-center items-center gap-5 mt-8">
        <Image src="/twitter.svg" width={25} height={25} alt="Privacy crest" />
        <Image src="/telegram.svg" width={45} height={45} alt="Privacy crest" />
        <Image src="/github.svg" width={25} height={25} alt="Privacy crest" />
        <Image src="/linkedin.svg" width={25} height={25} alt="Privacy crest" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-3">
        <Image src="/footer-no-trackers.svg" width={200} height={100} alt="Blockchair" />
        <Image src="/footer-nojs.svg" width={200} height={100} alt="Blockchair" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-8">
        <div className="text-gray-500"> © 2024 Blockchair</div>
        <div className="text-sm font-[100] text-gray-600">
          2.0.2-435-g803719764 Tue 30 Jan 2024
        </div>
      </div>
    </div>
  );
};
export default MinimizedFooter;

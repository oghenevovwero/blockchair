import Image from "next/image";
import PaddedWrapper from "../wrappers/padded";

const ExpandedFooter = () => {
  return (
    <PaddedWrapper className="pt-28 pb-28 text-white">
      <div className="flex justify-center">
        <div className="grid grid-cols-5 text-[14px] 2xl:text-[15px] gap-24">
          <div className="flex flex-col gap-2">
            <div className="text-gray-600 text-xl 2xl:text-[20px] font-bold"> Explorers </div>
            <a href="#"> Aptos </a>
            <a href="#"> Arbitrum One </a>
            <a href="#"> Avalanche </a>
            <a href="#"> Base </a>
            <a href="#"> Beacon Chain </a>
            <a href="#"> Bitcoin </a>
            <a href="#"> Bitcoin Cash </a>
            <a href="#"> BNB </a>
            <a href="#"> BOB </a>
            <a href="#"> Botanix </a>
            <a href="#"> Cardano </a>
            <a href="#"> Dash </a>
            <a href="#"> DigiByte </a>
            <a href="#"> Dogecoin </a>
            <a href="#"> eCash </a>
            <a href="#"> Ethereum </a>
            <a href="#"> Ethereum Classic </a>
            <a href="#"> Fantom </a>
            <a href="#"> Gnosis Chain </a>
            <a href="#"> Groestlcoin </a>
            <hr className="h-px w-24 my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <a href="#"> Tether USD </a>
            <a href="#"> USD Coin </a>
            <a href="#"> Binance USD </a>
          </div>
          <div className="flex flex-col gap-2 mt-8">
            <a href="#"> Handshake </a>
            <a href="#"> Kusama </a>
            <a href="#"> Linea </a>
            <a href="#"> Litecoin </a>
            <a href="#"> Monero </a>
            <a href="#"> Moonbeam </a>
            <a href="#"> opBNB </a>
            <a href="#"> Optimism </a>
            <a href="#"> Peercoin </a>
            <a href="#"> Polkadot </a>
            <a href="#"> Polygon </a>
            <a href="#"> Polygon zkEVM </a>
            <a href="#"> Rootstock </a>
            <a href="#"> Sei EVM </a>
            <a href="#"> Solana </a>
            <a href="#"> Stellar </a>
            <a href="#"> The Open Network </a>
            <a href="#"> TRON </a>
            <a href="#"> XRP Ledger </a>
            <a href="#"> Zcash </a>
          </div>
          <div className="">
            <div className="flex flex-col gap-2">
              <div className="text-gray-600 text-xl 2xl:text-[20px] font-bold"> Data </div>
              <a href="#"> API </a>
              <a href="#"> Datasets </a>
              <a href="#"> Charts </a>
              <a href="#">
                ENS Lookup <span className=""> New </span>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-600 text-xl 2xl:text-[20px] font-bold mt-4 mb-2">
                Services
              </div>
              <a href="#"> Blockchair News </a>
              <a href="#"> Blockchair Donut </a>
              <a href="#"> Blockchair Awesome </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-600 text-xl 2xl:text-[20px] font-bold mt-4 mb-2">
                Products
              </div>
              <a className=""> Transaction receipts </a>
              <a className=""> Wallet statements </a>
              <a className=""> Portfolio tracker </a>
              <a className=""> Broadcast transaction </a>
              <a className=""> Privacy-o-meter </a>
              <a className=""> Node explorers </a>
              <a className=""> Release monitor </a>
              <a className=""> Halving countdown </a>
              <a className=""> Compare blockchains </a>
              <a className=""> Get Blockchair extension </a>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-2">
              <div className="text-gray-600 text-xl 2xl:text-[20px] font-bold"> Useful links </div>
              <div>
                <a href="#"> About Blockchair </a>
              </div>
              <div>
                <a href="#"> FAQ </a>
              </div>
              <div>
                <a href="#"> Changelog </a>
              </div>
              <div>
                <a href="#"> Careers </a>
              </div>
              <div>
                <a href="#"> Terms of service </a>
              </div>
              <div>
                <a href="#"> Privacy policy </a>
              </div>
              <div className="flex items-center gap-1">
                <a href="#" target="_blank">
                  Blockchair Onion v3 URL
                </a>
                <Image src="/copy.svg" width={20} height={20} alt="copy" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-600 text-xl 2xl:text-[20px] font-bold mt-4 mb-2 ">
                For partners
              </div>
              <a href="#"> Partnerships </a>
              <a href="#"> Advertise with us </a>
              <a href="#"> Brand kit </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-600 text-xl 2xl:text-[20px] font-bold mt-4 mb-2">
                For developers
              </div>
              <a href="#"> Submit a bug or request </a>
              <a href="#"> Bug bounty program </a>
              <a href="#"> API documentation </a>
              <a href="#"> Status </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-600 text-xl 2xl:text-[20px] font-bold mt-4 mb-2">
                Social
              </div>
              <a href="#"> Twitter </a>
              <a href="#"> Telegram </a>
              <a href="#"> GitHub </a>
              <a href="#"> LinkedIn </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray-600 text-xl 2xl:text-[20px] font-bold"> Languages </div>
            <a className="" href="#">
              <div className="flex gap-1 items-center">
                English
                <Image src="/blue-tick.svg" width={20} height={20} alt="mark" />
              </div>
            </a>
            <a className="" href="#">
              Español
            </a>
            <a className="" href="#">
              Français
            </a>
            <a className="" href="#">
              Italiano
            </a>
            <a className="" href="#">
              Nederlands
            </a>
            <a className="" href="#">
              Portugues
            </a>
            <a className="" href="#">
              Русский
            </a>
            <a className="" href="#">
              中文
            </a>
            <a className="" href="#">
              فارسی
            </a>
            <a className="" href="#">
              Вahasa Indonesia
            </a>
            <a className="" href="#">
              Türkçe
            </a>
            <a className="" href="#">
              日本語
            </a>
            <a className="" href="#">
              한국어
            </a>
            <a className="" href="#">
              Deutsch
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div> © 2024 Blockchair</div>
        <Image src="/footer-logo.svg" width={100} height={50} alt="Blockchair" />
        <Image src="/footer-no-trackers.svg" width={100} height={50} alt="Blockchair" />
        <Image src="/footer-nojs.svg" width={100} height={50} alt="Blockchair" />
        <div className="text-sm font-[100] text-gray-400">
          2.0.2-435-g803719764 Tue 30 Jan 2024 12:46:45 GMT
        </div>
      </div>
    </PaddedWrapper>
  );
};

export default ExpandedFooter;

import Image from "next/image";

const ExpandedTopNav = () => {
  return (
    <div className="bg-black text-white fixed z-10 left-0 right-0 top-0">
      <div className="flex text-sm font-semibold items-center gap-9 py-2 px-[155px]">
        <Image src="/logo-white.svg" width={151} height={155} alt="Logo" />
        <div className="flex-1">
          <Search />
        </div>
        <div className="flex items-center gap-[21px] text-sm">
          <div className="rounded-lg px-2 py-1">
            <Image src="/portfolio-nav.svg" width={20} height={20} alt="Portfolio" />
          </div>
          <div>Explorers</div>
          <div>Features</div>
          <div className="flex items-center">
            ENG <span className="mb-3 mx-1 font-extrabold text-xl text-gray-500">.</span> USA
          </div>
          <Image src="/icon-settings.svg" width={25} height={25} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="w-full bg-[#2170FF] py-[1px] pl-[1px] pr-[17px] rounded-lg flex gap-3 items-center">
      <div className="relative flex-1">
        <input
          type="search"
          className="
          py-[9px] 
          rounded-lg 
          w-full 
          bg-white
          dark:bg-black
          placeholder:font-light 
          placeholder:opacity-80
          placeholder:tracking-wide
          placeholder:text-[13px] 
          placeholder:text-[#5D5D5D]
          active:outline-none
          text-black
          "
          placeholder="         Search for transactions, addresses, blocks and embedded text data..."
        />
        <div className="absolute inset-y-0 left-[6px] pl-2 flex items-center pointer-events-none">
          <Image src="/search.svg" height={18} width={18} alt="Search" />
        </div>
        <div className="absolute inset-y-0 right-[14px] flex items-center pointer-events-none">
          <Image className="opacity-45" src="/camera.svg" height={25} width={25} alt="Search" />
        </div>
      </div>
      <svg
        className="rtl-flip"
        width="15"
        height="15"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75H12V5.25H0V6.75Z"
          fill="white"
        ></path>
      </svg>
    </div>
  );
};

export default ExpandedTopNav;

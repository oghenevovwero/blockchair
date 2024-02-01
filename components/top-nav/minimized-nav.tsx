import Image from "next/image";

const MinimizedTopNav: React.FC<{}> = () => {
  return (
    <div className="flex items-center justify-between py-2 px-5 fixed z-10 left-0 right-0 top-0 bg-black">
      <Image src="/logo-white.svg" width={150} height={150} alt="Logo" />
      <div className="flex items-center gap-5">
        <Image src="/search-white.svg" width={20} height={20} alt="Logo" />
        <Image src="/more.svg" width={20} height={20} alt="Logo" />
      </div>
    </div>
  );
};

export default MinimizedTopNav;

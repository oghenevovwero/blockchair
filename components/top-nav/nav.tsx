import ExpandedTopNav from "./expanded-nav";
import MinimizedTopNav from "./minimized-nav";

const Nav = () => {
  return (
    <>
      <div className="xl:hidden">
        <MinimizedTopNav />
      </div>
      <div className="hidden xl:block">
        <ExpandedTopNav />
      </div>
    </>
  );
};

export default Nav;

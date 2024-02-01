import ExpandedFooter from "./expanded-footer";
import MinimizedFooter from "./minimized-footer";

const Footer = () => {
  return (
    <div>
      <div className="lg:hidden">
        <MinimizedFooter />
      </div>
      <div className="hidden lg:block">
        <ExpandedFooter />
      </div>
    </div>
  );
};

export default Footer;

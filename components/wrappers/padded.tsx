import { ReactNode } from "react";

const PaddedWrapper: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return <div className={`px-2 2xl:px-[155px] ${className}`}>{children}</div>;
};

export default PaddedWrapper;

import React from "react";

interface Props {
  children: React.ReactNode;
}
const ScreenWrapper = (props: Props) => {
  return (
    <div className="w-full relative max-w-[1440px] mx-auto min-h-screen bg-dark-3">
      {props.children}
    </div>
  );
};

export default ScreenWrapper;

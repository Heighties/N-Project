import React from "react";
import SideBarLeft from "../SideBars/SideBarLeft/SideBarLeft";
import SideBarRight from "../SideBars/SideBarRight/SideBarRight";

const PageLayout = ({ children, scrollToSection }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/6 hide xl:block">
        <SideBarLeft scrollToSection={scrollToSection} />
      </div>
      <div className="w-full md:w-4/6">{children}</div>
      <div className="w-1/6 hide xl:block">
        <SideBarRight />
      </div>
    </div>
  );
};

export default PageLayout;

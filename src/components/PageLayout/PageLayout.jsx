import React from "react";
import SideBarLeft from "../SideBars/SideBarLeft/SideBarLeft";
import SideBarRight from "../SideBars/SideBarRight/SideBarRight";

const PageLayout = ({ children, scrollToSection }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="xl:w-1/6 hidden xl:flex">
        <SideBarLeft scrollToSection={scrollToSection} />
      </div>
      <div className="w-full xl:w-4/6">{children}</div>
      <div className="xl:w-1/6 hidden xl:flex">
        <SideBarRight />
      </div>
    </div>
  );
};

export default PageLayout;

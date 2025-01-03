import { HugeiconsProps } from "hugeicons-react";
import React from "react";

type Props = {
  icon: React.FC<HugeiconsProps>;
  children: string;
};

const SidebarIcon: React.FC<Props> = ({ icon: Icon, children }) => {
  return (
    <div className="flex flex-col items-center p-3 space-y-3 text-[#a9aeba]">
      <Icon className="h-6 w-6 " />
      <span className="text-xs/[10px]">{children}</span>
    </div>
  );
};

export default SidebarIcon;

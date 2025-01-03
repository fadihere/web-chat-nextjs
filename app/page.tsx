import {
  Comment01Icon,
  Folder01Icon,
  Calendar03Icon,
  Analytics01Icon,
  AllBookmarkIcon,
  Settings02Icon,
} from "hugeicons-react";
import SidebarIcon from "./components/SidebarIcon";
import Divider from "./components/Divider";

export default function Home() {
  return (
    <div className="container mx-auto h-svh">
      <main>
        {/* side bar */}
        <div className="flex flex-col justify-between w-20 h-screen p-4">
          {/* sidebar icons */}
          <div className="items-center flex flex-col">
            <h1>CH</h1>
            <SidebarIcon icon={Comment01Icon}>Home</SidebarIcon>
            <SidebarIcon icon={Folder01Icon}>Work</SidebarIcon>
            <SidebarIcon icon={Folder01Icon}>Meet</SidebarIcon>
            <Divider classProps="w-10 my-4 border-[#a9aeba]" />
            <SidebarIcon icon={Calendar03Icon}>Calendar</SidebarIcon>
            <SidebarIcon icon={Analytics01Icon}>Rating</SidebarIcon>
            <SidebarIcon icon={AllBookmarkIcon}>Saved</SidebarIcon>
          </div>
          <SidebarIcon icon={Settings02Icon}>Settings</SidebarIcon>
        </div>
      </main>
    </div>
  );
}

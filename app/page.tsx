import {
  Comment01Icon,
  Folder01Icon,
  Calendar03Icon,
  Analytics01Icon,
  AllBookmarkIcon,
  Settings02Icon,
  Search01Icon,
} from "hugeicons-react";
import SidebarIcon from "./components/SidebarIcon";
import Divider from "./components/Divider";
import ChatTile from "./components/ChatTile";
import Avatar01 from "@/public/images/avatar_1.jpg";

export default function Home() {
  return (
    <main className="flex flex-row container mx-auto h-svh">
      {/* side bar */}
      <div className="flex flex-col justify-between w-20 h-screen p-4 space-y-2">
        {/* sidebar icons */}
        <div className="items-center flex flex-col">
          <h1 className="text-2xl font-bold text-center pb-14">CH</h1>
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
      {/* chat section */}
      <section className="flex flex-col bg-[#202329] rounded-3xl my-4 p-5 w-1/4 ">
        <div className=" relative flex items-center mx-auto sm:mx-0 mb-3">
          <span className="w-8 absolute left-0 inset-y-0 flex items-center pl-3 text-[#a9aeba] pointer-events-none ">
            <Search01Icon />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-10 py-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6b8afd] focus:border-[#6b8afd] placeholder:text-[#a9aeba] placeholder:font-medium bg-[#2e333d]"
          />
        </div>

        <div className="space-y-3 overflow-y-auto no-scrollbar">
          {[...Array(20)].map((_, index) => (
            <ChatTile
              time="4m"
              imageSrc={Avatar01}
              key={index}
              isEnable={true}
              isPinned={false}
              pendings={0}
              title={"Office chat"}
              description={"I want to ask you to pick my phone call"}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

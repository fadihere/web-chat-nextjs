import React from "react";
import Image, { StaticImageData } from "next/image";
import { PinIcon } from "hugeicons-react";
type Props = {
  isEnable?: boolean;
  isPinned?: boolean;
  pendings?: number;
  title: string;
  description: string;
  time: string;
  imageSrc: StaticImageData;
};

const ChatTile = ({
  isEnable = false,
  isPinned = false,
  title,
  pendings,
  description,
  time,
  imageSrc,
}: Props) => {
  return (
    <div
      className={`flex flex-row p-4  rounded-2xl space-x-2 ${
        isEnable ? "bg-[#2e333d]" : ""
      }`}
    >
      <Image
        alt="avatar"
        className="rounded-xl"
        src={imageSrc}
        width={48}
        height={48}
      />
      <span className="flex flex-col flex-1 overflow-hidden justify-between">
        <span className="flex flex-row justify-between">
          <span className=" text-sm justify-between">{title}</span>
          <span className="text-xs">{time}</span>
        </span>
        <span className="flex flex-row items-center space-x-2">
          <p className="flex-1 text-xs text-gray-400 truncate text-ellipsis">
            {description}
          </p>
          {pendings ? (
            <div className="flex rounded-full bg-[#6b8afd] size-5 justify-center items-center text-xs">
              5
            </div>
          ) : null}
          {isPinned ? <PinIcon size={16} /> : null}
        </span>
      </span>
    </div>
  );
};

export default ChatTile;

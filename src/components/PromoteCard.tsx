"use client";

import { useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

const PromoteCard = () => {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => e.preventDefault());

  return (
    <div className="w-auto flex m-5 gap-5 p-5 rounded-lg shadow-lg bg-white-300">
      <VideoPlayer isPlaying={playing} vdoSrc="/video/getvaccine.mp4" />
      <div className="flex flex-col justify-between items-start">
        <h2 className="text-black text-2xl">Get your vaccine today.</h2>
        <button
          className="text-white bg-pink-500 hover:bg-pink-600 focus:outline-none font-medium rounded-full text-sm px-10 py-4 text-center dark:bg-pink-500 dark:hover:bg-pink-600 w-[60%]"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default PromoteCard;

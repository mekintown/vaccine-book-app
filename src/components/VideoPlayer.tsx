"use client";

import { useEffect, useRef, useState } from "react";

const VideoPlayer = ({
  vdoSrc,
  isPlaying,
}: {
  vdoSrc: string;
  isPlaying: boolean;
}) => {
  const vdoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      vdoRef.current?.play();
    } else {
      vdoRef.current?.pause();
    }
  }, [isPlaying]);
  return (
    <div className="w-[25%]">
      <video
        className="w-[100%]"
        src={vdoSrc}
        ref={vdoRef}
        muted
        loop
        controls
      />
    </div>
  );
};

export default VideoPlayer;

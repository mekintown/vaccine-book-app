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

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      vdoRef.current?.play();
    } else {
      vdoRef.current?.pause();
    }
  }, [isPlaying]);
  return (
    <div className="w-[25%]">
      {isClient ? (
        <video className="w-[100%]" src={vdoSrc} muted loop controls />
      ) : (
        ""
      )}
    </div>
  );
};

export default VideoPlayer;

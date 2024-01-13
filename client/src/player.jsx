import React, { useEffect, useRef } from 'react';
import dashjs from 'dashjs';

const Player = ({ url }) => {
  const videoRef = useRef();

  useEffect(() => {
    const player = dashjs.MediaPlayer().create();
    player.initialize(videoRef.current, url, true);

    return () => {
      player.reset();
    };
  }, [url]);

  return <video ref={videoRef} controls autoPlay />;
};

export default Player;




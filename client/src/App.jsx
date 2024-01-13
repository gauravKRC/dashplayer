import React from 'react';
import Player from './player';

const App = () => {
  // Replace this with your DASH stream URL
  //const dashUrl = 'https://bitdash-a.akamaihd.net/content/sintel/sintel.mpd';
  const dashUrl = 'http://localhost:3000/dash/playlist.mpd';

  return (
    <div>
      <h1>DASH Video Player</h1>
      <Player url={dashUrl} />
    </div>
  );
};

export default App;

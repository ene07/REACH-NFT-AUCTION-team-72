import * as React from 'react';
import './App.css';
import Player from './Player/Player';
import Footer from './Player/Footer';
import Header from './Player/Header';
import Sidebar from './Player/Sidebar';
import MainContent from './Player/MainContent';
import { songsdata } from './Player/audios';
import { useRef, useState, useEffect } from 'react';

const App = () => {
  const [switcher, switchTo] = React.useState(true);
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const handleSwitch = () => switchTo(!switcher);

  const onPlaying = () => {
    
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }


  return (
    <div className="Header">
    <div className='header'><Header/></div>
      <div className='head'>
        <div className="Audio">
          <MainContent/>
          <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
          <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
          <Sidebar/>
        </div>
      </div>
      <div className='footer'><Footer/></div>
    </div>
   
  );
}

export default App;
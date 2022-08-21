import * as React from 'react';
import './App.css';
// import Player from './Player/Player';
// import Footer from './Player/Footer';
// import Header from './Player/Header';
// import Sidebar from './Player/Sidebar';
// import MainContent from './Player/MainContent';
import NFTCreatorView from './components/NFTCreatorView';
import LandingPage from './components/LandingPage';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

// import { songsdata } from './Player/audios';
// import { useRef, useState, useEffect } from 'react';

const CommonButton = (prop) => {
  const {content, handleSwitch} = prop;

  return <Button variant='contained' sx={{
    p: 2, 
    background: "black",
    "&:hover": {
      background: 'tomato',
      transition: 'ease-in-out',
      zIndex: 0
    }
  }} onClick={handleSwitch}>Go to LandingPage</Button>
}

const App = () => {
  const [switcher, switchTo] = React.useState(true);
  // const [songs, setSongs] = useState(songsdata);
  // const [isplaying, setisplaying] = useState(false);
  // const [currentSong, setCurrentSong] = useState(songsdata[1]);

  // const audioElem = useRef();

  // useEffect(() => {
  //   if (isplaying) {
  //     audioElem.current.play();
  //   }
  //   else {
  //     audioElem.current.pause();
  //   }
  // }, [isplaying])

  const handleSwitch = () => switchTo(!switcher);

  const onPlaying = () => {
    
    // const duration = audioElem.current.duration;
    // const ct = audioElem.current.currentTime;

    // setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }


  return (
    <Grid container sx={{background: 'black'}} >
      { 
        switcher? <NFTCreatorView switchMode={<CommonButton content={'Go to Landing page'} handleSwitch={handleSwitch} />}/> : 
          <LandingPage switchMode={<CommonButton content={'Go to view'} handleSwitch={handleSwitch}/>}/> 
      }
    </Grid>
   
  );
}

export default App;



{/* <div className="Header">
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
</div> */}
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Navbar from "./player/Navbar";
import CreatorView from "./pages/CreatorView";

// import { songsdata } from './Player/audios';
// import { useRef, useState, useEffect } from 'react';

// const CommonButton = (prop) => {
//   const {content, handleSwitch} = prop;

//   return <Button variant='contained' sx={{
//     p: 2, 
//     background: "black",
//     "&:hover": {
//       background: 'tomato',
//       transition: 'ease-in-out',
//       zIndex: 0
//     }
//   }} onClick={handleSwitch}>Go to LandingPage</Button>
// }

const App = () => {
  // const [switcher, switchTo] = React.useState(true);
  // const handleSwitch = () => switchTo(!switcher);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        
        <Route exact path="/service" component={Service} />
        <Route exact path="/view" component={CreatorView} />
        <Redirect to="/" />
      </Switch>
    </>
    
  );
}

export default App;


// <div style={{background: 'black'}} >
//       { 
//         switcher? <NFTCreatorView exitCreatorView={handleSwitch} /> : 
//           <LandingPage /> 
//       }
//     </div>
   
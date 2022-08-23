import React from "react";
import Common from "../player/Common";
import mic from "../assets/mic.jpg";

function Home() {
  return (
    <>
      <Common
        name="Welcome to the world of"
        imgsrc={mic}
        visit="/service"
        btname="Connect Wallet"
      />
    </>
  );
}

export default Home;

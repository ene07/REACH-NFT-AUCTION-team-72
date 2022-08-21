import React from "react";
import Common from "./Common";
import web from "../Pictures/img2.png";

function Home() {
  return (
    <>
      <Common
        name="Welcome to the world of"
        imgsrc={web}
        visit="/service"
        btname="Connect Wallet"
      />
    </>
  );
}

export default Home;

import React from "react";
import Card from "./Card";
import img1 from "../Pictures/img1.png";
import img2 from "../Pictures/img2.png";
import img3 from "../Pictures/img3.png";
import img4 from "../Pictures/img4.png";
import img5 from "../Pictures/img5.png";
import img6 from "../Pictures/img6.png";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Audious Nft</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="Happiness " imgsrc={img1} />
              <Card title=" Forever grateful" imgsrc={img2} />
              <Card title=" Home For Chrismass" imgsrc={img3} />
              <Card title=" Road To Destiny" imgsrc={img4} />
              <Card title="Divine" imgsrc={img5} />
              <Card title=" Mantra" imgsrc={img6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

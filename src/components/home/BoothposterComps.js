import React from "react";

import "../../assets/css/Timevenue.css";

const BoothposterComps = () => {
  return (
    <section className="time_venue mb-5">
      <div className="container">
        <div className="event_sponser_inner">
          <div className="event_sponser_item">
            <div className="row Organized-by">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">BOOTH & POSTER LAYOUT</h4>
                <div className="underline1 no-margin"></div>
                <div className="underline2 no-margin"></div>
              </div>
              <div className="organized-image image col-lg-9 col-md-8 text-lg-start text-md-start text-center">
                <img
                  src="./assets/images/logo/poster.jpg"
                  className=" col-12 image-iysa"
                  alt="gallery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoothposterComps;

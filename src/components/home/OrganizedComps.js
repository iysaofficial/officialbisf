import React from "react";

import "../../assets/css/Organized.css";

const OrganizedComps = () => {
  return (
    <section className="event_sponser_area">
      <div className="container">
        <div className="event_sponser_inner">
          <div className="event_sponser_item">
            <div className="row Organized-by">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">ORGANIZED BY :</h4>
                <div className="underline1 no-margin"></div>
                <div className="underline2 no-margin"></div>
              </div>
              <div className="organized-image image col-lg-9 col-md-8 text-lg-start text-md-start text-center">
                <img
                  src="./assets/images/logo/logoYPBI.png"
                  className=" col-6 image-iysa"
                  alt="gallery"
                />
                <img
                  src="./assets/images/logo/warmadewa.png"
                  className="ms-1 col-6 image-iysa"
                  alt="gallery"
                />
              </div>
            </div>
            <div className="row Organized-by">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">SUPPORTED BY :</h4>
                <div className="underline1 no-margin"></div>
                <div className="underline2 no-margin"></div>
              </div>
              <div className="organized-image image col-lg-9 col-md-8 text-lg-start text-md-start text-center">
                <img
                  src="./assets/images/logo/IYSA.png"
                  className=" col-6 image-iysa"
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

export default OrganizedComps;

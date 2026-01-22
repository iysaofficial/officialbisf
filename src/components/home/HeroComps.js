import "../../assets/css/Hero.css";

const HeroComps = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <img src="./assets/images/logo/LOGO BISF.png" alt="" />
          <h1>Bali International Science Fair</h1>
          <p>
            Bali International Science Fair registration is now open! Join{" "}
            <br /> this prestigious event and have an unforgettable experience!
          </p>
          <br />
          <div className="row text-center mx-auto col-lg-12">
            <a className="registration-button m-2 mx-auto d-flex align-items-center justify-content-center" href="/Homeregist">
              Register Now!
            </a>
            <a
              href="https://drive.google.com/file/d/18f5vQ32q7sP-HCeob6gHjQoL8jl22Xf0/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="registration-button m-2 mx-auto d-flex align-items-center justify-content-center"
            >
              Guide Book
            </a>
            <a className="registration-button m-2 mx-auto d-flex align-items-center justify-content-center" href="https://drive.google.com/file/d/1KOtyI8EZO42INO4Q_IeiTmBQCc_8JtTl/view?usp=sharing" rel="noreferrer">
              Terms and Conditions
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComps;

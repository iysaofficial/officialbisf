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
            <a href="/Homeregist" className="registration-button m-2 mx-auto">
              Registration Link!!
            </a>
            <a
              href="https://drive.google.com/file/d/169Eq0CLizBQMClZ6N_znCRmBUgx16CB8/view?usp=sharing"
              target="_blank"
              className="registration-button m-2 mx-auto"
            >
              Guide Book
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComps;

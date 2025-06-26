import "../../assets/css/Hero.css";
import NavbarComp from "../../components/NavbarComps";
import FooterComps from "../../components/FooterComps";

const Listwinner = () => {
  return (
    <>
      <NavbarComp />
      <section className="hero-section">
        <div className="hero-container">
          <img src="./assets/images/logo/LOGO BISF.png" alt="" />
          <h1>List of Winner</h1>
          {/* <p>
            Bali International Science Fair registration is now open! Join{" "}
            <br /> this prestigious event and have an unforgettable experience!
          </p> */}
          <br />
          <div className="row text-center mx-auto col-lg-5">
            <a
              href="/Lowkategori2025"
              className="registration-button m-2 mx-auto"
            >
              List of Winner 2025
            </a>
            {/* <a
              href="https://drive.google.com/file/d/169Eq0CLizBQMClZ6N_znCRmBUgx16CB8/view?usp=sharing"
              target="_blank"
              className="registration-button m-2 mx-auto"
            >
              Guide Book
            </a> */}
          </div>
        </div>
      </section>
      <FooterComps />
    </>
  );
};

export default Listwinner;

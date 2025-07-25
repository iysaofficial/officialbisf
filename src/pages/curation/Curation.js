import "../../assets/css/Hero.css";
import NavbarComp from "../../components/NavbarComps";
import FooterComps from "../../components/FooterComps";

const Curation = () => {
  return (
    <>
      <NavbarComp />
      <section className="hero-section">
        <div className="hero-container">
          <img src="./assets/images/logo/LOGO BISF.png" alt="" />
          <h1>Curation</h1>
          {/* <p>
            Bali International Science Fair registration is now open! Join{" "}
            <br /> this prestigious event and have an unforgettable experience!
          </p> */}
          <br />
          <div className="row text-center mx-auto col-lg-5">
            <a
              href="https://drive.google.com/drive/folders/1ZPaNsj7gVP82rUubypuYwy_r2YfR94Ua?usp=sharing"
              className="registration-button m-2 mx-auto"
            >
              Curation 2025
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

export default Curation;

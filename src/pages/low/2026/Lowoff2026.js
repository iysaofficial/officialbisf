import "../../../assets/css/Hero.css";
import NavbarComp from "../../../components/NavbarComps";
import FooterComps from "../../../components/FooterComps";

const Lowoff2026 = () => {
  return (
    <>
      <NavbarComp />
      <section className="hero-section">
        <div className="hero-container">
          <img src="./assets/images/logo/LOGO BISF.png" alt="" />
          <h1>List of Winner 2026</h1>
          {/* <p>
            Bali International Science Fair registration is now open! Join{" "}
            <br /> this prestigious event and have an unforgettable experience!
          </p> */}
          <br />
          <div className="row text-center mx-auto col-lg-5">
            <a
              href="https://drive.google.com/file/d/1vwrzvGrZioBOYwouYqWJ6MrubjmSqjM2/view?usp=sharing"
              className="registration-button m-2 mx-auto"
            >
              University
            </a>
            <a
              href="https://drive.google.com/file/d/1cRihrVi2bFNIiyxvxXGsEzNroThHvk0U/view?usp=sharing"
              className="registration-button m-2 mx-auto"
            >
              Secondary School
            </a>
            <a
              href="https://drive.google.com/file/d/1IG4bHHIA-a6rQQrQt4HqNCO7VSG3-maO/view?usp=sharing"
              className="registration-button m-2 mx-auto"
            >
              Elementary
            </a>
            {/* <a
              href="#"
              className="registration-button m-2 mx-auto"
            >
              Elementary
            </a> */}
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

export default Lowoff2026;

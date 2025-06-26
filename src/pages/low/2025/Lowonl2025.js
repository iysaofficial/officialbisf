import "../../../assets/css/Hero.css";
import NavbarComp from "../../../components/NavbarComps";
import FooterComps from "../../../components/FooterComps";

const Lowonl2025 = () => {
  return (
    <>
      <NavbarComp />
      <section className="hero-section">
        <div className="hero-container">
          <img src="./assets/images/logo/LOGO BISF.png" alt="" />
          <h1>List of Winner 2025</h1>
          {/* <p>
            Bali International Science Fair registration is now open! Join{" "}
            <br /> this prestigious event and have an unforgettable experience!
          </p> */}
          <br />
          <div className="row text-center mx-auto col-lg-5">
            <a
              href="https://drive.google.com/file/d/10DLveyr3JCa2ozXgs10zxA60ymQCvbGz/view?usp=sharing"
              className="registration-button m-2 mx-auto"
            >
              University
            </a>
            <a
              href="https://drive.google.com/file/d/1dDP3-nk1VeJ2p_AgfiMwTGfD9_14a_V8/view?usp=sharing"
              className="registration-button m-2 mx-auto"
            >
              Senior High School
            </a>
            <a
              href="hhttps://drive.google.com/file/d/1plUJXvTb5b4MiFnYW3fg2JVZbXJVrQqA/view?usp=sharing"
              className="registration-button m-2 mx-auto"
            >
              Junior High School
            </a>
            <a
              href="https://drive.google.com/file/d/1foELRII8w1Mprct054hytyc26L_TZatu/view?usp=sharing"
              className="registration-button m-2 mx-auto"
            >
              Elementary
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

export default Lowonl2025;

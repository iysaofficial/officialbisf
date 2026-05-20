import Navigation from "../../components/NavbarComps";
import Footer from "../../components/FooterComps";
import '../../assets/css/Registration.css'
// Terms imports removed - registration closed
// import { internationalOfflineTerms, internationalOnlineTerms } from "../../pages/data/terms";
import { useState} from "react";
import { Link } from "react-router-dom";

function HomeInter() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [redirectLink, setRedirectLink] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [termsContent, setTermsContent] = useState("");

  // handleOpenModal removed - registration closed
  // const handleOpenModal = (link, terms) => {
  //   setRedirectLink(link);
  //   setTermsContent(terms);
  //   setTermsAccepted(false);
  //   setShowModal(true);
  // };

  const handleViewTerms = () => {
    window.open("https://drive.google.com/file/d/1KOtyI8EZO42INO4Q_IeiTmBQCc_8JtTl/view?usp=sharing", "_blank");
  };

  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true"); // Menyimpan status setuju di sessionStorage
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Please agree to the Terms & Conditions to proceed.");
    }
  };

  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM FOR INTERNATIONAL PARTICIPANTS
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Categories Competition for Registration BISF 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            {/* <button
              type="button"
              className="btn btn-action text-center me-lg-5"
              onClick={() =>
                handleOpenModal("/interonline", internationalOnlineTerms)
              }
            >
              Online Competition{" "}<i className="fa-solid fa-earth-americas"></i>
            </button>
            <button
              type="button"
              className="btn btn-action text-center me-lg-5"
              onClick={() =>
                handleOpenModal("/interoffline", internationalOfflineTerms)
              }
            >
              Offline Competition{" "}<i className="fa-solid fa-earth-americas"></i>
            </button> */}
            <button
              type="button"
              className="btn btn-action text-center me-lg-5"
              // onClick={() =>
              //   handleOpenModal("/interonline", internationalOnlineTerms)
              // }
            >
              Close Registration{" "}<i className="fa-solid fa-earth-americas"></i>
            </button>
            <button
              type="button"
              className="btn btn-action text-center me-lg-5"
              // onClick={() =>
              //   handleOpenModal("/interoffline", internationalOfflineTerms)
              // }
            >
              Close Registration{" "}<i className="fa-solid fa-earth-americas"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Modal untuk Terms & Conditions */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Terms & Conditions</h2>
              <button onClick={() => setShowModal(false)} className="modal-close-btn">&times;</button>
            </div>
            <div className="modal-body">
              {termsContent}
              <p>
                Please review the terms and conditions carefully before proceeding.
              </p>
            </div>
            <div className="modal-footer">
              <div className="terms-agreement">
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                </div>
                <label htmlFor="terms">
                  I have read and agree to the{" "}
                  <Link onClick={(e) => { e.preventDefault(); handleViewTerms(); }}>
                    Terms & Conditions
                  </Link>.
                </label>
              </div>
              <div className="modal-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleAccept}
                  disabled={!termsAccepted}
                >
                  Accept & Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default HomeInter;

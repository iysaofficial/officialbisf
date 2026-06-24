import Navigation from "../../components/NavbarComps";
import Footer from "../../components/FooterComps";
import '../../assets/css/Registration.css'

function CertSupervisor2026() {
  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                CERTIFICATE SUPERVISOR 2026
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Certificate Supervisor Category
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a
              className="btn btn-action text-center me-lg-5 m-2"
              href="https://drive.google.com/drive/folders/12_-D3mlChGcbATpmjDAWF4ypgHD0IIwx?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Certificate Supervisor 2026 Online <i className="fa-solid fa-globe"></i>
            </a>
            {/* <a
              className="btn btn-action text-center me-lg-5 m-2"
              href="https://drive.google.com/drive/folders/12_-D3mlChGcbATpmjDAWF4ypgHD0IIwx?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Certificate Supervisor 2026 Offline <i className="fa-solid fa-building"></i>
            </a> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CertSupervisor2026;

import { useEffect } from "react";
import Navigation from "../../components/NavbarComps";
import Footer from "../../components/FooterComps";
import '../../assets/css/Registration.css'
import { usePendaftaran, pasangFormulir, formatTanggal } from "../../lib/pendaftaran";

/**
 * Halaman pendaftaran BISF.
 *
 * Saat togel di dasbor IYSA menyala, formulir pendaftaran dasbor (daftar.js)
 * dipasang di sini — tim, pembimbing, dan tagihan langsung masuk dasbor.
 * Saat mati, yang tampil keterangan, bukan tombol mati.
 */
function HomeRegist() {
  const { memuat, identitas, keadaan } = usePendaftaran();
  const tahun = identitas?.tahun ?? "";

  useEffect(() => {
    if (keadaan === "buka") pasangFormulir();
  }, [keadaan]);

  return (
    <>
      <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                {keadaan === "buka"
                  ? `Registration for BISF ${tahun} is open`
                  : `Registration BISF ${tahun}`}
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center m-5">
            {memuat ? (
              <p className="m-2">Loading registration information…</p>
            ) : keadaan === "buka" ? (
              <div
                data-iysa-daftar="bisf"
                data-iysa-bahasa="en"
                style={{ maxWidth: "44rem", margin: "0 auto", textAlign: "left" }}
              />
            ) : (
              <p className="mx-auto text-center m-2">
                {keadaan === "belum"
                  ? `Registration is not open yet${identitas?.pendaftaran_buka ? ` — it opens on ${formatTanggal(identitas.pendaftaran_buka)}` : ""}. Please check back later.`
                  : keadaan === "tutup"
                  ? "Registration for this edition is closed. Follow Instagram @iysa_official for the next edition."
                  : "Registration information could not be loaded. Please try again in a moment."}
              </p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;

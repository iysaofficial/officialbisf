import "../../assets/css/Hero.css";
import { usePendaftaran } from "../../lib/pendaftaran";

/**
 * Tombol hero mengikuti dasbor IYSA: "Register Now!" hanya saat togel
 * Pendaftaran edisi menyala, Guide Book + Terms hanya bila guidebook sudah
 * diterbitkan. Tahun "Coming Soon" = tahun edisi yang di-pin.
 */
const HeroComps = () => {
  const { memuat, identitas, keadaan, guidebook } = usePendaftaran();
  const tahun = identitas?.tahun ?? "";
  const tombol = "registration-button m-2 mx-auto d-flex align-items-center justify-content-center";
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <img src="./assets/images/logo/LOGO BISF.png" alt="" />
          <h1>Bali International Science Fair</h1>
          <p>
            {keadaan === "buka" ? (
              <>Bali International Science Fair {tahun} registration is now open! Join{" "}
              <br /> this prestigious event and have an unforgettable experience!</>
            ) : (
              <>Join Bali International Science Fair{tahun ? ` ${tahun}` : ""}, a prestigious event{" "}
              <br /> for young scientists to showcase their research and innovation.</>
            )}
          </p>
          <br />
          <div className="row text-center mx-auto col-lg-12">
            {memuat ? null : keadaan === "buka" ? (
              <a className={tombol} href="/Homeregist">Register Now!</a>
            ) : (
              <button className={tombol} type="button" disabled>
                Coming Soon{tahun ? ` ${tahun}` : ""}
              </button>
            )}
            {guidebook && (
              <>
                <a href={guidebook.url} target="_blank" rel="noreferrer" className={tombol} data-iysa-panduan="BISF">
                  Guide Book
                </a>
                <a href={guidebook.url} target="_blank" rel="noreferrer" className={tombol} data-iysa-panduan="BISF" data-iysa-panduan-jenis="tnc">
                  Terms and Conditions
                </a>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComps;

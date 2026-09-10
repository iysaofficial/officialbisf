import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Hero.css";
import NavbarComp from "../../components/NavbarComps";
import FooterComps from "../../components/FooterComps";
import { ambilEdisi, ambilBerkasKurasi } from "../../lib/kurasiApi";

const Curation = () => {
  /*
   * Edisi yang BENAR-BENAR punya berkas terbit.
   *
   * `/edisi` menjawab edisi apa saja yang ada, tapi tidak semuanya sudah
   * punya berkas yang ditandai boleh disiarkan — BISF 2027 misalnya sudah
   * ada di dasbor dan masih kosong. Tombolnya karena itu baru muncul setelah
   * isinya dipastikan ada.
   *
   * Kalau API-nya tidak terjangkau, daftarnya tetap kosong dan tautan Drive
   * di bawah tetap tampil. Halaman ini tidak boleh ikut mati hanya karena
   * bagian barunya gagal dimuat.
   */
  const [edisiApi, setEdisiApi] = useState([]);

  useEffect(() => {
    let batal = false;
    (async () => {
      try {
        const semua = await ambilEdisi();
        const berisi = [];
        for (const e of semua) {
          if (!e.tahun) continue;
          const butir = await ambilBerkasKurasi(e.tahun).catch(() => []);
          if (butir.length > 0) berisi.push(e.tahun);
        }
        if (!batal) setEdisiApi(berisi);
      } catch {
        /* biarkan kosong — tautan Drive tetap tampil */
      }
    })();
    return () => { batal = true; };
  }, []);

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
            {/*
              Edisi yang berkasnya sudah ada di dasbor dirender dari sana.

              Tahunnya TIDAK ditulis di sini: `/edisi` yang menjawab edisi apa
              saja yang ada, dan tiap edisi baru muncul sendiri tanpa satu pun
              baris di repositori ini disunting. Yang belum punya berkas
              terbit tidak ditampilkan — tombol yang membuka halaman kosong
              lebih buruk daripada tombol yang tidak ada.
            */}
            {edisiApi.map((tahun) => (
              <Link
                key={tahun}
                to={`/Curation/${tahun}`}
                className="registration-button m-2 mx-auto"
              >
                Curation {tahun}
              </Link>
            ))}

            {/*
              Edisi 2025 dan sebelumnya tetap menunjuk Drive. Berkasnya tidak
              pernah masuk dasbor, jadi memindahkan tautannya berarti
              menghilangkannya.
            */}
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

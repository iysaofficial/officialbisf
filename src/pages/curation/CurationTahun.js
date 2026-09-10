import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/css/Kurasi.css";
import NavbarComp from "../../components/NavbarComps";
import FooterComps from "../../components/FooterComps";
import { ambilBerkasKurasi, berkasTampil } from "../../lib/kurasiApi";

/**
 * Berkas kurasi satu edisi, dibaca langsung dari dasbor.
 *
 * ── Kenapa kartu, bukan daftar bernomor butir ─────────────────────────────
 *
 * Versi pertama meniru bentuk dasbor: dikelompokkan per butir, bernomor,
 * tiap baris berlabel "Administrasi". Itu bahasa kurator. Pengunjung situs
 * tidak menilai butir; ia mencari satu dokumen dan ingin tahu apakah ada.
 *
 * Karena itu judul kartunya nama dokumennya — "SK Pembentukan Tim Juri" —
 * bukan nama berkasnya. Nama berkas tetap ditampilkan, kecil, karena itu yang
 * akan orang lihat setelah mengunduh.
 *
 * ── Kenapa hanya dokumentasi yang dilencanai ──────────────────────────────
 *
 * Sepuluh dari sebelas berkas administrasi, jadi lencana "Administrasi" pada
 * hampir semuanya tidak memisahkan apa pun — ia cuma sepuluh kata yang sama
 * berulang. Yang membedakan justru yang sedikit.
 */
const CurationTahun = () => {
  const { tahun } = useParams();
  const [berkas, setBerkas] = useState(null);
  const [galat, setGalat] = useState(false);

  /*
   * Jarak dari atas diukur, bukan ditebak lewat breakpoint.
   *
   * `header` situs ini `position: fixed`, dan tingginya berubah TIDAK
   * monoton terhadap lebar layar: di bawah 1400px ia hamburger satu baris
   * pendek, di sekitar 1400 seluruh menu tampil tapi belum muat sehingga
   * membungkus jadi dua baris — paling tinggi justru di sini — lalu di atas
   * ~1800 muat satu baris lagi dan memendek kembali.
   *
   * Nilai tetap karena itu selalu salah di salah satu dari ketiganya:
   * menutupi judul di satu lebar, atau menyisakan ruang kosong sepertiga
   * layar di lebar lain. Mengukurnya benar di ketiganya, dan tetap benar
   * kalau suatu hari ada menu ditambahkan.
   */
  const wadah = useRef(null);

  useEffect(() => {
    const kop = document.querySelector("header");
    if (!kop || !wadah.current) return undefined;

    const sesuaikan = () => {
      if (wadah.current) {
        wadah.current.style.paddingTop = `${kop.offsetHeight + 48}px`;
      }
    };
    sesuaikan();

    const pengamat = new ResizeObserver(sesuaikan);
    pengamat.observe(kop);
    window.addEventListener("resize", sesuaikan);
    return () => {
      pengamat.disconnect();
      window.removeEventListener("resize", sesuaikan);
    };
  }, []);

  useEffect(() => {
    let batal = false;
    setBerkas(null);
    setGalat(false);
    ambilBerkasKurasi(tahun)
      .then((d) => { if (!batal) setBerkas(berkasTampil(d)); })
      .catch(() => { if (!batal) setGalat(true); });
    return () => { batal = true; };
  }, [tahun]);

  return (
    <>
      <NavbarComp />
      <section className="kurasi-section" ref={wadah}>
        <div className="kurasi-container">
          <Link to="/Curation" className="kurasi-kembali">← Curation</Link>
          <h1>Curation {tahun}</h1>

          {berkas === null && !galat && <p className="kurasi-kabar">Loading…</p>}

          {galat && (
            <p className="kurasi-kabar">
              The document list could not be loaded. Please try again shortly.
            </p>
          )}

          {/*
            Daftar kosong dan gagal memuat sengaja dibedakan. Keduanya
            menampilkan halaman tanpa berkas, tapi yang satu berarti "belum
            ada" dan yang lain "coba lagi" — pengunjung yang disuruh menunggu
            untuk sesuatu yang memang belum ada akan menunggu selamanya.
          */}
          {berkas !== null && berkas.length === 0 && (
            <p className="kurasi-kabar">No documents have been published for this edition yet.</p>
          )}

          {berkas !== null && berkas.length > 0 && (
            <>
              <p className="kurasi-ringkas">{berkas.length} documents</p>
              <div className="kurasi-kartu-grid">
                {berkas.map((f, i) => {
                  const Kartu = f.url ? "a" : "div";
                  const props = f.url
                    ? { href: f.url, target: "_blank", rel: "noreferrer" }
                    : {};
                  return (
                    <Kartu className="kurasi-kartu" key={i} {...props}>
                      {f.jenis === "dokumentasi" && (
                        <span className="kurasi-badge">Dokumentasi</span>
                      )}
                      <h2>{f.slot}</h2>
                      <p className="kurasi-nama">{f.nama}</p>
                    </Kartu>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
      <FooterComps />
    </>
  );
};

export default CurationTahun;

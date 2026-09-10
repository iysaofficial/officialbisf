import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/css/Hero.css";
import "../../assets/css/Kurasi.css";
import NavbarComp from "../../components/NavbarComps";
import FooterComps from "../../components/FooterComps";
import { ambilBerkasKurasi } from "../../lib/kurasiApi";

/**
 * Berkas kurasi satu edisi, dibaca langsung dari dasbor.
 *
 * ── Kenapa tidak disalin ke situs ini ─────────────────────────────────────
 *
 * Edisi sebelumnya memakai tautan Google Drive yang ditulis di kode. Cara itu
 * bekerja tepat satu kali: begitu ada berkas ditambahkan, diganti, atau
 * ditarik, situsnya tidak ikut tahu — dan yang membetulkannya harus orang
 * yang bisa deploy. Di sini daftarnya datang dari sumber yang sama dengan
 * yang dipakai proses kurasi itu sendiri.
 *
 * ── Kenapa dikelompokkan per butir ────────────────────────────────────────
 *
 * Kurator memeriksa satu butir pada satu waktu, dan itu pula bentuk yang
 * dicari pengunjung: "mana berkas untuk butir Juri", bukan satu daftar rata
 * berisi puluhan nama berkas yang harus dibaca satu per satu.
 */
const CurationTahun = () => {
  const { tahun } = useParams();
  const [butir, setButir] = useState(null);
  const [galat, setGalat] = useState(false);

  useEffect(() => {
    let batal = false;
    setButir(null);
    setGalat(false);
    ambilBerkasKurasi(tahun)
      .then((d) => { if (!batal) setButir(d); })
      .catch(() => { if (!batal) setGalat(true); });
    return () => { batal = true; };
  }, [tahun]);

  const jumlah = (butir ?? []).reduce((n, b) => n + b.berkas.length, 0);

  return (
    <>
      <NavbarComp />
      <section className="kurasi-section">
        <div className="kurasi-container">
          <Link to="/Curation" className="kurasi-kembali">← Curation</Link>
          <h1>Curation {tahun}</h1>

          {butir === null && !galat && <p className="kurasi-kabar">Loading…</p>}

          {galat && (
            <p className="kurasi-kabar">
              The document list could not be loaded. Please try again shortly.
            </p>
          )}

          {/*
            Daftar kosong dan gagal memuat sengaja dibedakan. Keduanya
            menampilkan halaman tanpa berkas, tapi yang satu berarti "belum
            ada" dan yang lain "coba lagi" — dan pengunjung yang disuruh
            menunggu untuk sesuatu yang memang belum ada akan menunggu selamanya.
          */}
          {butir !== null && butir.length === 0 && (
            <p className="kurasi-kabar">No documents have been published for this edition yet.</p>
          )}

          {butir !== null && butir.length > 0 && (
            <>
              <p className="kurasi-ringkas">{jumlah} documents · {butir.length} criteria</p>
              <div className="kurasi-daftar">
                {butir.map((b) => (
                  <div className="kurasi-butir" key={b.nomor}>
                    <h2><span>{b.nomor}</span>{b.butir}</h2>
                    <ul>
                      {b.berkas.map((f, i) => (
                        <li key={i}>
                          <span className={`kurasi-jenis ${f.jenis}`}>{f.jenis}</span>
                          {f.url ? (
                            <a href={f.url} target="_blank" rel="noreferrer">{f.nama}</a>
                          ) : (
                            <span>{f.nama}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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

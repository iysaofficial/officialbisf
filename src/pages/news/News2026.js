import React from "react";
import NavbarComp from "../../components/NavbarComps";
import FooterComps from "../../components/FooterComps";

const newsList2026 = [
  {
    id: 1,
    title: "MTsN 4 Jakarta Selatan Raih Gold Medal di BISF 2026 Lewat Inovasi Herbal Plester Binaplast",
    description:
      "Jakarta (Humas Kanwil Kemenag DKI) --- Tim siswa MTs Negeri 4 Jakarta Selatan yang tergabung dalam BINAPLAST berhasil meraih dua penghargaan sekaligus, yakni medali emas (gold medal) dan Special Award pada ajang Bali International Science Fair (BISF) 2026 yang berlangsung di Universitas Warmadewa, Denpasar, Bali.",
    link: "https://dki.kemenag.go.id/berita/mtsn-4-jakarta-selatan-raih-gold-medal-di-bisf-2026-lewat-inovasi-herbal-plester-binaplast-EbMZY",
    image: "/assets/images/news/12026.jpeg",
    fallbackImage: "https://dki.kemenag.go.id/storage/posts/big/1782178383.jpeg",
  },
  {
    id: 2,
    title: "Siswa SMAN 2 Palangka Raya Harumkan Indonesia, Borong Lima Medali di BISF 2026",
    description:
      "Prestasi membanggakan kembali ditorehkan siswa SMAN 2 Palangka Raya di tingkat internasional. Pada ajang Bali International Science Fair (BISF) 2026 yang berlangsung secara online dan offline, perwakilan sekolah tersebut sukses memborong lima medali sekaligus dari berbagai kategori penelitian.",
    link: "https://www.liputansbm.com/2026/07/siswa-sman-2-palangka-raya-harumkan.html",
    image: "/assets/images/news/22026.jpg",
    fallbackImage:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6D8fQS-JQ6EwsVDHzIyXasRFNIeyv8-Tb2onydoe1cUJ8snBY7iODOCbGsS9Vvq4Fw0hTML_zW_SDGcC24w38P-d87mK2rGA71hsvFTVciDBejrXeCkhmX7887gE0N2AzQNgyJ4-TJp8sTRxNp-NJN3SeJ8NGQnkBzxZcHoVmXpah4nRymJQcxNIjdk3a/s1600/1000774921.jpg",
  },
  {
    id: 3,
    title: "Ecouiet Antar Santri PPI AMF Raih Perak BISF 2026",
    description:
      "Enam santri PPI Abdul Malik Fadjar meraih medali perak BISF 2026 melalui inovasi panel peredam suara ramah lingkungan dari ampas tebu dan sabut kelapa yang dinilai inovatif oleh para juri internasional.",
    link: "https://pwmu.co/ecouiet-antar-santri-ppi-amf-raih-perak-bisf-2026/",
    image: "/assets/images/news/32026.webp",
    fallbackImage: "https://pwmu.co/wp-content/uploads/2026/06/Santri-PPI-AMF-Raih-Perak-BISF-2026-lewat-Ecouiet.webp",
  },
  {
    id: 4,
    title: "MIN 1 Jembrana Raih Emas Internasional, Bawa AI Islami ke Panggung Dunia",
    description:
      "Prestasi membanggakan kembali ditorehkan madrasah binaan Kantor Kementerian Agama Kabupaten Jembrana. Tim MIN 1 Jembrana berhasil meraih medali emas pada ajang Bali International Science Fair (BISF) 2026 lewat inovasi kecerdasan buatan (AI) berbasis Islami.",
    link: "https://mozaik.inilah.com/news/min-1-jembrana-raih-emas-internasional-bawa-ai-islami-ke-panggung-dunia",
    image: "/assets/images/news/42026.jpeg",
    fallbackImage: "https://c.inilah.com/reborn/2026/06/medium_MIN_1_Jembrana_d403777849.jpeg",
  },
  {
    id: 5,
    title: "MTsN 7 Jakarta Raih Dua Medali Emas Internasional di BISF 2026",
    description:
      "Jakarta (Humas MTSN 7 Jakarta) --- Siswa-siswi MTsN 7 Jakarta kembali menorehkan prestasi membanggakan di tingkat internasional. Dua tim penelitian dari MTsN 7 Jakarta berhasil meraih Gold Medal dalam ajang Bali International Science Fair (BISF) 2026 pada kategori Innovation Science.",
    link: "https://dki.kemenag.go.id/berita/mtsn-7-jakarta-raih-dua-medali-emas-internasional-d8FC6",
    image: "/assets/images/news/52026.jpeg",
    fallbackImage: "https://dki.kemenag.go.id/storage/posts/big/1782288048.jpeg",
  },
];

const News2026 = () => {
  return (
    <>
      <NavbarComp />
      <br />
      <br />
      <br />
      <br />
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <h2>News 2026</h2>
          </div>
        </div>
      </div>

      <section className="news-section py-5">
        <div className="container">
          {/* Tombol Navigasi Tahun News */}
          <div className="d-flex justify-content-center gap-3 mb-5">
            <a
              href="/news2026"
              className="btn default-btn text-decoration-none shadow-sm"
              style={{
                backgroundColor: "#0b2046",
                color: "#fff",
                padding: "10px 28px",
                borderRadius: "8px",
                fontWeight: "600",
              }}
            >
              News 2026
            </a>
            <a
              href="/NewsAlllist"
              className="btn default-btn text-decoration-none shadow-sm"
              style={{
                backgroundColor: "#e2e8f0",
                color: "#333",
                padding: "10px 28px",
                borderRadius: "8px",
                fontWeight: "600",
              }}
            >
              News 2025
            </a>
          </div>

          {/* Grid Cards Berita */}
          <div className="row g-4 justify-content-center">
            {newsList2026.map((news) => (
              <div key={news.id} className="col-12 col-md-6 col-lg-4 d-flex">
                <div
                  className="card w-100 shadow-sm border-0 d-flex flex-column h-100"
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "230px",
                      overflow: "hidden",
                      backgroundColor: "#f8f9fa",
                      position: "relative",
                    }}
                  >
                    <img
                      src={news.image}
                      alt={news.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      onError={(e) => {
                        if (news.fallbackImage && e.target.src !== news.fallbackImage) {
                          e.target.src = news.fallbackImage;
                        }
                      }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column p-4">
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <h5
                        className="card-title fw-bold text-dark mb-3"
                        style={{ fontSize: "1.12rem", lineHeight: "1.45" }}
                      >
                        {news.title}
                      </h5>
                    </a>
                    <p
                      className="card-text text-muted mb-4"
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        flexGrow: 1,
                      }}
                    >
                      {news.description}
                    </p>
                    <div className="mt-auto pt-2">
                      <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn default-btn w-100 text-center"
                        style={{ borderRadius: "8px", padding: "10px 0" }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterComps />
    </>
  );
};

export default News2026;

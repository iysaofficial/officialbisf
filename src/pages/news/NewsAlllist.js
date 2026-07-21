import React from "react";
import NavbarComp from "../../components/NavbarComps";
import FooterComps from "../../components/FooterComps";

const newsList2025 = [
  {
    id: 1,
    title: "MAN 4 South Jakarta made another international achievement in BISF 2025 event",
    description:
      "Jakarta (Public Relations of MAN 4 Jakarta) - MAN 4 South Jakarta once again made brilliant achievements in the international arena. This time, as many as 8 research teams from this superior madrasa won gold and silver medals in the Bali International Science Fair (BISF) 2025 organized by the International Young Scientist Association (IYSA) on June 19-23, 2025.",
    link: "https://dki.kemenag.go.id/berita/man-4-jakarta-selatan-kembali-torehkan-prestasi-internasional-di-ajang-bisf-2025-iYCZM",
    image: "/assets/images/news/12025.jpeg",
  },
  {
    id: 2,
    title: "SMA Gembala Baik wins two golds at 1st Bali International Science Fair 2025",
    description:
      "PONTIANAK POST - Closing the 2024/2025 academic year, Gembala Baik High School students won two gold medals in the International Scientific Writing Competition (LKTI) at the 1st Bali International Science Fair (BISF) 2025. BISF which took place online and offline was organized by Warmadewa University, Denpasar as the host, in collaboration with MILSET ASIA, Yayasan Prestasi Belia Indonesia, BISF Organizing Committee and Indonesian Young Scientist Association (IYSA) on June 11-23, 2025.",
    link: "https://pontianakpost.jawapos.com/metropolis/1466190991/sma-gembala-baik-raih-dua-emas-di-1st-bali-international-science-fair-2025",
    image: "/assets/images/news/22025.webp",
  },
  {
    id: 3,
    title: "Riset Gulma Pantai, Siswa MAN 3 Jembrana Raih Emas di Ajang Sains Internasional",
    description:
      "Tim riset dari Madrasah Aliyah Negeri (MAN) 3 Jembrana, Bali, berhasil meraih medali emas dalam ajang Bali International Science Fair (BISF) 2025 lewat riset berjudul 'Pemanfaatan Tanaman Katang-Katang untuk Mengendalikan Hama Kutu Kebul pada Buah Kakao'. Kompetisi ini diikuti oleh 394 tim dari 16 negara.",
    link: "https://news.schoolmedia.id/tokoh/354/riset-gulma-pantai-siswa-man-3-jembrana-raih-emas-di-ajang-sains-internasional",
    image: "/assets/images/news/32025.png",
    fallbackImage: "https://s3.schoolmedia.id/05-news-sm/uploads/konten/685c62943a68e0.png",
  },
];

const NewsAlllist = () => {
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
            <h2>News 2025</h2>
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
                backgroundColor: "#e2e8f0",
                color: "#333",
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
                backgroundColor: "#0b2046",
                color: "#fff",
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
            {newsList2025.map((news) => (
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

export default NewsAlllist;

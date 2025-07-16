import React from "react";
import NavbarComp from "../../components/NavbarComps";
import FooterComps from "../../components/FooterComps";
const NewsAlllist = () => {
  return (
    <>
    <NavbarComp />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <h2>News 2025</h2>
          </div>
        </div>
      </div>

      <section className="news-section">
        <div className="row mt-5 mb-5">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <img
                  src="../assets/images/news/12025.jpeg"
                  className="card-img-top col-sm-3 mt-2 img-fluid img-responsive"
                  layout="intrinsic"
                  width={400} // Sesuaikan lebar gambar
                  height={100} // Sesuaikan tinggi gambar
                  alt="BANNER-IMG"
                />
                <a href="/news/news1" className="text-decoration-none" legacyBehavior>
                  <h5 className="card-title mt-3 cursor-pointer text-dark">
                    MAN 4 South Jakarta made another international achievement in BISF 2025 event
                  </h5>
                </a>
                <p className="card-text">
                  Jakarta (Public Relations of MAN 4 Jakarta) - MAN 4 South Jakarta once again made brilliant achievements in the international arena. This time, as many as 8 research teams from this superior madrasa won gold and silver medals in the Bali International Science Fair (BISF) 2025 organized by the International Young Scientist Association (IYSA) on June 19-23, 2025.
                </p>
                <a href="https://dki.kemenag.go.id/berita/man-4-jakarta-selatan-kembali-torehkan-prestasi-internasional-di-ajang-bisf-2025-iYCZM" legacyBehavior>
                  <a className="btn default-btn">Read More</a>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <img
                  src="../assets/images/news/22025.webp"
                  className="card-img-top col-sm-3 mt-2 img-fluid img-responsive"
                  layout="intrinsic"
                  width={400} // Sesuaikan lebar gambar
                  height={100} // Sesuaikan tinggi gambar
                  alt="BANNER-IMG"
                />
                <a href="/news/news2" className="text-decoration-none" legacyBehavior>
                  <h5 className="card-title mt-3 cursor-pointer text-dark">
                    SMA Gembala Baik wins two golds at 1st Bali International Science Fair 2025
                  </h5>
                </a>
                <p className="card-text">
                  PONTIANAK POST - Closing the 2024/2025 academic year, Gembala Baik High School students won two gold medals in the International Scientific Writing Competition (LKTI) at the 1st Bali International Science Fair (BISF) 2025.

BISF which took place online and offline was organized by Warmadewa University, Denpasar as the host, in collaboration with MILSET ASIA, Yayasan Prestasi Belia Indonesia, BISF Organizing Committee and Indonesian Young Scientist Association (IYSA) on June 11-23, 2025. The online competition took place on June 11-13, 2025 and the offline competition took place on June 19-23, 2025...
                </p>
                <a href="https://pontianakpost.jawapos.com/metropolis/1466190991/sma-gembala-baik-raih-dua-emas-di-1st-bali-international-science-fair-2025" legacyBehavior>
                  <a className="btn default-btn">Read More</a>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <FooterComps />
    </>
  );
};

export default NewsAlllist;

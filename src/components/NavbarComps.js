import React, { useEffect } from "react";
import $ from "jquery";

import "../assets/css/Navbar.css";

const NavbarComp = () => {
  useEffect(() => {
    // jquery for toggle dropdown menus
    $(document).ready(function () {
      // toggle sub-menus
      $(".sub-btn").click(function () {
        $(this).next(".sub-menu").slideToggle();
      });
      // toggle more-menus
      $(".more-btn").click(function () {
        $(this).next(".more-menu").slideToggle();
      });
    });

    // javascript for the responsive navigation menu
    var menu = document.querySelector(".menu");
    var menuBtn = document.querySelector(".menu-btn");
    var closeBtn = document.querySelector(".close-btn");

    menuBtn.addEventListener("click", () => {
      menu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  }, []);

  return (
    <>
      <header>
        <a href="/">
          <img
            className="logo-nav"
            src="./assets/images/logo/LOGO BISF.png"
            alt=""
          />
        </a>
        <div className="navigation">
          <ul className="menu">
            <div className="close-btn"></div>
            <li className="menu-item fw-bold">
              <a href="/">Home</a>
            </li>
            <li className="menu-item fw-bold">
              <a href="/#about">About</a>
            </li>
            {/* <li className='menu-item'><a href="/#category-main-section">Category</a></li> */}
            {/* <li className='menu-item'><a href="#">FAQ</a></li> */}
            {/* <li className='menu-item'><a href="#category">Kategori</a></li> */}
            {/* <li className='menu-item'><a href="#contact">Kontak</a></li> */}
            {/* <li className='menu-item'><a href="https://drive.google.com/drive/folders/1l_bCazIZmdtOSUjAuBAgXTg7YEBTixPY" target='_blank'>Certificate Supervisor</a></li> */}
            {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Media Coverage <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/16x4XVuEVbvPVqlVdl5FG1t-R_OnBLOJM/view?usp=sharing" target='_blank'>Press Release 2024</a></li>
                        </ul>
                    </li>
                    <li className='menu-item'>
                        <a className='sub-btn' href="#">List of Winner <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1PEEYeGt0SWTz0dMRZgRysm-uHroHmp5O/view?usp=sharing" target='_blank'>Daftar Pemenang 2024</a></li>
                        </ul>
                    </li>

                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Gallery <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/u/0/folders/1hGdRrLTdK1QvfM_S5b9abJ64Ok8JahVE" target='_blank'>2024</a></li>
                        </ul>
                    </li> */}
            <li className="menu-item fw-bold">
              <a className="sub-btn" href="#">
                Certifikat Supervisor <i className="fas fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="sub-item">
                  <a
                    href="https://drive.google.com/drive/folders/1f4WcyJc4bcK1Qy1KwegeLi3G8TfCtsMI?usp=drive_link"
                    target="_blank"
                  >
                    Certificate Supervisor 2025
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item fw-bold">
              <a className="sub-btn" href="#">
                Media Coverage <i className="fas fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="sub-item">
                  <a
                    href="/NewsAlllist"
                  >
                    News
                  </a>
                </li>
                <li className="sub-item">
                  <a
                    href="https://drive.google.com/drive/folders/1Sb6K7MZU7lvhv--ghfWzdFB7sWr0dIA5?usp=drive_link"
                    target="_blank"
                  >
                    Press Release 2025
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item fw-bold">
              <a className="sub-btn" href="#">
                Gallery <i className="fas fa-angle-down"></i>
              </a>
              <ul className="sub-menu">
                <li className="sub-item">
                  <a
                    href="https://drive.google.com/drive/folders/1SZo9bXwGuk25rq5GYWfi2Vfww60NSenR?usp=drive_link"
                    target="_blank"
                  >
                    Gallery 2025
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item fw-bold">
              <a href="/listofwinner">List of Winner</a>
            </li>

            <li className="menu-item fw-bold">
              <a href="/Curation">Curation</a>
            </li>

            <li className="menu-item fw-bold">
              <a href="/Faq">Faq</a>
            </li>
            <li className="menu-item fw-bold">
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="menu-btn"></div>
      </header>
    </>
  );
};

export default NavbarComp;

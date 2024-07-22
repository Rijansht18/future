import React, { useEffect, useState } from 'react';

function Header() {

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        document.querySelector('.top').classList.add('hidden');
        document.querySelector('.maintop').classList.add('fixed-top');
      } else {
        document.querySelector('.top').classList.remove('hidden');
        document.querySelector('.maintop').classList.remove('fixed-top');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <section className='top py-2 bg-dark'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 text-white fw-lighter">
              <div className="row pt-1">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                  <p><i className="bi bi-hourglass-bottom" /> Opening hours: 8:00 am - 11:30 pm</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                  <p><i className="bi bi-telephone-fill" /> Call for reservation: +1.800.123.4567</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                  <p><i className="bi bi-envelope-fill" /> pizza@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 text-white">
              <div className='d-flex justify-content-around mt-2'>
                <i className="bi bi-facebook" />
                <i className="bi bi-youtube" />
                <i className="bi bi-linkedin" />
                <i className="bi bi-skype" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-3 maintop bg-light'>
        <div className="">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="#"><img src={'./image/logo.png'} alt="" className="img-fluid" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="offcanvas offcanvas-start w-75" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Future</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 fw-semibold fs-5">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#menu">Menu</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#reservation">Reservation</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
        <button className='upbtn' onClick={scrollToTop}>
          <i className="bi bi-chevron-up" />
        </button>
    </>
  );
}

export default Header;

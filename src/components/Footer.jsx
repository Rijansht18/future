import React from 'react';

function Footer() {
  return (
    <>
      <footer className="">
        <section className="footercover py-4">
          <div className="container">
            <div className="row text-white border-bottom d-flex justify-content-center">
              <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center gap-5">
                <div>
                  <img src={'./image/footer_logo.png'} alt="" className="img-fluid" />
                </div>
                <div>
                  <p className="text-center">Donec id elit non mi porta gravida at eget metus. Donec id elit non Vestibulum id ligula porta felis euism od semper. Nulla vitae elit libero</p>
                </div>
                <div className="d-flex gap-2">
                  <i className="bi bi-facebook" />
                  <i className="bi bi-twitter" />
                  <i className="bi bi-linkedin" />
                  <i className="bi bi-google" />
                </div>
              </div>
              <div className="col-lg-3 mt-4 d-flex flex-column justify-content-center align-items-center gap-5 border-start">
                <h4>Opening Hours</h4>
                <ul className="list-unstyled text-center">
                  <li>MON - FRI : ............. 10 am - 11 pm</li>
                  <li>SATURDAY : ........... 10 am - 11 pm</li>
                  <li>SUNDAY : ............... 10 am - 12 pm</li>
                </ul>
                <a href="#">
                  <button className="rounded-5 py-2 px-3 bg-transparent border text-white"> Free Quote</button>
                </a>
              </div>
              <div className="col-lg-3 mt-4 d-flex flex-column justify-content-center align-items-center gap-5 border-start">
                <h4>Contact Us Today</h4>
                <div className="text-center">
                  <p>Call for reservation : + 1.800.123.456783</p>
                  <p>send email : pizza@example.com</p>
                  <p>Visit Us : 123 Fake London 1235 UK</p>
                </div>
                <form action className="footerform mb-3">
                  <input type="email" placeholder="E-mail" className="form-control" />
                  <i className="bi bi-envelope-fill" />
                </form>
              </div>
            </div>
            <div className="row text-white pt-4">
              <div className="col-lg-6 col-md-12"><p>© Copyright 2024-25 By <span className="text-danger">Webstrot</span> - All Right Reserved.</p></div>
              <div className="col-lg-6 col-md-12 d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center align-items-center gap-1">
                <a href="#" className="text-decoration-none text-white footertext">Terms & Conditions</a>
                <p className="text-white">|</p>
                <a href="#" className="text-decoration-none text-white footertext">Privacy Policy</a>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;

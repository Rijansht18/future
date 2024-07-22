import React from 'react';
import { services1 } from '../Data';

function Services() {
  return (
    <>
      <section className='services' id='services'>
        <div className="servicescover py-5">
          <div className="container">
            <div className="row text-center text-white">
              <div className="col-lg-12">
                <h1>OUR SERVICES</h1>
              </div>
              <div className="col-lg-12">
                <h1 className='text-danger'>Our Friendly Services</h1>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <p className="fs-6"> This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
              </div>
              <div className="col-lg-2"></div>
            </div>
            <div className="row mt-4 g-5">
              {services1.map((a) => (
                <div className="col-lg-4 d-flex justify-content-center text-white" key={a.id}>
                  <div className="service-box py-3">
                    <div className="row">
                      <div className="col-2">
                        <i className={a.icon} />
                      </div>
                      <div className="col-9">
                        <h5>{a.title}</h5>
                        <p>{a.disc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

import React from 'react'

function Reservation() {
  return (
    <>
      <section className='chefsimg' id='reservation'>
      <div className="chefscover py-4 ">
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-lg-12">
              <h1>RESERVATION</h1>
            </div>
            <div className="col-lg-12">
              <h1 className='text-danger'>Take A Reservation</h1>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum aucto</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" className="form-control mb-3" placeholder="FullName" />
                </div>
                <div className="col-lg-6">
                  <input type="email" className="form-control mb-3" placeholder="Email" />
                </div>
                <div className="col-lg-6">
                  <input type="date" className="form-control mb-3" placeholder="Date" />
                </div>
                <div className="col-lg-6">
                  <input type="number" className="form-control mb-3" placeholder="Phone No" />
                </div>
                <div className="col-lg-6">
                  <input type="time" className="form-control mb-3" placeholder="Time" />
                </div>
                <div className="col-lg-6">
                  <input type="text" className="form-control mb-3" placeholder="No of Person" />
                </div>
                <div className="col-lg-12">
                  <textarea className='resmsg form-control mb-3' placeholder='Message'></textarea>
                </div>  
                <div className="col-lg-12 text-center">
                  <button className='coubtn3'>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Reservation

import React from 'react'

function ContactUs() {
  return (
    <>
      <section className="contactbg py-5" id='contact' >
            <div className="container">
              <div className="row text-center text-dark">
                <div className="col-lg-12">
                  <h1>CONTACT US</h1>
                </div>
                <div className="col-lg-12">
                  <h1 className='text-danger'>Send Us A Message</h1>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquets for Lorem Ipsum Proin gravid.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <form className='contactform' action="">
                    <div className="row mt-4">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Full Name"  />
                        <input type="email" placeholder="Email Address"  />
                        <input type="text" placeholder="Phone Number"  />
                      </div>
                      <div className="col-lg-6">
                        <textarea className=" contacttext" name="" id="" placeholder='Type Your Message'></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 d-flex justify-content-center">
                        <div className="coubtn3 text-center py-1">Send Message</div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28266.728220913443!2d85.393408!3d27.675852799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1721152784086!5m2!1sen!2snp"  height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default ContactUs

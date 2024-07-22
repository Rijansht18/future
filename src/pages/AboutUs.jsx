import React from 'react'
import { about, aboutphoto } from '../Data'

function AboutUs() {
  return (
    <>
      <section className='py-5' id='about'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                {aboutphoto.slice(0, 2).map((a) => (
                  <div key={a.id} className="col-6 mb-4">
                    <img className='w-100' src={a.image} alt="" />
                  </div>
                ))}
                {aboutphoto[2] && (
                  <div className="col-12 mb-4">
                    <img className='w-100' src={aboutphoto[2].image} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
            <div className="row">
            {about.map((a)=>(
              <div className="clo-lg-12 position-relative">
                <h1>{a.title}</h1>
                <h1 className='text-danger mt-3'>{a.sub}</h1>
                <p className='mt-4 fw-semibold'>{a.sdisc}</p>
                <p className='mt-5 fw-lighter'> {a.disc}</p>
                <div className='mt-5 pt-4'>
                  <h5>{a.name}</h5>
                  <p className='fw-light'>{a.post}</p>
                </div>
              </div>
            ))}
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs

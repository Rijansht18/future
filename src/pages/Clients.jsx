import React from 'react'
import { clients } from '../Data'

function Clients() {
  return (
    <>
      <section className='py-5'>
        <div className="container">
            <div className="row ms-4">
                {clients.map((a)=>(
                    <div className="col-lg-4 clients-box mx-4 d-flex flex-column justify-content-center text-center mt-4" key={a.id}>
                        <div className="red-circle mx-auto mb-4">
                                <div className="black-clicle">
                                    <h4 className='text-white text-center my-4'>{a.number}</h4>
                                </div>
                        </div>
                        <div>
                            <h4><a href="#" className='clientshover'>{a.title}</a></h4>
                            <p>{a.disc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Clients

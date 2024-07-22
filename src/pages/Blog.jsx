import React from 'react'
import { blog } from '../Data'

function Blog() {
  return (
    <>
      <section className='chefsimg' id='blog' >
            <div className="chefscover py-5">
              <div className="container">
                <div className="row text-center text-white">
                  <div className="col-lg-12">
                    <h1>FROM BLOG</h1>
                  </div>
                  <div className="col-lg-12">
                    <h1 className='text-danger'>Our Delicious Food</h1>
                  </div>
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8">
                    <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum aucto</p>
                  </div>
                </div>
                <div className="row">
                  {blog.map((a)=>(
                    <div className="col-lg-4 mt-4">
                      <div className="blogcard w-100">
                        <div className="blogimg">
                          <img className='w-100' src={a.image} alt="" />
                        </div>
                        <div className="blogdit mt-4">
                          <h5>{a.title}</h5>
                          <p>By <span>Admin</span> , <span>{a.date}</span> , In <span>{a.name}</span></p>
                          <p>{a.desc}</p>
                          <button className='coubtn2 w-50 mt-3'>More</button>
                        </div>
                          <div className="blogsocial">
                            <ul className='d-flex justify-content-end gap-4 me-5 list-unstyled '>
                              <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                              <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                              <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
      </section>
    </>
  )
}

export default Blog

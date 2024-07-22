import React, { useState } from 'react';
import { menucat, menuitem } from '../Data';

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredItems = selectedCategory === 'All' 
    ? menuitem 
    : menuitem.filter(a => a.category === selectedCategory.toLowerCase());

  return (
    <>
      <section className='mt-5' id='menu'>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1>Our Menu</h1>
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
            {menucat.map((a) => (
              <div className="col-lg-2" key={a.id}>
                <button 
                  className='coubtn2' 
                  onClick={() => setSelectedCategory(a)}
                >
                  {a}
                </button>
              </div>
            ))}
          </div>
          <div className="row mt-4">
            {filteredItems.slice(0,12).map((a) => (
              <div className="col-lg-4 mb-3" key={a.id}>
                <div className="card overflow-hidden">
                  <img src={a.image} className="card-img-top" alt={a.title} />
                  <div className="card-body">
                    <div className='d-flex justify-content-between'>
                    <h5 className="card-title">{a.title}</h5>
                    <p className="card-text fw-semibold">{a.price}</p>
                    </div>
                    <p className="card-text">{a.disc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;

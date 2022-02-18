
import React from 'react';
import Products from './Products';
// import Product from './Product';

const Home = () => {
  return (
      <div>
        <div className="card bg-dark text-white border-0">
            <img src="..." className="card-img" alt="background" height="550px"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                    <h5 className="card-title display-3 fw-bold  mb-0">New Season Arrival</h5>
                    <p className="card-text lead fs-2">
                        Check out all the trends
                    </p>
                </div>
            
        </div>
      </div>
      <Products />
      {/* <Product /> */}
    </div>
     
  );
};

export default Home;

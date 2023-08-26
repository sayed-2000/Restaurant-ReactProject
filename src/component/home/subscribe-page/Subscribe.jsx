import React from 'react';
import './subscribe.css';

const Subscribe = () => {
  return (
    <section className='subscribe'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Hurry up! Subscribe our newsletter<br/>
                    and get 25% Off</h2>
                    <p>Limited time offer for this month. No credit card required.</p>
                </div>
            </div>
            <div className="row">
                    <input type="email" placeholder='Email Address here' />
                     <button>subscribe</button>
                </div>
            </div>
    </section>
  )
}

export default Subscribe

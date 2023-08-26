import React from 'react';
import './viwe.css';
import { Parallax } from 'react-parallax';
import ask from '../../../img/ask-img.jpg'

const View = () => {
  return (
    <div className="view">
        <div className="row">
          <div className="col-md-12 " >
                 <Parallax blur={0.4} bgImage={ask} bgImageAlt="the cat" strength={100}>
                      <div className="parent-2">
                        <div className="container">
                          <div className="row">
                          <div className="col-md-12 text">
                          <h1>Baked fresh daily by bakers with passion.</h1>
                          <button>Learn More</button>
                          </div>
                        </div>
                      </div>
                          </div>
                </Parallax>
          </div>
        </div>
      </div>
  )
}

export default View

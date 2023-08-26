import React from 'react';
import data from '../../Data';
import './Itmes.css';


const Itmes = () => {
    const blogItme = data.map((itme) => {
        return (
            <div className="col-md-4">
                <img src={itme.img} title='img' />
                <h5>{itme.title}</h5>
                <span>{itme.time}</span>
                <div className="price">
                <span>{itme.price}</span>
                <span>{itme.oldPrice}</span>
                </div>
                <button>order now</button>
            </div>
        )
    })
  return (
     <div className="blokCard">
        <div className="container">
            <div className="row">
                {blogItme}
            </div>
        </div>
     </div>
  )
}

export default Itmes

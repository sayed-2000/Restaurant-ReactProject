import React from 'react';
import Header from './Header';
import './Home.css';
import pride from '../../img/pride.png';
import ingredients from '../../img/ingredients.png';
import { ImCheckmark } from "react-icons/im";
import { MdPlayArrow } from "react-icons/md";
import Itmes from './Itmes';
import CarouseSlide from '../home/Carouse/CarouseSlide';
import Ask from './ask/Ask';
import View from './view/View';
import Subscribe from './subscribe-page/Subscribe';
import Footer from '../home/footer/Footer.jsx'
          



const Home = () => {
  return (
      <>
      <Header/>
       <section className='numbers'>
         <div className="container">
           <div className="row">
             <div className="col-md-3">
               <h2>1287+</h2>
               <h6>SAVINGS</h6>
             </div>
             <div className="col-md-3">
               <h2>5786+</h2>
               <h6>PHOTOS</h6>
             </div>
             <div className="col-md-3">
               <h2>1440+</h2>
               <h6>ROCKETS</h6>
             </div>
             <div className="col-md-3">
               <h2>7110+</h2>
               <h6>GLOBES</h6>
             </div>
           </div>
         </div>
       </section> 
       <section className='pride'>
         <div className="container">
           <div className="row">
            <div className="col-md-6 ">
              <img src={pride} title='img' />
            </div>
            <div className="col-md-6 ">
                <h2>We pride ourselves on making real food from the best ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <button><a href="#">learn more</a></button>
            </div>
           </div>
         </div>
       </section>
       <section className='ingredients'>
         <div className="container">
           <div className="row">
             <div className="col-md-5">
              <h2>We make everything by hand with the best possible ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul>
                <li> <span><ImCheckmark/></span>Etiam sed dolor ac diam volutpat.</li>
                <li> <span><ImCheckmark/></span>Erat volutpat aliquet imperdiet.</li>
                <li> <span><ImCheckmark/></span>purus a odio finibus bibendum. </li>
              </ul>
             <button><a href="#">learn more</a></button>
             </div>
             <div className="col-md-7">
               <img src={ingredients} title='img' />
             </div>
           </div>
         </div>
       </section>
       <section className='parallax'>
            <div className="row">
                <h1>When a man's stomach is full it makes no difference whether he is rich or poor.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            </div>
            <div className="row">
                  <h2><a href="https://www.youtube.com/watch?v=vHkvy6decc8" target='blank'><span><MdPlayArrow/></span>watch our stor</a></h2>
            </div>
       </section>
       <section className='explore'>
         <div className="container">
            <div className="row">
              <h1>Explore Our Foods</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
         </div>
       </section>
       <Itmes/>
       <CarouseSlide/>
       <Ask/>
       <View/>
       <Subscribe/>
       <Footer/>
      </>
  )
}

export default Home

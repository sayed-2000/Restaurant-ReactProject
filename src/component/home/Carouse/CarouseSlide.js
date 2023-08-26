import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../img/person-1.jpg'
import img2 from '../../../img/person-2.jpg'
import './carouseSlide.css'

function CarouseSlide() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div className='slider'>
    <div className='container'>
    <div className='row'>
        <div className='col-md-12'>
          <h1>Testimonials</h1>
        <Carousel activeIndex={index} onSelect={handleSelect} className='parent'>
            <Carousel.Item  >
            <img src={img1}/>
            <Carousel.Caption >
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                <h3>Simab Dave - Web Designer</h3>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
            <img src={img2}/>
            <Carousel.Caption >
                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts Vokalia."</p>
                <h3>Johnthan Doe - UX Designer</h3>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item  >
            <img src={img1}/>
            <Carousel.Caption >
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                <h3>Simab Dave - Web Designer</h3>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    </div>
    </div>
    </div>
 
  );
}

export default CarouseSlide;
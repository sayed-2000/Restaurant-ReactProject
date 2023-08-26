import React from 'react';
import './footer.css';
import { ImFacebook,ImTwitter,ImYoutube2,ImDribbble } from "react-icons/im";

const Footer = () => {
  return (
    <section className='footer'>
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="links">
                    <p><a href="#">Register</a></p>
                    <p><a href="#">Forum</a></p>
                    <p><a href="#">Affiliate</a></p>
                    <p><a href="#">FAQ</a></p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="icons">
                <span><ImFacebook/></span>
                <span><ImTwitter/></span>
                <span><ImYoutube2/></span>
                <span><ImDribbble/></span>
            </div>
        </div>
        <div className="row copyright">
            <p>© 2023 Prepared by Sayed Ayman</p>
        </div>
        </div>
    </section>
  )
}

export default Footer

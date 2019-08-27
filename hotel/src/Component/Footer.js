import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
            {/*footer*/}
            <section className="footer">
              <div className="footer__contact">
                <h5 className="heading__small">Contact us</h5>
                <ul className="footer__list"> 
                  <li className="footer__item"><i className="fas fa-location-arrow    " /> 51 area, aktanma, Home City, SAGVV</li>
                  <li className="footer__contact-phone">
                    <span> <i className="fas fa-phone" /> 0994984534</span> <br />
                    <span> <i className="fas fa-phone" />0802752453</span>
                  </li>
                </ul>
              </div>
              <div className="footer__contact">
                <h5 className="heading__small">Our service</h5>
                <ul className="footer__list"> 
                  <li className="footer__item">Resort</li>
                  <li className="footer__item">Spa &amp; Gym</li>
                  <li className="footer__item">Food &amp; drink</li>
                </ul>
              </div>
              <div className="footer__contact">
                <h5 className="heading__small">Link</h5>
                <ul className="footer__list"> 
                  <li className="footer__item">Home</li>
                  <li className="footer__item">About us</li>
                  <li className="footer__item">Events</li>
                </ul>
              </div>
              <div className="footer__contact">
                <h5 className="heading__small">Social meadia</h5>
                <ul className="footer__list"> 
                  <li className="footer__item">Facebook</li>
                  <li className="footer__item">Instagram </li>
                  <li className="footer__item">Twitter</li>
                </ul>
              </div>
            </section>
            </div>
        );
    }
}

export default Footer;
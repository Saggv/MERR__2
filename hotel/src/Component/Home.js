import React, { Component } from 'react';
import Footer from './Footer';
class Home extends Component {
    constructor(props) {
      super(props);
        this.state={
              date: new Date()
        }
    }
    
    render() {
         const {date} = this.state
        return (
            <div>
            <header>
              <div className="header">
                 <img className="header__photo" src="https://images.pexels.com/photos/1267473/pexels-photo-1267473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dsfaskjfba" />
                <div className="header__box">
                  <h2 className="heading__main">Hotel and resorts</h2>
                  <span className="heading__text">The best place to stay</span> <br />
                  <a className="btn" href="/" >Discover now</a>
                </div>
                <div className="header__time-box">
                  <span className="header__time-box--text">{date.getDate()}</span>
                  <span className="header__time-box--text">{date.getMonth()+1}</span>
                  <span className="header__time-box--text">{date.getFullYear()}</span>
                </div>
              </div>
            </header>
            {/*section our popular service*/}
            <section className="service">
              <h3 className="heading__primary heading__primary--left">
                Our most popular service
              </h3>
              <div className="service__item service__item--1">              
                <img src="https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg" alt="our service" className="service__item--image" />
                <div className="service__box">
                  <h4 className="heading__secondary">luxury hotels</h4>
                  <ul className="service__box--list">
                    <li className="service__box--text"><i className="fas fa-shipping-fast    " /> Over 500 roms and systerm </li>
                    <li className="service__box--text"><i className="fas fa-road    " /> Systerm modern</li>
                    <li className="service__box--text"><i className="fas fa-map-marker    " /> Height quality</li>
                    <li className="service__box--text"><i className="fas fa-lock-open    " /> Have 5tr peoples use</li>
                  </ul>
                </div>
              </div>
              <div className="service__item service__item--2">              
                <img src="https://lightenupinc.com/wp-content/gallery/corporate-event/gallery-corporate_event-23.jpg" alt="our service" className="service__item--image" />
                <div className="service__box">
                  <h4 className="heading__secondary">Event venue</h4>
                  <ul className="service__box--list">
                    <li className="service__box--text"><i className="fas fa-shipping-fast    " />Lagre capacity</li>
                    <li className="service__box--text"><i className="fas fa-road    " /> experienced in organizing</li>
                    <li className="service__box--text"><i className="fas fa-map-marker    " /> Height quality</li>
                    <li className="service__box--text"><i className="fas fa-lock-open    " /> Have 5tr peoples use</li>
                  </ul>
                </div>
              </div>
              <div className="service__item service__item--1">              
                <img src="https://cdn4.hotelopia.com/giata/bigger/43/436799/436799a_hb_p_010.jpg" alt="our service" className="service__item--image" />
                <div className="service__box">
                  <h4 className="heading__secondary">Our resort</h4>
                  <ul className="service__box--list">
                    <li className="service__box--text"><i className="fas fa-shipping-fast    " />Good paking &amp; security</li>
                    <li className="service__box--text"><i className="fas fa-road    " />Close to nature</li>
                    <li className="service__box--text"><i className="fas fa-map-marker    " /> Discount coupon</li>
                    <li className="service__box--text"><i className="fas fa-lock-open    " /> Have 5tr peoples use</li>
                  </ul>
                </div>
              </div>
            </section>
            {/*wellcome section*/}
            <section className="wellcome">
              <div className="wellcome__box">
                <h4 className="heading__secondary">A best place enjoy your life</h4>
                <p className="wellcome__text">We have a diverse ecosystem and environment to best serve you and your family.
                  This is only available in our modern system.
                </p>
                <a href="/" className="btn btn__blue">discover</a>
              </div>
              <div className="wellcome__images">
                <img className="wellcome__image wellcome__image--1" alt="sdfhsladfs" src="https://a36c2e13a78ae1256a2f-1dc878dead8ec78a84e429cdf4c9df00.ssl.cf1.rackcdn.com/u/park-hotel-clarke-quay/gallery-2018/Lobby-Park-Hotel-Clarke-Quay.jpg" />
                <img className="wellcome__image wellcome__image--2"alt="sdfhsladfs" src="https://www.ahstatic.com/photos/1930_ho_00_p_2048x1536.jpg"/>
                <img className="wellcome__image wellcome__image--3" alt="sdfhsladfs" src="https://www.thebellevuebohol.com/wp-content/uploads/2018/09/4-1024x546.jpg" />
              </div>
            </section>
            {/*our best room*/}
            <section className="best-room heading__primary--right">
              <h3 className="heading__primary ">
                Our best room
              </h3>
              <div className="row">
                <div className="room__box">
                  <div className="room__box__image">
                    <img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/107/2017/03/10032657/Rooms_Suites_Luxury-room_1920x1080px1.jpg" alt="sdfhsladfsgk " className="room__box--photo" />
                    <div className="room__box--textbox">
                      <span>$1290/night</span>
                      <ul>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                  <div className="best-room__text">
                    <h5 className="heading__name">Luxury room</h5>
                    <p> <i className="fas fa-address-book " /> 824 Nmsi, Dansdi, Townsl</p>
                  </div>
                </div>
                <div className="room__box">
                  <div className="room__box__image">
                    <img src="https://www.hotel-grandium.cz/files/hotel/grandior-hotel-prague/485-Classic_Single_Use.jpg" className="room__box--photo" alt="sdf"/>
                    <div className="room__box--textbox">
                      <span>$990/night</span>
                      <ul>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                  <div className="best-room__text">
                    <h5 className="heading__name">Single room</h5>
                    <p> <i className="fas fa-address-book " /> 197 Kabgv, Umani, Mliclo</p>
                  </div>
                </div>
                <div className="room__box">
                  <div className="room__box__image">
                    <img src="https://www.buswells.ie/files/hotel/hotel-a/02-rooms/Buswells_Hotel_compact_double_room.jpg" className="room__box--photo" alt="sboxcvs"/>
                    <div className="room__box--textbox">
                      <span>$1090/night</span>
                      <ul>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                  <div className="best-room__text">
                    <h5 className="heading__name">Double room</h5>
                    <p> <i className="fas fa-address-book " /> 97329, Mksndiv, Hsdcisyv</p>
                  </div>
                </div>
                <div className="room__box">
                  <div className="room__box__image">
                    <img src="https://www.corinthia.com/application/files/1015/5377/7285/Corinthia-london-hotel-family-room-page.jpg" className="room__box--photo" alt="sdfhsla" />
                    <div className="room__box--textbox">
                      <span>$1690/night</span>
                      <ul>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                        <li><i className="fas fa-star" /></li>
                      </ul>
                    </div>
                  </div>
                  <div className="best-room__text">
                    <h5 className="heading__name">Family room</h5>
                    <p> <i className="fas fa-address-book " /> 892 Kanv, Unsk, Ilnlcs</p>
                  </div>
                </div>
              </div>
            </section>
            {/*Event our*/}
            <section className="event">
              <h3 className="heading__primary heading__primary--left">
                Our recent events
              </h3>
              <div className="column">
                <div className="event__box">
                  <img src="https://i.onthebeach.co.uk/v1/hotel_images/c12b8732-9ade-49a7-95bf-443bf55fef9a/cover/1000/600/medium/1.0/lyra-resort-hotel" alt="sfhdds" className="event__box--photo" />
                  <div className="event__box__text">
                    <h5 className="heading__name">Where can I get some?</h5>
                    <p>There are many variations of passages of Lorem Ipsum available</p>
                    <span>02/09/2019</span>
                  </div>
                </div>
                <div className="event__box">
                  <img src="https://staticproxy.mytourcdn.com/1000x600,q90/resources/pictures/hotels/16/oix1435214799_champa-island-nha-trang-resort-hotel-spa.jpg" alt="sfhdds" className="event__box--photo" />
                  <div className="event__box__text">
                    <h5 className="heading__name">Where does it come from?</h5>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece</p>
                    <span>10/11/2019</span>
                  </div>
                </div>
                <div className="event__box">
                  <img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/151340785.jpg?k=78328de6d3f107a09c06cc9aa757c42053fd65c110f210a99258711776e0a30a&o=" alt="sfhdds" className="event__box--photo" />
                  <div className="event__box__text">
                    <h5 className="heading__name">Why do we use it?</h5>
                    <p>It is a long established fact that a reader will be distracted by the readable </p>
                    <span>15/08/2019</span>
                  </div>
                </div>
              </div>
            </section>
            {/*gallery*/}
            <section className="all-grallery heading__primary--right">
              <h3 className="heading__primary">
                our gallery
              </h3>
              <div className="gallery">
                <figure className="gallery__item gallery__item--1">
                  <img src="http://www.aquapropertygroup.com/wp-content/uploads/2019/01/1-BWPepperTree-WCB_5364And8more_Fusion-Interior-5b4ce6312c71e.jpg" alt="ffsfsldfs" />
                </figure>
                <figure className="gallery__item gallery__item--2">
                  <img src="https://businessblog.trivago.com/wp-content/uploads/2017/01/modern-hotel-room.png" alt="ffsfsldfs" />
                </figure>
                <figure className="gallery__item gallery__item--3">
                  <img src="https://media.cntraveler.com/photos/5c7567b6b36948415881db22/master/pass/Hotel-Ottilia-Junior-Suite.jpg" alt="ffsfsldfs" />
                </figure>
                <figure className="gallery__item gallery__item--4">
                  <img src="https://room-matehotels.com/images/img/oscar/hotel/hotel10.jpg" alt="ffsfsldfs" />
                </figure>
                <figure className="gallery__item gallery__item--5">
                  <img src="https://www.theoceanac.com/wp-content/uploads/2019/04/king.jpg" alt="ffsfsldfs" />
                </figure>
                <figure className="gallery__item gallery__item--6">
                  <img src="https://cdn4.ambrosehotel.com/wp-content/uploads/2017/04/Ambrose12_-_edited.jpg" alt="ffsfsldfs" />
                </figure>
              </div>
            </section>
            <Footer></Footer>
          </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Click_Booking} from "../Action/User";
class Booking extends Component {
  constructor(props) {
    super(props);
    this.state={
       fromDate:'',
       toDate:'',
       redirect:false,
       redirectPro:false
    }
  }
  
     onChange=(e)=>{
         const value = e.target.value;
         const name = e.target.name;
         this.setState({
              [name]:value
         })
     }
    render() {
      const {isLogin} = this.props;
        const dataBooking =this.props.location.state;
        const {fromDate,toDate} = this.state
        const DATA = {
              fromDate,
              toDate,
              dataBooking
        }
        const onClicks=(e)=>{
          e.preventDefault();
            if(isLogin){
              this.props.Click_Booking(DATA);
              this.setState({
                   redirectPro:true
              })
            }
            else{
                 alert("Please login our webiste !!!!");
                this.setState({
                    redirect: true,
                })
            }
             
        }
        if(this.state.redirect){
          return <Redirect to="/Login"></Redirect>
        }
        
        if(this.state.redirectPro){
          return <Redirect to="/profile"></Redirect>
        }
        return (
            <div className="booking">
              <div className="booking__box">
                <form className="form">
                  <h2 className="heading__booking">Booking now</h2>
                  <div className="form__group">
                    <input type="date" name="fromDate" onChange={(e)=>this.onChange(e)} className="form__input" placeholder="From date" id="from-date" />
                    <label htmlFor="from-date" className="form__label">From </label>
                  </div>
                  <div className="form__group">
                    <input type="date" name="toDate" onChange={(e)=>this.onChange(e)} className="form__input" placeholder="From date" id="to-data" />
                    <label htmlFor="to-date" className="form__label">To</label>
                  </div>
                  <button className="btn--book" onClick={onClicks}>Book now</button>
                </form>
                <div className="data-book">
                  <img className="data-book__item data-book__item--1" src={dataBooking.photo} alt="boking imags" />
                  <img className="data-book__item data-book__item--2" src={dataBooking.photo}   alt="boking imags"/>
                  <img className="data-book__item data-book__item--3" src={dataBooking.photo}  alt="boking imags"/>
                  <img className="data-book__item data-book__item--4" src={dataBooking.photo} alt="boking imags" />
                </div>
              </div>
          </div>
        );
    }
}
const mapStateToProps=state=>({
      isLogin: state.dataUser.isLogin
})

export default connect(mapStateToProps,{Click_Booking})(Booking);
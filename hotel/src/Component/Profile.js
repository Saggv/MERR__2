import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import {Get_Booking,Delete_Booking, Get_user} from "../Action/User";
import Footer from './Footer';
class Admin extends Component {
   constructor(props) {
     super(props);
       this.state={
            delete:false,
            DATA:{}
       }
   }
   
      componentDidMount(){
          this.props.Get_user()
            this.props.Get_Booking();
      }
      onClick=(id)=>{
           this.props.Delete_Booking(id);

      }
    render() {
       
        const DATA = this.props.bookingData;
        const {dataUser} = this.props; 
        const Total =  DATA.map( item=> {return parseInt(item.dataBooking.price)});
        return (
        <Fragment>
          <div className="admin">
              <div className="admin-bar">
                  <img className="admin-bar__photo" src="https://www.petmd.com/sites/default/files/Dog-Farting-757648099.jpg" alt="fsadlfaskdf" />
                  <div className="admin-bar__info">
                    <h5 className="heading__name">{dataUser ? dataUser.name : null}</h5>
                    <span className="admin-bar__info--text">{dataUser ? dataUser.email : null}</span>
                    <span className="admin-bar__info--text">${
                         Total.length ? (Total.reduce( (a,b)=>{
                             return a+b;
                         })) : null
                    }</span>
                  </div>
              </div>
              <div className="admin-content admin-content_users">
                      {
                          DATA.length > 0 ?(DATA.map( (item,value) =>{
                          return ( 
                          <div className="admin-content__item" key={value}>
                                <img className="admin-content__item--photo" src={item.dataBooking.photo}  alt={item.fromDate}/>
                                <div className="admin-content__item__box">
                                    <h5 className="name">{item.dataBooking.name}</h5>
                                    <div className="admin-content__item__box--data">
                                        <span>From date: {item.fromDate}</span>
                                        <span>To date: {item.toDate}</span>
                                        <span>{item.dataBooking.detail.sp1}</span>
                                        <span>{item.dataBooking.detail.sp3}</span>
                                        <span>{item.dataBooking.detail.sp4}</span>
                                        <span>${item.dataBooking.price}</span>
                                    </div>
                                </div>
                                <button className="btn-delete" onClick={()=>this.onClick(item.dataBooking.id)}>delete</button>
                          </div>
                            ) })) : (<h4>You dont't have any Data booking !!</h4>)
                      }
              </div>
        </div>
         <Footer></Footer>
        </Fragment>
        );
    }
}
const mapStateToProps=state=>({
       bookingData:state.dataUser.booking,
       dataUser:state.dataUser.dataUser
})

export default connect(mapStateToProps, {Get_Booking,Delete_Booking, Get_user})(Admin);
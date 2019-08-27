import React, { Component, Fragment } from 'react';
import{connect} from "react-redux";
import {get_Rooms} from "../Action/Rooms";
import Single from './Room/Single';
import Footer from "./Footer";
import Pagination from './Pagination';


class Rooms extends Component {
  constructor(props) {
    super(props);
      this.state={
            date: new Date(),
            curentPage:1,
            perPage:6
      }
  }
   componentDidMount(){
        this.props.get_Rooms();
   }
   Paginates=(number)=>{
      this.setState({
          curentPage: number
      })
   }
   onSubmit = (e)=>{
     e.preventDefault();
      setTimeout( ()=> alert("Ok. Thank you !"), 1000)
   }

   BackOne=()=>{
      this.setState({
         curentPage: this.state.curentPage + 1,
      })
   }
   MoveOne=()=>{
    this.setState({
       curentPage: this.state.curentPage - 1,
    })
 }
    render() {
       const {allRooms} =this.props.rooms;
       const indexLastPage = this.state.curentPage * this.state.perPage;
       const indexFirtsPage = indexLastPage - this.state.perPage;
       const singleRooms = allRooms.filter( item => item.roomType === 'single');
       const doubleRooms = allRooms.filter( item => item.roomType === 'double');
       const aluxuryRooms = allRooms.filter( item => item.roomType === 'aluxury');
       const Data = singleRooms.slice(indexFirtsPage, indexLastPage);
      //  const Double = doubleRooms.slice(indexFirtsPage, indexLastPage);
      //  const Aluxury = aluxuryRooms.slice(indexFirtsPage, indexLastPage);
        return (
            <div>
            <header className="header-room">
              <img className="header-room__image" src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="sdkfhlasf" />
              <form className="header-room__box-text" onSubmit={(e)=>this.onSubmit(e)}>
                <input className="search" name="search" type="text" placeholder="What you need ?" />
                <button className="btn-search" type="button" onClick={(e)=>this.onSubmit(e)}>
                  <i className="fas fa-search" />
                </button>
              </form>
              <div className="header__time-box">
                <span className="header__time-box--text">{this.state.date.getDate()}</span>
                <span className="header__time-box--text">{this.state.date.getMonth()+1}</span>
                <span className="header__time-box--text">{this.state.date.getFullYear()}</span>
              </div>
            </header>
            <div className="single-room">
              <h3 className="heading__primary">Single room</h3>
              <div className="hotel-room">
                   {
                      Data ? ( Data.map( (res,value)=>{
                               return (
                                 <Fragment key={value} >
                                  <Single name={res.name} roomType={res.roomType} key={res._id} id={res._id} detail={res.detail} price={res.price} photo={res.photo}></Single>
                                 </Fragment>
                           )
                          })
                      ) : null
                   }
                </div>
               {
                 singleRooms.length > 7 ? (
                  <Pagination BackOne={()=>this.BackOne()} MoveOne={()=>this.MoveOne()} totalData={singleRooms.length} paginate={(number)=>this.Paginates(number)} dataPerPage={this.state.perPage}></Pagination>
                 ):null
               }
            </div>
            {/*double room*/}
            <section className="double-room">
              <h3 className="heading__primary">Double rooms</h3>
              <div className="hotel-room">
                   {
                       doubleRooms ? (
                        doubleRooms.map( (res)=>{
                              return (
                              
                                  <Single name={res.name} roomType={res.roomType} key={res._id} id={res._id} detail={res.detail} price={res.price} photo={res.photo}></Single>

                           )
                          })
                      ) : null
                   }
                </div>
                {
                 doubleRooms.length > 7 ? (
                  <Pagination BackOne={()=>this.BackOne()} MoveOne={()=>this.MoveOne()} totalData={singleRooms.length} paginate={(number)=>this.Paginates(number)} dataPerPage={this.state.perPage}></Pagination>
                 ):null
               }
            </section>

            <section className="single-room">
              <h3 className="heading__primary">Aluxury rooms</h3>
              <div className="hotel-room">
                   {
                     aluxuryRooms ? (
                      aluxuryRooms.map( (res)=>{
                              return (
                              
                                  <Single name={res.name} roomType={res.roomType} key={res._id} id={res._id} detail={res.detail} price={res.price} photo={res.photo}></Single>

                           )
                          })
                      ) : null
                   }
                </div>
                {
                 aluxuryRooms.length > 7 ? (
                  <Pagination BackOne={()=>this.BackOne()} MoveOne={()=>this.MoveOne()} totalData={singleRooms.length} paginate={(number)=>this.Paginates(number)} dataPerPage={this.state.perPage}></Pagination>
                 ):null
               }
            </section>
            <Footer></Footer>
          </div>
        );
    }
}
const mapStateToProps=state=>({
        rooms: state.allRooms
})

export default connect(mapStateToProps,{get_Rooms})(Rooms);
import React, { Component } from 'react';
import {connect} from "react-redux";
import {Get_All_User,Get_user, Delete_User} from "../Action/User";
class Admin extends Component {
     constructor(props) {
       super(props);
         this.state={
              Totel:0
         }
     }
     
  componentDidMount(){
     this.props.Get_user()
      this.props.Get_All_User();
  }

   DeleteUsser=(id)=>{
       this.props.Delete_User(id);
   }

  render() {
              const {allUser} = this.props;
              const {dataUser} = this.props;
              if(this.props.isUser){
                  return <h4 style={{
                          textAlign:'center',
                          fontSize:'1.5rem',
                          marginTop: '6rem'
                  }}>You are not VI A SÁNG !!!</h4>
              }
        return (
          <div className="admin">
            <div className="admin-bar">
              <img className="admin-bar__photo" src="https://www.petmd.com/sites/default/files/Dog-Farting-757648099.jpg" alt="sfdsfsaf" />
              <div className="admin-bar__info">
                <h5 className="heading__name">{dataUser ? (dataUser.name) : null }</h5>
                <span className="admin-bar__info--text">{dataUser ? (dataUser.email) : null }</span>
                <span className="admin-bar__info--text" onClick={()=>this.total()}>$500</span>
              </div>
            </div>
          <div className="admin-content admin-content_users">
                {
                  allUser ? (
                       allUser.map( (user, value) =>{
                           return(
                            <div className="admin-content__item" key={value}>
                              <div className="admin-content__item__user">
                                <h5 className="heading__name">{user.name}</h5>
                                <img src="https://cdn1.cloudcanvas.website/media/sites/119/2018/10/12152005/Dog-laughing.jpg" alt={user._id} />
                                <span>{user.email}</span>
                                <span style={{
                                     color:'red',
                                     fontSize:'2rem',
                                     cursor: 'pointer'
                                }} onClick={()=>this.DeleteUsser(user._id)}> x</span>
                              </div>
                              <div className="admin-content__booking">
                                    {
                                      user.Data.length > 0  ? (
                                          user.Data.map( (item,value) =>{
                                                return(
                                                    <div className="admin-content__booking--item" key={value}>
                                                          <img className="admin-content__item--photo" src={item.dataBooking.photo}  alt={item.fromDate}/>
                                                          <div className="admin-content__item__box">
                                                              <h5 className="name">{item.dataBooking.name}</h5>
                                                              <div className="admin-content__item__box--data">
                                                                <span>{item.fromDate}</span>
                                                                <span>{item.toDate}</span>
                                                                <span>{item.dataBooking.roomType}</span>
                                                                <span>${item.dataBooking.price}</span>
                                                              </div>
                                                          </div>
                                                          <button className="btn-delete" onClick={()=>console.log(item, user._id)}>delete</button>
                                                      </div>
                                                )
                                          })
                                      ):(<h5>User don't have any DATA !!!</h5>)
                                    }
                              </div>
                          </div>
                           )
                       })
                  ) : null
                }
          </div>
        </div>
        );
    }
}

const mapStateToProps=state=>({
      allUser: state.dataUser.allUser,
      dataUser: state.dataUser.dataUser,
      isUser: state.dataUser.isUser
})

export default connect(mapStateToProps, {Get_All_User, Get_user, Delete_User})(Admin);
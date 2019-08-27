import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Delete_Rooms} from "../../Action/Rooms";
import {connect} from "react-redux";
class Single extends Component {

    render() {
        const {id,photo,name,price,detail, roomType} = this.props;
        const data={
             id,photo,name,price,detail,roomType
        }

        return (
                <div className="room__item">
                    <img className="room__item--photo" src={photo}  alt={data.id} />
                     {
                          this.props.isUser ? null : (
                            <span className="delete" style={{
                                gridRow:'1/2',
                                gridColumn:'1/-1',
                                lineHeight:'0',
                                fontSize:'9rem',
                                color:'red',
                                justifySelf:'center',
                                marginTop:'-1rem',
                                cursor:"pointer",
                        }} onClick={()=>this.props.Delete_Rooms(data.id)}>-</span>
                          )
                     }
                    <h4 className="room__item--name">{name}</h4>
                    <div className="room__item-box">
                        <i className="fas fa-eye    " />
                        <p>{detail.sp1}</p>
                    </div>
                    <div className="room__item-box">
                        <i className="fas fa-street-view    " />
                        <p>{detail.sp2}</p>
                    </div>
                    <div className="room__item-box">
                        <i className="fas fa-broom    " />
                        <p>{detail.sp3}</p>
                    </div>
                    <div className="room__item-box">
                        <i className="fas fa-money-bill    " />
                        <p>{detail.sp4}</p>
                    </div>
                        <Link to={{
                            pathname:"/booking",
                            state:data
                        }} className="nono">
                            <button className="room__item__btn">Book now (${price})</button>
                        </Link>
                </div>
        );
    }
}

const mapStateToProps=state=>({
        err: state.allRooms.err,
        isUser: state.dataUser.isUser
})

export default connect(mapStateToProps, {Delete_Rooms})(Single);
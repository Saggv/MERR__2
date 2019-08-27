import React, { Component } from 'react';
import {connect} from "react-redux";
import {Add_Rooms} from "../../Action/Rooms";
class AddRooom extends Component {
       constructor(props) {
           super(props);
           this.state={
                name:'',
                photo:'',
                price:'',
                roomType:'',
                sp1:'',
                sp2:'',
                sp3:'',
                sp4:'',
                address:''
           }
       }
       onChange=(e)=>{
             const value = e.target.value;
             const name = e.target.name;
             this.setState({
                  [name]:value
             })
       }  
       onClicks=(e)=>{
             e.preventDefault();
            const {name, photo, price, roomType, sp1, sp2, sp3, sp4, address} = this.state;
            const detail ={ sp1, sp2, sp3, sp4, address};
            const data={
                   name, photo, price, roomType, detail
            }
            this.props.Add_Rooms(data);
       }     
    render() {
        const {err} = this.props;
        return (
            <div className="login">
            <form className="form-user addrooms">
                <h4 className="form-user__heading">Add Rooms</h4>
                    { err ? (<h5 style={{
                             fontSize:'1.3rem',
                             color:'red',
                             marginBottom:'4rem'
                    }}>{err.msg}</h5>) : null}
                <div className="form-user__group">
                    <input type="text" name="name" onChange={(e)=>this.onChange(e)} placeholder="Name" className="form-user__group--input" />
                    <label className="form-user__group--label">Name</label>
                </div>
                <div className="form-user__group">
                    <input type="text" name="photo" onChange={(e)=>this.onChange(e)} placeholder="Your link photo online"  className="form-user__group--input" />
                    <label className="form-user__group--label">Photo</label>
                </div>
                <div className="form-user__group">
                    <input type="text" name="price" onChange={(e)=>this.onChange(e)} placeholder="Price"  className="form-user__group--input" />
                    <label className="form-user__group--label">Price</label>
                </div>
                <div className="form-user__group">
                    <input type="text" name="roomType" onChange={(e)=>this.onChange(e)} placeholder="roomType"  className="form-user__group--input" />
                    <label className="form-user__group--label">Room type</label>
                </div>
                <div className="form-user__group">
                    <input type="text" name="sp1" onChange={(e)=>this.onChange(e)} placeholder="Detail"  className="form-user__group--input" />
                    <label className="form-user__group--label">Detail sp1</label>
                </div>
                <div className="form-user__group">
                    <input type="text" name="sp2" onChange={(e)=>this.onChange(e)} placeholder="Detail"  className="form-user__group--input" />
                    <label className="form-user__group--label">Detail sp2</label>
                </div>
                <div className="form-user__group">
                    <input type="text" name="sp3" onChange={(e)=>this.onChange(e)} placeholder="Detail"  className="form-user__group--input" />
                    <label className="form-user__group--label">Detail sp3</label>
                </div>
                <div className="form-user__group">
                    <input type="text" name="sp4" onChange={(e)=>this.onChange(e)} placeholder="Detail"  className="form-user__group--input" />
                    <label className="form-user__group--label">Detail sp4</label>
                </div>
                <div className="form-user__group">
                    <input type="text" name="address" onChange={(e)=>this.onChange(e)} placeholder="Address"  className="form-user__group--input" />
                    <label className="form-user__group--label">Address</label>
                </div>
                <div className="form-user__group">
                    <input type="submit" defaultValue="Login" onClick={(e)=>this.onClicks(e)} className="form-user__group--btn" />
                </div>
            </form>
            </div>
        );
    }
}
const mapStateToProps=state=>({
     isUser: state.dataUser.isUser,
     err: state.allRooms.err
})

export default connect(mapStateToProps, {Add_Rooms})(AddRooom);
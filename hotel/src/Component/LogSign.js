import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {Sign_up} from "../Action/User";
import {Redirect} from "react-router-dom";
class LogSign extends Component {
     constructor(props) {
         super(props);
           this.state={
                
           }
     }
     
      onChange = (e) =>{
           const value = e.target.value;
           const name = e.target.name;
           this.setState({
                [name]:value
           })
      }
    
      click_Signup=(e)=>{
            e.preventDefault();
            const data={
                 name:this.state.name,
                 email:this.state.email,
                 password:this.state.password
            }
            const Haha = this.props.match.params.isUser;
            if(Haha === "false"){
                 data.isUser=false;
                 console.log(data);
            }
            if(!data.email || !data.password ||!data.name){
                alert("Enter all field !!!");
             }
            else{
                console.log(data)
               this.props.Sign_up(data)
            }

           
      }

    render() {
        if(this.props.infoUser.isLogin){
            return <Redirect to="/" />
         }
       const {err} = this.props.infoUser;

       const {isUser} = this.props.match.params;
       const Haha1= this.props.match.params.isUser;
       console.log(Haha1);
        return (
            <div className="login">
                <form className="form-user">
                    <h4 className="form-user__heading">Sign up</h4>
                    { err ? (<h5 style={{
                             fontSize:'1.2rem',
                             color:'red',
                             marginBottom:'4rem'
                    }}>{err.msg}</h5>) : null}
                      
                     { isUser ==="false" ? (<h5 style={{
                             fontSize:'1.2rem',
                             color:'red',
                             marginBottom:'4rem'
                      }}>Now ! You are not just a User !!!!</h5>) : null}
                    <div className="form-user__group">
                        <input type="text" name="name" onChange={(e)=>this.onChange(e)} placeholder="Your name" className="form-user__group--input" id="name" />
                        <label className="form-user__group--label">Your name</label>
                    </div>   

                    <div className="form-user__group">
                        <input type="email" name="email" onChange={(e)=>this.onChange(e)} placeholder="User name" className="form-user__group--input" id="account" />
                        <label className="form-user__group--label">User name</label>
                    </div>
                    <div className="form-user__group">
                        <input type="password" name="password" onChange={(e)=>this.onChange(e)} placeholder="Password" id="password" className="form-user__group--input" />
                        <label className="form-user__group--label">Password</label>
                    </div>
                    <div className="form-user__group">
                        <input type="submit" defaultValue="Sign up" onClick={(e)=>this.click_Signup(e)} className="form-user__group--btn" />
                        <span className="form-user__group--bttx">
                        You had an account ?
                                        <NavLink to={{
                                        pathname:"/Login"
                                        }} >Login</NavLink>
                        </span>
                    </div>
                </form>
          </div>
        );
    }
}
const mapStateToProps= state =>({
         infoUser:state.dataUser
})

export default connect(mapStateToProps,{Sign_up})(LogSign);
import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {Sign_in} from "../Action/User";
import {Redirect } from "react-router-dom";
class Login extends Component {
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
    
      click_Signin=(e)=>{
            e.preventDefault();
            const data={
                 email:this.state.email,
                 password:this.state.password
            }
            if(!data.email || !data.password){
                 alert("Enter all field !!!");
            }
            else{
                this.props.Sign_in(data)
            }
      }

    render() {       
        if(this.props.infoUser.isLogin){
            return <Redirect to="/" />
       }

        const {err} = this.props.infoUser;
        return (
            <div className="login">
                <form className="form-user">
                    <h4 className="form-user__heading">Login</h4>
                    {
                        err ? (<h5 style={{ 
                                  color: 'red',
                                  fontSize: '1.2rem',
                                  marginBottom:'4rem'
                        }}>{err.msg}</h5>) : null
                     }
                    <div className="form-user__group">
                        <input type="email" name="email" onChange={(e)=>this.onChange(e)} placeholder="User name" className="form-user__group--input" id="account" />
                        <label className="form-user__group--label">User name</label>
                    </div>
                    <div className="form-user__group">
                        <input type="password" name="password" onChange={(e)=>this.onChange(e)} placeholder="Password" id="password" className="form-user__group--input" />
                        <label className="form-user__group--label">Password</label>
                    </div>

                    <div className="form-user__group">
                        <input type="submit" defaultValue="Login"onClick={(e)=>this.click_Signin(e)} className="form-user__group--btn" />
                        <span className="form-user__group--bttx"> 
                                           Don't have account ?
                                           <NavLink to={{
                                              pathname:"/Signup/:isUser"
                                          }} >Sign up</NavLink>
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

export default connect(mapStateToProps,{Sign_in})(Login);
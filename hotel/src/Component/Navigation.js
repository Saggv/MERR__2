import React, { Component,Fragment } from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Logn_out} from "../Action/User";
class Navigation extends Component {
    render() {
      const {isLogin} = this.props.dataUser;
      const {isLogn_Out} = this.props.dataUser;
      if(isLogn_Out){
          return <Redirect to='/'></Redirect>
      }
        return (
            <div>
                 <nav className="nav">
          <ul className="nav__list">
            <li className=" nav__logo">
              <NavLink className="nav__logo--text"  to="/">Sagvv</NavLink>
            </li>
            <li className="nav__items">
               <NavLink to="/"   activeStyle={{
                            fontWeight: "bold",
                            color: "white"}}  
               className="nav__items--link">Home</NavLink>
            </li>
            <li className="nav__items">
              <NavLink to="/room" activeClassName="selected" className="nav__items--link">Our room</NavLink>
            </li>
            <Fragment>
                  {
                    isLogin ? (    
                      <Fragment>       
                        <li className="nav__items">
                            <NavLink to="/profile" activeClassName="selected" className="nav__items--link">Profile</NavLink>
                        </li>
                        <li className="nav__items">
                             <NavLink to="/admin" activeClassName="selected" className="nav__items--link">Sáng</NavLink>
                        </li>
                        <li className="nav__items">
                            <h5  className="nav__items--link" onClick={()=>this.props.Logn_out()}>Logn out</h5>
                        </li>
                      </Fragment>
                      ) :(
                       <Fragment>
                                           <li className="nav__items">
                  <NavLink activeClassName="selected" to ={{
                        pathname:"/Login"

                  }} className="nav__items--link">
                      Login</NavLink>
                </li>
                <li className="nav__items">
                <NavLink activeClassName="selected" to={{
                  pathname:"/Signup/:isUser"
                }} className="nav__items--link">Sign up</NavLink>
                </li>
                       </Fragment>
                    )
                  }
            </Fragment>
          </ul>
        </nav>
        <nav className="nav-toggle">
          <input type="checkbox" className="nav-toggle__checkbox" id="navvi" />
          <label className="nav-toggle__label" htmlFor="navvi">
            <span className="nav-toggle__icon" />
          </label>
          <div className="nav-toggle__background" />
          <ul className="nav-toggle__list">
            <li className="nav-toggle__items"> <NavLink to="/" className="nav-toggle__link">Home</NavLink></li>
            <li className="nav-toggle__items"> <NavLink to="/room" className="nav-toggle__link">Rooms</NavLink></li>
                    <Fragment>
                          {
                            isLogin ? (    
                              <Fragment>       
                                  <li className="nav-toggle__items">
                                      <NavLink to="/profile" activeClassName="selected" className="nav-toggle__link">Profile</NavLink>
                                  </li>
                                  <li className="nav-toggle__items">
                                        <NavLink to="/admin" activeClassName="selected" className="nav-toggle__link">Sáng</NavLink>
                                  </li>
                                  <li className="nav-toggle__items">
                                      <h5  className="nav-toggle__link" onClick={()=>this.props.Logn_out()}>Logn out</h5>
                                  </li>
                              </Fragment>
                              ) :(
                                <Fragment>
                                        <li className="nav-toggle__items">
                                              <NavLink activeClassName="selected" to ={{
                                                    pathname:"/Login"

                                              }} className="nav-toggle__link">
                                                  Login</NavLink>
                                        </li>
                                    <li className="nav-toggle__items">
                                        <NavLink activeClassName="selected" to={{
                                          pathname:"/Signup"
                                        }} className="nav-toggle__link">Sign up</NavLink>
                                    </li>
                                </Fragment>
                            )
                          }
                    </Fragment>
          </ul>
        </nav>

            </div>
        );
    }
}
const mapStateToProps=state=>({
        dataUser: state.dataUser
})

export default connect(mapStateToProps, {Logn_out})(Navigation);
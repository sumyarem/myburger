import React, {Component} from 'react';
import css from'./style.module.css';

import Toolbar from "../../components/Toolbar";
import BurgerBuilder from '../BurgerBuilder';
import SideBar from '../../components/SideBar';
import OrderPage from '../OrderPage';
import  ShippingPage  from '../ShippingPage';
import { connect } from 'react-redux';
import * as signupActions from "../../redux/actions/signupActions";
import {  Route,  Router,  Switch,Link } from 'react-router-dom';
import ContactData from '../../components/ContactData';
import LoginPage from '../LoginPage';
import Logout from '../../components/Logout';
import SignupPage from '../SignupPage';
import {Redirect}  from "react-router-dom";
import * as actions from "../../redux/actions/loginActions";


class App extends Component  {

  state = {
    showSideBar: false,
    
  };
componentDidMount = () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const expireDate = new Date( localStorage.getItem('expireDate'));
  const refreshToken = localStorage.getItem('refreshToken');
  if(token){
    if( expireDate > new Date()){
      //hugatsaa n duusaagvi token , automat login hiine
      this.props.autoLogin(token, userId);
      //token hvchingvi bolsnii daraa automataar logout hiine
      this.props.autoLogoutAfterMillisec(expireDate.getTime() - new Date().getTime());
    }else{
      // tokenii hugatsaa duussan, logout
      this.props.logout();
    }
    
  }
};


  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSideBar:!prevState.showSideBar};
    });
  }
  render() {
  return (
    <div>
    <Toolbar toggleSideBar= {this.toggleSideBar}/>
    <SideBar toggleSideBar={this.toggleSideBar} showSideBar={this.state.showSideBar}/>
    <main className={css.Content}>
    
    
    <div style={{marginTop: 78}}>ХЭРЭГЛЭГЧИЙН id :{this.props.userId}</div>

    {this.props.userId ? (
<Switch>

    <Route path="/orders" element={< OrderPage />} />
    <Route  path="/logout" component ={Logout}/>
    <Route  path="/ship" element={< ShippingPage />} />
          <Route exact  path="/" element={< BurgerBuilder />} />
    
        </Switch>
        ) :(
            <Switch>
            <Route  path="/login" component ={LoginPage}/>
          <Route  path="/signup" component ={SignupPage}/>
          <Redirect to="/login"/>
        
    </Switch>
        )}
    {/* <BurgerBuilder/>
    <ShippingPage/>
    <ContactData/> */}
          
          
    </main>
  </div>
  );
};
};
const mapStateToProps = state => {
  return{
    userId: state.signuploginReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return{
    autoLogin: (token, userId) => dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(signupActions.logout()),
    autoLogoutAfterMillisec: () => dispatch(signupActions.autoLogoutAfterMillisec())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

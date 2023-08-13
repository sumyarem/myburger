import React, {useEffect, useState,Suspense,useContext} from 'react';
import css from'./style.module.css';

import Toolbar from "../../components/Toolbar";
import BurgerBuilder from '../BurgerBuilder';
import SideBar from '../../components/SideBar';
import OrderPage from '../OrderPage';
import  ShippingPage  from '../ShippingPage';
import {  Route,   Switch} from 'react-router-dom';
import LoginPage from '../LoginPage';
import Logout from '../../components/Logout';
import { BurgerStore } from "../../context/burgercontext";
import { OrderStore } from "../../context/OrdersContext";
import {Redirect}  from "react-router-dom";
import UserContext, { UserStore } from '../../context/UserContext';



const SignupPage = React.lazy(() => {
  return import( '../SignupPage');
});

const App = (props) =>  {

  const ctx = useContext(UserContext);


const [showSideBar, setShowSideBar] = useState(false);

useEffect(() => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const expireDate = new Date( localStorage.getItem('expireDate'));
  const refreshToken = localStorage.getItem('refreshToken');
  if(token){
    if( expireDate > new Date()){
      //hugatsaa n duusaagvi token , automat login hiine
    ctx.loginUserSuccess(token, userId, expireDate, refreshToken);
      //token hvchingvi bolsnii daraa automataar logout hiine
      ctx.autoRenewTokenAfterMillisec(expireDate.getTime() - new Date().getTime());
    }else{
      // tokenii hugatsaa duussan, logout
      ctx.autoRenewTokenAfterMillisec(3600000);
      // ctx.logout();
    }
    
  }
},[]);



  const toggleSideBar = () => {

    setShowSideBar(prevShowSideBar => !prevShowSideBar);
    
  };
  return (
    <div>
    <Toolbar toggleSideBar= {toggleSideBar}/>
    <SideBar toggleSideBar={toggleSideBar} showSideBar={showSideBar}/>
    <main className={css.Content}>
    
    
    <UserStore>
    <BurgerStore>
<Suspense fallback={<div style={{marginTop: 78 }}> Түр хүлээнүү</div>}>
{ctx.state.userId !== null ? (

      <Switch>
      <Route path="/logout" component={Logout} />
  <Route path="/orders">
    <OrderStore>
      <OrderPage/>
    </OrderStore>
  </Route>
  
  <Route path="/ship" component={ShippingPage} />
  <Route path="/" component={BurgerBuilder} />
  

</Switch>
) : (
<Switch>

  <Route path="/login" component={LoginPage} />
  <Route path="/signup" component={SignupPage} />
  <Redirect to="/" />

</Switch>

        )}
    
        
</Suspense>
</BurgerStore>
</UserStore>
          
    </main>
  </div>
  );
};


// const mapDispatchToProps = dispatch => {
//   return{
//     autoLogin: (token, userId) => dispatch(actions.loginUserSuccess(token, userId)),
//     logout: () => dispatch(signupActions.logout()),
//     autoLogoutAfterMillisec: () => dispatch(signupActions.autoLogoutAfterMillisec())
//   }
// }
export default App;

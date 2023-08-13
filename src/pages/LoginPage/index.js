import React, { useState, useContext } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import {Redirect} from "react-router-dom";
import UserContext from "../../context/UserContext";

const LoginPage = (props) =>  {

     const ctx = useContext(UserContext);

const [form, setForm] = useState({
     email: "",
     password: ""
});


const changeEmail = e => {
     const newEmail = e.target.value
     setForm((formBefore) => ({
          email: newEmail, 
          password: formBefore.password 
     }));
     
};

const changePassword = e => {
     const newPassword = e.target.value
     setForm((formBefore) => ({
          email: formBefore.email, 
          password: newPassword 
     }));
     
};
const login = () => {
     
     ctx.loginUser(form.email, form.password)
}


return (
     <div className={css.container}>

     {ctx.state.userId && <Redirect to="/orders"/> }
          <h2>Login</h2>
          <form className="login-form" >
               
               <input  onChange={changeEmail} type="text" placeholder="Имэйл хаяг" />
               
               <input onChange={changePassword} type="password" placeholder="Нууц үг"  />

               {ctx.state.logginIn && <Spinner/>}
               {ctx.state.error && <div style={{color: "red"}}>{ctx.state.error}Код нь: {ctx.state.errorcode}</div>}
               <Button text="Логин" btnType="Success" daragdsan={login}/>
          </form>
          
     </div>
)
}

export default LoginPage;
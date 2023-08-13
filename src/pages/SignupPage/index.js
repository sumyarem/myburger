import React, { useState, useContext, useEffect } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";


const Signup = (props) => {
     
const ctx = useContext(UserContext);

     const [email, setEmail] = useState("");
     const [password1, setPassword1] = useState("");
     const [password2, setPassword2] = useState("");
     const [error, setError] = useState("");

     // useEffect (() => {
     //      setPassword2(password1);
     // },[password1]);

const signup = () => {
     if(password1 === password2){
          ctx.signupUser(email, password1);

          }else {
               setError("Нууц үгнүүд хоорондоо таарахгүй байна!");
               
          }
     
};


return (
     <div className={css.container}>
     {ctx.state.userId && <Redirect to="/"/>}

          <h1>Мэдээлэлээ оруул</h1>
          
          <form className="register-form" >
               
               <input 
               onChange={(e) => setEmail(e.target.value)} type="text"
               placeholder="Имэйл хаяг"

               />
               
               <input 
               onChange={(e) => setPassword1(e.target.value)}
               type="password" 
               placeholder="Нууц үг" 
               />
               <input
               onChange={(e) => setPassword2(e.target.value)} type="password" 
               placeholder="Нууц үгээ давтах" 

               />
               {error && <div style={{color: "red"}}> {error}</div>}

               {ctx.state.error && (
                    <div style={{color: "red"}}>{ctx.state.error}</div>
               )}

               {ctx.state.saving && <Spinner/>}
               <Button text="Бүртгүүлэх" btnType="Success" daragdsan={signup}/>
          </form>
          
     </div>
);
};
export default Signup;
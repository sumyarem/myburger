import React, {useState, useEffect,useRef,useContext} from "react";
import css from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import { useHistory} from "react-router-dom"; 
import BurgerContext from "../../context/burgercontext";
import UserContext from "../../context/UserContext";

const ContactData = props => {
const history = useHistory();
      const ctx = useContext(BurgerContext);
      const Uctx = useContext(UserContext);

      const [city, setCity] = useState("");
      const [street, setStreet] = useState("");
      const [name, setName] = useState("");


const dunRef = useRef();

useEffect(() => {
      if(ctx.burger.finished &&!ctx.burger.error){
            history.replace("/orders");
      }
      return() => {
            
            ctx.clearBurger();

      };
},[ctx.burger.finished]);
      


      const changeName = e => {
            // if(dunRef.current.style.color === "red") 
            // dunRef.current.style.color === "green"; 
            // else dunRef.current.style.color === "red";
            setName(e.target.value);
            
      };

      const changeStreet = e => {
            setStreet(e.target.value);
            
      };

      const changeCity = e => {
            setCity(e.target.value);
            
      };


      

      const saveOrder = () =>{
            const newOrder = {
                  userId: Uctx.state.userId,
                  orts: ctx.burger.ingredients,
                  dun: ctx.burger.totalPrice,
                  hayag: {
                        name: name,
                        city: city,
                        street: street
                  }
            };
            ctx.saveBurger(newOrder, Uctx.state.token);
            // setState({loading: true });
            // axios
            // .post("/orders.json", order)
            // .then(response => {
            //       console.log("order amjilttai");
            // })
            // .catch(error => {
            //       console.log("order amjiltgvi: " + error);
            // })
            // .finally(() => {
            //       setState({loading: false});
            //       props.history.replace("/orders");
            // });
      };


            return (
                  
            <div className={css.container}>
            <div ref={dunRef}>
            <strong style={{fontSize: "16px"}}>Дүн : {ctx.burger.totalPrice}</strong>
            </div>
            
            <div>
                  {ctx.burger.error && `zahialahga hiihhed aldaa garlaa : ${ctx.burger.error}`}
            </div>
            {ctx.burger.saving ? ( 

            <Spinner/> 
            ) : (
                  <div>
                  <input onChange={changeName} 
                  style={{marginTop:72 }} 
                  type = "text" name="name" 
                  placeholder="Таны нэр">

                  </input>
            <input onChange={changeStreet} 
            type = "text" 
            name="street" 
            placeholder="Таны гэрийн хаяг "/>

            
            <input onChange={changeCity}
            type = "text" 
            name="city" placeholder="Таны хот"/>

            
            <Button text ="Илгээх" btnType="Success" daragdsan={saveOrder}/>
            </div>
            )}
            </div>
            );
      }






export default ContactData;
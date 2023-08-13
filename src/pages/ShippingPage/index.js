import React, {useContext} from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { Route,Switch } from "react-router-dom";
import ContactData from "../../components/ContactData";
import BurgerContext from "../../context/burgercontext";
import {useHistory} from "react-router-dom";

const ShippingPage = (props) => {
const history = useHistory();
      const ctx = useContext(BurgerContext);

const cancelOrder = () => {
history.goBack();
};

const showContactData = () => {
      console.log("props.history:", history); // Check if history object is present
      history.replace("/ship/contact");
};


return (
      <div className={css.ShippingPage}>
      <p style={{ marginTop: 72 }}>
      <strong>ТАНЫ ЗАХИАЛАГА</strong>
      </p>
      <p style={{ marginTop: 72 }}>
      <strong>Дүн: {ctx.burger.totalPrice}$</strong>
      </p>

      <Burger/>
      <Button
      daragdsan={cancelOrder}
      btnType="Danger"
      text=" Захиалага цуцлах"
      />
      <Button
      daragdsan={showContactData}
      btnType="Success"
      text=" ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ"
      />


      

<Switch>
<Route path="/ship/contact" component={ContactData} />
</Switch>

      </div>
);
}




export default ShippingPage;
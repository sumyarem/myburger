import React from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { Route, Link,Router } from "react-router-dom";
import ContactData from "../../components/ContactData";
import { connect } from "react-redux";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { withRouter } from "react-router-dom"; 


 class ShippingPage extends React.Component {




cancelOrder = () => {
this.props.history.goBack();
};

showContactData = () => {
      console.log("this.props.history:", this.props.history); // Check if history object is present
      this.props.history.replace("/ship/contact");
    };
    

render() {
return (
      <div className={css.ShippingPage}>
      <p style={{ marginTop: 72 }}>
      <strong>ТАНЫ ЗАХИАЛАГА</strong>
      </p>
      <p style={{ marginTop: 72 }}>
      <strong>Дүн: {this.props.price}$</strong>
      </p>

      <Burger/>
      <Button
      daragdsan={this.cancelOrder}
      btnType="Danger"
      text=" Захиалага цуцлах"
      />
      <Button
      daragdsan={this.showContactData}
      btnType="Success"
      text=" ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ"
      />


      

<Switch>
<Route path="/ship/contact" element={<ContactData />} />
</Switch>

      </div>
);
}
}


const mapStateTopProps = state =>{
      return{
            price: state.burgerReducer.totalPrice
      };
};
export default withRouter(connect( mapStateTopProps)(ShippingPage));
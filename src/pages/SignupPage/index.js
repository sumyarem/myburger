import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

class Signup extends Component {
state = {
     email: "",
     password1: "",
     password2: "",
     error: ""
};

changeEmail = (e) => {
     this.setState({email: e.target.value})
};

changePassword1 = (e) => {
     this.setState({password1: e.target.value})
};


changePassword2 = (e) => {
     this.setState({password2: e.target.value})
};
signup = () => {
     if(this.state.password1 === this.state.password2){
          this.props.signupUser(this.state.email, this.state.password1);

          }else {
               this.setState({error: "Нууц үгнүүд хоорондоо таарахгүй байна!"});
          }
     
}
render(){

return (
     <div className={css.container}>
     {this.props.userId && <Redirect to="/"/>}

          <h1>Мэдээлэлээ оруул</h1>
          <form className="register-form" >
               
               <input 
               onChange={this.changeEmail} type="text"
               placeholder="Имэйл хаяг" id="email" name="email" 

               />
               
               <input 
               onChange={this.changePassword1} type="password" 
               placeholder="Нууц үг" id="password" name="password"
               />
               <input
               onChange={this.changePassword2} type="password" 
               placeholder="Нууц үгээ давтах" id="password" name="password" 

               />
               {this.state.error && <div style={{color: "red"}}> {this.state.error}</div>}

               {this.props.firebaseError && (
                    <div style={{color: "red"}}>{this.props.firebaseError}</div>
               )}

               {this.props.saving && <Spinner/>}
               <Button text="Бүртгүүлэх" btnType="Success" daragdsan={this.signup}/>
          </form>
          
     </div>
)
}
}

const mapStateToProps = state => {
     return{
          saving: state.signuploginReducer.saving,
          firebaseError: state.signuploginReducer.firebaseError,
          userId: state.signuploginReducer.userId
     };
};


const mapDispatchToProps = dispatch => {
     return {
          signupUser: (email,password) => dispatch(actions.signupUser(email, password))
};
};

export default connect(mapStateToProps,mapDispatchToProps) (Signup);
import React, { Component } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import {Redirect} from "react-router-dom";
class LoginPage extends Component {
state = {
     email: "",
     password: ""
};
changeEmail = (e) => {
     this.setState({email: e.target.value})
};

changePassword = (e) => {
     this.setState({password: e.target.value})
};
login = () => {
     
     this.props.login(this.state.email,this.state.password  )
}
render(){

return (
     <div className={css.container}>

     {this.props.userId && <Redirect to="/orders"/> }
          <h2>Login</h2>
          <form className="login-form" >
               
               <input  onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг" id="email" name="email" />
               
               <input onChange={this.changePassword} type="password" placeholder="Нууц үг" id="password" name="password" />

               {this.props.logginIn && <Spinner/>}
               {this.props.firebaseError && <div style={{color: "red"}}>{this.props.firebaseError}Код нь: {this.props.firebaseErrorCode}</div>}
               <Button text="Логин" btnType="Success" daragdsan={this.login}/>
          </form>
          
     </div>
)
}
}

const mapStateToProps = state => {
return{
     logginIn: state.signuploginReducer.logginIn,
     firebaseError: state.signuploginReducer.firebaseError,
     firebaseErrorCode: state.signuploginReducer.firebaseErrorCode,
     userId: state.signuploginReducer.userId
};
};
const mapDispatchToProps = (dispatch) => {
     return {
          login: (email,password) => dispatch(actions.loginUser(email,password))
     }
}
export default connect(mapStateToProps,mapDispatchToProps ) (LoginPage);
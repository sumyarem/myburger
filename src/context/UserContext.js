import React, { useState } from "react";
import axios from "../axios-orders";

const UserContext = React.createContext({});

const initialState =  {
      saving: false,
      logginIn: false,
      error: null,
      errorcode: null,
      token: null,
      userId: null
};
export const UserStore = (props) => {
      

const [state, setState] = useState(initialState);

const loginUserSuccess = (token, userId, expireDate,refreshToken) => {
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('epireDate', expireDate);
      
      setState({...state, logginIn:false, error: null, errorcode: null, token, userId, });
}


const logout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('expireDate');
      localStorage.removeItem('refreshToken');
      setState(initialState);
};

const autoRenewTokenAfterMillisec = milliSec => {
      
                  axios
                  .post(
                        "https://securetoken.googleapis.com/v1/token?key=AIzaSyAInxU6eaaW9zAzom9gxm4TsKgXLERRtZw",
                        { 
                              grant_type: "refresh_token",
                              refresh_token: localStorage.getItem("refreshToken")
                        }
                  )
                  .then((result) => {
                        const token = result.data.id_token;
                        const userId = result.data.user_id;
                        const expiresIn = result.data.expiresIn;
                        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
                        const refreshToken = result.data.refreshToken;
                        loginUserSuccess(token, userId,refreshToken,expireDate)
                        

                  })
                  .catch(err =>{
                        setState({...state, logginIn: false, token: null, error: err.message, errorcode: err.code, })
                  });
                  setTimeout(() => {
                        autoRenewTokenAfterMillisec(3600*1000);
                  },milliSec);
            };

const loginUser = (email,password) => {
      
      setState({...state, logginIn: true});



            const data = {
                  email,
                  password,
                  returnSecureToken: true
            };
            
            
axios
.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAInxU6eaaW9zAzom9gxm4TsKgXLERRtZw',
data
)
.then((result) => {
// local
const token = result.data.idToken;
const userId = result.data.localId;
const expiresIn = result.data.expiresIn;
const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
const refreshToken = result.data.refreshToken;

setState({...state, logginIn: false, error: null, errorcode: null, token, userId});

loginUserSuccess(token, userId,expireDate, refreshToken);



// dispatch(actions.autoLogoutAfterMillisec(expiresIn * 1000));
})
.catch((err) =>{ 
      setState({...state, logginIn: false, token: null, error: err.message, errorcode: err.code, })

});
            
      
};

const signupUser = (email,password) => {
      
            setState({...state, saving: true});


            const data = {
                  email, 
                  password,
                  returnSecureToken: true,
            };
axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAInxU6eaaW9zAzom9gxm4TsKgXLERRtZw',
data
)

.then((result) => { 

      //loacal
      const token = result.data.idToken;
      const userId = result.data.localId;
      
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      setState({...state, saving: false, token, userId, error: null, errorcode: null});

})
.catch((err) =>{
setState({...state, saving: false, error: err.message, errorcode: err.code, token: null, });
});
            
      };


return(
      <UserContext.Provider value={{state, signupUser, loginUser,logout,loginUserSuccess,autoRenewTokenAfterMillisec}}>
            {props.children}
      </UserContext.Provider>
);
};

export default UserContext;
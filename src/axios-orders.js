import axios from "axios";

const instance = axios.create({
      baseURL: 'https://burger-b4fea-default-rtdb.firebaseio.com/'
});

 export default instance;
import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mern-backend-ash.herokuapp.com/",
});

export default instance;

import axios from "axios"

const axiosInstance = axios.create({
  // baseURL: " http://localhost:5000",
  baseURL: "https://amazon-clone-deploy-6h4d.onrender.com/",
});

export {axiosInstance}
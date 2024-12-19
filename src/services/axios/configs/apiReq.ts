import axios from "axios";



const sendApiReq = () => {
  

  const apiReq = axios.create({
    baseURL: 'http://localhost:4000',
  });

  apiReq.interceptors.response.use(
    (response) => {
      console.log(`${response.config.url?.slice(1)} ${response.config.method?.toUpperCase()} response =>`, response);
      return response    
    },
    err => {
      console.warn("Your Req Has An Err :", err)
      throw Error (err)
    }
  )
  
  

  return apiReq

}




export default sendApiReq
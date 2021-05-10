import axios from "axios";
let host = 'http://127.0.0.1:8000/'
function getCount(params){
  axios.get(`${host}/qq_qun/`,params)
  console.log(params)
  return
}
/*
what i installed
    -axios
*/
import axios from "axios";

// baseUrl is instance axios => Modified Version from axios i can use it but will not put the url in it 
// custom axios by axios.create

// before deploy on render
const baseUrl = axios.create({baseURL:"http://127.0.0.1:8000"})

// after deploy on render
// const baseUrl = axios.create({baseURL:"https://noon-clone-server.onrender.com"})
export default baseUrl;
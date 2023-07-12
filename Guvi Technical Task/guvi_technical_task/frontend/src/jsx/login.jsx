import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'  
import MetamaskLogo from '../js/MetamaskLogo';
import '../css/login.css';

const Login=()=>{
    let navigate = useNavigate();

    const [user,setUser]=useState({email:"",paasword:""});
    const [error, setError] = useState("");
    const handleChange=({ currentTarget:e })=>{
        setUser({...user, [e.name]: e.value}); 
    }


    const submitForm = async (e)=>{
        e.preventDefault(); 
        try {
			const url = "http://localhost:8080/api/auth";
			const { user: res } = await axios.post(url, user);
			localStorage.setItem("token", res.user);
			navigate(`/dashboard`);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.user.message);
			}
		}
	};


    return(
        <form onSubmit={submitForm}>
        <div className="main-box">
        <div className="row">
             <div className="col-md-12 text-center"> <h1>Login Page</h1></div>
        </div>
        <div className="row">
           <div className="col-md-6">Email:</div>
           <div className="col-md-6"><input typs="email" name="email"  
           onChange={handleChange} value={user.email} /></div>
        </div>
        <div className="row">
           <div className="col-md-6">Password:</div>
           <div className="col-md-6"><input typs="password" name="password"
            onChange={handleChange} value={user.password}
            /></div>
        </div>


        <div className="row">
           <div className="col-md-12 text-center">
               <input type="submit" name="submit"  className="btn btn-success" value="Please Login" />
           </div>
           
        </div>
        <MetamaskLogo />
        </div>
        </form>
    )
}

export default Login;
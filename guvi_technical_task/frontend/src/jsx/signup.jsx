import { useState } from "react";
import axios from "axios";
import{useNavigate} from 'react-router-dom';
import MetamaskLogo from '../js/MetamaskLogo'; 
import '../css/style.css';
 
const Signup=() => {
    const [data, setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });
    const [error, setError] = useState("");
    let history = useNavigate(); // Use for Navigate on Previous


    const handleChange=({ currentTarget:e })=>{
        setData({ ...data, [e.name]: e.value }); 

    };
   
    const submitForm = async (e)=>{
        e.preventDefault(); 
        try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			history("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}		
		}
	};

    return(
        <div className="main-box">
        <form  onSubmit={submitForm}>
        <div className="row">
         <div className="col-md-12 text-center"><h1>Sign Up</h1></div>
        </div>
            <div className="row">
                <div className="col-md-6">First Name</div>
                <div className="col-md-6">
                    <input type="text" name="firstName" className="form-control"
                    onChange={handleChange} value={data.firsName}
                     />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Last Name</div>
                <div className="col-md-6">
                    <input type="text" name="lastName" className="form-control" 
                        onChange={handleChange} value={data.lastName}
                    />
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input type="email" name="email" className="form-control"
                     onChange={handleChange} value={data.email}
                     />
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">
                    <input type="password" name="password" className="form-control" 
                         onChange={handleChange} value={data.password}

                    />
                </div>
            </div>

            <div className="row">
              
                <div className="col-md-12 text-cener">
                    <input type="submit" name="submit" value="Signup" className="btn btn-success" />
                </div>
            </div>
            </form>
            <MetamaskLogo />
        </div>
    )
}

export default Signup;


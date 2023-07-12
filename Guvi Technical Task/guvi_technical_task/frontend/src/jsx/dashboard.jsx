import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes,Route,Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import MetamaskLogo from '../js/MetamaskLogo'; 
import '../css/dashboard.css';

const Dashboard=()=>{
    const [auth,setAuth]=useState('');
    let navigate = useNavigate(); 
    useEffect(()=>{
        var auth = localStorage.getItem('email'); 
        setAuth(auth);
      },
      [])
    if(auth===null){
        navigate(`/login`);
    }

    // User Profile code below

    let history = useNavigate(); 
    const [data, setData]=useState({
        name:"",
        email:"",
        contact:"",
        dob:"",
        gender:"",
        age:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value }); 
    }
   
    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
            name:data.name,
            email:data.email,
            contact:data.contact,
            dob:data.dob,
            gender:data.gender,
            age:data.age

        }

        console.log(sendData);

        axios.post('http://localhost:8080/api/register',sendData)
        .then((result)=>{
            if (result.data.Status === 'Invalid') { 
          alert('Invalid User');  
            }
        else  {
           history(`/dashboard`);
        }
      })  
    }

    return(
        <div>
               <center> Welcome to User Profile Page </center>    

              <div className="main-box">
        <form  onSubmit={submitForm}>
        <div className="row">
         <div className="col-md-12 text-center"><h1>User Profile</h1></div>
        </div>
            <div className="row">
                <div className="col-md-6">Name</div>
                <div className="col-md-6">
                    <input type="text" name="name" className="form-control"
                    onChange={handleChange} value={data.name}
                     />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input type="text" name="email" className="form-control" 
                        onChange={handleChange} value={data.email}
                    />
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">Contact</div>
                <div className="col-md-6">
                    <input type="number" name="contact" className="form-control" 
                         onChange={handleChange} value={data.contact}

                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">DOB</div>
                <div className="col-md-6">
                    <input type="text" name="dob" className="form-control" 
                         onChange={handleChange} value={data.dob}

                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Gender</div>
                <div className="col-md-6">
                    <input type="text" name="gender" className="form-control" 
                         onChange={handleChange} value={data.gender}

                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Age</div>
                <div className="col-md-6">
                    <input type="number" name="age" className="form-control" 
                         onChange={handleChange} value={data.age}

                    />
                </div>
            </div>

            <div className="row">
              
                <div className="col-md-12 text-cener">
                    <input type="submit" name="submit" value="Update profile" className="btn btn-success" />
                </div>
            </div>
            </form>
        </div>
        <MetamaskLogo />
        </div>

        
    )
}

export default Dashboard;
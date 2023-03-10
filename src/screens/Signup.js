import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Signup = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        location: "",
        password: "",
        c_password: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, location, password, c_password } = credentials;
        // console.log(name + " " + email + " " + location + " " + password + "  " + c_password);
        const response = await fetch("http://localhost:8000/api/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, location, password, c_password
            })
        });

        const data = await response.json();
        console.log(data.status);
        // console.log(password + " " + c_password);

        if (data.status === 201) {
            alert("Registration Successful");
            navigate('/login')
        }
        else {
            if (data.status === 409)
                alert("Email Already Exist");
            else if (data.status === 401)
                alert("Password does not match");
            else
                alert("Invalid Credentials");
        }
    }
    const onchangeFunction = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        setCredentials({ ...credentials, [name]: val })
    }
    return (
        <>
            <Navbar />
            <div style={{ 'color': 'white' }} className='mt-3'>
                <section className="vh-100">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ "borderRadius": "25px" }}>
                                    <div className="card-body p-md-5" style={{ 'color': 'white' }}>
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                                <div className="mx-1 mx-md-4" >


                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="name">
                                                                Your Name
                                                            </label>
                                                            <input onChange={onchangeFunction} name='name' value={credentials.name} type="text" className="form-control" />
                                                        </div>
                                                    </div>


                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="email">Your Email</label>
                                                            <input onChange={onchangeFunction} name='email' value={credentials.email} type="text" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="email">Your Address</label>
                                                            <input onChange={onchangeFunction} name='location' value={credentials.location} type="text" className="form-control" />
                                                        </div>
                                                    </div>


                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="password">Password</label>
                                                            <input onChange={onchangeFunction} name='password' value={credentials.password} type="password" className="form-control" />
                                                        </div>
                                                    </div>


                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="c_password">Confirm Password</label>
                                                            <input onChange={onchangeFunction} name='c_password' value={credentials.c_password} type="password" className="form-control" />
                                                        </div>
                                                    </div>


                                                    <div className="d-flex justify-content-sp mx-4 mb-3 mb-lg-4">
                                                        <button type="button" className="btn  m-1 btn-dark btn-lg" onClick={handleSubmit} >Register</button>

                                                        <Link to='/login' className='btn m-1 text-center btn-danger btn-lg m-auto'>Already a user</Link>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://source.unsplash.com/random/900x700/?food"
                                                    className="img-fluid" alt="Sample_image" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Signup
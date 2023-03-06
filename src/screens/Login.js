import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = user;

        const response = await fetch("http://localhost:8000/api/loginUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await response.json();
        // console.log(data.email);
        if (data.success) {
            console.log(data);
            alert('login Success');
            localStorage.setItem("login_token", data.auth_token);
            console.log(localStorage.getItem("login_token"));

            navigate('/')
        }
        else
            alert('invalid credentials')

    }
    const onchangeFunction = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        setUser({ ...user, [name]: val });
    }
    return (
        <>
            <Navbar />
            <div style={{ 'color': 'white' }} className='mt-3'>
                <section className="">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ "borderRadius": "25px" }}>
                                    <div className="card-body p-md-5" style={{ 'color': 'white' }}>
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                                <div className="mx-1 mx-md-4" >

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="email">Your Email</label>
                                                            <input onChange={onchangeFunction} name='email' value={user.email} type="text" className="form-control" />
                                                        </div>
                                                    </div>



                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="password">Password</label>
                                                            <input onChange={onchangeFunction} name='password' value={user.password} type="password" className="form-control" />
                                                        </div>
                                                    </div>




                                                    <div className="d-flex justify-content-sp mx-4 mb-3 mb-lg-4">
                                                        <button type="button" className="btn  m-1 btn-dark btn-lg" onClick={handleSubmit} >Login</button>

                                                        <Link to='/signup' className='btn btn-danger btn-lg m-auto'>Not a user</Link>
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

export default Login;
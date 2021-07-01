import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { handlePasswordSignUp } from '../LoginManager';
import { useHistory } from 'react-router';
import schema from './schema';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {
    const [error, setError] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const history = useHistory();
    const submitForm = (data) => {
        const name = `${data.firstName} ${data.lastName}`;
        console.log("Form clicked ", data);
        handlePasswordSignUp(name, data.email, data.password)
        .then(response => {
            if(response.email){
                //console.log(response.email);

                //adding the user in the database
                const user = {name, email: data.email};
                fetch("https://donateandseek.herokuapp.com/addUser", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(response => response.json())
                .then(result => console.log(result))
                
                alert("Your account has been created! Login now to explore")
                history.push("/login");
            } else {
                console.log(response);
                setError(response);
                history.push("/register");
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div class="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="bradcam_text text-center">
                                <h3>Register</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="contact-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="contact-title">Register with your details</h2>
                            </div>
                            {error.length>0 && <p style={{color: 'red'}}><span>{error}</span></p>}
                            <div class="col-lg-8">
                                <div style={{width: '600px', marginLeft: '40px', marginBottom: '35px', fontSize: '30px'}}>
                                <form onSubmit={handleSubmit(submitForm)}>
                                    <div class="form-group">
                                        <label for="exampleInputFirstName">First Name</label>
                                        <input type="text" class="form-control" {...register("firstName")} placeholder="First Name"/>
                                    </div>
                                    <p style={{color: 'red'}}>{errors.firstName ?.message}</p>
                                    <div class="form-group">
                                        <label for="exampleInputLastName">Last Name</label>
                                        <input type="text" class="form-control" {...register("lastName")} placeholder="Last Name"/>
                                    </div>
                                    <p style={{color: 'red'}}>{errors.lastName ?.message}</p>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" {...register("email")} placeholder="Enter email"/>
                                    </div>
                                    <p style={{color: 'red'}}>{errors.email ?.message}</p>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" {...register("password")} placeholder="Password"/>
                                    </div>
                                    <p style={{color: 'red'}}>{errors.password ?.message}</p>
                                    <div class="form-group">
                                        <label for="exampleInputConfirmPassword1">Confirm Password</label>
                                        <input type="password" class="form-control" {...register("confirmPassword")} placeholder="Confirm Password"/>
                                    </div>
                                    <p style={{color: 'red'}}>{errors.confirmPassword && "Password should match"}</p>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                                </div>
                            </div>
                            
                            <div class="col-lg-3 offset-lg-1">
                                <div class="media contact-info">
                                    <span class="contact-info__icon"><i class="ti-home"></i></span>
                                    <div class="media-body">
                                        <h3>Mülheim an der Ruhr, NRW.</h3>
                                        <p>Friedhofstr 3-5, 45478</p>
                                    </div>
                                </div>
                                <div class="media contact-info">
                                    <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                                    <div class="media-body">
                                        <h3>+1 253 565 2365</h3>
                                        <p>Mon to Fri 9am to 6pm</p>
                                    </div>
                                </div>
                                <div class="media contact-info">
                                    <span class="contact-info__icon"><i class="ti-email"></i></span>
                                    <div class="media-body">
                                        <h3>support@donateandseek.com</h3>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer></Footer>
        </div>
    );
};

export default Register;
import React, { useContext, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import GoogleButton from 'react-google-button';
import { Link } from 'react-router-dom';
import { handleGoogleSignIn, handlePasswordSignIn } from '../LoginManager';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';

const Login = () => {
    const [error, setError] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from: {pathname: '/'}} 
    const googleSignIn = () => {
        console.log("Sign in clicked");
        handleGoogleSignIn()
        .then(response => {
            console.log(response);
            setLoggedInUser(response);
            history.replace(from);
        });
    }
    const submitForm = (data) => {
        console.log("Form clicked ", data);
        handlePasswordSignIn(data.email, data.password)
        .then(response => {
            if(response.email){
             console.log(response);
             setLoggedInUser(response);
             history.replace(from);
            } else {
                 console.log(response);
                 setError(response);
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
                                <h3>Login</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="contact-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="contact-title">Please sign in here</h2>
                            </div>
                            <div class="col-lg-8">
                            <p className="text-center" style={{color: 'red'}}>{error.length > 0 && <span>{error}</span>}</p>
                            <div style={{width: '600px', marginLeft: '40px', marginBottom: '35px', fontSize: '30px'}}>
                                <form onSubmit={handleSubmit(submitForm)}>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" {...register("email")} placeholder="Enter email" required/>
                                        
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" {...register("password")} placeholder="Password" required/>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            <div style ={{marginLeft: '220px'}}>
                                <GoogleButton
                                onClick={googleSignIn}
                                />
                                <p>Don't have an account? <Link to="/register">Create an account</Link></p>
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

export default Login;
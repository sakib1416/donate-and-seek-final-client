import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import axios from 'axios';

const AddDonation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory();
    const [imageURL, setIMageURL] = useState(null);
    console.log(loggedInUser.name, loggedInUser.email);
    const submitForm = data => {
        console.log(loggedInUser.name, loggedInUser.email);
        data.created = new Date();
        data.imageURL = imageURL;
        data.donorName = loggedInUser.name;
        data.donorEmail = loggedInUser.email;
        console.log(data);
        // const formData = new FormData()
        // formData.append('file', data.picture[0]);
        // formData.append('name', data.name);
        // formData.append('description', data.description);
        // formData.append('location', data.location);
        // formData.append('categories', data.categories);
        // formData.append('delivery', data.delivery);
        // formData.append('donorName', loggedInUser.name);
        // formData.append('donorEmail', loggedInUser.email);
        // console.log(formData);
        fetch("https://donateandseek.herokuapp.com/addDonation", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            history.push("/donations")
        })
        .catch(error => {
            console.error(error)
        })
    }
    
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'c38dba077359c836d33630b68d8f48c1');
        imageData.append('image', event.target.files[0]);
        console.log(imageData);
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          console.log(response);
          setIMageURL(response.data.data.display_url);
          console.log(imageURL);
        })
        .catch(function (error) {
          console.log(error);
        });
    
    }
    return (
        <div>
            <Navbar></Navbar>
            <div class="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="bradcam_text text-center">
                                <h3>Donate for the people</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="contact-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="contact-title">Provide details of what you are looking for</h2>
                            </div>
                            <div class="col-lg-8">
                            
                            <div style={{width: '600px', marginLeft: '40px', marginBottom: '35px', fontSize: '30px'}}>
                                <form onSubmit={handleSubmit(submitForm)}>
                                    
                                    {/* extra */}
                                    <div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name of the product</label>
                                            <input type="text" class="form-control" {...register("name")} placeholder="Give a title"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea2">Details of the help you need</label>
                                            <textarea class="form-control rounded-0" {...register("description")} rows="4"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Your Location</label>
                                            <input type="text" class="form-control" {...register("location")} placeholder="Type your location"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Upload Picture</label>
                                            <input type="file" class="form-control" onChange={handleImageUpload} name="picture"  placeholder="picture"/>
                                            {/* {errors.exampleRequired && <span>This field is required</span>} {...register("picture")} */}
                                        </div>
                                        <div style={{fontSize: '16px'}}>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="inputGroupSelect01">Categories</label>
                                                </div>
                                                <select {...register("categories", { required: true })} class="custom-select" id="inputGroupSelect01">
                                                    <option selected>Choose...</option>
                                                    <option value="food">Food</option>
                                                    <option value="education">Education</option>
                                                    <option value="household">Household Appliances</option>
                                                    <option value="covid">Covid-19</option>
                                                </select>
                                            </div>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="inputGroupSelect01">Delivery Type</label>
                                                </div>
                                                <select {...register("delivery", { required: true })} class="custom-select" id="inputGroupSelect01">
                                                    <option selected>Choose...</option>
                                                    <option value="pick">PickUp</option>
                                                    <option value="send">Courier</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                            
                            <div class="col-lg-3 offset-lg-1">
                                <div class="media contact-info">
                                    <span class="contact-info__icon"><i class="ti-home"></i></span>
                                    <div class="media-body">
                                        <h3>Buttonwood, California.</h3>
                                        <p>Rosemead, CA 91770</p>
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
                                        <h3>support@colorlib.com</h3>
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

export default AddDonation;
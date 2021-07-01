import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';


const UpdateSeeking = () => {
    const { register, handleSubmit } = useForm();
    const {id} = useParams();
    const history = useHistory();
    const [updateData, setUpdateData] = useState({});
    useEffect(()=>{
        fetch("https://donateandseek.herokuapp.com/seeking/"+id)
        .then(response => response.json())
        .then(result => setUpdateData(result))
    }, [])
    const submitForm = (data) => {
        const seeking = {
            name: data.name,
            description: data.description,
            location: data.location,
            categories: data.categories,
            delivery: data.delivery
        };
        fetch("https://donateandseek.herokuapp.com/update/seeking/"+id, {
            method: "PATCH",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(seeking)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            history.push("/seeking/"+id)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
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
                                            <input type="text" class="form-control" defaultValue={updateData.name} {...register("name")} placeholder="Give a title"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea2">Details of the help you need</label>
                                            <textarea class="form-control rounded-0" defaultValue={updateData.description} {...register("description")} rows="4"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Your Location</label>
                                            <input type="text" class="form-control" defaultValue={updateData.location} {...register("location")} placeholder="Type your location"/>
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

export default UpdateSeeking;
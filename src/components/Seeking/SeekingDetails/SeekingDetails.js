import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';


const SeekingDetails = () => {
    const {id} = useParams();
    const [seek, setSeek] = useState({});
    useEffect(()=>{
        fetch("http://localhost:5000/seeking/"+id)
        .then(response => response.json())
        .then(result => setSeek(result))
    }, [])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const deleteSeeking = (id) => {
        fetch("http://localhost:5000/delete/seeking/"+id, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(result => {
            history.push("/seeking")
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
                                    <h3>Seeking Details</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <section class="blog_area single-post-area section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 posts-list">
                            <div class="single-post">
                                <div class="feature-img">
                                    <img class="img-fluid" src={seek.imageURL} alt=""/>
                                </div>
                                <div class="blog_details">
                                    <h2>
                                        {seek.name}
                                    </h2>
                                    <ul class="blog-info-link mt-3 mb-4">
                                        <li><a href="#"><i class="fa fa-user"></i> {seek.seekerName}</a></li>
                                        {
                                            loggedInUser.name === seek.seekerName && <div><Link style={{marginRight: '7px'}} to={"/seeking/update/"+seek._id} className="btn btn-success">Update Seeking</Link>
                                            <button onClick={()=>{deleteSeeking(seek._id)}} class="btn btn-danger">Delete</button></div> 
                                        }
                                    </ul>
                                    <p class="excert">
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                        fraction of the camp price. However, who has the willpower
                                    </p>
                                    <p>
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                        fraction of the camp price. However, who has the willpower to actually sit through a
                                        self-imposed MCSE training. who has the willpower to actually
                                    </p>
                                    <div class="quote-wrapper">
                                        <div class="quotes">
                                        {seek.description}
                                        </div>
                                    </div>
                                    <p>
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                        fraction of the camp price. However, who has the willpower
                                    </p>
                                    <p>
                                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                        fraction of the camp price. However, who has the willpower to actually sit through a
                                        self-imposed MCSE training. who has the willpower to actually
                                    </p>
                                </div>
                            </div>
                            <div class="navigation-top">
                                <div class="d-sm-flex justify-content-between text-center">
                                    <p class="like-info"><span class="align-middle"><i class="fa fa-heart"></i></span> Lily and 4
                                        people like this</p>
                                    <div class="col-sm-4 text-center my-2 my-sm-0">
                                        
                                    </div>
                                    <ul class="social-icons">
                                        <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                <div class="navigation-area">
                                    <div class="row">
                                        <div
                                        class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                        <div class="thumb">
                                            <a href="#">
                                                <img class="img-fluid" src="/img/post/preview.png" alt=""/>
                                            </a>
                                        </div>
                                        <div class="arrow">
                                            <a href="#">
                                                <span class="lnr text-white ti-arrow-left"></span>
                                            </a>
                                        </div>
                                        <div class="detials">
                                            <p>Prev Post</p>
                                            <a href="#">
                                                <h4>Space The Final Frontier</h4>
                                            </a>
                                        </div>
                                        </div>
                                        <div
                                        class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                        <div class="detials">
                                            <p>Next Post</p>
                                            <a href="#">
                                                <h4>Telescopes 101</h4>
                                            </a>
                                        </div>
                                        <div class="arrow">
                                            <a href="#">
                                                <span class="lnr text-white ti-arrow-right"></span>
                                            </a>
                                        </div>
                                        <div class="thumb">
                                            <a href="#">
                                                <img class="img-fluid" src="/img/post/next.png" alt=""/>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="blog-author">
                                <div class="media align-items-center">
                                    <img src="/img/blog/author.png" alt=""/>
                                    <div class="media-body">
                                        <a href="#">
                                        <h4>Harvard milan</h4>
                                        </a>
                                        <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                                        our dominion twon Second divided from</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-4">
                            <div class="blog_right_sidebar">
                                <aside class="single_sidebar_widget search_widget">
                                    <form action="#">
                                        <div class="form-group">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder='Search Keyword'
                                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'"/>
                                            <div class="input-group-append">
                                                <button class="btn" type="button"><i class="ti-search"></i></button>
                                            </div>
                                        </div>
                                        </div>
                                        <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                        type="submit">Search</button>
                                    </form>
                                </aside>
                                <aside class="single_sidebar_widget post_category_widget">
                                        <h4 class="widget_title">Category</h4>
                                        <ul class="list cat-list">
                                            <li>
                                                <a href="#" class="d-flex">
                                                    <p>Food</p>
                                                    <p>(5)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="d-flex">
                                                    <p>Household Appliance</p>
                                                    <p>(4)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="d-flex">
                                                    <p>Education</p>
                                                    <p>(03)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="d-flex">
                                                    <p>Covid-19</p>
                                                    <p>(11)</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </aside>
                                <aside class="single_sidebar_widget popular_post_widget">
                                    <h3 class="widget_title">Recent Post</h3>
                                    <div class="media post_item">
                                        <img src="/img/post/post_1.png" alt="post"/>
                                        <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>From life was you fish...</h3>
                                        </a>
                                        <p>January 12, 2019</p>
                                        </div>
                                    </div>
                                    <div class="media post_item">
                                        <img src="/img/post/post_2.png" alt="post"/>
                                        <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>The Amazing Hubble</h3>
                                        </a>
                                        <p>02 Hours ago</p>
                                        </div>
                                    </div>
                                    <div class="media post_item">
                                        <img src="img/post/post_3.png" alt="post"/>
                                        <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>Astronomy Or Astrology</h3>
                                        </a>
                                        <p>03 Hours ago</p>
                                        </div>
                                    </div>
                                    <div class="media post_item">
                                        <img src="/img/post/post_4.png" alt="post"/>
                                        <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>Asteroids telescope</h3>
                                        </a>
                                        <p>01 Hours ago</p>
                                        </div>
                                    </div>
                                </aside>
                                <aside class="single_sidebar_widget tag_cloud_widget">
                                    <h4 class="widget_title">Tag Clouds</h4>
                                    <ul class="list">
                                        <li>
                                        <a href="#">project</a>
                                        </li>
                                        <li>
                                        <a href="#">love</a>
                                        </li>
                                        <li>
                                        <a href="#">technology</a>
                                        </li>
                                        <li>
                                        <a href="#">travel</a>
                                        </li>
                                        <li>
                                        <a href="#">restaurant</a>
                                        </li>
                                        <li>
                                        <a href="#">life style</a>
                                        </li>
                                        <li>
                                        <a href="#">design</a>
                                        </li>
                                        <li>
                                        <a href="#">illustration</a>
                                        </li>
                                    </ul>
                                </aside>
                                <aside class="single_sidebar_widget instagram_feeds">
                                    <h4 class="widget_title">Instagram Feeds</h4>
                                    <ul class="instagram_row flex-wrap">
                                        <li>
                                        <a href="#">
                                            <img class="img-fluid" src="/img/post/post_5.png" alt=""/>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <img class="img-fluid" src="/img/post/post_6.png" alt=""/>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <img class="img-fluid" src="/img/post/post_7.png" alt=""/>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <img class="img-fluid" src="/img/post/post_8.png" alt=""/>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <img class="img-fluid" src="/img/post/post_9.png" alt=""/>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <img class="img-fluid" src="/img/post/post_10.png" alt=""/>
                                        </a>
                                        </li>
                                    </ul>
                                </aside>
                                <aside class="single_sidebar_widget newsletter_widget">
                                    <h4 class="widget_title">Newsletter</h4>
                                    <form action="#">
                                        <div class="form-group">
                                        <input type="email" class="form-control" onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Enter email'" placeholder='Enter email' required/>
                                        </div>
                                        <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                        type="submit">Subscribe</button>
                                    </form>
                                </aside>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer></Footer>
        </div>
    );
};

export default SeekingDetails;
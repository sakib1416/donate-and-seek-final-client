import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import DonationCards from '../DonationCards/DonationCards';

const Donations = () => {
    const [donations, setDonations] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/donations")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setDonations(data)
        });
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div class="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="bradcam_text text-center">
                                    <h3>All the available donations</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <section class="blog_area section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mb-5 mb-lg-0">
                                <div class="blog_left_sidebar">
                                    {
                                        donations.map(donation => <DonationCards donation={donation}></DonationCards>)
                                    }
                                    
                                    <nav class="blog-pagination justify-content-center d-flex">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a href="#" class="page-link" aria-label="Previous">
                                                    <i class="ti-angle-left"></i>
                                                </a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#" class="page-link">1</a>
                                            </li>
                                            <li class="page-item active">
                                                <a href="#" class="page-link">2</a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#" class="page-link" aria-label="Next">
                                                    <i class="ti-angle-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="blog_right_sidebar">
                                    <aside class="single_sidebar_widget search_widget">
                                        <form action="#">
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" placeholder='Search Keyword'
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Search Keyword'"/>
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
                                            <img src="img/post/post_5.png" alt="post"/>
                                            <div class="media-body">
                                                <a href="single-blog.html">
                                                    <h3>From life was you fish...</h3>
                                                </a>
                                                <p>January 12, 2019</p>
                                            </div>
                                        </div>
                                        <div class="media post_item">
                                            <img src="img/post/post_7.png" alt="post"/>
                                            <div class="media-body">
                                                <a href="single-blog.html">
                                                    <h3>The Amazing Hubble</h3>
                                                </a>
                                                <p>02 Hours ago</p>
                                            </div>
                                        </div>
                                        <div class="media post_item">
                                            <img src="img/post/post_8.png" alt="post"/>
                                            <div class="media-body">
                                                <a href="single-blog.html">
                                                    <h3>Astronomy Or Astrology</h3>
                                                </a>
                                                <p>03 Hours ago</p>
                                            </div>
                                        </div>
                                        <div class="media post_item">
                                            <img src="img/post/post_9.png" alt="post"/>
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
                                                    <img class="img-fluid" src="img/post/post_5.png" alt=""/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="img-fluid" src="img/post/post_9.png" alt=""/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="img-fluid" src="img/post/post_7.png" alt=""/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="img-fluid" src="img/post/post_8.png" alt=""/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="img-fluid" src="img/post/post_9.png" alt=""/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="img-fluid" src="img/post/post_10.png" alt=""/>
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

export default Donations;
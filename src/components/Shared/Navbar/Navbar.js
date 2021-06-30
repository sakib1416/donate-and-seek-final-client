import React, { useContext } from 'react';
import {
    Link,
    useHistory
  } from "react-router-dom";
import { UserContext } from '../../../App';
import { handleSignOut } from '../../Login/LoginManager';

const Navbar = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogOut = () => {
        handleSignOut()
        .then(response => {
            setLoggedInUser(response);
            history.push("/");
        })
    }
    return (
        <div>
            <header>
                <div class="header-area ">
                    <div class="header-top_area">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-xl-6 col-md-12 col-lg-8">
                                    <div class="short_contact_list">
                                        <ul>
                                            <li><a href="#"> <i class="fa fa-phone"></i> +1 (454) 556-5656</a></li>
                                            <li><a href="#"> <i class="fa fa-envelope"></i>support@donateandseek.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-md-6 col-lg-4">
                                    <div class="social_media_links d-none d-lg-block">
                                        <a href="#">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fa fa-pinterest-p"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sticky-header" class="main-header-area">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-xl-3 col-lg-3">
                                    <div class="logo">
                                        <Link to="/" style={{color: "white", fontSize:"x-large"}}>Donate&Seek</Link>
                                    </div>
                                </div>
                                <div class="col-xl-9 col-lg-9">
                                    <div class="main-menu">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link to="/">Home</Link></li>
                                                
                                                <li><Link to="/donations">Donation <i class="ti-angle-down"></i></Link>
                                                    <ul class="submenu">
                                                        <li><Link to="/donations">See available donations</Link></li>
                                                        <li><Link to="/addDonation">Make a donation</Link></li> 
                                                    </ul>
                                                </li>
                                                <li><Link to="/seeking">Seek Help <i class="ti-angle-down"></i></Link>
                                                    <ul class="submenu">
                                                        <li><Link to="/seeking">See what people are seeking</Link></li>
                                                        <li><Link to="/addSeeking">Post for help</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/aids">Government Aid</Link></li>
                                                {
                                                    loggedInUser.email ? <li><Link onClick={handleLogOut}>Logout</Link></li>
                                                    :
                                                    <li><Link to="/login">Login</Link></li>
                                                }
                                            </ul>
                                        </nav>
                                        <div class="Appointment">
                                            <div class="book_btn d-none d-lg-block">
                                                
                                                <Link data-scroll-nav='1' to="/addDonation">Make a donation</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
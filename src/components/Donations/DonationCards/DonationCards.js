import React from 'react';
import { Link } from 'react-router-dom';
import './DonationCards.css'

const DonationCards = (props) => {
    const {name, description, location, categories, delivery, imageURL, donorName} = props.donation;
    return (
        <div>
            <article class="blog_item">
                <div class="blog_item_img">
                    <img class="card-img rounded-0" src={imageURL} alt=""/>
                        <a href="#" class="blog_item_date">
                            <h3>15</h3>
                            <p>Jan</p>
                        </a>
                </div>
                <div class="blog_details">
                    <a class="d-inline-block" href="single-blog.html">
                        <h2>{name}</h2>
                    </a>
                    <p className="description-text">{description}</p>
                    <Link to={`/donation/${props.donation._id}`} className="btn btn-success">See more</Link>
                    <ul class="blog-info-link">
                        <li><a href="#"><i class="fa fa-user"></i> {donorName}</a></li>
                    </ul>
                </div>
            </article>
        </div>
    );
};

export default DonationCards;
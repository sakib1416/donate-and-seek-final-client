import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import EventCounter from '../EventCounter/EventCounter';
import LatestActivity from '../LatestActivity/LatestActivity';
import MakeDonation from '../MakeDonation/MakeDonation';
import NewsAndUpdates from '../NewsAndUpdates/NewsAndUpdates';
import OurVolunteer from '../OurVolunteer/OurVolunteer';
import PopularCauses from '../PopularCauses/PopularCauses';
import Reason from '../Reason/Reason';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <Reason></Reason>
            <LatestActivity></LatestActivity>
            <PopularCauses></PopularCauses>
            <EventCounter></EventCounter>
            {/* <OurVolunteer></OurVolunteer> */}
            <NewsAndUpdates></NewsAndUpdates>
            <MakeDonation></MakeDonation>
            <Footer></Footer>
        </div>
    );
};

export default Home;
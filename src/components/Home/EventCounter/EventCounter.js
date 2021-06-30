import React from 'react';

const EventCounter = () => {
    return (
        <div>
            <div class="counter_area">
                <div class="container">
                    <div class="counter_bg overlay">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="single_counter d-flex align-items-center justify-content-center">
                                    <div class="icon">
                                        <i class="flaticon-calendar"></i>
                                    </div>
                                    <div class="events">
                                        <h3 class="counter">40</h3>
                                        <p>Food Event</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="single_counter d-flex align-items-center justify-content-center">
                                    <div class="icon">
                                        <i class="flaticon-heart-beat"></i>
                                    </div>
                                    <div class="events">
                                        <h3 class="counter">40</h3>
                                        <p>Educational Event</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="single_counter d-flex align-items-center justify-content-center">
                                    <div class="icon">
                                        <i class="flaticon-in-love"></i>
                                    </div>
                                    <div class="events">
                                        <h3 class="counter">40</h3>
                                        <p>Covid-19 Awareness Event</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="single_counter d-flex align-items-center justify-content-center">
                                    <div class="icon">
                                        <i class="flaticon-hug"></i>
                                    </div>
                                    <div class="events">
                                        <h3 class="counter">40</h3>
                                        <p>Mental Health Event</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCounter;
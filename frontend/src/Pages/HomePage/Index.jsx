import React from 'react';
import Header from '../../Component/FinalHome/Header.jsx'
import internetSecurity from '../../assets/images/internet-security.png'
import headerbg from '../../assets/images/header-bg-img.jpg'
import dashboard from '../../assets/images/dashboard.webp'
import invoice from '../../assets/images/invoice.png'
import brand from '../../assets/images/brand/brand-logo.webp'
import ptableIcon from '../../assets/images/ptable-icon1.png'
import coverage1 from '../../assets/images/coverage-4.webp'
import coverage2 from '../../assets/images/coverage-5.webp'
import coverage3 from '../../assets/images/coverage-6.webp'
import coverage4 from '../../assets/images/coverage-7.webp'
import { Box, Grid, FormControl, InputLabel, Input, InputAdornment, TextField, Link } from '@mui/material';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Dashboard } from '@mui/icons-material';
import { background } from '@chakra-ui/react';
import './index.css';
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 1
};
const coverageimg = {
    infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // arrows: false,
    // slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    };


export default function Index() {

    return (
        <>
            <Header />
                <div className='home-banner'>
                    <div className='home-banner-conten'>
                        <h1>Launch your <span className='me-2' style={{ color: "#FFD700" }}>Travel Website</span>
                            with in 15 minutes</h1>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-6 bannerbtn'>
                                <a href="#" className='btn-started me-3 float-end'>GET STARTED</a>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 bannerbtn'>
                            <a href="#" className='btn-demo float-start'>INSTANT FREE DEMO</a>
                            </div>
                        </div>
                    </div>
                    <img src={headerbg} />
                    {/* <div className='clipshadow'><div className='clipslidbox'></div></div> */}
                </div>
            <div className=''>
                <div className=''>
                    <div>
                        <Slider {...settings}>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                                <img src={brand} className='home-img-icon'/>
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                                <img src={brand}  className='home-img-icon'/>
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                                <img src={brand} className='home-img-icon'/>
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                                <img src={brand} className='home-img-icon'/>
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                                <img src={brand} className='home-img-icon'/>
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                                <img src={brand} className='home-img-icon'/>
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                                <img src={brand} className='home-img-icon' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            {/* <div className='travel-portal'>
                <div className='container'>
                    <div className='text-center col-8 m-auto'>
                        <h2>White label Travel Portal</h2>
                        <p>
                            <span className="more">
                                A pre-built White Label Travel Website is a ready-to-use solution with thousands of Travel related features and properties that can be served all around the globe under your brand name. It enables you to expand your business in the global market and increase brand visibili<span className="moreellipses">...&nbsp;</span><span className="morecontent"><span>ty. This allows you to take your travel business online in NO TIME and make it a BRAND that can be known by everyone. Moreover, its marketing friendly features helps you to make your brand visible and increases client loyalty and eventually the revenue.<br /><br />
                                    With Flyshop White Label Travel Solution, you get everything at one place. You can get online in a few clicks even without any technical knowledge or designing skills. Easy Back Office, Extensive Reporting with integrated Expense Management System gives you freedom from tasks which are important to manage your business but are non-productive. Eventually, making you able to focus more on marketing and client relations.
                                </span>&nbsp;&nbsp;<a href="#" className="morelink">Show more &gt;</a></span></span>
                        </p>
                        <div className=''>
                            <iframe width="100%" height="488px" src='https://www.youtube.com/embed/aeDYOttzd8I'></iframe>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='bg-white position-relative'>
                <div className='col-12 m-auto'>
                    <img width="100%" src={dashboard} />
                </div>
                <div className='clipshadow'><div className='clipslidbox'></div></div>
            </div> */}
            <div className='travel-agents-aatm'>
                <div className='text-center '>
                    <h2 className="section__title">Your unique website with your own <br /> Brand, Logo, Colours, Templates</h2>
                    <div className="dtr-styled-divider divider-center bg-light-black"></div>
                    <h4 className='section__title__short'>Making all <b className='fw-bold'> Travel Agents </b> Aatm Nirbhar!</h4>
                    <div className="dtr-styled-divider divider-center bg-light-black"></div>
                    <div className='col-10 m-auto mt-5'>
                        <div className='row'>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2 col-md-4 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-img'>
                                            <img className='' src={invoice} />
                                        </div>
                                        <p className='service-box mb-0'>invoice</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="dtr-btn dtr-px-50 dtr-mt-60 border-radios">View More</button>
                    </div>
                </div>
            </div>
            <div className='get-more-incentive'>
                <div className='container'>
                    <div className='row bg-formget'>
                        <div className='col-lg-6 col-md-6 col-sm-12 card-section-one'>
                            <div className=''>
                                <h2 className='text--title'>Get more incentive on flight sign up here.</h2>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 card-section-tow'>
                            <div className='form-group'>
                                <div className=''>
                                    <input type='text' placeholder='Name' className='form-control' />
                                </div>
                                <div className=''>
                                    <input type='text' placeholder='Travel Agency' className='form-control' />
                                </div>
                                <div className=''>
                                    <input type='text' placeholder='Phone' className='form-control' />
                                </div>
                                <div className=''>
                                    <select name="agent_type" id="" className="form-control">
                                        <option value="b2b_agent">B2B Agent</option>
                                        <option value="white_label">White label</option>
                                        <option value="flight_api">Flight API</option>
                                    </select>
                                </div>
                                <div className=''>
                                    <input type='text' placeholder='Email address' className='form-control' />
                                </div>
                                <div className=''>
                                    <button className='dtr-btn w-100'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='plans--pricing'>
                <div className='container'>
                    <div className='mb-5 text-center pb-5'>
                        <h2>Plans and pricing</h2>
                        <p>Our pricing scales with you and your needs. Try it for free. No credit card required.</p>
                        <div class="dtr-styled-divider divider-center bg-light-green"></div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-4 pe-0 dtr-md-pr-15 mb-5'>
                            <div className="dtr-pricing bg-light-green">

                                <div className="dtr-pricing-img"><img loading="lazy" src={ptableIcon} alt="image" /></div>

                                <h3>White Label Basic</h3>

                                <h4>White Label Website</h4>

                                <p className="dtr-price color-green"><del className="del-pri">50k</del> 15k</p>

                                <p className="m-0" style={{ color: "black", fontWeight: "700" }}>(Offer price)</p>

                                <a href="" className="dtr-btn btn-green my-4 border-radios d-inline-block">Signup</a>

                                <ul className="dtr-list-block term-list">

                                    <li className="term-item ">Hotel Booking</li>

                                    <li className="term-item ">Flight Booking</li>

                                    <li className="term-item ">Bus Booking</li>

                                    <li className="term-item ">Private Tours</li>

                                    <li className="term-item ">Visa Services</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>Responsive Design</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>All Device Supported</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>SEO Friendly Pages</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>Social Media Integration</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>Unlimited Bandwidth *</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>Unlimited Webspace *</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>24x7 Support System</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>Payment Gateway</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>CMS</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>Multiple Designs</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>No Hosting required</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>Setup/ Support</li>

                                    <li className="term-item toggleable" style={{ display: "none" }}>Yearly Maintenance - Rs 2,999/-</li>

                                    <li className="more">Veiw More...</li></ul>

                            </div>
                        </div>
                        <div className='col-12 col-md-4 px-0 dtr-md-px-15 mb-5'>
                            <div className="dtr-pricing pricing-focused bg-dark-blue">
                                <div className="dtr-pricing-tagline-wrapper">
                                    <div className="dtr-pricing-tagline color-green">Most Popular</div>
                                </div>
                                <div className="dtr-pricing-img"><img loading="lazy" src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/ptable-icon2.png" alt="image" /></div>
                                <h3 className="text-white">White Label Advance</h3>
                                <h4 className="text-white">White Label Website</h4>
                                <p className="dtr-price color-green"><del className="del-pri">75k</del> 20k</p>
                                <p className="m-0" style={{ color: 'white', fontWeight: 700 }}>(Offer price)</p>
                                <a href="#" className="dtr-btn btn-default my-4 d-inline-block border-radios bg-white text-dark">Signup</a>
                                <ul className="dtr-list-block term-list text-white">
                                    <li className="term-item ">Hotel Booking (online through our API)</li>
                                    <li className="term-item ">Hotel Booking (self-inventory system)</li>
                                    <li className="term-item ">Flight Booking (online through our API)</li>
                                    <li className="term-item ">Flight Booking (self-inventory system)</li>
                                    <li className="term-item ">Bus Booking</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Private Tours (Fully Customized Manually or Auto)</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Visa Services</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Responsive Design</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>All Device Supported</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>SEO Friendly Pages</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Social Media Integration</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Unlimited Bandwidth *</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Unlimited Webspace *</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>24x7 Support System</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Payment Gateway</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>CMS</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Multiple Designs</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>No Hosting required</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Setup/ Support</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Yearly Maintenance - Rs 4,499/-</li>
                                    <li className="more">Veiw More...</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 ps-0 dtr-md-pl-15 mb-5">
                            {/* pricing 3 starts */}
                            <div className="dtr-pricing bg-light-green">
                                <div className="dtr-pricing-img"><img loading="lazy" src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/ptable-icon3.png" alt="image" /></div>
                                <h3>Complete White Label B2B &amp; B2C</h3>
                                <h4>White Label Website</h4>
                                <p className="dtr-price color-green"><del className="del-pri">100k</del> 30k</p>
                                <p className="dtr-m-0" style={{ color: 'black', fontWeight: 700 }}>(Offer price)</p>
                                <a href="#" className="dtr-btn btn-green my-4 border-radios d-inline-block">Signup</a>
                                <ul className="dtr-list-block term-list">
                                    <li className="term-item ">Complete B2B Section</li>
                                    <li className="term-item ">Create travel agents</li>
                                    <li className="term-item ">Manage commission</li>
                                    <li className="term-item ">Manage Markup</li>
                                    <li className="term-item ">Manage Invoice</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Manage Tickets (Via Mail, SMS, WhatsApp*)</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Manage Agent Wallet system </li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Hotel Booking (online through our API)</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Hotel Booking (self-inventory system)</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Flight Booking (online through our API)</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Flight Booking (self-inventory system)</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Bus Booking</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Private Tours (Fully Customized Manually or Auto)</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Visa Services</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Responsive Design</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>All Device Supported</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>SEO Friendly Pages</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Social Media Integration</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Unlimited Bandwidth *</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Unlimited Webspace *</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>24x7 Support System</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Payment Gateway</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>CMS</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Multiple Designs</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>No Hosting required</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Setup/ Support</li>
                                    <li className="term-item toggleable" style={{ display: 'none' }}>Yearly Maintenance - Rs 7,999/-</li>
                                    <li className="more">Veiw More...</li></ul>
                            </div>
                            {/* pricing 3 ends */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='work-with-us'>
                <div className='container'>
                    <h2 class="common_head line-hgt7">Why work with us</h2>
                    <div className='row'>
                        <div className="col-md-3 col-sm-6 col-xs-6 p-2">
                            <div className=" work-listli">
                                <span>
                                    <svg
                                        xmlns="https://www.w3.org/2000/svg"
                                        xmlnsXlink="https://www.w3.org/1999/xlink"
                                        width="23px"
                                        height="33px"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            fill="#5fae95"
                                            d="M6.532,4.130 L6.532,2.904 C6.532,2.636 6.751,2.418 7.022,2.418 L7.808,2.418 C8.632,2.418 9.385,1.920 9.725,1.151 C10.034,0.451 10.731,-0.001 11.499,-0.001 C12.268,-0.001 12.965,0.451 13.274,1.151 C13.614,1.920 14.366,2.417 15.191,2.417 L15.977,2.417 C16.247,2.417 16.467,2.635 16.467,2.904 L16.467,4.130 C16.467,4.398 16.247,4.616 15.977,4.616 L7.022,4.616 C6.751,4.616 6.532,4.398 6.532,4.130 L6.532,4.130 ZM4.817,27.040 L7.108,27.040 L7.108,24.766 L4.817,24.766 L4.817,27.040 ZM4.817,13.361 L7.108,13.361 L7.108,11.087 L4.817,11.087 L4.817,13.361 ZM22.999,7.349 L22.999,29.841 C22.999,31.582 21.571,33.000 19.816,33.000 L3.183,33.000 C1.428,33.000 -0.000,31.582 -0.000,29.841 L-0.000,7.349 C-0.000,5.607 1.428,4.189 3.183,4.189 L4.946,4.189 C4.978,5.299 5.895,6.194 7.022,6.194 L15.977,6.194 C17.103,6.194 18.021,5.299 18.053,4.189 L19.816,4.189 C21.571,4.189 22.999,5.607 22.999,7.349 L22.999,7.349 ZM9.955,12.211 C9.955,12.646 10.310,13.000 10.750,13.000 L17.923,13.000 C18.362,13.000 18.718,12.646 18.718,12.211 C18.718,11.775 18.362,11.422 17.923,11.422 L10.750,11.422 C10.310,11.422 9.955,11.775 9.955,12.211 L9.955,12.211 ZM9.955,19.129 C9.955,19.564 10.310,19.918 10.750,19.918 L17.125,19.918 C17.564,19.918 17.920,19.564 17.920,19.129 C17.920,18.694 17.564,18.340 17.125,18.340 L10.750,18.340 C10.310,18.340 9.955,18.693 9.955,19.129 L9.955,19.129 ZM8.698,23.977 C8.698,23.541 8.342,23.188 7.903,23.188 L4.022,23.188 C3.582,23.188 3.227,23.541 3.227,23.977 L3.227,27.829 C3.227,28.265 3.582,28.618 4.022,28.618 L7.903,28.618 C8.342,28.618 8.698,28.265 8.698,27.829 L8.698,23.977 ZM8.698,17.137 C8.698,16.701 8.342,16.349 7.903,16.349 L4.022,16.349 C3.582,16.349 3.227,16.701 3.227,17.137 L3.227,20.989 C3.227,21.425 3.582,21.778 4.022,21.778 L7.903,21.778 C8.342,21.778 8.698,21.425 8.698,20.989 L8.698,17.137 ZM8.698,10.298 C8.698,9.862 8.342,9.509 7.903,9.509 L4.022,9.509 C3.582,9.509 3.227,9.862 3.227,10.298 L3.227,14.150 C3.227,14.586 3.582,14.939 4.022,14.939 L7.903,14.939 C8.342,14.939 8.698,14.586 8.698,14.150 L8.698,10.298 ZM19.117,26.047 C19.117,25.611 18.761,25.258 18.322,25.258 L10.750,25.258 C10.310,25.258 9.955,25.611 9.955,26.047 C9.955,26.483 10.310,26.836 10.750,26.836 L18.322,26.836 C18.761,26.836 19.117,26.483 19.117,26.047 L19.117,26.047 ZM4.817,20.200 L7.108,20.200 L7.108,17.926 L4.817,17.926 L4.817,20.200 Z"
                                        />
                                    </svg>
                                </span>
                                <label>
                                    <b>Single XML</b> with leading
                                    <br />
                                    LCC &amp; full-service domestic carriers
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 p-2">
                            <div className=" work-listli">
                                <span>
                                    <svg
                                        xmlns="https://www.w3.org/2000/svg"
                                        xmlnsXlink="https://www.w3.org/1999/xlink"
                                        width="23px"
                                        height="33px"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            fill="#5fae95"
                                            d="M6.532,4.130 L6.532,2.904 C6.532,2.636 6.751,2.418 7.022,2.418 L7.808,2.418 C8.632,2.418 9.385,1.920 9.725,1.151 C10.034,0.451 10.731,-0.001 11.499,-0.001 C12.268,-0.001 12.965,0.451 13.274,1.151 C13.614,1.920 14.366,2.417 15.191,2.417 L15.977,2.417 C16.247,2.417 16.467,2.635 16.467,2.904 L16.467,4.130 C16.467,4.398 16.247,4.616 15.977,4.616 L7.022,4.616 C6.751,4.616 6.532,4.398 6.532,4.130 L6.532,4.130 ZM4.817,27.040 L7.108,27.040 L7.108,24.766 L4.817,24.766 L4.817,27.040 ZM4.817,13.361 L7.108,13.361 L7.108,11.087 L4.817,11.087 L4.817,13.361 ZM22.999,7.349 L22.999,29.841 C22.999,31.582 21.571,33.000 19.816,33.000 L3.183,33.000 C1.428,33.000 -0.000,31.582 -0.000,29.841 L-0.000,7.349 C-0.000,5.607 1.428,4.189 3.183,4.189 L4.946,4.189 C4.978,5.299 5.895,6.194 7.022,6.194 L15.977,6.194 C17.103,6.194 18.021,5.299 18.053,4.189 L19.816,4.189 C21.571,4.189 22.999,5.607 22.999,7.349 L22.999,7.349 ZM9.955,12.211 C9.955,12.646 10.310,13.000 10.750,13.000 L17.923,13.000 C18.362,13.000 18.718,12.646 18.718,12.211 C18.718,11.775 18.362,11.422 17.923,11.422 L10.750,11.422 C10.310,11.422 9.955,11.775 9.955,12.211 L9.955,12.211 ZM9.955,19.129 C9.955,19.564 10.310,19.918 10.750,19.918 L17.125,19.918 C17.564,19.918 17.920,19.564 17.920,19.129 C17.920,18.694 17.564,18.340 17.125,18.340 L10.750,18.340 C10.310,18.340 9.955,18.693 9.955,19.129 L9.955,19.129 ZM8.698,23.977 C8.698,23.541 8.342,23.188 7.903,23.188 L4.022,23.188 C3.582,23.188 3.227,23.541 3.227,23.977 L3.227,27.829 C3.227,28.265 3.582,28.618 4.022,28.618 L7.903,28.618 C8.342,28.618 8.698,28.265 8.698,27.829 L8.698,23.977 ZM8.698,17.137 C8.698,16.701 8.342,16.349 7.903,16.349 L4.022,16.349 C3.582,16.349 3.227,16.701 3.227,17.137 L3.227,20.989 C3.227,21.425 3.582,21.778 4.022,21.778 L7.903,21.778 C8.342,21.778 8.698,21.425 8.698,20.989 L8.698,17.137 ZM8.698,10.298 C8.698,9.862 8.342,9.509 7.903,9.509 L4.022,9.509 C3.582,9.509 3.227,9.862 3.227,10.298 L3.227,14.150 C3.227,14.586 3.582,14.939 4.022,14.939 L7.903,14.939 C8.342,14.939 8.698,14.586 8.698,14.150 L8.698,10.298 ZM19.117,26.047 C19.117,25.611 18.761,25.258 18.322,25.258 L10.750,25.258 C10.310,25.258 9.955,25.611 9.955,26.047 C9.955,26.483 10.310,26.836 10.750,26.836 L18.322,26.836 C18.761,26.836 19.117,26.483 19.117,26.047 L19.117,26.047 ZM4.817,20.200 L7.108,20.200 L7.108,17.926 L4.817,17.926 L4.817,20.200 Z"
                                        />
                                    </svg>
                                </span>
                                <label>
                                    <b>Single XML</b> with leading
                                    <br />
                                    LCC &amp; full-service domestic carriers
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 p-2">
                            <div className=" work-listli">
                                <span>
                                    <svg
                                        xmlns="https://www.w3.org/2000/svg"
                                        xmlnsXlink="https://www.w3.org/1999/xlink"
                                        width="23px"
                                        height="33px"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            fill="#5fae95"
                                            d="M6.532,4.130 L6.532,2.904 C6.532,2.636 6.751,2.418 7.022,2.418 L7.808,2.418 C8.632,2.418 9.385,1.920 9.725,1.151 C10.034,0.451 10.731,-0.001 11.499,-0.001 C12.268,-0.001 12.965,0.451 13.274,1.151 C13.614,1.920 14.366,2.417 15.191,2.417 L15.977,2.417 C16.247,2.417 16.467,2.635 16.467,2.904 L16.467,4.130 C16.467,4.398 16.247,4.616 15.977,4.616 L7.022,4.616 C6.751,4.616 6.532,4.398 6.532,4.130 L6.532,4.130 ZM4.817,27.040 L7.108,27.040 L7.108,24.766 L4.817,24.766 L4.817,27.040 ZM4.817,13.361 L7.108,13.361 L7.108,11.087 L4.817,11.087 L4.817,13.361 ZM22.999,7.349 L22.999,29.841 C22.999,31.582 21.571,33.000 19.816,33.000 L3.183,33.000 C1.428,33.000 -0.000,31.582 -0.000,29.841 L-0.000,7.349 C-0.000,5.607 1.428,4.189 3.183,4.189 L4.946,4.189 C4.978,5.299 5.895,6.194 7.022,6.194 L15.977,6.194 C17.103,6.194 18.021,5.299 18.053,4.189 L19.816,4.189 C21.571,4.189 22.999,5.607 22.999,7.349 L22.999,7.349 ZM9.955,12.211 C9.955,12.646 10.310,13.000 10.750,13.000 L17.923,13.000 C18.362,13.000 18.718,12.646 18.718,12.211 C18.718,11.775 18.362,11.422 17.923,11.422 L10.750,11.422 C10.310,11.422 9.955,11.775 9.955,12.211 L9.955,12.211 ZM9.955,19.129 C9.955,19.564 10.310,19.918 10.750,19.918 L17.125,19.918 C17.564,19.918 17.920,19.564 17.920,19.129 C17.920,18.694 17.564,18.340 17.125,18.340 L10.750,18.340 C10.310,18.340 9.955,18.693 9.955,19.129 L9.955,19.129 ZM8.698,23.977 C8.698,23.541 8.342,23.188 7.903,23.188 L4.022,23.188 C3.582,23.188 3.227,23.541 3.227,23.977 L3.227,27.829 C3.227,28.265 3.582,28.618 4.022,28.618 L7.903,28.618 C8.342,28.618 8.698,28.265 8.698,27.829 L8.698,23.977 ZM8.698,17.137 C8.698,16.701 8.342,16.349 7.903,16.349 L4.022,16.349 C3.582,16.349 3.227,16.701 3.227,17.137 L3.227,20.989 C3.227,21.425 3.582,21.778 4.022,21.778 L7.903,21.778 C8.342,21.778 8.698,21.425 8.698,20.989 L8.698,17.137 ZM8.698,10.298 C8.698,9.862 8.342,9.509 7.903,9.509 L4.022,9.509 C3.582,9.509 3.227,9.862 3.227,10.298 L3.227,14.150 C3.227,14.586 3.582,14.939 4.022,14.939 L7.903,14.939 C8.342,14.939 8.698,14.586 8.698,14.150 L8.698,10.298 ZM19.117,26.047 C19.117,25.611 18.761,25.258 18.322,25.258 L10.750,25.258 C10.310,25.258 9.955,25.611 9.955,26.047 C9.955,26.483 10.310,26.836 10.750,26.836 L18.322,26.836 C18.761,26.836 19.117,26.483 19.117,26.047 L19.117,26.047 ZM4.817,20.200 L7.108,20.200 L7.108,17.926 L4.817,17.926 L4.817,20.200 Z"
                                        />
                                    </svg>
                                </span>
                                <label>
                                    <b>Single XML</b> with leading
                                    <br />
                                    LCC &amp; full-service domestic carriers
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 p-2">
                            <div className=" work-listli">
                                <span>
                                    <svg
                                        xmlns="https://www.w3.org/2000/svg"
                                        xmlnsXlink="https://www.w3.org/1999/xlink"
                                        width="23px"
                                        height="33px"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            fill="#5fae95"
                                            d="M6.532,4.130 L6.532,2.904 C6.532,2.636 6.751,2.418 7.022,2.418 L7.808,2.418 C8.632,2.418 9.385,1.920 9.725,1.151 C10.034,0.451 10.731,-0.001 11.499,-0.001 C12.268,-0.001 12.965,0.451 13.274,1.151 C13.614,1.920 14.366,2.417 15.191,2.417 L15.977,2.417 C16.247,2.417 16.467,2.635 16.467,2.904 L16.467,4.130 C16.467,4.398 16.247,4.616 15.977,4.616 L7.022,4.616 C6.751,4.616 6.532,4.398 6.532,4.130 L6.532,4.130 ZM4.817,27.040 L7.108,27.040 L7.108,24.766 L4.817,24.766 L4.817,27.040 ZM4.817,13.361 L7.108,13.361 L7.108,11.087 L4.817,11.087 L4.817,13.361 ZM22.999,7.349 L22.999,29.841 C22.999,31.582 21.571,33.000 19.816,33.000 L3.183,33.000 C1.428,33.000 -0.000,31.582 -0.000,29.841 L-0.000,7.349 C-0.000,5.607 1.428,4.189 3.183,4.189 L4.946,4.189 C4.978,5.299 5.895,6.194 7.022,6.194 L15.977,6.194 C17.103,6.194 18.021,5.299 18.053,4.189 L19.816,4.189 C21.571,4.189 22.999,5.607 22.999,7.349 L22.999,7.349 ZM9.955,12.211 C9.955,12.646 10.310,13.000 10.750,13.000 L17.923,13.000 C18.362,13.000 18.718,12.646 18.718,12.211 C18.718,11.775 18.362,11.422 17.923,11.422 L10.750,11.422 C10.310,11.422 9.955,11.775 9.955,12.211 L9.955,12.211 ZM9.955,19.129 C9.955,19.564 10.310,19.918 10.750,19.918 L17.125,19.918 C17.564,19.918 17.920,19.564 17.920,19.129 C17.920,18.694 17.564,18.340 17.125,18.340 L10.750,18.340 C10.310,18.340 9.955,18.693 9.955,19.129 L9.955,19.129 ZM8.698,23.977 C8.698,23.541 8.342,23.188 7.903,23.188 L4.022,23.188 C3.582,23.188 3.227,23.541 3.227,23.977 L3.227,27.829 C3.227,28.265 3.582,28.618 4.022,28.618 L7.903,28.618 C8.342,28.618 8.698,28.265 8.698,27.829 L8.698,23.977 ZM8.698,17.137 C8.698,16.701 8.342,16.349 7.903,16.349 L4.022,16.349 C3.582,16.349 3.227,16.701 3.227,17.137 L3.227,20.989 C3.227,21.425 3.582,21.778 4.022,21.778 L7.903,21.778 C8.342,21.778 8.698,21.425 8.698,20.989 L8.698,17.137 ZM8.698,10.298 C8.698,9.862 8.342,9.509 7.903,9.509 L4.022,9.509 C3.582,9.509 3.227,9.862 3.227,10.298 L3.227,14.150 C3.227,14.586 3.582,14.939 4.022,14.939 L7.903,14.939 C8.342,14.939 8.698,14.586 8.698,14.150 L8.698,10.298 ZM19.117,26.047 C19.117,25.611 18.761,25.258 18.322,25.258 L10.750,25.258 C10.310,25.258 9.955,25.611 9.955,26.047 C9.955,26.483 10.310,26.836 10.750,26.836 L18.322,26.836 C18.761,26.836 19.117,26.483 19.117,26.047 L19.117,26.047 ZM4.817,20.200 L7.108,20.200 L7.108,17.926 L4.817,17.926 L4.817,20.200 Z"
                                        />
                                    </svg>
                                </span>
                                <label>
                                    <b>Single XML</b> with leading
                                    <br />
                                    LCC &amp; full-service domestic carriers
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='our-services'>
                <div className='container'>
                    <div class="header-section">
                        <h2 class="title">Our Services</h2>
                    </div>
                    <div className='row'>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-service">
                                <div className="content">
                                    <span className="icon">
                                        <img
                                            width="100%"
                                            loading="lazy"
                                            src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/white.png"
                                            alt="image"
                                        />
                                    </span>
                                    <h3 className="title">White Label Travel Portal:</h3>
                                    <p className="description">
                                        Get your own Travel Portal just in few clicks. It is a comprehensive
                                        Travel Software having a web booking engine with live status of flight
                                        rates, hotels and availability.
                                    </p>
                                </div>
                                <span className="circle-before" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-service">
                                <div className="content">
                                    <span className="icon">
                                        <img
                                            width="100%"
                                            loading="lazy"
                                            src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/white.png"
                                            alt="image"
                                        />
                                    </span>
                                    <h3 className="title">White Label Travel Portal:</h3>
                                    <p className="description">
                                        Get your own Travel Portal just in few clicks. It is a comprehensive
                                        Travel Software having a web booking engine with live status of flight
                                        rates, hotels and availability.
                                    </p>
                                </div>
                                <span className="circle-before" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-service">
                                <div className="content">
                                    <span className="icon">
                                        <img
                                            width="100%"
                                            loading="lazy"
                                            src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/white.png"
                                            alt="image"
                                        />
                                    </span>
                                    <h3 className="title">White Label Travel Portal:</h3>
                                    <p className="description">
                                        Get your own Travel Portal just in few clicks. It is a comprehensive
                                        Travel Software having a web booking engine with live status of flight
                                        rates, hotels and availability.
                                    </p>
                                </div>
                                <span className="circle-before" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-service">
                                <div className="content">
                                    <span className="icon">
                                        <img
                                            width="100%"
                                            loading="lazy"
                                            src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/white.png"
                                            alt="image"
                                        />
                                    </span>
                                    <h3 className="title">White Label Travel Portal:</h3>
                                    <p className="description">
                                        Get your own Travel Portal just in few clicks. It is a comprehensive
                                        Travel Software having a web booking engine with live status of flight
                                        rates, hotels and availability.
                                    </p>
                                </div>
                                <span className="circle-before" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-service">
                                <div className="content">
                                    <span className="icon">
                                        <img
                                            width="100%"
                                            loading="lazy"
                                            src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/white.png"
                                            alt="image"
                                        />
                                    </span>
                                    <h3 className="title">White Label Travel Portal:</h3>
                                    <p className="description">
                                        Get your own Travel Portal just in few clicks. It is a comprehensive
                                        Travel Software having a web booking engine with live status of flight
                                        rates, hotels and availability.
                                    </p>
                                </div>
                                <span className="circle-before" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="single-service">
                                <div className="content">
                                    <span className="icon">
                                        <img
                                            width="100%"
                                            loading="lazy"
                                            src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/white.png"
                                            alt="image"
                                        />
                                    </span>
                                    <h3 className="title">White Label Travel Portal:</h3>
                                    <p className="description">
                                        Get your own Travel Portal just in few clicks. It is a comprehensive
                                        Travel Software having a web booking engine with live status of flight
                                        rates, hotels and availability.
                                    </p>
                                </div>
                                <span className="circle-before" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='how-it-works'>
                <div className='container'>
                    <div class="col-12 text-center">
                        <h2>How it works?</h2>
                        <p>Just 4 simple steps to start using Flyshop.</p>
                        <div class="dtr-styled-divider divider-center bg-light-green"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <img loading="lazy" src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/how-it-works.webp" alt="How it works" class="w-75 wm-100" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='our-blog'>
                <div className='container'>
                    <div className='heading text-center'>
                        <h2 className=''>Our Blog</h2>
                        <div class="dtr-styled-divider divider-center bg-light-green"></div>
                    </div>
                    <div className='row'>
                        <div className="col-12 col-md-4">
                         
                            <div className="dtr-blog-item dtr-shadow">
                              
                                <div className="dtr-post-img">
                                    <img
                                        loading="lazy"
                                        src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/blog-advantage.webp"
                                        alt="image"
                                    />
                                </div>
                                <div className="dtr-post-content">
                                    <h4>
                                        <a href="#" className="color-green">
                                            Advantages of White Label Travel Portal for Travel Agencies
                                        </a>
                                    </h4>
                                    <p className="dtr-mb-20">
                                        Having a white label travel website is highly in demand among small and
                                        medium travel agencies nowadays...
                                    </p>
                                    <a href="#" className="dtr-read-more">
                                        Continue Reading
                                        <i className="icon-ellipsis-h dtr-ml-10 color-green" />
                                    </a>
                                </div>
                            </div>
                         
                        </div>
                        <div className="col-12 col-md-4">
                        =
                            <div className="dtr-blog-item dtr-shadow">
                            
                                <div className="dtr-post-img">
                                    <img
                                        loading="lazy"
                                        src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/blog-advantage.webp"
                                        alt="image"
                                    />
                                </div>
                                <div className="dtr-post-content">
                                    <h4>
                                        <a href="#" className="color-green">
                                            Advantages of White Label Travel Portal for Travel Agencies
                                        </a>
                                    </h4>
                                    <p className="dtr-mb-20">
                                        Having a white label travel website is highly in demand among small and
                                        medium travel agencies nowadays...
                                    </p>
                                    <a href="#" className="dtr-read-more">
                                        Continue Reading
                                        <i className="icon-ellipsis-h dtr-ml-10 color-green" />
                                    </a>
                                </div>
                            </div>
                          
                        </div>
                        <div className="col-12 col-md-4">
                         
                            <div className="dtr-blog-item dtr-shadow">
                             
                                <div className="dtr-post-img">
                                    <img
                                        loading="lazy"
                                        src="https://awsbizz.sgp1.cdn.digitaloceanspaces.com/flz/blog-advantage.webp"
                                        alt="image"
                                    />
                                </div>
                                <div className="dtr-post-content">
                                    <h4>
                                        <a href="#" className="color-green">
                                            Advantages of White Label Travel Portal for Travel Agencies
                                        </a>
                                    </h4>
                                    <p className="dtr-mb-20">
                                        Having a white label travel website is highly in demand among small and
                                        medium travel agencies nowadays...
                                    </p>
                                    <a href="#" className="dtr-read-more">
                                        Continue Reading
                                        <i className="icon-ellipsis-h dtr-ml-10 color-green" />
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='our-blog-media'>
                <div className='container'>
                    <div class="heading text-center">
                        <h2>Media &amp; Coverage</h2>
                        <div class="dtr-styled-divider divider-center bg-light-green"></div>
                    </div>
                    
                    <div className='col-6 m-auto'>
                        <Slider {...coverageimg}>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                                1<img src={coverage1} />
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                              2  <img src={coverage2} />
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                               3 <img src={coverage3} />
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                                4 <img src={coverage4} />
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                               5 <img src={coverage1} />
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                                6 <img src={coverage2} />
                            </div>
                            <div className='text-center justify-content-center align-items-center d-flex'>
                               7 <img src={coverage3} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div> */}
            
            <div className=''>
                <div className='col-12'>
                </div>
            </div>
            <div className='copyright'>
                <div className='container'>
                    <p>© 2023 All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}


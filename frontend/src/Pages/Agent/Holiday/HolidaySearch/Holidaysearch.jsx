import React, {useRef, sliderRef, settings} from 'react'
import { Toaster } from 'react-hot-toast';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Header from '../../../../Component/Layout/Agent/Header/Header';
import './Holidaysearch.css'
import hodliday1 from '../../../../assets/images/holiday1.png'
import hodliday2 from '../../../../assets/images/holiday2.png'
import hodliday3 from '../../../../assets/images/holiday3.png'
import hodliday4 from '../../../../assets/images/holiday4.png'
import hodliday5 from '../../../../assets/images/holiday5.jpg'
import Slider from "react-slick";


export default function Holidaysearch() {

   


    let sliderRef = useRef(null);
    const play = () => {
      sliderRef.slickPlay();
    };
    const pause = () => {
      sliderRef.slickPause();
    };
    
    // const settings = {
    //   dots: true,
    //   spaceBetween :0,
    //   infinite: true,
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
      
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 425,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // };
    const settings = {
    
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

    };


  

  return (
    <>
       <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <Header/> 
        <div className="container-fluid holdiaybanner">
            <div className="container">
                    <h4 className="text-center text-white mb-4">
                      <i className="fa fa-suitcase"></i> Holiday Tour Packages
                    </h4>
                   <div className="col-lg-8 mx-auto">
                        <div className="card shadow p-3">
                        <div className="row">
                        <div className="col-lg-8 col-md-8 mb-3">
                        <select class="form-select form-control p-3" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <button className='holidaybtn w-100'>Search</button>
                        </div>
                      </div>
                      </div>
                   </div>
            </div>
        </div>
        <div className="container">
             <div className="card holdiaymain  p-3 mt-4">
              <div className="row">
                  <div className="col-lg-3 col-md-6">
                      <div className="row">
                          <div className="col-3">
                              <img src={hodliday1} alt=""  height="64px" />
                          </div>
                          <div className="col-9 holirestext">
                              <h6 className='m-0 mt-3'>Travel With Experts</h6>
                              <p className='hcustomer m-0' style={{ fontSize: "11px" }}>10000+ Happy Customers</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <div className="row">
                          <div className="col-3">
                              <img src={hodliday2} alt=""  height="64px" />
                          </div>
                          <div className="col-9 holirestext">
                            <h6 className='m-0 mt-3'>Travel Safety Assurance</h6>
                            <p className='hcustomer m-0' style={{ fontSize: "11px" }}>Safe holidays with assured stays, clean cabs & 24x7 support</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <div className="row">
                          <div className="col-3">
                              <img src={hodliday3} alt=""  height="64px" />
                          </div>
                          <div className="col-9 holirestext">
                            <h6 className='m-0 mt-3'>Flexible Cancellation</h6>
                            <p className='hcustomer m-0' style={{ fontSize: "11px" }}>Cancel or reschedule your holiday to suit your needs.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                      <div className="row">
                          <div className="col-3">
                              <img src={hodliday4} alt=""  height="64px" />
                          </div>
                          <div className="col-9 holirestext">
                            <h6 className='m-0 mt-3'>Unmatched Pricing</h6>
                            <p className='hcustomer m-0' style={{ fontSize: "11px" }}>Best deals and offers in the industr</p>
                          </div>
                      </div>
                  </div>
              </div>
             </div>
        </div>
{/* ---------------------------------------------------------------------------------------------------------- */}
        <div className="container">
          <div className="hodidaysebanner">
              <h1 className='hkeyword text-white d-block'>Give Wings to Your Dreams!</h1>
              <h3 className='text-white d-block'>@trip</h3>
          </div>
        </div>
{/* ----------------------------------------------------------------------------------------------------------- */}
        <div className="container holiday-main mt-5">
            <h4 className='hosliderh mb-4'>Adventure Trips</h4>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                <Link to={"/agent/holidaybooking/holidetails"}>
                      <div class="card">
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body p-2 pt-4">
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                        </div>
                      </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <Link to={"/agent/holidaybooking/holidetails"}>
                      <div class="card">
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body p-2 pt-4">
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                        </div>
                      </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                  <Link to={"/agent/holidaybooking/holidetails"}>
                    <div class="card">
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body p-2 pt-4">
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                        </div>
                      </div>
                   </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                  <Link to={"/agent/holidaybooking/holidetails"}>
                      <div class="card">
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body p-2 pt-4">
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                        </div>
                      </div>
                    </Link>
                </div>
            </div>
        </div>
      {/* ---------------------------------------------------------------------------------------------------- */}
        <div className="container holiday-main">
            <div className="slider-container">        
                <h4 className='hosliderh mb-4 mt-4'>Budget Friendly</h4>
                  <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card">
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body p-2 pt-4">
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                        </div>
                       </div>
                      </Link>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card">
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                           <div class="card-body p-2 pt-4">
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                             </div>
                              <hr />
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                           </div>
                          </div>
                         </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>  
                          </Link> 
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link> 
                  </Slider>
                      </div>
                  </div>
      {/* ---------------------------------------------------------------------------------------------------- */}
      <div className="container holiday-main">
            <div className="slider-container">        
                <h4 className='hosliderh mb-4 mt-4'>Family Vacations</h4>
                 <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card">
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body p-2 pt-4">
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                        </div>
                       </div>
                      </Link>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card">
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                           <div class="card-body p-2 pt-4">
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                             </div>
                              <hr />
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                           </div>
                          </div>
                         </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>  
                          </Link> 
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link> 
                  </Slider>
                </div>
            </div>
    {/* ---------------------------------------------------------------------------------------------------- */}
      <div className="container holiday-main">
            <div className="slider-container">        
                <h4 className='hosliderh mb-4 mt-4'>Group Tours</h4>
                 <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card">
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body p-2 pt-4">
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                        </div>
                       </div>
                      </Link>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card">
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                           <div class="card-body p-2 pt-4">
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                             </div>
                              <hr />
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                           </div>
                          </div>
                         </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>  
                          </Link> 
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link> 
                  </Slider>
                </div>
            </div>
 {/* ---------------------------------------------------------------------------------------------------- */}
      <div className="container holiday-main">
            <div className="slider-container">        
                <h4 className='hosliderh mb-4 mt-4'>Honeymoon Trips</h4>
                 <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card">
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body p-2 pt-4">
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                        </div>
                       </div>
                      </Link>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card">
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                           <div class="card-body p-2 pt-4">
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                             </div>
                              <hr />
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                           </div>
                          </div>
                         </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>  
                          </Link> 
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link> 
                  </Slider>
                </div>
            </div>
     {/* ---------------------------------------------------------------------------------------------------- */}
     <div className="container holiday-main">
            <div className="slider-container">        
                <h4 className='hosliderh mb-4 mt-4'>Indian Holidays</h4>
                 <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card">
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body p-2 pt-4">
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                        </div>
                       </div>
                      </Link>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card">
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                           <div class="card-body p-2 pt-4">
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                             </div>
                              <hr />
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                           </div>
                          </div>
                         </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>  
                          </Link> 
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link> 
                  </Slider>
                </div>
            </div>
  {/* ---------------------------------------------------------------------------------------------------- */}
  <div className="container holiday-main">
            <div className="slider-container">        
                <h4 className='hosliderh mb-4 mt-4'>International Holidays</h4>
                <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card">
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body p-2 pt-4">
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />
                            <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                        </div>
                       </div>
                      </Link>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card">
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                           <div class="card-body p-2 pt-4">
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                <button className='hveiow'>5 N / 6 D</button>
                             </div>
                              <hr />
                             <div className='d-flex d-flex justify-content-between'>
                                <p className='hdstfrom'>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                           </div>
                          </div>
                         </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link>  
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>  
                          </Link> 
                          <Link to={"/agent/holidaybooking/holidetails"}>
                            <div class="card">
                              <img src={hodliday5} class="card-img-top" alt="..."/>
                              <div class="card-body p-2 pt-4">
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hoheading mb-0 '>Andaman 5N 6D</p>  
                                      <button className='hveiow'>5 N / 6 D</button>
                                  </div>
                                  <hr />
                                  <div className='d-flex d-flex justify-content-between'>
                                      <p className='hdstfrom'>Starting From:</p>  
                                      <h4 >₹ 1580/-</h4>
                                  </div>
                              </div>
                            </div>
                          </Link> 
                  </Slider>
                </div>
            </div>
 {/* -------------------------------------------------------------------------------------------------------------------------- */}
 <div className="container holiday-main mt-5">
            <h4 className='hosliderh mb-4 mt-5'>Weekend Getaways</h4>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                 <Link to={"/agent/holidaybooking/holidetails"}>
                   <div class="card border-0" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <div className='d-flex d-flex justify-content-between'>
                            <h5 className='hoheading'>Andaman 5N 6D</h5>  
                            <button className='hveiow'>5 N / 6 D</button>
                        </div>
                        <hr />
                        <div className='d-flex d-flex justify-content-between'>
                            <p>Starting From:</p>  
                            <h4 >₹ 1580/-</h4>
                        </div>
                    </div>
                    </div>
                   </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                 <Link to={"/agent/holidaybooking/holidetails"}>
                  <div  div class="card border-0">
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <div className='d-flex d-flex justify-content-between'>
                            <h5 className='hoheading'>Andaman 5N 6D</h5>  
                            <button className='hveiow'>5 N / 6 D</button>
                        </div>
                        <hr />
                        <div className='d-flex d-flex justify-content-between'>
                            <p>Starting From:</p>  
                            <h4 className='hopriceing'>₹ 1580/-</h4>
                        </div>
                     </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6">
                 <Link to={"/agent/holidaybooking/holidetails"}>
                   <div class="card border-0" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <div className='d-flex d-flex justify-content-between'>
                            <h5 className='hoheading'>Andaman 5N 6D</h5>  
                            <button className='hveiow'>5 N / 6 D</button>
                        </div>
                        <hr />
                        <div className='d-flex d-flex justify-content-between'>
                            <p>Starting From:</p>  
                            <h4 className='hopriceing'>₹ 1580/-</h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>  
            </div>
        </div>
{/* ---------------------------------------------------------------------------------------------------------- */}
        <div className="container">
          <div className="hodidaysebanner">
              <h1 className='hkeyword text-white d-block'>Give Wings to Your Dreams!</h1>
              <h3 className='text-white d-block'>@trip</h3>
          </div>
        </div>
{/* ----------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------- */}
<div className="container holiday-main mt-5 mb-5">
            <h2 className=' mb-4 text-center mb-5'>Top Destination Packages</h2>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                <Link to={"/agent/holidaybooking/holidaystates"}>
                   <div class="card p-3 border-0 shadow" >
                    <img src={hodliday5} class="card-img-top rounded" alt="..."/>
                    <div class="card-body pb-0 pt-3">
                       <h4 className='hosliderh text-center text-dark mb-3'>Andaman</h4>
                       <p className='text-center mb-0'>View packages from <strong className='hopriceing'>Jordan</strong></p>
                      
                    </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                <Link to={"/agent/holidaybooking/holidaystates"}>
                   <div class="card p-3 border-0 shadow" >
                    <img src={hodliday5} class="card-img-top rounded" alt="..."/>
                    <div class="card-body pb-0 pt-3">
                       <h4 className='hosliderh text-center text-dark mb-3'>Indonesia</h4>
                       <p className='text-center mb-0'>View packages from <strong className='hopriceing'>Indonesia</strong></p>
                    </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                <Link to={"/agent/holidaybooking/holidaystates"}>
                   <div class="card p-3 border-0 shadow" >
                    <img src={hodliday5} class="card-img-top rounded" alt="..."/>
                    <div class="card-body pb-0 pt-3">
                    <h4 className='hosliderh text-center text-dark mb-3'>Delhi</h4>
                       <p className='text-center  mb-0'>View packages from <strong className='hopriceing'>Delhi</strong></p>
                    </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                <Link to={"/agent/holidaybooking/holidaystates"}>
                   <div class="card p-3 border-0 shadow" >
                    <img src={hodliday5} class="card-img-top rounded" alt="..."/>
                    <div class="card-body pb-0 pt-3">
                       <h4 className='hosliderh text-center text-dark mb-3'>Delhi</h4>
                       <p className='text-center  mb-0'>View packages from <strong className='hopriceing'>Delhi</strong></p>
                    </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                  <Link to={"/agent/holidaybooking/holidaystates"}>
                   <div class="card p-3 border-0 shadow" >
                    <img src={hodliday5} class="card-img-top rounded" alt="..."/>
                    <div class="card-body pb-0 pt-3">
                       <h4 className='hosliderh text-center text-dark mb-3'>Europe</h4>
                       <p className='text-center mb-0'>View packages from <strong className='hopriceing'>Europe</strong></p>
                    </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                  <Link to={"/agent/holidaybooking/holidaystates"}>
                   <div class="card p-3 border-0 shadow" >
                    <img src={hodliday5} class="card-img-top rounded" alt="..."/>
                    <div class="card-body pb-0 pt-3">
                       <h4 className='hosliderh text-center text-dark mb-3'>Andaman</h4>
                       <p className='text-center mb-0'>View packages from <strong className='hopriceing'>Jordan</strong></p>
                    </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                  <Link to={"/agent/holidaybooking/holidaystates"}>
                   <div class="card p-3 border-0 shadow" >
                    <img src={hodliday5} class="card-img-top rounded" alt="..."/>
                    <div class="card-body pb-0 pt-3">
                       <h4 className='hosliderh text-center text-dark mb-3'>Indonesia</h4>
                       <p className='text-center mb-0'>View packages from <strong className='hopriceing'>Indonesia</strong></p>
                    </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6">
                  <Link to={"/agent/holidaybooking/holidaystates"}>
                   <div class="card p-3 border-0 shadow" >
                    <img src={hodliday5} class="card-img-top rounded" alt="..."/>
                    <div class="card-body pb-0 pt-3">
                       <h4 className='hosliderh text-center text-dark mb-3'>Indonesia</h4>
                       <p className='text-center mb-0'>View packages from <strong className='hopriceing'>Indonesia</strong></p>
                    </div>
                    </div>
                  </Link>
                </div>
            </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------------- */}
        
    </>
  )
}

import React, { useState } from 'react'
import Header from '../../../../Component/Layout/Agent/Header/Header';
import './Bussearching.css'
import { Toaster } from 'react-hot-toast';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bus1 from '../../../../assets/images/bus1.png'
import bus2 from '../../../../assets/images/bus2.png'
import bus3 from '../../../../assets/images/bus3.png'
import bus5 from '../../../../assets/images/bus5.jpg'
import busring from '../../../../assets/images/bus4.jpg'
import busseat from '../../../../assets/images/busseat.jpg'
import buseseanot from  '../../../../assets/images/busnot.jpg'

export default function Bussearching() {
    const [showModal3, setShowModal3] = useState(false);
    const handleClose3 = () => setShowModal3(false);
    const handleShow3 = () => setShowModal3(true);

    const [showModal5, setShowModal5] = useState(false);
    const handleClose5 = () => setShowModal5(false);
    const handleShow5 = () => setShowModal5(true);

 
    
  return (
    <>
       <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <Header/>
  {/* -------------------------------------------------------------------------------- */}
  <div className="container-fluid bussreaching">
     <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="card bg-light p-3">
                    <form>
                        <label className="mt-4">From</label>
                        <input type="text" className='form-control border-0 mt-2 bg-light border-bottom ' placeholder='Enter  Source'/>

                        <label className="mt-3">To</label>
                        <input type="text" className='form-control border-0 mt-2 bg-light border-bottom ' placeholder='Enter  Destination'/>
                        <label className="mt-3">Travel Date</label>
                        <input type="date" className='form-control border-0 mt-2 bg-light border-bottom ' placeholder='Enter  Destination'/>
                       
                        <div className='d-flex justify-content-center'>
                          <button className='busbtnsear mx-auto'>SEARCH</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 bstkmain">
               <div className="col-12">
                <div className="card  p-3 busticket">
                        <h3 className='fw-bold'>Bus Ticket Booking</h3>
                        <ul className='buslist'>
                            <li><i class="fa-solid fa-check"></i>  Travel on buses that mandate covid vaccination</li>
                            <li><i class="fa-solid fa-check"></i> Travel safely Guarantee</li>
                            <li><i class="fa-solid fa-check"></i> Travel with Primo Buses</li>
                            <li><i class="fa-solid fa-check mb-3"></i> Best deals and discount.</li>
                        </ul>
                    </div>
               </div>

                <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-2">
                                        <img src={bus1} width="48px"  alt="" />
                                    </div>
                                    <div className="col-10">
                                        <p className='fs-5 mb-0 mt-0   fw-bold ms-3'>Experienced and polite drivers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-2">
                                      <img src={bus2} width="48px" alt="" />
                                    </div>
                                    <div className="col-10">
                                      <p className='fs-5 mb-0 mt-0  fw-bold ms-3'>Clean and comfortable buses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     </div>
  </div>

  <div className="container busdetailslist">
    <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="row">
          <div className="col-12">
           <div className="card p-3 mt-4">
             <div className="row">
                <div className="col-12">
                    <h5>Boarding Point</h5>
                </div>
                <div className="col-12 busboardin mt-2">
                  <ul className='buschecked'>
                     <li><input type="checkbox" />  uday travels opp. Patel statue choti gwal toli , indore centex no-</li>
                     <li><input type="checkbox" />  Ambey travels chhotigwatoli</li>
                     <li><input type="checkbox" />  Bapat Square</li>
                     <li><input type="checkbox" />  Barkoti Travels Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Best Price</li>
                     <li><input type="checkbox" />  Best Price Indore</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Gautam Travels Teen Imli</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hotel radisson squre</li>
                     <li><input type="checkbox" />  Indore : AICTSL Campus</li>
                     <li><input type="checkbox" />  Jai Bhawani Travels Musakhedi Ambika Dham</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                  </ul>
                </div>
             </div>
           </div>
          </div>

          <div className="col-12 m-0">
           <div className="card p-3 ">
             <div className="row">
                <div className="col-12">
                    <h5>Dropping Point</h5>
                </div>
                <div className="col-12 busboardin mt-2">
                  <ul className='buschecked'>
                     <li><input type="checkbox" />  uday travels opp. Patel statue choti gwal toli , indore centex no-</li>
                     <li><input type="checkbox" />  Ambey travels chhotigwatoli</li>
                     <li><input type="checkbox" />  Bapat Square</li>
                     <li><input type="checkbox" />  Barkoti Travels Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Best Price</li>
                     <li><input type="checkbox" />  Best Price Indore</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Gautam Travels Teen Imli</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hotel radisson squre</li>
                     <li><input type="checkbox" />  Indore : AICTSL Campus</li>
                     <li><input type="checkbox" />  Jai Bhawani Travels Musakhedi Ambika Dham</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                  </ul>
                </div>
             </div>
           </div>
          </div>


          <div className="col-12 m-0">
           <div className="card p-3 ">
             <div className="row">
                <div className="col-12">
                    <h5>Dropping Point</h5>
                </div>
                <div className="col-12 busboardin mt-2">
                  <ul className='buschecked'>
                     <li><input type="checkbox" />  uday travels opp. Patel statue choti gwal toli , indore centex no-</li>
                     <li><input type="checkbox" />  Ambey travels chhotigwatoli</li>
                     <li><input type="checkbox" />  Bapat Square</li>
                     <li><input type="checkbox" />  Barkoti Travels Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Best Price</li>
                     <li><input type="checkbox" />  Best Price Indore</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Gautam Travels Teen Imli</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hotel radisson squre</li>
                     <li><input type="checkbox" />  Indore : AICTSL Campus</li>
                     <li><input type="checkbox" />  Jai Bhawani Travels Musakhedi Ambika Dham</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                  </ul>
                </div>
             </div>
           </div>
          </div>

          <div className="col-12 m-0">
           <div className="card p-3 ">
             <div className="row">
                <div className="col-12">
                    <h5>Travels</h5>
                </div>
                <div className="col-12 busboardin mt-2">
                  <ul className='buschecked'>
                     <li><input type="checkbox" />  uday travels opp. Patel statue choti gwal toli , indore centex no-</li>
                     <li><input type="checkbox" />  Ambey travels chhotigwatoli</li>
                     <li><input type="checkbox" />  Bapat Square</li>
                     <li><input type="checkbox" />  Barkoti Travels Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Best Price</li>
                     <li><input type="checkbox" />  Best Price Indore</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Gautam Travels Teen Imli</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hotel radisson squre</li>
                     <li><input type="checkbox" />  Indore : AICTSL Campus</li>
                     <li><input type="checkbox" />  Jai Bhawani Travels Musakhedi Ambika Dham</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                  </ul>
                </div>
             </div>
           </div>
          </div>


          </div>
        </div>
        <div className="col-lg-8 col-md-12">
         <div className="row">
             <div className="col-12 mt-4">
                <div className="card p-2">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <span className='busheading me-2'>Jabalpur</span>
                            <span className='busheading me-2'><i class="fa-solid fa-arrow-right"></i></span>
                            <span className='busheading me-1'>Indore </span>
                            <span className='busheading me-2'>|</span>
                            <span className='busheading me-1'>27 February 2024</span>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <p className='bsltfound m-0'>22 Buses Found.</p>
                        </div>
                    </div>
                </div>
             </div>
             <div className="col-12">
                <div className="card p-3 border mb-0">
                  <div className="row">
                     <div className="col-lg-2 col-md-2  d-flex justify-content-center busrimg">
                     <img src={bus3} alt="" width="50px" height="50px"  />
                     </div>
                     <div className="col-lg-2 col-md-2">
                         <p className='m-0' style={{ fontSize: "13px" }}>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater / Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2 text-center">
                        <p className='mt-4 fw-bold buslstime'>5:35 PM</p>
                     </div>
                     <div className="col-lg-2 col-md-3">
                        <h6 className='text-center mt-2' style={{ fontSize : "12px" }}>12h:41m</h6>
                        <div className="bslthr">
                            <div className="bslthrunder"></div>
                            <div className="bslthrunder"></div>
                         </div>
                        <p className='busheading mt-1 ms-2 text-center' style={{ fontSize : "11px" }}>32 Seat(s) left</p>
                     </div>
                       <div className="col-lg-2 col-md-2 text-center">
                     <p className='mt-4 fw-bold buslstime'>6:16 AM</p>
                     </div>
                     <div className="col-lg-2 col-md-3 bultpricecnt">
                        <h4 className=''>₹ 807</h4>
                        <Button className="btn-danger btn mt-1 w-100" onClick={handleShow3} > View Seats
                        </Button>
                        <Modal size="md" show={showModal3} onHide={handleClose3}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Cancellation Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active btn btn-danger mb-3" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Available Seats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link btn btn-danger mb-3" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancellation Fee</button>
                                </li>
                                
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 border p-3">

                                        <nav>
                                          <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
                                            <button class="nav-link active btn btn-danger me-3" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Lower</button>
                                            <button class="nav-link btn btn-danger " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Upper</button>
                                          </div>
                                        </nav>

                                        <div class="tab-content" id="nav-tabContent">
                                          <div class="tab-pane fade main-imgrotate show active border-0" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                          <p className='text-center'>Tips:Click on available seat/sleeper to select it.Click again to deselect it.</p>
                                            <div className="row">
                                              
                                                     <div className="col-lg-5 col-md-5">
                                                       <div className="row">
                                                       <div className="col-8 upper-img mt-3">
                                                            <div className="row">
                                                              <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                              </div>
                                                              <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>

                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div><div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>                                                         
                                                        </div>
                                                       </div>
                                                       <div className="col-4">
                                                        <div className="col-lg-12 col-md-12 mt-3">
                                                     <div className="row">
                                                    <div className="col-12 d-flex justify-content-center">
                                                       <img src={busring} className='ring' alt=""  />
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-6 mb-2">
                                                               <img src={buseseanot} alt=""  />
                                                            </div>
                                                             <div className="col-6">
                                                               <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-12 col-md-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                       <div className="row">
                                                            <div className="col-6 mb-2">
                                                               <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-6">
                                                               <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-6 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-6">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-12 col-md-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-6 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-6">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-6 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-6">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-12 col-md-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-6 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-6">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-6 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-6">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-12 col-md-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                      <div className="row">
                                                            <div className="col-6 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-6">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-6 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-6">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                        </div>
                                                     </div>
                                                     </div>                                                     
                                                     </div>
                                                     
                                                   
                                                </div>

                                                <div className="col-lg-7 col-md-7 pt-3">
                                                        <div className="row p-3">
                                                            <div className="col-12 d-flex gap-3">
                                                              <img src={buseseanot} alt="" height="24px" width="24px"  />
                                                              <p>Available Seats</p>
                                                            </div>

                                                            <div className="col-12 d-flex gap-3">
                                                              <img src={buseseanot} alt="" height="24px" width="24px"  />
                                                              <p>Reserved For Ladies</p>
                                                            </div>

                                                            <div className="col-12 d-flex gap-3">
                                                              <img src={buseseanot} alt="" height="24px" width="24px"  />
                                                              <p>	Booked Seats</p>
                                                            </div>

                                                            <div className="col-12 d-flex gap-3">
                                                              <img src={buseseanot} alt="" height="24px" width="24px"  />
                                                              <p>Selected Seats</p>
                                                            </div>
                                                        </div>
                                                      </div>
                                           </div>
                                          </div>



                                          <div class="tab-pane fade border-0 main-imgrotate" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                          <div className="row">
                                        <div className="col-lg-5 col-md-5 ">
                                           <div className="row">
                                           <div className="col-8">
                                                  <div className="row">
                                                    <div className="col-12 mb-4 ">
                                                        <img src={bus5} alt=""/>                                                      
                                                    </div><div className="col-12 mb-4 ">
                                                        <img src={bus5} alt=""/>                                                      
                                                    </div>
                                                    <div className="col-12 mb-4 ">
                                                        <img src={bus5} alt=""/>                                                      
                                                    </div>
                                                    <div className="col-12 mb-4 ">
                                                        <img src={bus5} alt=""/>                                                      
                                                    </div>
                                                    <div className="col-12 mb-4 ">
                                                        <img src={bus5} alt=""/>                                                      
                                                    </div>
                                                    <div className="col-12 mb-4 ">
                                                        <img src={bus5} alt=""/>                                                      
                                                    </div>
                                                    <div className="col-12 mb-4 ">
                                                        <img src={bus5} alt=""/>                                                      
                                                    </div>
                                                    <div className="col-12 mb-4 ">
                                                        <img src={bus5} alt=""/>                                                      
                                                    </div>
                                                    <div className="col-12 mb-4 ">
                                                        <img src={bus5} alt=""/>                                                      
                                                    </div>
                                                  </div>

                                                  
                                               </div> 
                                               <div className="col-4">
                                                <div className="col-lg-12 col-md-12 mb-4">
                                                 <div className="row">
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                 </div>
                                               </div>

                                               <div className="col-lg-12 col-md-12 mb-4">
                                                 <div className="row">
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                 </div>
                                               </div>

                                               <div className="col-lg-12 col-md-12 mb-4">
                                                 <div className="row">
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                 </div>
                                               </div>

                                               <div className="col-lg-12 col-md-12 mb-4">
                                                 <div className="row">
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                 </div>
                                               </div>


                                               <div className="col-lg-12 col-md-12 mb-4">
                                                 <div className="row">
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                 </div>
                                               </div>
                                               <div className="col-lg-12 col-md-12 mb-4">
                                                 <div className="row">
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                 </div>
                                               </div>
                                               <div className="col-lg-12 col-md-12 mb-4" >
                                                 <div className="row">
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                 </div>
                                               </div>

                                               <div className="col-lg-12 col-md-12 mb-4">
                                                 <div className="row">
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                 </div>
                                               </div>
                                               <div className="col-lg-12 col-md-12 mb-4">
                                                 <div className="row">
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                    <div className="col-6">
                                                      <img src={bus5} alt=""  />  
                                                    </div>
                                                 </div>
                                               </div>
                                              </div>
                                             
                                           </div>
                                        </div>
                                        <div className="col-lg-7 col-md-7 mt-2 ">
                                          <div className="row p-3 pt-0">
                                              <div className="col-12 d-flex gap-2 mb-2">
                                                <img src={bus5} alt="" height="20px" width="34px" className='text-white'  />
                                                <p className='mb-2'>Available Sleeper</p>
                                              </div>

                                              <div className="col-12 d-flex gap-2 mb-2">
                                                <img src={bus5} alt="" height="20px" width="34px" className="bg-danger"  />
                                                <p className='mb-2'>Reserved For Ladies</p>
                                              </div>

                                              <div className="col-12 d-flex gap-2 mb-2">
                                                <img src={bus5} alt="" height="20px" width="34px"  />
                                                <p className='mb-2'>	Booked Sleeper</p>
                                              </div>

                                              <div className="col-12 d-flex gap-2 mb-2">
                                                <img src={bus5} alt="" height="20px" width="34px"  />
                                                <p className='mb-2'>	Selected Sleeper</p>
                                              </div>
                                              
                                          </div>
                                        </div>
                                        
                                           </div>
                                          </div>
                                        </div>
                                        </div>
                                    </div>
                                   

                                    <div className="row mt-3">
                                        <div className="col-lg-6 col-md-6 mb-3">
                                             <select class="form-select form-control p-2" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6 col-md-6 mb-3">
                                            <select class="form-select form-control p-2" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <Link to={"/agent/busbooking/Busreview"}> 
                                            <button className='btn btn-outline-primary p-2'>Continue</button>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-6">
                                            <p>Selected Seats :</p>
                                        </div>
                                        <div className="col-6">
                                            <p>	1, S6</p>
                                        </div>
                                        <div className="col-6">
                                            <p>Amount:</p>
                                        </div>
                                        <div className="col-6">
                                            <p>	INR 2020.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-6 bg-light pt-3 border">
                                            <p>Hours before Departure</p>
                                        </div>
                                        <div className="col-6 bg-light pt-3 border">
                                            <p>Refund Percentage</p>
                                        </div>
                                        <div className="col-6 bg-light pt-3 border">
                                            <p>Before 0 Hrs.</p>
                                        </div>
                                        <div className="col-6 bg-light pt-3  border">
                                            <p>0%</p>
                                        </div>
                                        <div className="col-6 bg-light pt-3 border">
                                           <p>Before 24 Hrs.</p>
                                        </div>
                                        <div className="col-6 bg-light pt-3 border">
                                           <p>30%</p>
                                        </div>
                                        <div className="col-6 bg-light pt-3 border">
                                           <p>Before 48 Hrs.</p>
                                        </div>
                                        <div className="col-6 bg-light pt-3 border">
                                          <p>60%</p>
                                        </div>
                                        <div className="col-6 bg-light pt-3 border">
                                          <p>Before 60 Hrs.</p>
                                        </div>
                                        <div className="col-6 bg-light pt-3 border">
                                          <p>75%</p>
                                        </div>
                                        <div className="col-6 bg-light pt-3 border">
                                           <p>Before 60 Hrs.</p>
                                        </div>
                                        <div className="col-6 bg-light pt-3 border">
                                          <p>80%</p>
                                        </div>
                                    </div>

                                    <p className='m-0 ml-0 mt-3'>Terms & Conditions</p>

                                    <ul className='mt-3'>
                                        <li>The penalty is subject to 24 hrs before departure. No Changes are allowed after that.</li>
                                        <li>The charges are per seat.</li>
                                        <li>Partial cancellation is not allowed on tickets booked under special discounted fares.</li>
                                        <li>In case of no-show or ticket not cancelled within the stipulated time, only statutory taxes are refundable subject to Service Fee.</li>
                                    </ul>
                                </div>
                             
                                </div>
                              
                            </Modal.Body>
                           
                        </Modal> 
                     </div>
                     <div className="col-12">
                        <div className="Cancellationpl">
                          <div className="row">
                            <div className="col-7">
                            <a className="cancelpolice" onClick={handleShow5} > <i class="fa-solid fa-scissors"></i>   Cancellation Policy
                            </a>
                        <Modal size="xl"  className='p-3' show={showModal5} onHide={handleClose5}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Kothari travels (Shri Solanki travels), 2024-03-26</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='p-3'>
                              <div className="row p-3">
                                <div className="col-12 bg-primary mb-3">
                                    <p className='m-0 pt-2 pb-2 text-white'>Cancellation Policy</p>
                                </div>

                                <div className="col-8 bg-secondary">
                                   <p className='m-0 pt-2 pb-2 text-white'>Cancellation time</p>
                                </div>
                                <div className="col-4 bg-secondary">
                                   <p className='m-0 pt-2 pb-2 text-white'>	Cancellation charges</p>
                                </div>

                                <div className="col-8 border">
                                   <p className='m-0 pt-2 pb-2'>Between 12 hours and 0 hours before journey time</p>
                                </div>
                                <div className="col-4 border">
                                   <p className='m-0 pt-2 pb-2'>100.0 %</p>
                                </div>
                                <div className="col-8 border">
                                   <p className='m-0 pt-2 pb-2'>Between 24 hours and 12 hours before journey time</p>
                                </div>
                                <div className="col-4 border">
                                   <p className='m-0 pt-2 pb-2'>70.0 %</p>
                                </div>
                                <div className="col-8 border">
                                   <p className='m-0 pt-2 pb-2'>Between 30 hours and 24 hours before journey time</p>
                                </div>
                                <div className="col-4 border">
                                   <p className='m-0 pt-2 pb-2'>40.0 %</p>
                                </div>
                                <div className="col-8 border">
                                   <p className='m-0 pt-2 pb-2'>Between 48 hours and 30 hours before journey time</p>
                                </div>
                                <div className="col-4 border">
                                   <p className='m-0 pt-2 pb-2'>20.0 %</p>
                                </div>
                                <div className="col-8 border">
                                   <p className='m-0 pt-2 pb-2'>48 hours before journey time</p>
                                </div>
                                <div className="col-4 border">
                                   <p className='m-0 pt-2 pb-2'>10.0 %</p>
                                </div>

                                <p className='mt-4 mb-4'>* Partial cancellation allowed.</p>
                                <div className="col-6 bg-secondary">
                                   <p className='m-0 pt-2 pb-2 text-white'>Boarding Point</p>
                                </div>
                                <div className="col-6 bg-secondary">
                                   <p className='m-0 pt-2 pb-2 text-white'>Boarding Time</p>
                                </div>
                                <div className="col-6 border">
                                   <p className='m-0 pt-2 pb-2'>Shri Solanki Travels,Metro Piller no 192 sindhi camp bus stand, Jaipur</p>
                                </div>
                                <div className="col-6 border">
                                   <p className='m-0 pt-2 pb-2'>8:00 PM</p>
                                </div>
                                <div className="col-6 border">
                                   <p className='m-0 pt-2 pb-2'>200 Ft Bypass Ajmer Road Jaipur</p>
                                </div>
                                <div className="col-6 border">
                                   <p className='m-0 pt-2 pb-2'>8:30 PM</p>
                                </div>

                                <div className="col-6 bg-secondary mt-4">
                                   <p className='m-0 pt-2 pb-2 text-white'>Dropping Point</p>
                                </div>
                                <div className="col-6 bg-secondary mt-4">
                                   <p className='m-0 pt-2 pb-2 text-white'>Dropping Time</p>
                                </div>
                                <div className="col-6 border">
                                   <p className='m-0 pt-2 pb-2'>Aurbindo Hospital Kaka Shri petrol pump</p>
                                </div>
                                <div className="col-6 border">
                                   <p className='m-0 pt-2 pb-2'>11:30 AM</p>
                                </div>
                                <div className="col-6 border">
                                   <p className='m-0 pt-2 pb-2'>Baba Travels, pipliyahana,worldcup square</p>
                                </div>
                                <div className="col-6 border">
                                   <p className='m-0 pt-2 pb-2'>11:50 AM</p>
                                </div>
                                <div className="col-6 border">
                                   <p className='m-0 pt-2 pb-2'>Baba Travels Teen imli</p>
                                </div>
                                <div className="col-6 border">
                                   <p className='m-0 pt-2 pb-2'>12:10 PM</p>
                                </div>
                              </div>
                            </Modal.Body>
                           </Modal> 
                            </div>
                            <div className="col-5 d-flex justify-content-end align-items-center cancelAC">
                             <i class="fa-solid fa-star-of-life me-1"></i> Non AC
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="card p-3 border m-0 ">
                  <div className="row">
                  <div className="col-lg-2 col-md-2 d-flex justify-content-center busrimg">
                     <img src={bus3} alt="" width="50px" height="50px" className=''/>
                     </div>
                     <div className="col-lg-2 col-md-2">
                         <p className='m-0' style={{ fontSize: "13px" }}>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater / Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2 text-center">
                        <h6 className='mt-4 fw-bold buslstime'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3 ">
                        <h6 className='text-center mt-2' style={{ fontSize: "12px" }}>12h:41m</h6>
                        <div className="bslthr">
                            <div className="bslthrunder"></div>
                            <div className="bslthrunder"></div>
                         </div>
                        <p className='busheading ms-2  text-center mt-1' style={{ fontSize: "11px" }}>32 Seat(s) left</p>
                     </div>
                       <div className="col-lg-2 col-md-2 text-center">
                     <h6 className='mt-4 fw-bold buslstime'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3 bultpricecnt">
                        <h4>₹ 807</h4>
                        <Button className="btn-danger btn mt-1 w-100" onClick={handleShow3} > View Seats
                        </Button>
                     </div>
                     <div className="col-12">
                        <div className="Cancellationpl">
                          <div className="row">
                            <div className="col-7">
                            <a className="cancelpolice" onClick={handleShow5} > <i class="fa-solid fa-scissors"></i>   Cancellation Policy
                            </a>
                            </div>
                            <div className="col-5 d-flex justify-content-end align-items-center cancelAC">
                             <i class="fa-solid fa-star-of-life me-1"></i> Non AC
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
                
                <div className="card p-3 border m-0">
                  <div className="row">
                  <div className="col-lg-2 col-md-2 d-flex justify-content-center busrimg">
                     <img src={bus3} alt="" width="50px" height="50px" className=''/>
                     </div>
                     <div className="col-lg-2 col-md-2">
                         <p className='m-0' style={{ fontSize: "13px" }}>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater / Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2 text-center">
                        <h6 className='mt-4 fw-bold buslstime'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3 ">
                        <h6 className='text-center mt-2' style={{ fontSize: "12px" }}>12h:41m</h6>
                        <div className="bslthr">
                            <div className="bslthrunder"></div>
                            <div className="bslthrunder"></div>
                         </div>
                        <p className='busheading ms-2  text-center mt-1' style={{ fontSize: "11px" }}>32 Seat(s) left</p>
                     </div>
                       <div className="col-lg-2 col-md-2 text-center">
                     <h6 className='mt-4 fw-bold buslstime'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3 bultpricecnt">
                        <h4>₹ 807</h4>
                        <Button className="btn-danger btn mt-1 w-100" onClick={handleShow3} > View Seats
                        </Button>
                     </div>
                     <div className="col-12">
                        <div className="Cancellationpl">
                          <div className="row">
                            <div className="col-7">
                            <a className="cancelpolice" onClick={handleShow5} > <i class="fa-solid fa-scissors"></i>   Cancellation Policy
                            </a>
                            </div>
                            <div className="col-5 d-flex justify-content-end align-items-center cancelAC">
                             <i class="fa-solid fa-star-of-life me-1"></i> Non AC
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="card p-3 border m-0">
                  <div className="row">
                  <div className="col-lg-2 col-md-2 d-flex justify-content-center busrimg">
                     <img src={bus3} alt="" width="50px" height="50px" className=''/>
                     </div>
                     <div className="col-lg-2 col-md-2">
                         <p className='m-0' style={{ fontSize: "13px" }}>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater / Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2 text-center">
                        <h6 className='mt-4 fw-bold buslstime'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3 ">
                        <h6 className='text-center mt-2' style={{ fontSize: "12px" }}>12h:41m</h6>
                        <div className="bslthr">
                            <div className="bslthrunder"></div>
                            <div className="bslthrunder"></div>
                         </div>
                        <p className='busheading ms-2  text-center mt-1' style={{ fontSize: "11px" }}>32 Seat(s) left</p>
                     </div>
                       <div className="col-lg-2 col-md-2 text-center">
                     <h6 className='mt-4 fw-bold buslstime'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3 bultpricecnt">
                        <h4>₹ 807</h4>
                        <Button className="btn-danger btn mt-1 w-100" onClick={handleShow3} > View Seats
                        </Button>
                     </div>
                     <div className="col-12">
                        <div className="Cancellationpl">
                          <div className="row">
                            <div className="col-7">
                            <a className="cancelpolice" onClick={handleShow5} > <i class="fa-solid fa-scissors"></i>   Cancellation Policy
                            </a>
                            </div>
                            <div className="col-5 d-flex justify-content-end align-items-center cancelAC">
                             <i class="fa-solid fa-star-of-life me-1"></i> Non AC
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="card p-3 border m-0">
                  <div className="row">
                  <div className="col-lg-2 col-md-2 d-flex justify-content-center busrimg">
                     <img src={bus3} alt="" width="50px" height="50px" className=''/>
                     </div>
                     <div className="col-lg-2 col-md-2">
                         <p className='m-0' style={{ fontSize: "13px" }}>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater / Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2 text-center">
                        <h6 className='mt-4 fw-bold buslstime'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3 ">
                        <h6 className='text-center mt-2' style={{ fontSize: "12px" }}>12h:41m</h6>
                        <div className="bslthr">
                            <div className="bslthrunder"></div>
                            <div className="bslthrunder"></div>
                         </div>
                        <p className='busheading ms-2  text-center mt-1' style={{ fontSize: "11px" }}>32 Seat(s) left</p>
                     </div>
                       <div className="col-lg-2 col-md-2 text-center">
                     <h6 className='mt-4 fw-bold buslstime'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3 bultpricecnt">
                        <h4>₹ 807</h4>
                        <Button className="btn-danger btn mt-1 w-100" onClick={handleShow3} > View Seats
                        </Button>
                     </div>
                     <div className="col-12">
                        <div className="Cancellationpl">
                          <div className="row">
                            <div className="col-7">
                            <a className="cancelpolice" onClick={handleShow5} > <i class="fa-solid fa-scissors"></i>   Cancellation Policy
                            </a>
                            </div>
                            <div className="col-5 d-flex justify-content-end align-items-center cancelAC">
                             <i class="fa-solid fa-star-of-life me-1"></i> Non AC
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>


             </div>
          </div>
        </div>
    </div>
  </div>


  <div className="container busdetailslist mb-4 ">
    <div className="row">
        <div className="col-lg-4 col-md-12 bg-white p-0 border mt-4 h-50 " >
           <div className="12 border-bottom p-3">
               <h5>Boarding Point</h5>
           </div>
           <div className="12 border-bottom p-3">
               <h5>Dropping Point</h5>
           </div>
           <div className="12 p-3">
               <h5>Travels</h5>
           </div>
        </div>
        <div className="col-lg-8 col-md-12">
           <div className="row">
            <div className="col-12 mt-4">
                <div className="card p-2">
                    <div className="row">
                        <div className="col-6">
                            <span className='busheading fs-5 me-2'>Jabalpur</span>
                            <span className='busheading fs-5 me-2'><i class="fa-solid fa-arrow-right"></i></span>
                            <span className='busheading fs-5 me-1'>Indore </span>
                            <span className='busheading fs-5 me-2'>|</span>
                            <span className='busheading fs-5 me-1'>27 February 2024</span>
                        </div>
                        <div className="col-6">
                            <p className='bsltfound'>22 Buses Found.</p>
                        </div>
                    </div>
                </div>
             </div>

             <div className="col-12 mt-4">
                <div className="card p-2">
                   <i className='fa fa-exclamation-triangle fa-5x mx-auto mt-4 mb-4'></i>
                   <h6 className='text-center notfond mb-4 fs-3 '>Oops!</h6>
                   <h3 className='text-center'>Oops, No Busses are available in selected date range.  </h3>
                   <p className='text-center notfond mb-4'>Please, change search parameters and try again</p>
                </div>
             </div>
           </div>
        </div>
    </div>
  </div>

   
    </>
  )
}

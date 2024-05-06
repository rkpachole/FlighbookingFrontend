import React from 'react'
import { Toaster } from "react-hot-toast";
import Header from "../../../../Component/Layout/Agent/Header/Header";
import './Busreview.css'

export default function Busreview() {
  return (
    <>
        <Toaster position="top-right" reverseOrder={false} />
      <Header />
        {/* -------------------------------------- */}


        <div className="container reviewbooking">
            <div className="row">
             <div className="col-12  ">
                <div className="card header rounded p-2 shadow mb-4rounded p-2 shadow mb-3">
                   <div className='d-flex'>
                      <i class="fa-solid fa-check  me-2"></i>
                      <span className='headerunder'>Review Booking</span>
                   </div>
                </div>
             </div>
             
             <div className="col-lg-8  col-md-12">

                <div className="card mb-2">
                <div className='reviewleft rounded border'>
                <div className="row">
                    <div className="col-12 pt-1 pb-1 p-0 border-bottom">
                         <p className='fw-bold'>TRAVELLER DETAILS</p>
                    </div>
                    <div className="col-12 traveller">
                         <p className='fw-bold  '>TRAVELLER DETAILS</p>
                    </div>
                    <div className="col-12">
                      <form action="">
                         <div className="row mt-2">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                               <label >Title</label> 
                               <select class="form-select form-control mt-2 p-2" aria-label="Default select example">
                                <option selected></option>
                                <option value="1">Mr</option>
                                <option value="2">Ms</option>
                                <option value="3">Mrs</option>
                               </select>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                               <label >Full Name</label> 
                               <input type="text" className='form-control mt-2  p-2' placeholder='Enter Full Name' />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                               <label >Age</label> 
                               <input type="number" className='form-control mt-2  p-2' placeholder='Enter Age' />
                            </div>

                            <div className="col-12 pt-1 mt-5 pb-1 p-0 border-bottom">
                              <p className='fw-bold'>CONTACT INFORMATION</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
                               <label >Email Address</label> 
                               <input type="email" className='form-control mt-2  p-2' placeholder='Enter Eamil'/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
                               <label >Mobile Number</label> 
                               <input type="text" className='form-control mt-2  p-2' placeholder='Enter Mobile Number  '/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
                               <label >ID Type</label> 
                               <select class="form-select form-control mt-2 p-2" aria-label="Default select example">
                                <option selected>PAN CARD</option>
                                <option value="1">AADHAR CARD</option>
                                <option value="2">VOTER ID CARD</option>
                                <option value="3">PASSPORT</option>
                                <option value="3">DRIVING LICENCE</option>
                               </select>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mt-3">
                               <label >ID Number</label> 
                               <input type="text" className='form-control mt-2  p-2' placeholder='Enter ID Number  '/>
                            </div>

                            <div className="col-12 pt-3 pb-1 p-0 border-top mt-5">
                              <p className='fw-bold'>CANCELLATION POLICY</p>
                            </div>
                            <div className="col-9 border cancelpolicebg">
                              <p className='m-0 pt-2 pb-2' style={{ fontSize : "14px" }}>Between 12 hours and 0 hours before journey time</p>
                            </div>
                            <div className="col-3 border cancelpolicebg">
                               <p className='m-0 pt-2 pb-2' style={{ fontSize : "14px" }}>100.0 %</p>
                            </div>
                            <div className="col-9 border cancelpolicebg">
                              <p className='m-0 pt-2 pb-2' style={{ fontSize : "14px" }}>Between 24 hours and 12 hours before journey time</p>
                            </div>
                            <div className="col-3 border cancelpolicebg">
                               <p className='m-0 pt-2 pb-2' style={{ fontSize : "14px" }}>50.0 %</p>
                            </div>
                            <div className="col-9 border cancelpolicebg">
                              <p className='m-0 pt-2 pb-2' style={{ fontSize : "14px" }}>24 hours before journey time</p>
                            </div>
                            <div className="col-3 border cancelpolicebg">
                               <p className='m-0 pt-2 pb-2' style={{ fontSize : "14px" }}>30.0 %</p>
                            </div>
                         </div>
                      </form>
                    </div>
                 </div>
                </div>
                </div>
                
                 
                   <div className="card burwwall mt-0 mb-4">
                    <div className="row">
                      <div className="col-lg-4 col-md-12 walletBal border-top border-left border-bottom  border-start p-0 rounded-start">
                           <h2 className='walletmony pt-4'>₹0</h2>
                           <h5 className='text-dark pb-4 fw-bold text-center mb-3' style={{ fontSize : "14px" }}>Your Wallet Balance</h5>
                      </div>
                      <div className="col-lg-8 col-md-12 bg-white border-top border-left border-bottom border-end rounded-end">
                        <p className='sufficient'> <i className='fa fa-info-circle'></i>  You don't have sufficient balance.</p>
                        <button className='sufficientbtn btn btn-danger'>Pay Online ₹510 </button>
                      </div>
                    </div>
                   </div>
                  
                 
             </div>
             <div className="col-lg-4 col-md-12 ">
                <div className="card p-2 ">
                    <h4 className=''>Jaipur to Indore</h4>
                    <div className='TravelDate'>
                       <div className="row">
                          <div className="col-5">
                             <p>Travel Date :</p>
                          </div>
                          <div className="col-7">
                             <h6>Wednesday , 06 Mar 2024</h6>
                          </div>
                          <div className="col-5">
                             <p>Boarding Point :</p>
                          </div>
                          <div className="col-7">
                             <h6>10:30 PM</h6>
                          </div>
                          <div className="col-5">
                             <p>Dropping Point :</p>
                          </div>
                          <div className="col-7">
                             <h6>Chhoti gwaltoli square, patel statue</h6>
                          </div>
                          <div className="col-5">
                             <p>Seat Number(s):</p>
                          </div>
                          <div className="col-7">
                             <h6>3</h6>
                          </div>
                          <div className="col-5">
                             <p>Bus Name :</p>
                          </div>
                          <div className="col-7">
                             <h6>Kalpana Travels Pvt. Ltd.</h6>
                          </div>
                          <div className="col-5">
                             <p>Bus Type :</p>
                          </div>
                          <div className="col-7">
                             <h6>NON AC Seater / Sleeper 2+1</h6>
                          </div>
                          <div className="col-5">
                             <p>Bus Fare :</p>
                          </div>
                          <div className="col-7">
                             <h6>₹510</h6>
                          </div>
                          <div className="col-5">
                             <p>Service Charge :</p>
                          </div>
                          <div className="col-7">
                             <h6>0</h6>
                          </div>
                          <div className="col-5">
                             <p>Grand Total :</p>
                          </div>
                          <div className="col-7">
                             <h6>₹510</h6>
                          </div>
                       </div>
                    </div>

                    <div className="col-12">
                            <p className='sufficien m-0 mt-0' style={{ fontSize: "14px" }}> <i className='fa fa-info-circle'></i>  You don't have sufficient balance.</p>
                     </div>
                </div>
             </div>
            </div>
        </div>
      
    </>
  )
}

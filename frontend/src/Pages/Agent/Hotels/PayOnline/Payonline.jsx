import React from 'react'
import { Toaster } from 'react-hot-toast';
import Header from '../../../../Component/Layout/Agent/Header/Header';
import './Payonline.css'
export default function Payonline() {
  return (
    <>
       <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <Header/>
        
        <div className="container payonline">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="row">
                     <div className="col-12">
                        <h2 className='heading'>Payments</h2>
                     </div>
                     </div>


                    <div className="card mt-4">
                        <div className="card-header pinform p-2">
                           <p className='m-0'>Pay By Wallet</p>
                        </div>
                        <div className="card-body p-0">
                           <div className="row">
                           <div className=" col-lg-4 col-md-12 ">
                            <div className="pwallet">
                                <h4 className='fw-bold'>₹ 225</h4>
                                <h5>Your Wallet Balance</h5>
                            </div>
                            </div>
                            <div className="col-lg-8 col-md-12 htPaybox ">
                            <p className='mb-2 mt-5 ptc'><i class="fa-solid fa-info "></i> By placing this order, you agree to our Terms Of Use and Privacy Policy</p>
                            <div class="form-check ptc">
                            <input className="form-check-input GSTNmber" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault">
                            I accept terms & conditions
                            </label>
                            </div>
                             <div className='res'>
                               <button className='payonlinebtn mt-1'>Pay Onnline ₹1580</button>
                             </div>
                            
                            </div>
                           </div>
                        </div>
                    </div>

                     
                  
                </div>
                <div className="col-lg-4 col-md-12 mt-5">
                    <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="col-12 Hinform pinform border border">
                                <p className='fs-5 p-2 mb-0'>Fare Summary</p>
                            </div>
                            <div className="card-body p-3">
                            <div className="col-lg-12 border-bottom d-flex justify-content-between">
                                <p className='fs-5 mb-2'>Room Price</p>
                                <p className='fs-5 mb-2'>₹1348.52</p>
                            </div>
                            <div className="col-lg-12 border-bottom d-flex justify-content-between">
                                <p className='fs-5 mb-2 mt-2'>Taxes & Fee</p>
                                <p className='fs-5 mb-2 mt-2'>₹192</p>
                            </div>
                            <div className="col-lg-12 mb-1 border-bottom d-flex justify-content-between">
                                <p className='fs-5 mb-2 mt-2'>Amount to Pay</p>
                                <p className='fs-5 mb-2 mt-2'>₹1541</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>


    </>
  )
}

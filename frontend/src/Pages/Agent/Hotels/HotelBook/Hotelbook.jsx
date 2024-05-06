import React from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Header from "../../../../Component/Layout/Agent/Header/Header";
import { Form } from "react-router-dom";
import "./Hotelbook.css";

export default function Hotelbook() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      {/* --------------------------------------------------- */}
      <div className="main-content">
        <div className="container HotelBook">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-lg-8 col-md-8">
                  <h5 className="btitle fw-bold">Review your Booking</h5>
                </div>
                <div className="col-lg-4 col-md-4 bback">
                  <Link to={"/hotel/flight"}>
                    <button type="button" className=" ">
                      {" "}
                      Back to search
                    </button>
                  </Link>
                </div>
              </div>
                <div className="card mt-3">
                   <div className="card-header p-2 Hinform">
                      <h6 className="m-0">Hotel Information</h6>
                   </div>
                   <div className="card-body p-2 pt-4">
                     <div className="row">
                        <div className="col-8">
                        <div className="d-flex flex-wrap">
                        <h5 className="btitle fw-bold me-3">
                          Radition Blue Main Road
                          </h5>
                          <span className="star-icon">
                          <i class="fa-solid fa-star me-1"></i>
                          <i class="fa-solid fa-star me-1"></i>
                          <i class="fa-solid fa-star me-1"></i>
                          <i class="fa-solid fa-star me-1"></i>
                          <i class="fa-solid fa-star"></i>
                          </span>
                          </div>
                          <p>
                            800/2K block near maruti suzuki showroom,igi airport mahipalpur,New Delhi,Delhi,IN 
                          </p>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                           <img src="https://fastui.cltpstatic.com/image/upload/hotels/…5011_78c5adc8-b316-413f-ac6f-b0b1889c1e25_tn.jpeg" alt="" width="75px" height="69px" />
                        </div>
                     </div>
                   </div>
                   <div className="card-footer Hinform p-2">
                      <div className="row">
                         <div className="col-12">
                           <h5 className="fw-bold text-danger mt-3 mb-3">Standard Double Room,1 King Bed,NonSmoking </h5>
                         </div>
                         <div className="co-lg-3 col-md-3 col-sm-3 col-xs-3">
                            <p className="hcheckin mb-0 mt-1 fs-12">CHECK IN</p>
                            <h6 className="fw-bold mt-1">
                              24 February 2024
                            </h6>
                            <p className="hcheckin mt-1 fs-12">Saturday</p>
                         </div>
                       <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
                          <button className="rounded-pill btn btn-light btn-Night">
                            {" "}
                            1 NIGHT(S)
                          </button>
                        </div>
                        <div className="co-lg-3 bg- col-md-3 col-sm-3  col-xs-3">
                          <p className="hcheckin mb-0 mt-1 fs-12">CHECK OUT</p>
                          <h6 className="fw-bold mt-1">
                            25 February 2024
                          </h6>
                          <p className="hcheckin mt-1 fs-12">Sunday</p>
                        </div>  
                        <div className="co-lg-4 bg- col-md-4  col-sm-4 col-xs-4 flex-wrap d-flex pt-4">
                              <p className="me-1 mb-0  mt-1">1 Adults</p>
                              <p className="me-1 mb-0  mt-1">|</p>
                              <p className="me-1 mb-0  mt-1">0 Childs</p>
                              <p className="me-1 mb-0  mt-1">|</p>
                              <p className="me-1  mb-0 mt-1">1 Rooms</p>
                        </div>
                      </div>
                   </div>
                </div>
                  <form action="">
                    <div className="card">
                      <div className="card-header p-2 Hinform">
                          <h6 className="m-0">PAX Details</h6>
                      </div> 
                      <div className="card-body Hpaxrom p-1">
                        <h6>Room - 1</h6>
                      </div>
                      
                      <div className="card-footer border-top-0 mb-3 bg-secondary">
                      <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-3 mt-4">
                        <label className="">Title</label>
                        <select
                          class="form-select form-control mt-2"
                          aria-label="Default select example"
                        >
                          <option selected>Select</option>
                          <option value="1">Mr.</option>
                          <option value="2">Mrs</option>
                          <option value="3">Ms.</option>
                        </select>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 mt-4">
                        <label htmlFor="">First Name</label>
                        <input type="text" className="mt-2 form-control" />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 mt-4">
                        <label htmlFor="">Last Name</label>
                        <input type="text" className="mt-2 form-control" />
                      </div>
                      </div>
                      </div>
                    </div>
                    <div className="card">
                        <div className="card-header p-2 Hinform">
                          <h6 className="m-0">Contact Details</h6>
                        </div> 
                        <div className="card-body">
                            <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <label htmlFor="">Email</label>
                              <input type="text" className="mt-2 form-control" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <label htmlFor="">Phone</label>
                              <input type="text" className="mt-2 form-control" />
                            </div>
                            <div className="col-12 m-3 ">
                            <div class="form-check   ">
                              <input
                                class="form-check-input mb-1"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label ms-1 mb-2"
                                for="flexCheckChecked"
                              >
                                I have a GST number (Optional)
                              </label>
                            </div>
                          </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 mb-3">
                              <label htmlFor="">Company Name</label>
                              <input type="text" className="mt-2 form-control" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 mb-3">
                              <label htmlFor="">GST No</label>
                              <input type="text" className="mt-2 form-control" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 mb-3">
                              <label htmlFor="">Email</label>
                              <input type="text" className="mt-2 form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="card-footer border-top-0 mb-3 bg-secondary d-flex justify-content-end">
                            <Link to={"/agent/hotelbooking/payonline"}>
                              <button type="button" className="btn btn-danger">
                                Proceed To Review
                              </button>
                            </Link>
                        </div>
                    </div>
                  </form>
             </div>
            <div className="col-lg-3 col-md-12">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="col-12 Hinform  border p-2">
                      <h6 className="mb-0">Fare Summary</h6>
                    </div>
                    <div className="card-body p-3">
                      <div className="col-lg-12 border-bottom d-flex justify-content-between">
                        <p className="mb-2">Room Price</p>
                        <p className=" mb-2">₹1348.52</p>
                      </div>
                      <div className="col-lg-12 border-bottom d-flex justify-content-between">
                        <p className="mb-2 mt-2">Taxes & Fee</p>
                        <p className="mb-2 mt-2">₹192</p>
                      </div>
                      <div className="col-lg-12 border-bottom d-flex justify-content-between">
                        <p className="mb-2 mt-2">Amount to Pay</p>
                        <p className="mb-2 mt-2">₹1541</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

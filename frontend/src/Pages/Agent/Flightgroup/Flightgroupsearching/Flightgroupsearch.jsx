import React, { useState, useEffect, useRef } from 'react';
import { Toaster } from "react-hot-toast";
import Header from "../../../../Component/Layout/Agent/Header/Header";
import './Flightgroupsearch.css'
import { Box, Grid, FormControl, InputLabel, Input, InputAdornment, TextField,  TabList } from '@mui/material';
import { Button, Modal } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Flightgroup1 from '../../../../assets/images/indigo.png'
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { Link } from "react-router-dom";

export default function Flightgroupsearch() {
  const [showModal3, setShowModal3] = useState(false);
  const handleClose3 = () => setShowModal3(false);
  const handleShow3 = () => setShowModal3(true);


  const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };
  
  const Tab = styled(BaseTab)`
    font-family: 'IBM Plex Sans', sans-serif;
    color: black;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    line-height: 1.5;
    padding: 8px 12px;
    margin: 6px;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;

    &:focus {
      color: #fff;
      outline: 3px solid ${blue[200]};
    }
  
    &.${tabClasses.selected} {
      background-color: #e82646;
      color:white;
      border-radius: 50px;
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  
  const TabPanel = styled(BaseTabPanel)`
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
  `;
  
  const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
    min-width: 400px;
    background-color:#f6f4f4;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 6px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
    };
    `,
  );
     
    return (
        <>
                 <Toaster
             position="top-right"
             reverseOrder={false}
            />
            <Header />

            <div className="container-fluid flightgroup">
                  <h3 className='text-white mb-4'><i class="fa-solid fa-users"></i> Flight Group Enquiry</h3>
               <div className="container bg-white p-5 border shadow rounded">

               <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">One-Way</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Round-Trip</button>
                    </li>
               </ul>
                <div class="tab-content " id="pills-tabContent">
                     <div class="tab-pane border-0 p-0 fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className='row'>
                            <div className="col-lg-3 col-md-4 mb-3">
                              <div className='form-group field-label'>
                                
                                <input className='form-control p-3' type='text' />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-3">
                              <div className='form-group field-label'>

                                <input className='form-control p-3' type='text' />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-3">
                              <div className='form-group field-label'>
                             
                                <input className='form-control p-3' type='date' />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-3">
                              <input className='form-control p-3' type='text' />
                            </div>
                            <div className="col-lg-3 col-md-4 mb-3">
                             <select class="form-control p-3" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                             </select>
                            </div>

                            <div className="col-lg-3 col-md-4 mb-3">
                             <select class="form-control p-3" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                             </select>
                            </div>

                            <div className="col-lg-3 col-md-4 mb-3">
                              <input className='form-control p-3' type='text'  />
                            </div>

                            <div className="col-lg-3 col-md-4 mb-3">
                               <button className='fgroupbtn'>SUBMIT</button>
                            </div>
                        </div>
                     </div>
                <div class="tab-pane fade border-0 p-0" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className='row'>
                            <div className="col-lg-3 col-md-4 mb-3">
                              <div className='form-group field-label'>
                                <input className='form-control p-3' type='text' />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mb-3">
                              <div className='form-group field-label'>
                                <input className='form-control p-3' type='text' />
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 mb-3">
                              <div className='form-group field-label'>
                                <input className='form-control p-3' type='date' />
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 mb-3">
                              <div className='form-group field-label'>
                                <input className='form-control p-3' type='date' />
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 mb-3">
                              <input className='form-control p-3' type='text' />
                            </div>
                            <div className="col-lg-3 col-md-4 mb-3">
                             <select class="form-control p-3" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                             </select>
                            </div>

                            <div className="col-lg-3 col-md-4 mb-3">
                             <select class="form-control p-3" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                             </select>
                            </div>

                            <div className="col-lg-2 col-md-4 mb-3">
                              <input className='form-control p-3' type='text'  />
                            </div>

                            <div className="col-lg-2 col-md-4 mb-3">
                               <button className='fgroupbtn'>SUBMIT</button>
                            </div>
                        </div>
                </div>
                
                </div>
                  
               </div>
            </div>

{/* ------------------------Last-Searching List---------------------------------------------- */}

            <div className="container  shadow mt-5 lastsearch">
                <p className=''>View your last search</p>
                <div className="row">
                   <div className="col-lg-3 col-md-4 ">
                     <div className="card  rounded p-2 shadow pb-0">
                        <div className="row">
                          <div className="col-6 lastunder">
                             <p className='m-0 pt-1' >DEL <i className='fa fa-arrow-right'></i> BOM</p>
                             <p className='m-0'>07-03-2024</p>
                          </div>
                          <div className="col-6 pt-3 mt-2">
                              <p className='text-danger'> One Way</p>
                          </div>
                        </div>
                     </div>
                   </div>
                   <div className="col-lg-3 col-md-4">
                      <div className="card  rounded p-2 shadow pb-0">
                        <div className="row">
                          <div className="col-6 lastunder">
                             <p className='m-0 pt-1' >DEL <i className='fa fa-arrow-right'></i> BOM</p>
                             <p className='m-0'>07-03-2024</p>
                          </div>
                          <div className="col-6 pt-3 mt-2">
                              <p className='text-danger'> One Way</p>
                          </div>
                        </div>
                     </div>
                   </div>
                   <div className="col-lg-3 col-md-4">
                     <div className="card  rounded p-2 shadow pb-0">
                        <div className="row">
                          <div className="col-6 lastunder">
                             <p className='m-0 pt-1' >DEL <i className='fa fa-arrow-right'></i> BOM</p>
                             <p className='m-0'>07-03-2024</p>
                          </div>
                          <div className="col-6 pt-3 mt-2">
                              <p className='text-danger'> One Way</p>
                          </div>
                        </div>
                     </div>
                   </div>
                   <div className="col-lg-3 col-md-4">
                      <div className="card  rounded p-2 shadow pb-0">
                        <div className="row">
                          <div className="col-6 lastunder">
                             <p className='m-0 pt-1' >DEL <i className='fa fa-arrow-right'></i> BOM</p>
                             <p className='m-0'>07-03-2024</p>
                          </div>
                          <div className="col-6 pt-3 mt-2">
                              <p className='text-danger'> One Way</p>
                          </div>
                        </div>
                     </div>
                   </div>
                   <div className="col-lg-3 col-md-4">
                      <div className="card  rounded p-2 shadow pb-0">
                        <div className="row">
                          <div className="col-6 lastunder">
                             <p className='m-0 pt-1' >DEL <i className='fa fa-arrow-right'></i> BOM</p>
                             <p className='m-0'>07-03-2024</p>
                          </div>
                          <div className="col-6 pt-3 mt-2">
                              <p className='text-danger'> One Way</p>
                          </div>
                        </div>
                     </div>
                   </div>
                   <div className="col-lg-3 col-md-4">
                      <div className="card  rounded p-2 shadow pb-0">
                        <div className="row">
                          <div className="col-6 lastunder">
                             <p className='m-0 pt-1' >DEL <i className='fa fa-arrow-right'></i> BOM</p>
                             <p className='m-0'>07-03-2024</p>
                          </div>
                          <div className="col-6 pt-3 mt-2">
                              <p className='text-danger'> One Way</p>
                          </div>
                        </div>
                     </div>
                   </div>
                </div>
            </div>

        {/* -------------------------------Flight-Listing----------------------------------- */}
        <div className="container-fluid bg-dark p-2 mt-5">
            <div className="container">
               <div className="row">
                  <div className="col-lg-2 col-md-3">
                    <h6 className='text-white m-0 pt-1'>DEL</h6>
                    <p className='text-white m-0 pb-1'>NEW DELHI</p>
                  </div>
                  <div className="col-lg-1 d-flex justify-content-start col-md-3">
                    <i className='fa fa-arrow-right text-white pt-3'></i>
                  </div>
                  <div className="col-lg-2 col-md-3">
                    <h6 className='text-white m-0 pt-1'>BOM</h6>
                    <p className='text-white m-0 pb-1'>MUMBAI</p>
                  </div>
                  <div className="col-lg-2 col-md-3">
                    <h6 className='text-white m-0 pt-1'>Departure Date</h6>
                    <p className='text-white m-0 pb-1'>Thu, Mar 07 2024</p>
                  </div>
                  <div className="col-lg-2 col-md-3">
                    <h6 className='text-white m-0 pt-1'>Passengers & Class</h6>
                    <p className='text-white m-0 pb-1'>1 Adult , Economy</p>
                  </div>
                  <div className="col-lg-3 col-md-4">
                     <button className='btn text-white border mt-2'><i class="fa-solid fa-pen"></i> MODIFY SEARCH</button>
                  </div>
               </div>
            </div>
        </div>

        <div className="container mt-4 flight-lishting">
          <div className="row">
             <div className="col-lg-3 col-md-12">
                <div className="card shadow p-3">
                   <div className="row ">
                      <div className="col-12 border-bottom">
                         <h6> Total Records</h6>
                         <p>Flights</p>
                      </div>
                      <div className="col-12 border-bottom">
                         <h6 className='mt-3 mb-3'>Price Range</h6>
                         <Box sx={{ width: 250 }}>
                         <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                         </Box>
                      </div>
                      <div className="col-12 border-bottom">
                         <p className='mt-3' >Net Fare</p>
                         <h6 className='fw-bold mb-3'> <i class="fa-solid fa-eye me-2 "></i>Show Net Fare</h6>
                      </div>
                      <div className="col-12 border-bottom p-2">
                         <h6 className='mt-3 mb-3'> Stops</h6>
                         <div className="row border m-1 rounded mb-3 ">
                            <div className="col-4 border-end p-1 ">
                                <p className='text-center m-0 text-secondary'>0</p>
                                <p className='text-center mb-0 text-secondary'>Non Stop</p>
                            </div>
                            <div className="col-4 border-end p-1">
                                <p className='text-center m-0 text-secondary'>1</p>
                                <p className='text-center mb-0 text-secondary'>Stop</p>
                            </div>
                            <div className="col-4  p-1 ">
                                <p className='text-center m-0 text-secondary'>2+</p>
                                <p className='text-center mb-0 text-secondary'>Stop</p>
                            </div>
                         </div>
                      </div>

                      <div className="col-12 border-bottom p-2">
                         <h6 className='mt-3 mb-3'>Departure</h6>
                         <div className="row border m-1 rounded mb-3 ">
                            <div className="col-3 border-end p-1   flex-column ">
                            <i class="fa-solid fa-mountain-sun   mt-2 d-flex justify-content-center mb-2 text-secondary"></i>
                                <p className='text-center mb-0 text-secondary'>00-06</p>
                            </div>
                            <div className="col-3 border-end p-1">
                            <i class="fa-regular fa-sun  mt-2 d-flex justify-content-center mb-2 text-secondary"></i>
                                <p className='text-center mb-0 text-secondary'>06-12</p>
                            </div>
                            <div className="col-3  p-1 border-end">
                                <i class="fa-regular fa-sun  mt-2 d-flex justify-content-center mb-2 text-secondary"></i>
                                <p className='text-center mb-0 text-secondary'>12-18</p>
                            </div>
                            <div className="col-3  p-1 ">
                                <i class="fa-solid fa-moon  mt-2 d-flex justify-content-center mb-2 text-secondary"></i>
                                <p className='text-center mb-0 text-secondary'>18-00</p>
                            </div>
                         </div>
                      </div>

                      <div className="col-12 border-bottom p-2">
                         <h6 className='mt-3 mb-3'>Arrival</h6>
                         <div className="row border m-1 rounded mb-3 ">
                            <div className="col-3 border-end p-1   flex-column ">
                            <i class="fa-solid fa-mountain-sun   mt-2 d-flex justify-content-center mb-2 text-secondary"></i>
                                <p className='text-center mb-0 text-secondary'>00-06</p>
                            </div>
                            <div className="col-3 border-end p-1">
                            <i class="fa-regular fa-sun  mt-2 d-flex justify-content-center mb-2 text-secondary"></i>
                                <p className='text-center mb-0 text-secondary'>06-12</p>
                            </div>
                            <div className="col-3  p-1 border-end">
                                <i class="fa-regular fa-sun  mt-2 d-flex justify-content-center mb-2 text-secondary"></i>
                                <p className='text-center mb-0 text-secondary'>12-18</p>
                            </div>
                            <div className="col-3  p-1 ">
                                <i class="fa-solid fa-moon  mt-2 d-flex justify-content-center mb-2 text-secondary"></i>
                                <p className='text-center mb-0 text-secondary'>18-00</p>
                            </div>
                         </div>
                      </div>

                      <div className="col-12 border-bottom">
                         <p className='mt-3' >Fare Identifier</p>
                      </div>

                      <div className="col-12">
                         <p className='mt-3' >Airline</p>
                         <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                              Air India
                            </label>
                         </div>
                         <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                              Air India Express
                            </label>
                         </div>
                         <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                              Air India Express
                            </label>
                         </div>
                         <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                              Akasa Air
                            </label>
                         </div>
                         <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                              IndiGo
                            </label>
                         </div>
                         <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                              SpiceJet
                            </label>
                         </div>
                         <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                               Vistara
                            </label>
                         </div>
                      </div>

                   </div>
                </div>
             </div>
             <div className="col-lg-9 col-md-12">
                <div className="row">
                    <div className="col-12 rounded shadow-lg">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 border-end bg-success">
                            <h6 className='m-0 pt-3 pb-3 text-white '>08/03/2024</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 border-end">
                            <h6 className='m-0 pt-3 pb-3'>08/03/2024</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 border-end">
                            <h6 className='m-0 pt-3 pb-3'>08/03/2024</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 border-end">
                            <h6 className='m-0 pt-3 pb-3'>08/03/2024</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 border-end">
                            <h6 className='m-0 pt-3 pb-3'>08/03/2024</h6>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <h6 className='m-0 pt-3 pb-3'>08/03/2024</h6>
                        </div>
                      </div>
                    </div>

                    <div className="col-12  sortby rounded shadow mt-3">
                      <div className="row">
                        <div className="col-lg-4 col-md-3  ">
                            <h6 className='m-0 pt-3 pb-3'>SORT BY:</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 border-end">
                            <h6 className='m-0 pt-3 pb-3'>DEPARTURE</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 border-end">
                            <h6 className='m-0 pt-3 pb-3'>DURATION</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 border-end">
                            <h6 className='m-0 pt-3 pb-3'>ARRIVAL</h6>
                        </div>
                        <div className="col-lg-2 col-md-3 border-end">
                            <h6 className='m-0 pt-3 pb-3'>PRICE</h6>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 p-0">
                       <div className="card rounded shadow mt-3 pt-3 pb-3 p-2">
                          <div className="row">
                             <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="row">
                                          <div className="col-4">
                                            <img src={Flightgroup1} alt="" className='ms-1' width="40px" height="45px" />
                                          </div>
                                          <div className="col-8 ">
                                              <p className='m-0 ms-1'>Vistara</p>
                                              <p className='text-secondary m-0 ms-1'>UK-935</p>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>22:30</h5>
                                      <p className='text-secondary m-0 text-center'>DEL</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <p className='m-0 text-center'>15H 5M</p>
                                        <hr />
                                      <p className='text-secondary m-0 text-center text-danger'>1 Stop</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>13:35</h5>
                                      <p className='text-secondary m-0 text-center'>BOM</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <Button className="btn-danger btn mt-2" onClick={handleShow3} > View Details
                                        </Button>
                                        <Modal size="xl" show={showModal3} onHide={handleClose3}  centered>
                                            
                                            <Modal.Body>

                                          <Tabs defaultValue={1}>
                                            <TabsList>
                                              <Tab value={1}>Flight Details</Tab>
                                              <Tab value={2}>Fare Details</Tab>
                                              <Tab value={3}>Baggage Info</Tab>
                                              <Tab value={4}>Fare Rules</Tab>
                                              <Tab value={5}>Cancellation Charges</Tab>
                                            </TabsList>
                                            <TabPanel value={1}>
                                               <div className="row mt-4 mb-3">
                                                   <div className="col-lg-3 col-md-3">
                                                    <div className="row">
                                                     <div className="col-4">
                                                        <img src={Flightgroup1} alt="" className='ms-1' width="40px" height="45px" />
                                                     </div>
                                                     <div className="col-8 ">
                                                        <p className='m-0 ms-1 fs-6'>Vistara</p>
                                                        <p className='text-secondary m-0 ms-1 fs-6'>UK-935</p>
                                                     </div>
                                                     </div>
                                                   </div>
                                                   <div className="col-lg-3 col-md-3">
                                                      <h5 className=' m-0 text-center'>03:40 AM</h5>
                                                      <p className='text-secondary m-0 text-center fs-6'>DEL-Delhi</p>
                                                      <p className='text-secondary m-0 text-center fs-6'>Terminal: 2</p>
                                                      <p className='text-secondary m-0 text-center fs-6'>10-03-2024</p>
                                                   </div>
                                                   <div className="col-lg-3 col-md-3">
                                                     <p className='m-0  fs-6 text-center mt-4 ,'>2:05</p>
                                                     <hr />
                                                     </div>
                                                   <div className="col-lg-3 col-md-3">
                                                      <h5 className=' m-0 text-center'>05:45 AM</h5>
                                                      <p className='text-secondary m-0 text-center fs-6'>BOM-Mumbai</p>
                                                      <p className='text-secondary m-0 text-center fs-6'>Terminal: 2</p>
                                                      <p className='text-secondary m-0 text-center fs-6'>10-03-2024</p>
                                                   </div>

                                               </div>
                                            </TabPanel>
                                            <TabPanel value={2}>
                                                <h5 className='fw-bold mb-3 mt-4'>Fare Breakup</h5>

                                                <table class="table  table-bordered">
                                                <thead>
                                                  <tr>
                                                    <th scope="col">
                                                      <h5 className=' m-0 text-center'>Base Fare</h5>
                                                    </th>
                                                    <th scope="col">
                                                      <p className='text-secondary m-0 text-center fs-6'>₹ 6000</p>
                                                    </th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <th scope="row">
                                                       <h5 className=' m-0 text-center'>Surcharges & Taxes</h5>
                                                    </th>
                                                    <td>
                                                      <p className='text-secondary m-0 text-center fs-6'>	₹ 813</p>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <th scope="row">
                                                      <h5 className=' m-0 text-center'>Pay Amount</h5>
                                                    </th>
                                                    <td>
                                                       <p className='text-secondary m-0 text-center fs-6'>₹ 6813</p>
                                                    </td>
                                                  </tr>
                                                  
                                                  
                                                </tbody>
                                              </table>
                                            </TabPanel>
                                            <TabPanel value={3}>
                                              <table class="table  table-bordered">
                                                  <thead>
                                                    <tr>
                                                      <th scope="col">
                                                        <h5 className=' m-0 '>Airline</h5>
                                                      </th>
                                                      <th scope="col">
                                                        <h5 className=' m-0 text-center'>Check-in Baggage</h5>
                                                      </th>
                                                      <th scope="col">
                                                         <h5 className=' m-0 text-center'>Cabin Baggage</h5>
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <th scope="row">
                                                      <div className="row">
                                                     <div className="col-4">
                                                        <img src={Flightgroup1} alt="" className='ms-1' width="40px" height="45px" />
                                                     </div>
                                                     <div className="col-8 ">
                                                        <p className='m-0 ms-1 fs-6'>Vistara</p>
                                                        <p className='text-secondary m-0 ms-1 fs-6'>UK-935</p>
                                                     </div>
                                                     </div>
                                                      </th>
                                                      <td>
                                                        <p className=' m-0 text-center fs-6'>15 Kilograms</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0 text-center fs-6'>7 KG</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <th scope="row" colspan="3">
                                                        <ul>
                                                          <li className='fs-6'>Baggage information mentioned above is obtained from airline's reservation system, WIZOTRIP LLP does not guarantee the accuracy of this information.</li>
                                                          <li className='fs-6'>The baggage allowance may vary according to stop-overs, connecting flights. changes in airline rules. etc.</li>
                                                        </ul>
                                                      </th>
                                                      
                                                    </tr>
                                                    
                                                  </tbody>
                                                </table>
                                            </TabPanel>
                                             <TabPanel value={4}>
                                               <table class="table borderless border=0 " >
                                                  <thead>
                                                    <tr >
                                                      <th scope="col" >
                                                        <h5 className=' m-0 '>Journey Points</h5>
                                                      </th>
                                                      <th scope="col">
                                                        <h5 className=' m-0'>Type</h5>
                                                      </th>
                                                      <th scope="col">
                                                         <h5 className=' m-0'>From </h5>
                                                      </th>
                                                      <th scope="col">
                                                         <h5 className=' m-0'>To</h5>
                                                      </th>
                                                      <th scope="col">
                                                         <h5 className=' m-0'>Unit</h5>
                                                      </th>
                                                      <th scope="col">
                                                         <h5 className=' m-0'>Details</h5>
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <th scope="row">
                                                      <div className="row">
                                                        <p className='m-0  fs-6'>DEL-BOM</p>                                                    
                                                     </div>
                                                      </th>
                                                      <td>
                                                        <p className=' m-0 fs-6'>	Reissue</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>0</p>
                                                      </td>
                                                      <td>
                                                        <p className=' m-0   fs-6'>3</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>Days</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>INR 3000</p>
                                                      </td>
                                                     </tr>

                                                     <tr>
                                                      <th scope="row">
                                                      <div className="row">
                                                        <p className='m-0  fs-6'>DEL-BOM</p>                                                    
                                                     </div>
                                                      </th>
                                                      <td>
                                                        <p className=' m-0 fs-6'>	Reissue</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>4</p>
                                                      </td>
                                                      <td>
                                                        <p className=' m-0   fs-6'></p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>Days</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>INR 2500</p>
                                                      </td>
                                                     </tr>

                                                     <tr>
                                                      <th scope="row">
                                                      <div className="row">
                                                        <p className='m-0  fs-6'>DEL-BOM</p>                                                    
                                                     </div>
                                                      </th>
                                                      <td>
                                                        <p className=' m-0 fs-6'>Cancellation</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>0</p>
                                                      </td>
                                                      <td>
                                                        <p className=' m-0   fs-6'>3</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>Days</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>INR 3500</p>
                                                      </td>
                                                     </tr>

                                                     <tr>
                                                      <th scope="row">
                                                      <div className="row">
                                                        <p className='m-0  fs-6'>DEL-BOM</p>                                                    
                                                     </div>
                                                      </th>
                                                      <td>
                                                        <p className=' m-0 fs-6'>Cancellation</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>4</p>
                                                      </td>
                                                      <td>
                                                        <p className=' m-0   fs-6'>3</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>Days</p>
                                                      </td>
                                                      <td>
                                                        <p className='m-0  fs-6'>INR 3500</p>
                                                      </td>
                                                     </tr>
                                                   
                                                    
                                                  </tbody>
                                                </table>
                                               </TabPanel>
                                            <TabPanel value={5}>
                                               <div className="row p-3">
                                                  <div className="col-lg-6 col-md-6 border">
                                                      <div className="row">
                                                        <div className="col-12  border-bottom p-2">
                                                          <p className='m-0 text-center  fs-6'>Cancellation</p>
                                                        </div>
                                                        <div className="col-12  border-bottom p-2">
                                                          <p className='m-0 text-center  fs-6'>INR 3500 | From 0 - To 3 Days</p>
                                                        </div>
                                                        <div className="col-12  border-bottom p-2">
                                                          <p className='m-0 text-center  fs-6'>INR 3000 | From 4 & above before dept</p>
                                                        </div>
                                                      </div>
                                                  </div>
                                                  <div className="col-lg-6 col-md-6 border">
                                                    <div className="row">
                                                        <div className="col-12  border-bottom p-2">
                                                          <p className='m-0 text-center  fs-6'>Reissue</p>
                                                        </div>
                                                        <div className="col-12  border-bottom p-2">
                                                          <p className='m-0 text-center  fs-6'>INR 3000 | From 0 - To 3 Days</p>
                                                        </div>
                                                        <div className="col-12  border-bottom p-2">
                                                          <p className='m-0 text-center  fs-6'>INR 2500 | From 4 & above before dept</p>
                                                        </div>
                                                      </div>
                                                    </div>
                                               </div>
                                            </TabPanel>
                                          </Tabs>
                                          <Modal.Header className='border-0' closeButton >
                                                
                                                </Modal.Header>
                                                <div ></div>
                                            </Modal.Body>                           
                                        </Modal> 
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                       <p className='text-danger mt-3'>Seats left: 1</p>
                                    </div>
                                </div>
                             </div>

                             <div className="col-lg-6 col-md-12">
                               <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div class="form-check">
                                       <input class="form-check-input fs-5" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                       <label class="form-check-label fw-bold fs-5" for="exampleRadios1">₹ 8829</label>
                                     </div>
                                      <p className='onlinefare mb-0'>ONLINE FARE</p>
                                      <span className='Economy'>Economy ,</span>
                                      <span className='Refundable'>Refundable <i className='fa fa-info-circle' ></i></span>
                                      <p className='corporate mb-0 mt-1 fw-bold'>SME CORPORATE COUPON FARE</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 d-flex">
                                    <div class="form-check">
                                        <input class="form-check-input mt-2 " type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label text-success mt-1" for="defaultCheck1">
                                         Share
                                        </label>
                                    </div>
                                    <Link to={"/agent/Flightgroup/Flightgroupdetails"} className='btn btn-danger ms-3  w-100 h-50 mt-4 fs-5'>Book Now</Link>
                                    </div>dfd
                                    <div className="col-12">
                                         <button className='btn btn-danger mt-4'>More Fare</button>
                                     </div>
                                   
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="col-12 p-0">
                       <div className="card rounded shadow mt-3 pt-3 pb-3 p-2">
                          <div className="row">
                             <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="row">
                                          <div className="col-4">
                                            <img src={Flightgroup1} alt="" className='ms-1' width="40px" height="45px" />
                                          </div>
                                          <div className="col-8 ">
                                              <p className='m-0 ms-1'>Vistara</p>
                                              <p className='text-secondary m-0 ms-1'>UK-935</p>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>22:30</h5>
                                      <p className='text-secondary m-0 text-center'>DEL</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <p className='m-0 text-center'>15H 5M</p>
                                      <hr />
                                      <p className='text-secondary m-0 text-center text-danger'>1 Stop</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>13:35</h5>
                                      <p className='text-secondary m-0 text-center'>BOM</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <Button className="btn-danger btn mt-2" onClick={handleShow3} > View Seate</Button>
                                       
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                       <p className='text-danger mt-3'>Seats left: 1</p>
                                    </div>
                                    
                                </div>
                             </div>

                             <div className="col-lg-6 col-md-12">
                               <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div class="form-check">
                                       <input class="form-check-input fs-5" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                       <label class="form-check-label fw-bold fs-5" for="exampleRadios1">₹ 8829</label>
                                     </div>
                                      <p className='onlinefare mb-0'>ONLINE FARE</p>
                                      <span className='Economy'>Economy ,</span>
                                      <span className='Refundable'>Refundable <i className='fa fa-info-circle' ></i></span>
                                      <p className='corporate mb-0 mt-1 fw-bold'>SME CORPORATE COUPON FARE</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 d-flex">
                                    <div class="form-check">
                                        <input class="form-check-input mt-2 " type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label text-success" for="defaultCheck1">
                                         Share
                                        </label>
                                    </div>
                                       <button className='btn btn-danger ms-3  w-100 h-50 mt-4 fs-5'>Book Now</button>
                                    </div>
                                    <div className="col-12">
                                         <button className='btn btn-danger mt-4'>More Fare</button>
                                     </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="col-12 p-0">
                       <div className="card rounded shadow mt-3 pt-3 pb-3 p-2">
                          <div className="row">
                             <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="row">
                                          <div className="col-4">
                                            <img src={Flightgroup1} alt="" className='ms-1' width="40px" height="45px" />
                                          </div>
                                          <div className="col-8 ">
                                              <p className='m-0 ms-1'>Vistara</p>
                                              <p className='text-secondary m-0 ms-1'>UK-935</p>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>22:30</h5>
                                      <p className='text-secondary m-0 text-center'>DEL</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <p className='m-0 text-center'>15H 5M</p>
                                      <hr />
                                      <p className='text-secondary m-0 text-center text-danger'>1 Stop</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>13:35</h5>
                                      <p className='text-secondary m-0 text-center'>BOM</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <Button className="btn-danger btn mt-2" onClick={handleShow3} > View Seate</Button>
                                       
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                       <p className='text-danger mt-3'>Seats left: 1</p>
                                    </div>
                                    
                                </div>
                             </div>

                             <div className="col-lg-6 col-md-12">
                               <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div class="form-check">
                                       <input class="form-check-input fs-5" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                       <label class="form-check-label fw-bold fs-5" for="exampleRadios1">₹ 8829</label>
                                     </div>
                                      <p className='onlinefare mb-0'>ONLINE FARE</p>
                                      <span className='Economy'>Economy ,</span>
                                      <span className='Refundable'>Refundable <i className='fa fa-info-circle' ></i></span>
                                      <p className='corporate mb-0 mt-1 fw-bold'>SME CORPORATE COUPON FARE</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 d-flex">
                                    <div class="form-check">
                                        <input class="form-check-input mt-2 " type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label text-success" for="defaultCheck1">
                                         Share
                                        </label>
                                    </div>
                                       <button className='btn btn-danger ms-3  w-100 h-50 mt-4 fs-5'>Book Now</button>
                                    </div>
                                    <div className="col-12">
                                         <button className='btn btn-danger mt-4'>More Fare</button>
                                     </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>


                    <div className="col-12 p-0">
                       <div className="card rounded shadow mt-3 pt-3 pb-3 p-2">
                          <div className="row">
                             <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="row">
                                          <div className="col-4">
                                            <img src={Flightgroup1} alt="" className='ms-1' width="40px" height="45px" />
                                          </div>
                                          <div className="col-8 ">
                                              <p className='m-0 ms-1'>Vistara</p>
                                              <p className='text-secondary m-0 ms-1'>UK-935</p>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>22:30</h5>
                                      <p className='text-secondary m-0 text-center'>DEL</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <p className='m-0 text-center'>15H 5M</p>
                                      <hr />
                                      <p className='text-secondary m-0 text-center text-danger'>1 Stop</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>13:35</h5>
                                      <p className='text-secondary m-0 text-center'>BOM</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <Button className="btn-danger btn mt-2" onClick={handleShow3} > View Seate</Button>
                                       
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                       <p className='text-danger mt-3'>Seats left: 1</p>
                                    </div>
                                    
                                </div>
                             </div>

                             <div className="col-lg-6 col-md-12">
                               <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div class="form-check">
                                       <input class="form-check-input fs-5" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                       <label class="form-check-label fw-bold fs-5" for="exampleRadios1">₹ 8829</label>
                                     </div>
                                      <p className='onlinefare mb-0'>ONLINE FARE</p>
                                      <span className='Economy'>Economy ,</span>
                                      <span className='Refundable'>Refundable <i className='fa fa-info-circle' ></i></span>
                                      <p className='corporate mb-0 mt-1 fw-bold'>SME CORPORATE COUPON FARE</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 d-flex">
                                    <div class="form-check">
                                        <input class="form-check-input mt-2 " type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label text-success" for="defaultCheck1">
                                         Share
                                        </label>
                                    </div>
                                       <button className='btn btn-danger ms-3  w-100 h-50 mt-4 fs-5'>Book Now</button>
                                    </div>
                                    <div className="col-12">
                                         <button className='btn btn-danger mt-4'>More Fare</button>
                                     </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="col-12 p-0">
                       <div className="card rounded shadow mt-3 pt-3 pb-3 p-2">
                          <div className="row">
                             <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="row">
                                          <div className="col-4">
                                            <img src={Flightgroup1} alt="" className='ms-1' width="40px" height="45px" />
                                          </div>
                                          <div className="col-8 ">
                                              <p className='m-0 ms-1'>Vistara</p>
                                              <p className='text-secondary m-0 ms-1'>UK-935</p>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>22:30</h5>
                                      <p className='text-secondary m-0 text-center'>DEL</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <p className='m-0 text-center'>15H 5M</p>
                                      <hr />
                                      <p className='text-secondary m-0 text-center text-danger'>1 Stop</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>13:35</h5>
                                      <p className='text-secondary m-0 text-center'>BOM</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <Button className="btn-danger btn mt-2" onClick={handleShow3} > View Seate</Button>
                                       
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                       <p className='text-danger mt-3'>Seats left: 1</p>
                                    </div>
                                    
                                </div>
                             </div>

                             <div className="col-lg-6 col-md-12">
                               <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div class="form-check">
                                       <input class="form-check-input fs-5" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                       <label class="form-check-label fw-bold fs-5" for="exampleRadios1">₹ 8829</label>
                                     </div>
                                      <p className='onlinefare mb-0'>ONLINE FARE</p>
                                      <span className='Economy'>Economy ,</span>
                                      <span className='Refundable'>Refundable <i className='fa fa-info-circle' ></i></span>
                                      <p className='corporate mb-0 mt-1 fw-bold'>SME CORPORATE COUPON FARE</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 d-flex">
                                    <div class="form-check">
                                        <input class="form-check-input mt-2 " type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label text-success" for="defaultCheck1">
                                         Share
                                        </label>
                                    </div>
                                       <button className='btn btn-danger ms-3  w-100 h-50 mt-4 fs-5'>Book Now</button>
                                    </div>
                                    <div className="col-12">
                                         <button className='btn btn-danger mt-4'>More Fare</button>
                                     </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="col-12 p-0">
                       <div className="card rounded shadow mt-3 pt-3 pb-3 p-2">
                          <div className="row">
                             <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="row">
                                          <div className="col-4">
                                            <img src={Flightgroup1} alt="" className='ms-1' width="40px" height="45px" />
                                          </div>
                                          <div className="col-8 ">
                                              <p className='m-0 ms-1'>Vistara</p>
                                              <p className='text-secondary m-0 ms-1'>UK-935</p>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>22:30</h5>
                                      <p className='text-secondary m-0 text-center'>DEL</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <p className='m-0 text-center'>15H 5M</p>
                                      <hr />
                                      <p className='text-secondary m-0 text-center text-danger'>1 Stop</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>13:35</h5>
                                      <p className='text-secondary m-0 text-center'>BOM</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <Button className="btn-danger btn mt-2" onClick={handleShow3} > View Seate</Button>
                                       
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                       <p className='text-danger mt-3'>Seats left: 1</p>
                                    </div>
                                    
                                </div>
                             </div>

                             <div className="col-lg-6 col-md-12">
                               <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div class="form-check">
                                       <input class="form-check-input fs-5" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                       <label class="form-check-label fw-bold fs-5" for="exampleRadios1">₹ 8829</label>
                                     </div>
                                      <p className='onlinefare mb-0'>ONLINE FARE</p>
                                      <span className='Economy'>Economy ,</span>
                                      <span className='Refundable'>Refundable <i className='fa fa-info-circle' ></i></span>
                                      <p className='corporate mb-0 mt-1 fw-bold'>SME CORPORATE COUPON FARE</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 d-flex">
                                    <div class="form-check">
                                        <input class="form-check-input mt-2 " type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label text-success" for="defaultCheck1">
                                         Share
                                        </label>
                                    </div>
                                       <button className='btn btn-danger ms-3  w-100 h-50 mt-4 fs-5'>Book Now</button>
                                    </div>
                                    <div className="col-12">
                                         <button className='btn btn-danger mt-4'>More Fare</button>
                                     </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="col-12 p-0">
                       <div className="card rounded shadow mt-3 pt-3 pb-3 p-2">
                          <div className="row">
                             <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="row">
                                          <div className="col-4">
                                            <img src={Flightgroup1} alt="" className='ms-1' width="40px" height="45px" />
                                          </div>
                                          <div className="col-8 ">
                                              <p className='m-0 ms-1'>Vistara</p>
                                              <p className='text-secondary m-0 ms-1'>UK-935</p>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>22:30</h5>
                                      <p className='text-secondary m-0 text-center'>DEL</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <p className='m-0 text-center'>15H 5M</p>
                                      <hr />
                                      <p className='text-secondary m-0 text-center text-danger'>1 Stop</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3">
                                      <h5 className=' m-0 text-center'>13:35</h5>
                                      <p className='text-secondary m-0 text-center'>BOM</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <Button className="btn-danger btn mt-2" onClick={handleShow3} > View Seate</Button>
                                       
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                       <p className='text-danger mt-3'>Seats left: 1</p>
                                    </div>
                                    
                                </div>
                             </div>

                             <div className="col-lg-6 col-md-12">
                               <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div class="form-check">
                                       <input class="form-check-input fs-5" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                       <label class="form-check-label fw-bold fs-5" for="exampleRadios1">₹ 8829</label>
                                     </div>
                                      <p className='onlinefare mb-0'>ONLINE FARE</p>
                                      <span className='Economy'>Economy ,</span>
                                      <span className='Refundable'>Refundable <i className='fa fa-info-circle' ></i></span>
                                      <p className='corporate mb-0 mt-1 fw-bold'>SME CORPORATE COUPON FARE</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 d-flex">
                                    <div class="form-check">
                                        <input class="form-check-input mt-2 " type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label text-success" for="defaultCheck1">
                                         Share
                                        </label>
                                    </div>
                                       <button className='btn btn-danger ms-3  w-100 h-50 mt-4 fs-5'>Book Now</button>
                                    </div>
                                    <div className="col-12">
                                         <button className='btn btn-danger mt-4'>More Fare</button>
                                     </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="col-12 p-0">
                       <div className="card rounded shadow mt-3 pt-3 pb-3 p-2">
                          <div className="row">
                             <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="row">
                                          <div className="col-4">
                                            <img src={Flightgroup1} alt="" className='ms-1' width="40px" height="45px" />
                                          </div>
                                          <div className="col-8 ">
                                              <p className='m-0 ms-1'>Vistara</p>
                                              <p className='text-secondary m-0 ms-1'>UK-935</p>
                                          </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                        <h5 className=' m-0 text-center'>22:30</h5>
                                        <p className='text-secondary m-0 text-center'>DEL</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                        <p className='m-0 text-center'>15H 5M</p>
                                        <p className='text-secondary m-0 text-center text-danger'>1 Stop</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3">
                                        <h5 className=' m-0 text-center'>13:35</h5>
                                        <p className='text-secondary m-0 text-center'>BOM</p>
                                        </div>

                                        
                                    
                                </div>
                             </div>

                             <div className="col-lg-6 col-md-12">
                               <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div class="form-check">
                                       <input class="form-check-input fs-5" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                       <label class="form-check-label fw-bold fs-5" for="exampleRadios1">₹ 8829</label>
                                     </div>
                                      <p className='onlinefare mb-0'>ONLINE FARE</p>
                                      <span className='Economy'>Economy ,</span>
                                      <span className='Refundable'>Refundable <i className='fa fa-info-circle' ></i></span>
                                      <p className='corporate mb-0 mt-1 fw-bold'>SME CORPORATE COUPON FARE</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 d-flex">
                                    <div class="form-check">
                                        <input class="form-check-input mt-2 " type="checkbox" value="" id="defaultCheck1" />
                                        <label class="form-check-label text-success" for="defaultCheck1">
                                         Share
                                        </label>
                                    </div>
                                    <button className='btn btn-danger ms-3  w-100 h-50 mt-4 fs-5'>Book Now</button>
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
           
        </>
    )
}

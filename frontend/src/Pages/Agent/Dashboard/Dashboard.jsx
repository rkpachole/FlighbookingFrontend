import React, { useState, useEffect } from 'react'
import { Grid, Card, CardContent, Typography, Breadcrumbs, Link } from '@mui/material';
import ImageExample from '../../../assets/images/icon2.png';
import IconImage from '../../../assets/images/icon.svg';
import Icon2 from '../../../assets/images/icon2.svg';
import Icon3 from '../../../assets/images/icon2.svg';
import Icon4 from '../../../assets/images/icon4.svg';
import Icon5 from '../../../assets/images/icon5.svg';
import Icon6 from '../../../assets/images/icon6.svg';
import { FlightSearchService } from '../../../Services/Agent/FlightSearch.Service';
import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
export default function AgentDashboard() {
    const [flightBooking, setFlightBooking] = useState();
    const [pendingFlight, setPendingFlight] = useState();

    const showMenuIcon = localStorage.getItem("showMenuIcon");
    console.warn(localStorage.getItem("showMenuIcon") == "true")
  useEffect(() => {
        handleBookTicket();
    }, [])



    const handleBookTicket = () => {
        FlightSearchService.BookTicket().then(async (response) => {
            if (response.status === 200) {
                let data = response.data.data.rows;
                setFlightBooking(data.length);
                handleSerachData();
            }
        }).catch((e) => {
            setFlightBooking("0");
        });
    };

    const handleSerachData = () => {
        let Values = {
            status: "2",

        };

        // Convert Values object to query parameters
        const queryParams = new URLSearchParams(Values).toString();

        FlightSearchService.BookTicket(`${queryParams}`)
            .then(async (response) => {
                if (response.status === 200) {
                    let data = response.data.data.rows;
                    setPendingFlight(data.length);
                    console.warn(data.length);
                }
            })
            .catch((e) => {
                console.log(e);

            });
    };

    return (
        <>
            <div class="page">
                <AgentLayout />
                {/* <!-- Start::app-content --> */}
                <div class="main-content app-content">
                    <div class="container-fluid">
                        {/* <!-- PAGE-HEADER --> */}
                        <div className="page-header">
                            <Typography variant="h5">Dashboard</Typography>
                            <div>
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link color="inherit" href="/">
                                        Home
                                    </Link>
                                    <Typography color="textPrimary">Dashboard</Typography>
                                </Breadcrumbs>
                            </div>
                        </div>

                        <div className='d-block d-lg-none'>
                            <div className='row g-2'>
                                <div className='col-4'>
                                    <div className='header-icon'> 
                                        {/* <Link to={ `/agent/Flightreview`}><button type="button" className="btn btn-outline-success btn-border"><i className="fa-solid fa-plane-up"></i> Flights</button></Link> */}
                                        <div className='card'>
                                            <div className='card-body p-2  text-center'>
                                                <Link to={`/agent/flight`}>
                                                    <button type="button" className="btn btn-defulte btn-border"><i className="fa-solid fa-plane-up icon-size fa-xl"></i> <br/>  Flights</button>
                                                </Link>  
                                            </div>    
                                        </div>    
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='header-icon'> 
                                        {/* <Link to={ `/agent/Flightreview`}><button type="button" className="btn btn-outline-success btn-border"><i className="fa-solid fa-plane-up"></i> Flights</button></Link> */}
                                        <div className='card'>
                                            <div className='card-body p-2 text-center'>
                                            <Link to={"/agent/hotelbooking/flight"}>
                                                <button type="button" className="btn btn-defulte btn-border "><i className="fa-solid fa-hotel icon-size fa-xl"></i> <br/>  Hotels</button>
                                            </Link>
                                            </div>    
                                        </div>    
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='header-icon'> 
                                        {/* <Link to={ `/agent/Flightreview`}><button type="button" className="btn btn-outline-success btn-border"><i className="fa-solid fa-plane-up"></i> Flights</button></Link> */}
                                        <div className='card'>
                                            <div className='card-body p-2 text-center'>
                                                <Link to={`/agent/flight`}>
                                                    <button type="button" className="btn btn-defulte btn-border"><i className="fa-solid fa-bus icon-size fa-xl"></i> <br/> Bus</button>
                                                </Link>  
                                            </div>    
                                        </div>    
                                    </div>
                                </div>
                            </div>    
                        </div>
                        {/* <!-- PAGE-HEADER END --> */}
                        {/* <!-- ROW-1 --> */}
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                                <div class="card overflow-hidden">
                                    <div class="card-body dash1">
                                        <div class="d-flex">
                                            <div class="mt-2">
                                                <h6 class="fw-normal text-white">Total Customers</h6>
                                                <h2 class="mb-0 text-dark fw-semibold text-white">20</h2>
                                            </div>
                                            <div class="ms-auto">
                                                <div class="chart-wrapper mt-3">
                                                    <img src={IconImage} style={{ width: '45px' }} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                                <div class="card overflow-hidden">
                                    <div class="card-body dash2">
                                        <div class="d-flex">
                                            <div class="mt-2">
                                                <h6 class="fw-normal text-white">Total Flight Booking</h6>
                                                <h2 class="mb-0 text-dark fw-semibold text-white">{flightBooking ? flightBooking : "0"}</h2>
                                            </div>
                                            <div class="ms-auto">
                                                <div class="chart-wrapper mt-3">
                                                    <img src={Icon2} style={{ width: '45px' }} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                                <div class="card overflow-hidden">
                                    <div class="card-body dash3">
                                        <div class="d-flex">
                                            <div class="mt-2">
                                                <h6 class="fw-normal text-white">Total Hotel Booking</h6>
                                                <h2 class="mb-0 text-dark fw-semibold text-white">180</h2>
                                            </div>
                                            <div class="ms-auto">
                                                <div class="chart-wrapper mt-3">
                                                    <img src={Icon3} style={{ width: '45px' }} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                                <div class="card overflow-hidden">
                                    <div class="card-body dash4">
                                        <div class="d-flex">
                                            <div class="mt-2">
                                                <h6 class="fw-normal text-white">Total Pendding Flight</h6>
                                                <h2 class="mb-0 text-dark fw-semibold text-white">{pendingFlight ?pendingFlight :0}</h2>
                                            </div>
                                            <div class="ms-auto">
                                                <div class="chart-wrapper mt-3">
                                                    <img src={IconImage} style={{ width: '45px' }} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                                <div class="card overflow-hidden">
                                    <div class="card-body dash5">
                                        <div class="d-flex">
                                            <div class="mt-2">
                                                <h6 class="fw-normal text-white">Total Hotel Pendding</h6>
                                                <h2 class="mb-0 text-dark fw-semibold text-white">25</h2>
                                            </div>
                                            <div class="ms-auto">
                                                <div class="chart-wrapper mt-3">
                                                    <img src={Icon5} style={{ width: '45px' }} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                                <div class="card overflow-hidden">
                                    <div class="card-body dash6">
                                        <div class="d-flex">
                                            <div class="mt-2">
                                                <h6 class="fw-normal text-white">Total Enquiry </h6>
                                                <h2 class="mb-0 text-dark fw-semibold text-white">125</h2>
                                            </div>
                                            <div class="ms-auto">
                                                <div class="chart-wrapper mt-3">
                                                    <img src={Icon6} style={{ width: '45px' }} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- End::app-content --> */}
            </div>

        </>
    )
}

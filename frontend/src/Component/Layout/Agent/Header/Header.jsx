import React ,{useState}from 'react';
import { Toaster } from 'react-hot-toast';
// import Button from '@mui/material/Button';
// import HomeIcon from '@mui/icons-material/Home';
// import HotelIcon from '@mui/icons-material/Hotel';
// import FlightIcon from '@mui/icons-material/Flight';
// import Badge from '@mui/material/Badge';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthAPI } from '../../../../Services/Auth.Service';
const profile =require('../../../../assets/images/user.png');



export default function Header({onToggleSidebar }) {
    const [menuIcon, setMenuIcon]= useState(false);
    const logout = async () => {
        AuthAPI.logout();
        window.location.href = "/"
    }
    const userData = JSON.parse(localStorage.getItem('userData'));
    //console.log("userData",userData.data.token)
    const jwtToken = userData.data.token;

    const handleMenuBar =()=>{
        setMenuIcon(!menuIcon);
        localStorage.setItem("showMenuIcon","demo");
    }
    localStorage.setItem("showMenuIcon",menuIcon);
  return (
    <>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
       {/* <!-- app-header --> */}
       <header className="app-header">
            {/* <!-- Start::main-header-container --> */}
            <div className="main-header-container container-fluid d-flex flex-column flex-md-row p-3 align-center">
                <button className='btn mini-btn' onClick={onToggleSidebar}><i class="fa-solid fa-bars"></i></button>
                    {/* <!-- Start::header-content-left --> */}
                <div className="header-content-left order-md-0 order-sm-2 order-lg-0 order-2 justify-content-lg-start justify-content-center ps-md-5 ps-lg-0 ps-sm-0 ps-0 mt-3 mt-md-0">
                  
                    <div className='me-3 header-icon  d-none d-lg-block'> 
                        <Link to={`/agent/dashboard`}> 
                            <button className='btn btn-primary btn-border'><i className="fa-solid fa-gauge icon-size"></i> Dashboard</button> 
                        </Link>
                    </div>
                    <div className='me-3 header-icon  d-none d-lg-block'> 
                    {/* <Link to={ `/agent/Flightreview`}><button type="button" className="btn btn-outline-success btn-border"><i className="fa-solid fa-plane-up"></i> Flights</button></Link> */}
                    <Link to={`/agent/flight`}>
                        <button type="button" className="btn btn-success btn-border"><i className="fa-solid fa-plane-up icon-size"></i> Flights</button>
                    </Link>  
                    </div>
                    <div className='header-icon d-none d-lg-block'> 
                    <Link to={"/agent/hotelbooking/flight"}>
                        <button type="button" className="btn btn-info btn-border "><i className="fa-solid fa-hotel icon-size"></i> Hotels</button>
                    </Link>
                    </div>
                     <div className='header-icon'> 
                    <Link to={"/agent/holidaybooking/holidaysearch"}>
                        <button type="button" className="btn ms-3 holidaybtn"><i className="fa-solid fa-hotel icon-size"></i> Holiday</button>
                    </Link>
                    </div>  
                 <div className=' header-icon'> 
                    <Link to={"/agent/busbooking/bussearching"}>
                        <button type="button" className="btn ms-3 busbtn"><i className="fa-solid fa-hotel icon-size"></i> Bus</button>
                    </Link>
                    <Link to={"/agent/Flightgroup/Flightgroupsearch"}>
                        <button type="button" className="btn btn-info btn-border ms-3"><i className="fa-solid fa-hotel icon-size"></i> Flight Group</button>
                    </Link>
                    </div>   
                </div>
                {/* <!-- End::header-content-left --> */}
                {/* <!-- Start::header-content-right --> */}
                <div className="header-content-right">
                    <div className="header-element d-none">
                        <a aria-label="anchor" href={() => false} className="header-link dropdown-toggle py-0" data-bs-toggle="offcanvas" data-bs-target="#sidebar-right">
                            <i className="fa fa-align-right header-link-icon"></i>
                        </a>
                    </div>
                    <div className="header-element main-profile-user justify-content-end w-100">
                        <button className='btn wallet-btn m-0'>
                            <span className='wallet-icon'><i class="fa-solid fa-credit-card"></i> INR</span>
                            <span className='wallet-text fw-bold'>0</span>
                        </button>
                        <a href="" className="header-link py-0">
                            <i className="fa-solid fa-bell header-link-icon"></i>
                        </a>
                        <a href={() => false} className="header-link dropdown-toggle py-0" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <div className="d-flex align-items-center">
                                <div className="me-2 me-0">
                                    <img src={profile} alt="img" width="32" height="32" className="rounded-circle" />
                                </div>
                                <div className="d-xxl-block my-auto">
                                    <h6 className="user-text mb-0 lh-1 text-dark text-uppercase">{`${userData.data.firstName} ${userData.data.lastName}`}</h6>
                                    <button className="agent-button bg-primary text-light mt-1">Agent</button>
                                </div>
                            </div>
                        </a>
                        {/* <!-- End::header-link|dropdown-toggle --> */}
                        <ul className="main-header-dropdown dropdown-menu pt-0 header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                            <li className="drop-heading d-xxl-none d-block">
                                 <div className="text-center">
                                    <h5 className="text-dark mb-0 fs-14 fw-semibold">{`${userData.data.firstName} ${userData.data.lastName}`}</h5>
                                    <small className="text-muted">Role:Agent</small>
                                </div>
                            </li>
                            <li className="dropdown-item">
                                <Link className="d-flex w-100 text-black fw-bold" to='*'>
                                    <i className="fa fa-user fs-18 me-2 side-menu__icon profile-icon"></i>Profile
                                </Link>
                            </li>
                            <li className="dropdown-item" onClick={logout}>
                                <Link className="d-flex w-100 text-black fw-bold" to='/'>
                                    <i class="fa-solid fa-right-from-bracket fs-18 me-2 side-menu__icon profile-icon"></i>Log Out
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element d-none">
                        {/* <!-- Start::header-link|switcher-icon --> */}
                        <a aria-label="anchor" href={() => false} className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                            <i className="bx bx-cog header-link-icon"></i>
                        </a>
                        {/* <!-- End::header-link|switcher-icon --> */}
                    </div>
                    {/* <!-- End::header-element --> */}

                </div>
                {/* <!-- End::header-content-right --> */}

            </div>
            {/* <!-- End::main-header-container --> */}

        </header>
    </>
  )
}

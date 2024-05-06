import React, { useState, useRef } from "react";
import { Toaster } from "react-hot-toast";
import Header from "../../../../Component/Layout/Agent/Header/Header";
import Select from 'react-select';
import { Form, Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import flagUrl from "../../../../assets/images/flag.jpg";
import Moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import {
  Alert, Box, Grid, InputLabel, FormGroup, FormControlLabel, Checkbox,
  Input,
  InputAdornment,
  TextField, FormControl
} from '@mui/material';

import { Link } from "react-router-dom";
import "./Hotelsear.css";
import Slider from "@mui/material/Slider";
import { HotelSearchService } from '../../../../Services/Agent/HotelSearch.Service';

function valuetext(value) {
  return `${value}°C`;
}
// import internetSecurity from '../assets/images/internet-security.png'


const colourOptions = [
  { value: 'ocean', label: 'Ocean', },
  { value: 'purple', label: 'Purple', },
  { value: 'red', label: 'Red', },
  { value: 'orange', label: 'Orange', },
  { value: 'yellow', label: 'Yellow' },]

const cityList = [{
  id: 699261,
  cityName: "ujjain",
  countryName: "INDIA",
  type: "CITY",
  fullRegionName: "TIRURANGADI, KERALA, INDIA"
},
{
  id: 129,
  cityName: "Indore",
  countryName: "INDIA",
  type: "CITY",
  fullRegionName: "TIRURANGADI, KERALA, INDIA"
},

{
  id: 127,
  cityName: "delhi",
  countryName: "INDIA",
  type: "CITY",
  fullRegionName: "TIRURANGADI, KERALA, INDIA"
}
]


export default function Hotelsear() {
  const [guestsModalShow, setGuestsModalShow] = useState(false);
  const [hotelCategoryShow, setHotelCategoryShow] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [ratings, setRatings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalGuestCount, setTotalGuestCount] = useState();
  const [rows, setRows] = useState([
    { id: 1, adults: 1, child: 0, firstChild: '0', secondChild: '0' }
  ]);
  const handleIsClose = () => {
    setIsOpen(false);
  }
  const handleGuestsModal = () => {
    setHotelCategoryShow(false);
    if (guestsModalShow) {
      setGuestsModalShow(false);
    } else {
      setGuestsModalShow(true);
    }
  };


  const initialValues = {
    checkinDate: "",
    checkoutDate: "",
    guest: [{
      adults: 1,
      child: 0,
      childAge: 10,
    }],

    city: "699261",
    nationality: "106",
    currency: "INR",
    ratings: [3, 4, 5],
    fsc: true,
    sync: true
  }
  const [slidervalue, setSliderValue] = useState();
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  }


  const nameForm = useRef(null)
  const [reInitialValues, setReInitialValues] = useState(initialValues);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isRtl, setIsRtl] = useState(false);
  const [checkOut, setCheckOut] = useState();
  const [checkIn, setCheckIn] = useState();
  const [minDate] = useState(new Date());
  const [guest, setGuest] = useState([
    { id: 1, adults: 1, child: 0, firstChild: '', secondChild: '' }
  ]);


  // const validationSchema = Yup.object().shape({
  //   fromCityDestination: Yup.string()
  //     .required("Form city is required"),
  //   toCityDestination: Yup.string()
  //     .required("To city is required")
  // });

  const handleOnSubmit = async (values, { resetForm }) => {
    setGuestsModalShow(false);
    setHotelCategoryShow(false)

  rows.forEach(v => {
        if (v.child > 0) {
          v.childAge = [parseInt(v.firstChild), parseInt(v.secondChild)];
          delete v.firstChild;
          delete v.secondChild;
        }
        delete v.firstChild;
        delete v.secondChild;
      });
      values.guest = rows;
      values.ratings = ratings;
      setReInitialValues(values);
     HotelSearchService.Search(values).then(async (response) => {
      setLoading(true);
      if (response.status === 200) {
        if (response.data.status === true) {
          console.log(response.data.data.Onward)
          setIsOpen(false)

        } else {
          // let errorMessage = response.data.message ? response.data.message : "someting wrong"
          let errorMessage = response.data.message.message;
          console.log("errorMessage",errorMessage);
          setIsOpen(true)
          setErrorMsg(errorMessage);

        }
      } else {
        let errorMessage = response.data.message;
        setIsOpen(true)
        setErrorMsg(errorMessage);
      }
      setLoading(false);
    }).catch((error) => {
      let errorMessage = error.message
      setLoading(false);
      setIsOpen(true)
      setErrorMsg(errorMessage);
    });
    resetForm();
  }




  const handleCheckInDate = (range, setFieldValue) => {
    setCheckIn(range);
    setFieldValue("checkinDate", Moment(range).format('DD-MM-YYYY'));
  }

  const handleCheckOutDate = (range, setFieldValue) => {
    setCheckOut(range);
    setFieldValue("checkoutDate", Moment(range).format('DD-MM-YYYY'));
  }
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#6c5ffc' : 'white', // Set red background for selected option
    }),
  };



  const optionFromValues = cityList.map((item) => ({
    value: item.id,
    label: item.cityName,
    image: flagUrl
  }));

  const handleRows = () => {
    const newRowId = rows.length + 1;
    setRows(prevRows => [
      ...prevRows,
      { id: newRowId,adults: 1, child: 0, firstChild: 0, secondChild:0}
    ]);
  };

  const handleRowRemove = (rowId) => {
    setRows(prevRows => prevRows.filter(row => row.id !== rowId));
  };
  
  const handleGuestChange = (e, rowId, field) => {
    const { value } = e.target;
    setRows(prevRows => {
      const updatedRows = prevRows.map(row => {
        if (row.id === rowId) {
          return { ...row, [field]: parseInt(value) };
        }
        return row;
      });
      const totalGuestCount = calculateTotalGuests(updatedRows);
      setTotalGuestCount(updatedRows.length + "Room" + "" + "-" + totalGuestCount + "" + "Guests");
      return updatedRows;
    });
  };

  const calculateTotalGuests = (rows) => {
    let totalGuests = 0;
    rows.forEach(row => {
      totalGuests += parseInt(row.adults) + parseInt(row.child);
    });
    return totalGuests;

  };

  const getTotalGuests = () => {
    let totalAdults = 0;
    let totalChildren = 0;

    rows.forEach(row => {
      totalAdults += parseInt(row.adults, 10);
      totalChildren += parseInt(row.child, 10);

    });
    return {
      adults: totalAdults,
      children: totalChildren,

    };

  };


  const handleCategoryShow = () => {
    setHotelCategoryShow(!hotelCategoryShow);
    setGuestsModalShow(false)
    // setRatings("Star");
  }

  // const handleRating =(e, setFieldValue, fieldName)=>{
  //   console.log(e, setFieldValue, fieldName);
  //   setRatings(e.target.value);
  //   const arr = [];
  //   arr.push(...values);
  // }



  const handleRating = (e, setFieldValue, ratingValue) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setRatings(prevRatings => {
        const index = prevRatings.findIndex(item => parseInt(item) > parseInt(ratingValue));
        if (index === -1) {
          return [...prevRatings, parseInt(ratingValue)];
        } else {
          return [...prevRatings.slice(0, index), parseInt(ratingValue), ...prevRatings.slice(index)];
        }
      });
    } else {
      setRatings(prevRatings => prevRatings.filter(item => item !== ratingValue));
    }
    // Additional logic if needed
  };


  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <div className="main-content p-0">
        <div className="container-fluid hotel-banner flex-column">
          <h4 className="text-center text-white">
              <i className="fa-solid fa-building"></i> Cheapest Price. Guaranteed!
          </h4>
          <div className="container hotel-box">
            <Formik
              initialValues={reInitialValues}
              // validationSchema={validationSchema}
              onSubmit={handleOnSubmit}
              enableReinitialize={true}
            >
              {({ classes, errors, touched, values, handleChange, setFieldValue }) => (
                <Form ref={nameForm}>
                  <div className="row hotelsear">
                    <div className="col-lg-2 col-md-3">
                      <div className="form-group field-label mb-3">
                        <InputLabel className="">Enter City name</InputLabel>
                        {/* <input className="form-control p-3" type="text" /> */}
                        <Select
                          className='form-control active'
                          // classNamePrefix="select"
                          // defaultValue={optionFromValues[0]}
                          isRtl={isRtl}
                          isSearchable={isSearchable}
                          name="color"
                          options={optionFromValues}
                          formatOptionLabel={(country, { context }) => (
                            <div className="searchdestinationboxclass list d-flex ">
                              <div className='search-text'>
                                <img className="flagimage" src={country.image} /> {country.label}
                              </div>
                            </div>
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 mb-3">
                      <div className="form-group field-label">
                        <InputLabel className="">Check-in</InputLabel>
                        {/* <input className="form-control p-3" type="date" /> */}
                        <DatePicker
                          className="form-control p-3 "
                          selected={checkIn}
                          name='checkIn'
                          dateFormat="dd-MM-yy"
                          //dateFormat="DD/MM/YYYY"
                          //startDate={startDate}
                          minDate={minDate}
                          onChange={(date) => handleCheckInDate(date, setFieldValue)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-3 mb-3">
                      <div className="form-group field-label">
                        <InputLabel className="">Check-out</InputLabel>
                        {/* <input className="form-control p-3" type="date" /> */}
                        <DatePicker
                          className="form-control p-3"
                          name='checkOut'
                          selected={checkOut}
                          dateFormat="dd-MM-yy"
                          minDate={checkOut}
                          onChange={(date) => handleCheckOutDate(date, setFieldValue)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-3 mb-3">
                      <div className="form-group field-label">
                        <InputLabel className="">Rooms & Guests</InputLabel>
                        <input
                          className="form-control p-3"
                          type="text"
                          value={totalGuestCount}
                          name="guestList"
                          // id={guestList}
                          onClick={() => handleGuestsModal()}
                        />
                        {
                          guestsModalShow &&
                          <div className='hotelshow'>
                            <div className='d-flex justify-content-between'>
                              <h6>Guests</h6>
                              <i className='fa fa-times cross' onClick={() => handleGuestsModal()}></i>
                            </div>
                            {rows.map((row, index) => (
                              <div key={row.id} className="row mt-2">
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                  <p className="popup-text"><span className="fs-12">Room - {index + 1}</span></p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                  <span className="fs-12">ADULT</span>
                                  <select className='form-select select-box' name={`adults-${row.id}`} onChange={(e) => handleGuestChange(e, row.id, 'adults')}>
                                    <option value={1}>1 ADULT</option>
                                    <option value={2}>2 ADULT</option>
                                    <option value={3}>3 ADULT</option>
                                    <option value={4}>4 ADULT</option>
                                  </select>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2">
                                  <span className="fs-12">CHILD</span>
                                  <select className='form-select select-box' name={`child-${row.id}`} value={row.child} onChange={(e) => handleGuestChange(e, row.id, 'child')}>
                                    <option value={0}>0 CHILD</option>
                                    <option value={1}>1 CHILD</option>
                                    <option value={2}>2 CHILD</option>
                                  </select>
                                </div>
                                {row.child === "1" && (
                                  <div className="col-lg-2 col-md-2 col-sm-2">
                                    <span className="fs-12">CHILD AGE</span>
                                    <select className='form-select select-box' name={`firstChild-${row.id}`} value={row.firstChild} onChange={(e) => handleGuestChange(e, row.id, 'firstChild')}>
                                      <option value="">0</option>
                                      <option value={1}>1</option>
                                      <option value={2}>2</option>
                                      <option value={3}>3</option>
                                      <option value={4}>4</option>
                                      <option value={5}>5</option>
                                    </select>
                                  </div>
                                )}

                                {row.child === "2" && (
                                  <>
                                    <div className="col-lg-2 col-md-2 col-sm-2 mb-3">
                                      <span className="fs-12">CHILD AGE</span>
                                      <select className='form-select select-box' name={`firstChild-${row.id}`} value={row.firstChild} onChange={(e) => handleGuestChange(e, row.id, 'firstChild')}>
                                        <option value="">0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-2 mb-3">
                                      <span className="fs-12">CHILD AGE</span>
                                      <select className='form-select select-box' name={`secondChild-${row.id}`} value={row.secondChild} onChange={(e) => handleGuestChange(e, row.id, 'secondChild')} >
                                        <option value="">0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                      </select>
                                    </div>
                                  </>
                                )}
                                {index > 0 ?// Conditionally render "-" icon for rows beyond the first one
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                      <div className="bg-danger text-white delete-icon">
                                        <p className="fs-3 " onClick={() => handleRowRemove(row.id)}>
                                            <i class="fa-solid fa-trash de-icon"></i>
                                          </p>
                                      </div>
                                    </div>
                                   :<div className="col-lg-2 col-md-2 col-sm-2">
                                      <div className="add-field-icon bg-danger text-white">
                                        <p className="fs-3" onClick={handleRows}>
                                          <i class="fa-solid fa-plus add-icon"></i>
                                          </p>
                                      </div>
                                    </div>
                                  }
                              </div>
                            ))}
                          </div>
                        }
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 mb-3">
                      <div className="form-group field-label">
                        <InputLabel className="">Hotel Category</InputLabel>
                        <input className="form-control p-3" type="text" value={ratings.length > 0 ? ratings + " , " + "Star" : "Star"} onClick={() => handleCategoryShow()} />
                        {
                          hotelCategoryShow &&
                          <div className='hotelreatting'>
                            <div className='d-flex justify-content-between'>
                              <h6>Star Category</h6>
                              <i className='fa fa-times cross' onClick={() => handleCategoryShow()}></i>

                            </div>
                            <div>
                              <div className="form-check mt-2">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={3} onChange={(e) => handleRating(e, setFieldValue, "3")} />
                                <span className="form-check-label ms-2" for="flexCheckChecked">3 Star</span>
                              </div>
                              <div className="form-check mt-2">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={4} onChange={(e) => handleRating(e, setFieldValue, "4")} />
                                <span className="form-check-label ms-2" for="flexCheckChecked">4 Star</span>
                              </div>
                              <div className="form-check mt-2">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={5} onChange={(e) => handleRating(e, setFieldValue, "5")} />
                                <span className="form-check-label ms-2" for="flexCheckChecked">5 Star</span>
                              </div>
                            </div>
                          </div>
                        }
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-3">
                      <button className="hotel-searbtn">Search</button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white p-1">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="m-0">Home - Delhi,NCR, India Hotels (217)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container hotel-list mt-5">
          <form >
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="card ">
                  <div className="border-top p-3 mt-3 hotelinput">
                    <p className="fw-bold"> Enter Hotel Name, Location</p>
                    {/* <input type="text" placeholder="Enter Keyword"  class="form-control"/> */}
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={colourOptions[0]}
                      isClearable={isClearable}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      name="color"
                      options={colourOptions}
                    />
                  </div>

                  <div className="border-top p-3 mt-1">
                    <label className="fw-bold d-flex">
                      Price Range
                    </label>
                    <div className="mt-2">
                      <input type="text" placeholder="" value="19908 - 266621" class="form-control w-50" />
                    </div>
                    <Box sx={{ width: 250 }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={slidervalue}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        className="priceranngebox mt-2"
                      />
                    </Box>
                  </div>
                  <div className="border-top p-3 mt-2">
                    <label className="fw-bold d-flex">
                      Star Rating
                    </label>
                    <div class="form-check mt-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ms-2"
                        for="flexCheckChecked"
                      >
                        2 Star
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ms-2"
                        for="flexCheckChecked"
                      >
                        3 Star
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ms-2"
                        for="flexCheckChecked"
                      >
                        4 Star
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ms-2 "
                        for="flexCheckChecked"
                      >
                        5 Star
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12">
              <div className="card hotelcard">
                  <div className="row">
                    <div className="col-lg-3 col-md-12">
                      <div className="cardhoteimg">
                         <div className="Hotel-box">
                           Hotel
                         </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 ptmain">
                      <h5 className="hheading plt">Radition Blue</h5>
                      <span className="gap-2 plt hotelstar" >
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2 plt">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2 plt">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-3 hote-price col-md-4 d-flex justify-content-center align-items-end flex-column">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger mbb w-100">
                            View Room
                          </button>
                        </Link>
                      
                    </div>
                  </div>
                </div>
               
                <div className="card hotelcard">
                  <div className="row">
                    <div className="col-lg-3 col-md-12">
                      <div className="cardhoteimg">
                         <div className="Hotel-box">
                           Hotel
                         </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 ptmain">
                      <h5 className="hheading plt">Radition Blue</h5>
                      <span className="gap-2 plt hotelstar" >
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2 plt">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2 plt">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-3 hote-price col-md-4 d-flex justify-content-center align-items-end flex-column">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger mbb w-100">
                            View Room
                          </button>
                        </Link>
                      
                    </div>
                  </div>
                </div>

                <div className="card hotelcard">
                  <div className="row">
                    <div className="col-lg-3 col-md-12">
                      <div className="cardhoteimg">
                         <div className="Hotel-box">
                           Hotel
                         </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 ptmain">
                      <h5 className="hheading plt">Radition Blue</h5>
                      <span className="gap-2 plt hotelstar" >
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2 plt">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2 plt">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-3 hote-price col-md-4 d-flex justify-content-center align-items-end flex-column">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger mbb w-100">
                            View Room
                          </button>
                        </Link>
                      
                    </div>
                  </div>
                </div>

                <div className="card hotelcard">
                  <div className="row">
                    <div className="col-lg-3 col-md-12">
                      <div className="cardhoteimg">
                         <div className="Hotel-box">
                           Hotel
                         </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 ptmain">
                      <h5 className="hheading plt">Radition Blue</h5>
                      <span className="gap-2 plt hotelstar" >
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2 plt">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2 plt">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-3 hote-price col-md-4 d-flex justify-content-center align-items-end flex-column">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger mbb w-100">
                            View Room
                          </button>
                        </Link>
                      
                    </div>
                  </div>
                </div>


                <div className="card hotelcard">
                  <div className="row">
                    <div className="col-lg-3 col-md-12">
                      <div className="cardhoteimg">
                         <div className="Hotel-box">
                           Hotel
                         </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 ptmain">
                      <h5 className="hheading plt">Radition Blue</h5>
                      <span className="gap-2 plt hotelstar" >
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2 plt">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2 plt">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-3 hote-price col-md-4 d-flex justify-content-center align-items-end flex-column">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger mbb w-100">
                            View Room
                          </button>
                        </Link>
                      
                    </div>
                  </div>
                </div>


                <div className="card hotelcard">
                  <div className="row">
                    <div className="col-lg-3 col-md-12">
                      <div className="cardhoteimg">
                         <div className="Hotel-box">
                           Hotel
                         </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 ptmain">
                      <h5 className="hheading plt">Radition Blue</h5>
                      <span className="gap-2 plt hotelstar" >
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2 plt">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2 plt">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-3 hote-price col-md-4 d-flex justify-content-center align-items-end flex-column">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger mbb w-100">
                            View Room
                          </button>
                        </Link>
                      
                    </div>
                  </div>
                </div>


                <div className="card hotelcard">
                  <div className="row">
                    <div className="col-lg-3 col-md-12">
                      <div className="cardhoteimg">
                         <div className="Hotel-box">
                           Hotel
                         </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 ptmain">
                      <h5 className="hheading plt">Radition Blue</h5>
                      <span className="gap-2 plt hotelstar" >
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <p className="hsubheading mt-2 plt">
                        <i class="fa-solid fa-location-dot"></i> radition squire
                        tasks front main road
                      </p>
                      <div className="gap-2 plt">
                        <div className="service-box">
                          <i class="fa-solid fa-user"></i> 24 hours front desk
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-star-of-life"></i> AC
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-bath"></i> Bathroom
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-mug-saucer"></i> Breakfast
                        </div>
                        <div className="service-box">
                          <i class="fa-solid fa-utensils"></i> Breakfast Buffet
                        </div>
                        <div className="service-box">Internet Access</div>
                      </div>
                    </div>
                    <div className="col-lg-3 hote-price col-md-4 d-flex justify-content-center align-items-end flex-column">
                      <h4 className="priceheading fw-bold">
                        <i class="fa-solid fa-indian-rupee-sign"></i>1536
                      </h4>
                      <p className="pricesubheading">Star frorm</p>
                      <Link to={"/agent/hotelbooking/hoteldetails"}>
                          <button type="button" className="btn btn-danger mbb w-100">
                            View Room
                          </button>
                        </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

        </div>
        <Modal size="sm" show={isOpen} onHide={handleIsClose} centered>
          <div className='modal-content'>
            <div className="errmodal-header text-center">
              <h2 className="errmodal-title w-100 fw-bold text-danger">Sorry!</h2>
            </div>
            <div className="modal-body">
              <p className="text-center">{errorMsg && errorMsg}</p>
            </div>
            <div className='errmodal-footer text-center'>
              <button className="btn btn-danger btn-block w-25 mb-3" onClick={handleIsClose}>OK</button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

import React, { useState, useEffect, useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Layout from '../../../Component/Layout/Agent/AgentLayout'
import Indigo from '../../../assets/images/indigo.png';
import { FlightSearchService } from "../../../Services/Agent/FlightSearch.Service";
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Sucssesloder from '../../../Component/Loder/Sucssesloder';
import { Form, Formik } from "formik";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { Alert, Box, Grid, InputLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import toast from 'react-hot-toast';
import axios from "axios";
import MyEmail from "../Ticket-Pdf/EmailTicket/EmailTicket.jsx";
import { renderToStaticMarkup } from "react-dom/server";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import { renderEmail } from 'react-html-email';


const ENTER_KEY = 13;
const COMMA_KEY = 188;
const BACKSPACE_KEY = 8;
// import 'react-multi-email/style.css';
export default function BookingSuccess() {

  const userData = JSON.parse(localStorage.getItem('userData'));
  const [openModal, setOpenModal] = useState(false)

  const [ticketDetails, setTicketDetails] = useState();
  const [listOfFlight, setListOfFlight] = useState([]);
  const [layover, setLayover] = useState([]);
  const { bookingId } = useParams();
  const [fareRule, setFareRule] = useState(false);
  const [fareDetails, setFareDetails] = useState();
  const [fareDetailsId, setFareDetailsId] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [details, setDetails] = useState([]);

  let currency = userData?.data?.currency;
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [flightName, setFlightName] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [seatList, setSeatList] = useState([]);
  const [error, setError] = useState("");
  const [ticketErrorMsg, setTicketErrorMsg] = useState("");
  const nameForm = useRef(null)
  const emailId = userData.data.email;
  const [tags, setTags] = useState([emailId]);
  const [value, setValue] = useState("");

  const [bookingStatus, setBookingStatus] = useState("");
  const [withPrice, setWithPrice] = useState(false);
  const [withGST, setWithGST] = useState(false);
  const [oldPrintCopy, setOldPrintCopy] = useState(false);
  const initialValues = {
    withPrice: false,
    withAgency: false,
    withGST: false,
    oldPrintCopy: false,
  }

  useEffect(() => {
    fetchBookingDeatils();
  }, [])

  const [reInitialValues, setReInitialValues] = useState(initialValues);

  const fetchBookingDeatils = async () => {
    let bookingData = {
      "bookingId": bookingId && bookingId,
      "passengerPricing": true
    }
    FlightSearchService.getTicketDetails(bookingData)
      .then(async (response) => {
        if (response.data.status) {
          setIsLoading(false);
          localStorage.removeItem("bookingStatus");
          const result = response.data.data;
          handleMeal(result);
          handleSeat(result);
          setTicketDetails(result);
          setListOfFlight(result.listOfFlight);
          setBookingStatus(result.bookingDetails.status);
          setLayover(result.layover);
          setFareDetailsId(result.bookingDetails.fareRuleId);
          setFareDetails(result.fareDetail);
          handleBookingdata(result);

          handleChangeBookingStatus(result.travellerInfos.pnrDetails, result.bookingDetails.status);
        } else {
          let errorMsg = response.data.message?.message;
          setTicketErrorMsg(errorMsg);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000)
        }
      })
      .catch((error) => {
        setError(error);
      });

  }

  const handleBookingdata = (result) => {
    if (result.travellerInfos && result.travellerInfos.pnrDetails) {
      let data = result.travellerInfos.pnrDetails;
      let pnrlist = "";
      var details = Object.entries(data);
      for (let i = 0; i < details.length; i++) {
        pnrlist += details[i][0] + "-" + details[i][1] + ",";
      }
      setDetails(pnrlist.split(","));

    }
  }
  const handleSeat = (result) => {
    let seatlist = result.travellerInfos.ssrSeatInfos;
    const list = Object.keys(seatlist);
    setFlightName(list);
    let seatDetails = [];
    list.forEach(_k => {
      let seatlistDetails = seatlist[_k].code;
      seatDetails.push(seatlistDetails,);
    });
    setSeatList(seatDetails);
    console.log(seatDetails)
  }

  const handleMeal = (result) => {

    let datalist = result.travellerInfos.ssrMealInfos;

    const list = Object.keys(datalist);

    setFlightName(list);
    let mealsList = [];
    list.forEach(_k => {
      let flightDetails = datalist[_k].desc;
      mealsList.push(flightDetails);
    });
    setMealList(mealsList);

  }



  const [rulesError, setRulesError] = useState("");
  const fetchFareDetailsData = async () => {
    let bookingData = {
      "id": fareDetailsId,
      "flowType": "SEARCH"
    }

    FlightSearchService.SearchRule(bookingData).then(async (response) => {
      if (response.data.status) {
        const result = response.data.data;
        console.log(result)
      } else {
        // let error = response.data.message.message ? response.data.message.message : "record not found"
        setRulesError("Record Not Found")
      }
    }).catch((error) => {
      setError(error)
    });
  }


  const OpenFareRules = () => {
    setFareRule(!fareRule);
    fetchFareDetailsData();
 }

  const dowanloadModalClose = () => {
    setIsOpen(false);
  }

  const dowanloadModalOpen = (action) => {
    setIsOpen(true);
    setAction(action);

  };

  const handleprintTicket = () => {
    navigate(`/agent/ticketpdf/${bookingId}`)

  }

  const handleOnSubmit = async (values, { resetForm }) => {
    // setReInitialValues(values);
    const dataString = JSON.stringify(values);
    localStorage.setItem('print', dataString);
    switch (action) {
      case "DownloadPDF":
        navigate(`/agent/ticketpdf/${bookingId}`)
        break;
      case "PrintTicket":
        navigate(`/agent/ticketpdf/${bookingId}`)

        break;
      case "EmailTicket":
        // Logic for emailing ticket
        break;
      case "SMSTicket":
        // Logic for sending ticket via SMS
        break;
      default:

    }


    setTimeout(() => {
      // Navigate("/agent/ticketpdf")

      setIsOpen(false)
    }, 200);

  }
  const [response, setResponse] = useState("");

  const handleChangeBookingStatus = (pnrDetails, lateststatus) => {
    const data = {
      bookingId: bookingId,
      status: lateststatus === "PENDING" ? "" : "1",
      pnr: pnrDetails
    }
    FlightSearchService.ChangeBookingStatus(data).then(async (response) => {
      if (response.data.status === true) {
        const result = response.data.data;
        setResponse(result);
      }
      else {
        toast.error('Something went wrong');
      }
    }).catch((e) => {
      setError(e);

    });
  }

  const sendEmailTicket = () => {
    handleOpen();
  }


  const handleClose = () => {
    setOpenModal(false);

  }
  const handleOpen = () => {
    setOpenModal(true)
  }
  const handleModalSubmit = () => {
    const pdfContent = renderToStaticMarkup(
      <MyEmail ticketDetails={ticketDetails} listOfFlight={listOfFlight} userData={userData} currency={currency} bookingId={bookingId} />
    );

    const data = {
      id: bookingId,
      email: tags,
      subject: "hello",
      mailbody: pdfContent,
      data:"ewptert",
      attachments: [
        {
          filename: "ticket_details.pdf",
          content: pdfContent,
          contentType: "application/pdf"
        }
      ]
    }
    FlightSearchService.SendTicketEmail(data).then(async (response) => {
      if (response.data.status) {
        setOpenModal();

        this.resetForm()
      } else if (response.data.msg === 'fail') {
        alert('Oops, something went wrong. Try again')
        setOpenModal();
      }
    }).catch((error) => {
      setError(error)

    });

  }



  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyUp = (e) => {
    const key = e.keyCode;
    if (key === ENTER_KEY || key === COMMA_KEY) {
      addTag();
    }
  };

  const handleKeyDown = (e) => {
    const key = e.keyCode;
    if (key === BACKSPACE_KEY && !value) {
      editPrevTag();
    }
  };

  const addTag = () => {
    let tag = value.trim();
    tag = tag.replace(/,/g, "");

    if (!tag) {
      return;
    }

    setTags([...tags, tag]);
    setValue("");
  };

  const editPrevTag = () => {
    const tag = tags.pop();
    setTags([...tags]);
    setValue(tag);
  };
  const handleEmailChange = (event) => {
    const { name, checked } = event.target;
    // Update state based on checkbox name
    switch (name) {
      case 'withPrice':
        setWithPrice(checked);
        break;
      case 'withGST':
        setWithGST(checked);
        break;
      case 'oldPrintCopy':
        setOldPrintCopy(checked);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Layout />

      <div className={ticketErrorMsg ? "main-content app-content d-flex justify-content-center align-items-center" : "main-content app-content"} >
        {isLoading === true ? <div className='loader'> <Sucssesloder headers={"Booking Details"} /></div> : (isLoading === false && ticketErrorMsg) ? <div className="container"><h5 className='text-center text-danger'>{ticketErrorMsg && ticketErrorMsg}</h5></div> :
          (
            <>
              <div className="container-fluid">
                <div className="page-header">

                  <div className='mt-4'>
                    <h4 className='text-success'>Booking {bookingStatus ? bookingStatus : ""}</h4>
                    <p>Booking ID :{bookingId && bookingId}</p>
                  </div>
                  <div>
                    <button type="button" className="btn btn-primary-ghost dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">More Option</button>
                    <ul className="dropdown-menu">
                      {/* <li > <button onClick={downloadData} className='dropdown-item'> <i className="fa-solid fa-download" ></i> Download Ticket</button></li> */}
                      <li ><Link className="dropdown-item" to={`/agent/ticketpdf/${bookingId}`} target="_blank" ><i className="fa-solid fa-download"></i> Download as PDF</Link></li>
                      <li><Link className="dropdown-item" to={`/agent/ticketpdf/${bookingId}`} target="_blank"><i className="fa-solid fa-print"></i> Print Ticket</Link></li>
                      <li><a className="dropdown-item" href="#" onClick={sendEmailTicket} ><i className="fa-solid fa-envelope"></i> Email Ticket</a></li>
                      <li><a className="dropdown-item" href="#" onClick={() => dowanloadModalOpen("SMSTicket")}><i className="fa-regular fa-envelope"></i> SMS Ticket</a></li>
                      <li><Link className="dropdown-item" to={`/agent/invoice/${bookingId}`} ><i className="fa-solid fa-file-invoice"></i> Invoice For Agency</Link></li>
                      <li><Link className="dropdown-item" to={`/agent/manage-carts/cart-detail/${bookingId}`} target="_blank" ><i className="fa-solid fa-file-invoice"></i> Invoice For Customer</Link></li>
                      <li><Link className="dropdown-item" to={`/agent/manage-carts/cart-detail/${bookingId}`} target="_blank" ><i className="fa-solid fa-cart-shopping"></i> Go to Cart Details</Link></li>
                    </ul>

                  </div>
                </div>
                <hr></hr>

                <div className='flight-item-list card'>
                  <div className="card-header">
                    <div className='row'>
                      <div className='col-6'>

                        {listOfFlight && listOfFlight.length > 0 && listOfFlight[0].flightDetails && // Check if listOfFlight is defined and not empty, and if flightDetails exists
                          <p className='flightname mb-0'>
                            {listOfFlight[0].flightDetails.departureAirportInformation.city} <i className="fa-solid fa-arrow-right-long"></i> {listOfFlight[listOfFlight.length - 1].flightDetails.arrivalAirportInformation.city} <span className='flightnumber'>On {moment(listOfFlight[0].flightDetails.departureDate, 'YYYY-MM-DD').format('ddd, MMM DD YYYY')}</span>
                          </p>
                        }
                      </div>
                      {layover && layover.length !== 0 &&
                        <div className='col-6'>
                          <p className='float-end fs-12 fw-bold'><i className="fa-solid fa-clock me-2"></i>  {layover[0].totalTravellTime}</p>
                        </div>
                      }
                    </div>
                  </div>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-12'>
                        {listOfFlight && listOfFlight.map((flightValue, flightKey) => (
                          <div className='row' key={flightValue.flightDetails?.flightId}>
                            <div className='col-sm-2'>
                              <div className='d-flex'>
                                <img className='flight-flag' src={flightValue.flightDetails?.flightLogo} alt='' />
                                <div className=''>
                                  <div className="flightname">{flightValue.flightDetails?.flightDescription.name}</div>
                                  <div className="flightnumber">{`${flightValue.flightDetails?.flightCode}-${flightValue.flightDetails?.flightNumber}`}</div>
                                </div>
                              </div>
                            </div>

                            <div className='col-10 d-flex'>
                              <div className="text-center" style={{ width: "50%" }}>
                                <div className="coltime">{flightValue.flightDetails?.departureTime}</div>
                                <div className="graysmalltext">{flightValue.flightDetails?.departureAirportInformation?.code}</div>
                                <div className="graysmalltext">{flightValue.flightDetails?.departureAirportInformation?.terminal}</div>
                              </div>

                              <div className="text-center" style={{ width: "50%" }}>
                                <div className="nostops small">{flightValue.flightDetails.flightDuration}</div>
                                <div className="graysmalltext text-danger">{flightValue.flightDetails.flightStops ? flightValue.flightDetails.flightStops : 'Non Stop'}</div>
                              </div>

                              <div className="text-center" style={{ width: "50%" }}>
                                <div className="coltime">{flightValue.flightDetails?.arrivalTime}</div>
                                <div className="graysmalltext">{flightValue.flightDetails.arrivalAirportInformation.code}</div>
                                <div className="graysmalltext">{flightValue.flightDetails.arrivalAirportInformation.terminal}</div>
                              </div>
                            </div>

                            <div>
                              <h6>Baggage Information</h6>
                              <h6>Adult - <span className='graysmalltext'>Check-in: {flightValue?.passengerSSRDetails?.baggageInformation.iB}, Cabin: {flightValue.passengerSSRDetails.baggageInformation.cB}
                                {/* <Link to="/web-checkin">Click Here</Link> to Web Check-in */}
                              </span></h6>
                            </div>

                            {listOfFlight && listOfFlight.length > 1 && flightKey < listOfFlight.length - 1 &&
                              <div className='re-layover mb-3' style={{ backgroundColor: "#e1dff7", padding: "4px 0", fontSize: "13px", borderRadius: "15px", marginTop: "8px" }}>
                                {parseInt(layover[flightKey].layover) < 2 ? <p className='text-center mb-0'>Layover {layover[flightKey].layover}</p> : <p className='text-center mb-0'>Require to change Plane {layover[flightKey].layover}</p>}
                              </div>
                            }
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <button className='btn btn-info-ghost btn-wave waves-effect waves-light mt-4' style={{ marginLeft: "10px" }} onClick={OpenFareRules}>{fareRule === true ? "Fare Rules" + "" + "-" : "Fare Rules" + "" + "+"}</button>

                {fareRule === true &&
                  <div className='card mt-4'>
                    <div class="card-body">
                      <p><button className='btn btn-info-ghost btn-wave waves-effect waves-light'>Detailed Rules</button></p>
                      {listOfFlight && listOfFlight.length > 0 && listOfFlight[0].flightDetails && // Check if listOfFlight is defined and not empty, and if flightDetails exists
                        <p><button className='btn btn-info-ghost btn-wave waves-effect waves-light'>

                          {listOfFlight[0].flightDetails.departureAirportInformation.city} - {listOfFlight[listOfFlight.length - 1].flightDetails.arrivalAirportInformation.city} <span className='flightnumber'></span>
                        </button></p>
                      }

                      <p className='text-danger'>Mentioned fees are Per Pax Per Sector</p>
                      <p className='text-danger'>Apart from airline charges, GST + RAF + applicable charges if any, will be charged. </p>

                      {rulesError ? rulesError : <div className="table-responsive mt-5">
                        <table className="table text-nowrap w-100">
                          <thead>
                            <tr>
                              <th>Type</th>
                              <th>Cancellation Fee</th>
                              <th>Date Change Fee</th>
                              <th>No Show</th>
                              <th>Seat Chargeable</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>All</td>
                              <td>
                                <p>3,000 +</p>
                                <p>Cancellation permitted 25 Hrs before scheduled departure</p>
                                <p>Cancellation Penalty : INR 3,000/- or basic fare whichever is lower </p>
                              </td>
                              <td>
                                <p>3,000 +</p>
                                <p>Cancellation permitted 25 Hrs before scheduled departure</p>
                                <p>Cancellation Penalty : INR 3,000/- or basic fare whichever is lower + Fare Difference </p>
                              </td>
                              <td>
                                <p>Fees As Per Airline Rule + Surcharges</p>
                              </td>
                              <td> As Per Airline</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>}

                    </div>
                  </div>}


                <div className='card mt-5'>
                  <div class="card-body">
                    <div className='row'>
                      <div className='col-6'>
                        <div className="card-title">
                          <h5 className='fw-bold'>Passenger Details</h5>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive mt-5">
                      <table className="table text-nowrap w-100">
                        <thead>
                          <tr>
                            <th>Sr.</th>
                            <th>Print</th>
                            <th>Name,DOB & Passport & FF</th>
                            <th>PNR, Ticket No. & Status</th>
                            <th>Meal, Baggage, Seat & Other Preference</th>
                            <th>Document Id</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td><i className="fa-solid fa-print" onClick={handleprintTicket}></i></td>
                            <td className='fw-bold'>{ticketDetails && ticketDetails.travellerInfos.title},{ticketDetails && ticketDetails.travellerInfos.firstName}{ticketDetails && ticketDetails.travellerInfos.lastName}</td>
                            <td className='fw-bold'>
                              <td>{details && details.map((item, index) => (
                                <div key={index}>{item}</div>
                              ))}</td>
                            </td>
                            <td className='fw-bold'>
                              <tr>
                                {mealList && mealList.map((meal, index) => (

                                  <ul key={index} className="graysmalltext">{meal}</ul>
                                ))}
                                {seatList && seatList.map((meal, index) => (
                                  <span key={index}>{meal}</span>
                                ))}
                              </tr>

                            </td>

                            <td className='fw-bold'>NA</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className='card mt-4 w-50'>
                  <div class="card-body ">
                    <h5 className='fw-bold'>Fare Summary</h5>
                    <hr></hr>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Base fare</h6>
                      </div>
                      <div className='col-6 '>
                        <p className='float-end'>{currency} <span style={{ marginLeft: "10px" }}>{fareDetails && fareDetails.baseFare}</span></p>
                      </div>
                      <hr></hr>
                    </div>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Taxes and fees</h6>
                      </div>
                      <div className='col-6 '>
                        <p className='float-end'>{currency} <span style={{ marginLeft: "10px" }}>{fareDetails && fareDetails.texes}</span></p>
                      </div>
                      <hr></hr>
                    </div>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Meal, Baggage & Seat</h6>
                      </div>
                      <div className='col-6 '>
                        <p className='float-end'>{currency} <span style={{ marginLeft: "10px" }}>{fareDetails && fareDetails.SSRP}</span> </p>
                      </div>
                      <hr></hr>
                    </div>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Total</h6>
                      </div>
                      <div className='col-6 '>
                        <p className='float-end'>{currency} <span style={{ marginLeft: "10px" }}>{fareDetails && fareDetails.totalFare}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card mt-4'>
                  <div class="card-body ">
                    <div>
                      <h4>Important Information</h4>
                      <div className='mt-4'>
                        <p>- You should carry a print-out of your booking and present for check-in.</p>
                        <p>- Date & Time is calculated based on the local time of city/destination.</p>
                        <p>- Use the Reference Number for all Correspondence with us.</p>
                        <p>- Use the Airline PNR for all Correspondence directly with the Airline</p>
                        <p>- For departure terminal please check with airline first.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </>
          )}

        {/* /// dowanload pdf Modal  */}

        <Modal size="md" show={isOpen} onHide={dowanloadModalClose} centered>
          <Formik
            initialValues={reInitialValues}
            onSubmit={handleOnSubmit}
            enableReinitialize={true}
          >
            {({ classes, errors, touched, values, handleChange, setFieldValue, handleSubmit }) => (
              <Form ref={nameForm}>
                <div className='container'>
                  <div className=''>
                    <div className="errmodal-header text-center">
                      <h2 className="errmodal-title w-100 fw-bold">Download PDF</h2>

                      <FormControlLabel
                        control={<Checkbox checked={values.withPrice} onChange={handleChange} name="withPrice" />}
                        label="With Price"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={values.withAgency} onChange={handleChange} name="withAgency" />}
                        label="With Agency"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={values.withGST} onChange={handleChange} name="withGST" />}
                        label="With GST"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={values.oldPrintCopy} onChange={handleChange} name="oldPrintCopy" />}
                        label="Old Print Copy"
                      />

                    </div>

                    <div className='errmodal-footer text-center'>
                      <button type="submit" className="btn text-center btn-success print-ticket">OK</button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

        </Modal>
        <Modal size="md" show={openModal} onHide={handleClose} centered>

          <Modal.Header closeButton>
          </Modal.Header><Modal.Body>
            <div className="row">
              <p>Enter Email.</p>
              <div className="form">
                <div className="tags">
                  <ul>
                    {tags.map((tag, i) => (
                      <li key={tag + i} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <input style={{ outline: 'none' }}
                    type="text"
                    placeholder={emailId}
                    value={value}
                    onChange={handleChange}
                    className="tag-input border-0  border-bottom w-100 mb-3  intemailtk"
                    onKeyUp={handleKeyUp}
                    onKeyDown={handleKeyDown}
                  />
                </div>

              </div>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <FormControlLabel
                    control={<Checkbox checked={withPrice} onChange={handleEmailChange} name="withPrice" />}
                    label="With Price"
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <FormControlLabel
                    control={<Checkbox checked={withGST} onChange={handleEmailChange} name="withGST" />}
                    label="With GST"
                  />
                </div>
                <div className='col-12'>
                  <FormControlLabel
                    control={<Checkbox checked={oldPrintCopy} onChange={handleEmailChange} name="oldPrintCopy" />}
                    label="Old Print Copy"
                  />
                </div>

              </div>

            </div>


          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-center'>
            <button type="button" class="btn btn-warning" onClick={handleModalSubmit}>
              Submit
            </button>
          </Modal.Footer>
        </Modal>
      </div>

    </>
  )
}

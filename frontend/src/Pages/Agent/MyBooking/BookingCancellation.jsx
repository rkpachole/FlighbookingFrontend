import React,{useEffect,useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Logo from "../../../assets/images/indigo.png"
import Moment from 'moment';
function BookingCancellation({cancelShowModal,handleCancelSubmit,bookingId,listOfFlight}) {

const[cancellData,setCancellData]= useState("");
const [selectedFlights, setSelectedFlights] = useState([]);
const handleSelectedBox =(flightValue)=>{
const isSelected = selectedFlights.includes(flightValue);
const updatedFlights = isSelected
  ? selectedFlights.filter(flight => flight !== flightValue)
  : [...selectedFlights, flightValue];
  
setSelectedFlights(updatedFlights);

}
  return (
    <div>
       <Modal size="xl" show={cancelShowModal}  onHide={handleCancelSubmit} centered>
          <Modal.Header   closeButton>
            <Modal.Title>AMENDMENT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row">
            <div class="col-xl-12">
              <div className="card">
                <div class="card-body">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                      <p>
                        Type : <span className="fw-bold">CANCELLATION</span>
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                      <p>
                          Booking ID : <span className="fw-bold">{ bookingId && bookingId}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-xl-12">
            {listOfFlight && listOfFlight.map((flightValue, flightKey) => (  
              <div className="card"  key={flightKey}>
                <div class="card-body">
                  <div className="d-flex">
                    <p className="fw-bold me-2">{flightValue?.flightDetails?.departureAirportInformation?.city}</p>
                    <span className="me-2"><i className="fa-solid fa-arrow-right"></i></span>
                    <p className="fw-bold">{flightValue?.flightDetails?.arrivalAirportInformation?.city}<span className='flightnumber'>On {Moment(flightValue?.departureDate).format('ddd, MMM DD YYYY')}</span></p>
                  </div>
              
                  <div className="card p-3">
                    <div className="row" >
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="d-flex">
                                <img style={{width: "40px", marginRight : "5px"}} src={flightValue.flightDetails?.flightLogo} />
                                <div className="">
                                    <h6>{flightValue.flightDetails?.flightDescription.name}</h6>
                                    <span>{`${flightValue.flightDetails?.flightCode}-${flightValue.flightDetails?.flightNumber}`}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <div className="text-center">
                            <h6>{flightValue?.flightDetails?.departureAirportInformation?.name}- {flightValue?.flightDetails?.departureAirportInformation?.code}</h6>
                            <h6 >{flightValue?.flightDetails?.departureTime}</h6>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <h6 className="text-center mt-3">{flightValue?.flightDetails?.flightStops?flightValue?.flightDetails?.flightStops:"Non Stop"}</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <div className="text-center">
                            <h6>{flightValue?.flightDetails?.arrivalAirportInformation?.name}- {flightValue?.flightDetails?.arrivalAirportInformation?.code}</h6>
                            <h6 >{flightValue?.flightDetails?.arrivalTime}</h6>
                          </div>
                        </div>
                    </div>
                    
                  </div>
                  
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card p-3">
                            <div class="form-check mx-auto">
                                <input class="form-check-input" type="checkbox" value=""
                                id={`flight-${flightKey}`}
                                 checked={selectedFlights.includes(flightValue)}
                                 onChange={()=>handleSelectedBox(flightValue)}/>
                                
                                <label class="form-check-label" htmlFor={`flight-${flightKey}`}>
                                 {flightValue?.passengerSSRDetails?.title}.<span style={{marginLeft:"10px"}}>{flightValue?.passengerSSRDetails?.firstName} {flightValue?.passengerSSRDetails?.lastName} </span>
                                </label>
                            </div>
                        </div>
                    </div>
                   
                  </div>
                </div>
             
              </div>
            ))}
              
                  <h6 className="text-danger fw-bold"> Disclaimer</h6>
                  <ul className="text-danger">
                    <li>
                        Due to the unforeseen Corona Virus Outbreak, we are experiencing high volumes of amendments and long waits. Kindly co-operate for any delay in processing.
                    </li>
                    <li>
                      For faster processing and immediate closures please call the airline directly and get the refunds processed.
                    </li>
                  </ul>
                  <h6 className="text-danger fw-bold">Indigo Normal Cancellation:</h6>
                    <ul className="text-danger">
                      <li>
                          Cancel through Portal for Auto-Refund.
                      </li>
                      <li>
                        If Mix Airline Bookings raise amendment for Indigo separately for Auto-Refund.
                      </li>
                    </ul>
                </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" >
                Submit
                {/* onClick={()=>handleCancelSubmit(selectedFlights)} */}
            </Button>
            
          </Modal.Footer>
        </Modal>
      
      
      
    </div>
  )
}

export default BookingCancellation

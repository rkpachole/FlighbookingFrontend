import React, { useState, useEffect } from "react";
import logo from "../../../../assets/images/indigo.png";
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { FlightSearchService } from "../../../../Services/Agent/FlightSearch.Service";
export default function EmailTicket( {ticketDetails,listOfFlight,currency,userData,bookingId}) {

 

  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 2, padding: "10px" }}>
            <h5 style={{ fontWeight: "bold", textAlign: 'center' }}>Logo</h5>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <h6 style={{ fontWeight: "bold" }}>Sirmedia Technologies</h6>
            <h6>
              <span style={{ fontWeight: "bold" }}>Contact :</span>{userData.data.mobileNumber}
            </h6>
            <h6>
              <span style={{ fontWeight: "bold" }}>Address :</span>{userData.data.address}
            </h6>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <h6 style={{ fontWeight: "bold" }}>Booking ID</h6>
            <h6> {bookingId && bookingId}</h6>
            <h6 style={{ fontWeight: "bold" }}>Booking Date</h6>
            <h6>{moment(ticketDetails?.bookingDetails?.bookingDate).format('MMM D, YYYY h:mm A')}</h6>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#dfdfdf",
          }}
        >
          <div style={{ flex: 1, padding: "0px" }}>
            <div style={{ display: "flex", marginTop: "5px", marginLeft: "10px" }}>
              <h6 style={{ marginRight: "10px" }}> {listOfFlight && listOfFlight[0]?.flightDetails?.departureAirportInformation?.city}</h6>
              <h6 style={{ marginRight: "10px" }}>-</h6>
              <h6 style={{ marginRight: "10px" }}>{listOfFlight && listOfFlight[listOfFlight.length - 1]?.flightDetails?.arrivalAirportInformation?.city}</h6>
              <h6> {moment(listOfFlight && listOfFlight[0]?.flightDetails?.departureDate, 'YYYY-MM-DD').format('ddd, MMM DD YYYY')}</h6>
            </div>
          </div>
        </div>
        {listOfFlight && listOfFlight.map((flightValue, flightKey) => (
          <div>
            <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
              <div style={{ flex: 1, padding: "10px" }}>
                <div style={{ display: "flex" }}>
                  <img src={flightValue.flightDetails?.flightLogo} style={{ width: "80px", height: "70px", marginTop:"10px" }} />
                  <div style={{ marginLeft: "20px" }}>
                    <h6 style={{marginTop:"10px"}}>{flightValue.flightDetails?.flightDescription.name}</h6>
                    <p>{`${flightValue.flightDetails?.flightCode}-${flightValue.flightDetails?.flightNumber}`}</p>
                  </div>
                </div>
              </div>
              <div style={{ flex: 3, padding: "10px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flex: 2, padding: "10px" }}>
                    <h6>{flightValue.flightDetails?.departureTime}</h6>
                    <p style={{ marginTop: "-8px" }}>{flightValue.flightDetails?.departureAirportInformation?.name}</p>
                    <p style={{ marginTop: "-15px" }}>{flightValue.flightDetails?.departureAirportInformation?.terminal}</p>
                  </div>
                  <div style={{ flex: 1, padding: "10px" }}>
                    {/* <h6 style={{ marginTop: "25px" }}>
                      <span>{flightValue.flightDetails.flightStops}</span> (stops)
                    </h6> */}
                  </div>
                  <div style={{ flex: 2, padding: "10px" }}>
                    <h6>{flightValue.flightDetails?.arrivalTime}</h6>
                    <p style={{ marginTop: "-8px" }}>{flightValue.flightDetails?.arrivalAirportInformation?.name}</p>
                    <p style={{ marginTop: "-15px" }}>{flightValue.flightDetails?.arrivalAirportInformation?.terminal}</p>
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, padding: "10px" }}>
                <div style={{ marginTop: "20px" }} >
                  <h6>{flightValue.flightDetails.flightDuration}</h6>
                  <p style={{ marginTop: "-8px" }}> {flightValue?.passengerSSRDetails?.cabinClass}</p>
                </div>
              </div>
            </div>
            {listOfFlight.length > 1 && (flightKey < listOfFlight.length - 1) &&
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ backgroundColor: "#dfdfdf", padding: "2px", margin: "auto", width: '100%', textAlign: 'center' }}>
                  <h6> Layover Time {ticketDetails?.layover[flightKey].layover}</h6>
                </div>
              </div>
            }
          </div>
        ))}
        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#dfdfdf", }} >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", marginTop: "5px" }}>
              <h6 style={{ marginLeft: "10px" }}>Passenger Details (1)</h6>
            </div>
          </div>
        </div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead style={{ borderBottom: '1px solid #dddddd' }}>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ textAlign: 'center', padding: '8px' }}>Name</th>
              <th style={{ textAlign: 'center', padding: '8px' }}>Sector</th>
              <th style={{ textAlign: 'center', padding: '8px' }}>PNR & Ticket No.</th>
            </tr>
          </thead>
          <tbody style={{ borderBottom: '1px solid #dddddd' }}>
            <tr style={{}}>
              <td style={{ textAlign: 'center', padding: '8px' }}>{ticketDetails?.travellerInfos?.title} {ticketDetails?.travellerInfos?.firstName} {ticketDetails?.travellerInfos?.lastName}</td>
              <td style={{ textAlign: 'center', padding: '8px' }}>  {ticketDetails?.travellerInfos?.pnrDetails && Object.entries(ticketDetails?.travellerInfos?.pnrDetails).map(([flight, pnr]) => (
                <p> {flight}</p>
              ))}

              </td>
              <td style={{ textAlign: 'center', padding: '8px' }}>{ticketDetails?.travellerInfos?.pnrDetails && Object.entries(ticketDetails.travellerInfos.pnrDetails).map(([flight, pnr]) => (
                <p key={flight} className='fw-bold'>{pnr}</p>
              ))} </td>

            </tr>
          </tbody>
        </table>
        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#dfdfdf", }} >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", marginTop: "5px" }}>
              <h6 style={{ marginLeft: "10px" }}>Payment Details</h6>
            </div>
          </div>
        </div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            <tr style={{}}>
              <td style={{ textAlign: 'left', padding: '8px' }}>Base Fare </td>
              <td style={{ textAlign: 'right', padding: '8px' }}>{currency} {ticketDetails?.fareDetail?.baseFare}</td>
            </tr>
            <tr style={{}}>
              <td style={{ textAlign: 'left', padding: '8px' }}>Taxes and fees</td>
              <td style={{ textAlign: 'right', padding: '8px' }}>{currency} {ticketDetails?.fareDetail?.texes}</td>
            </tr>
            <tr style={{}}>
              <td style={{ textAlign: 'left', padding: '8px' }}>SSR Fees</td>
              <td style={{ textAlign: 'right', padding: '8px' }}>{currency} {ticketDetails?.fareDetail?.SSRP ? ticketDetails?.fareDetail?.SSRP : 0} </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #dddddd' }}>
              <td style={{ textAlign: 'left', padding: '8px' }}>Total</td>
              <td style={{ textAlign: 'right', padding: '8px' }}>{currency} {ticketDetails?.fareDetail?.totalFare ? ticketDetails?.fareDetail?.totalFare : 0}</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', fontWeight: "bold" }}>Amount Paid</td>
              <td style={{ textAlign: 'right', padding: '8px', fontWeight: "bold" }}>{currency} {ticketDetails?.fareDetail?.totalFare ? ticketDetails?.fareDetail?.totalFare : 0}</td>
            </tr>
          </tbody>
        </table>
        {/* <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#dfdfdf", marginTop: "5px" }} >
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", marginTop: "5px" }}>
              <h6 style={{ marginLeft: "10px" }}>GST Details</h6>
            </div>
          </div>
        </div> */}
        {/* <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            <tr style={{}}>
              <td style={{ textAlign: 'left', padding: '8px' }}>GST Name </td>
              <td style={{ textAlign: 'right', padding: '8px' }}> indore</td>
            </tr>
            <tr style={{}}>
              <td style={{ textAlign: 'left', padding: '8px' }}>GST No</td>
              <td style={{ textAlign: 'right', padding: '8px' }}>indore</td>
            </tr>
            <tr style={{}}>
              <td style={{ textAlign: 'left', padding: '8px' }}>GST Address</td>
              <td style={{ textAlign: 'right', padding: '8px' }}>indore</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px' }}>GST email</td>
              <td style={{ textAlign: 'right', padding: '8px' }}>indore</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px' }}>GST Phone</td>
              <td style={{ textAlign: 'right', padding: '8px' }}>indore</td>
            </tr>
          </tbody>
        </table> */}
        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "black", color: "white" }} >
          <div style={{ flex: 1 }}>
            <div style={{ marginTop: "5px" }}>
              <h5 style={{ marginLeft: "10px" }}>Policies and Cancellation Rules</h5>
              <div style={{ padding: '5px', marginLeft: "40px" }}>
                <ul style={{ listStyleType: 'dot' }}>
                  <li style={{ marginBottom: '5px', color: "white" }}>You should carry a print-out of your booking and present for check-in.</li>
                  <li style={{ marginBottom: '5px', color: "white" }}>Date & Time is calculated based on the local time of city/destination.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

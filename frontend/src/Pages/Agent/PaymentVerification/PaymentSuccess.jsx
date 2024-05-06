import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { Link, useSearchParams } from "react-router-dom";
import { FlightSearchService } from '../../../Services/Agent/FlightSearch.Service';
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap'
import toast, { Toaster } from 'react-hot-toast';




const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0]
  const referenceNum = seachQuery.get("reference");
  const navigate = useNavigate();
  const [errormsg, setErrormsg] = useState(false);
  const [bookingErrormsg, setBookingErrormsg] = useState("");
  let dataList = JSON.parse(localStorage.getItem("bookingRequest"));
  let status = localStorage.getItem("bookingStatus");
  let orderId = localStorage.getItem("orderId");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleErrorClose = () => setShowErrorModal(false);
  const handleErrorShow = () => setShowErrorModal(true);

  useEffect(() => {
    UpdateTransactions();
  }, [])


  const ConfirmholdBooking = async () => {
    localStorage.removeItem("bookingStatus");
    const data = {
      bookingId: dataList.bookingId,
      amount: dataList.amount
    }

    FlightSearchService.ConfirmholdBooking(data)
      .then(async (response) => {
        if (response.data.status) {
          const result = response.data.data;
          setTimeout(() => {
            navigate(`/booking-success/${dataList.bookingId}`);
          }, 500);
        } else {
          let errorMsg = response.data.message.message ? response.data?.message?.message : "something went wrong"
          // toast.error(errorMsg);
          setErrormsg(errorMsg);
          handleShow()

        }
      })
      .catch((e) => {
        console.log(e);
        handleShow();
      });
  };

  const BookingConfirm = async () => {
 let newobject = dataList.travellerInfo.map(item => {
      return item;
    });

    for (let i = 0; i < newobject.length; i++) {
      // Remove 'amount' and 'desc' keys from ssrBaggageInfos array if it exists
      if (newobject[i].ssrBaggageInfos) {
        newobject[i].ssrBaggageInfos.forEach(info => {
          delete info.amount;
          delete info.desc;
        });
      }

      // Remove specified keys from ssrSeatInfos array if it exists
      if (newobject[i].ssrSeatInfos) {
        newobject[i].ssrSeatInfos.forEach(info => {
          delete info.amount;
          delete info.color;
          delete info.isBooked;
          delete info.seatNo;
          delete info.seatPosition;
          delete info.isAisle;
          delete info.selectedSeat;
        });
      }

      // Remove 'amount' and 'desc' keys from ssrMealInfos array if it exists
      if (newobject[i].ssrMealInfos) {
        newobject[i].ssrMealInfos.forEach(info => {
          delete info.amount;
          delete info.desc;
        });
      }
      if (newobject[i].ssrBaggageInfos && newobject[i].ssrBaggageInfos.length === 0) {
        delete newobject[i].ssrBaggageInfos;
      }
      if (newobject[i].ssrSeatInfos && newobject[i].ssrSeatInfos.length === 0) {
        delete newobject[i].ssrSeatInfos;
      }
      if (newobject[i].ssrMealInfos && newobject[i].ssrMealInfos.length === 0) {
        delete newobject[i].ssrMealInfos;
      }

    }

    FlightSearchService.BookingConfirm(dataList)
      .then(async (response) => {
        if (response.data.status) {
          navigate(`/booking-success/${dataList.bookingId}`);
          localStorage.removeItem("bookingStatus")
        } else {
          let errorMsg = response.data?.message?.message;
          setBookingErrormsg(errorMsg);
          handleErrorShow();
        }
      })
      .catch((e) => {
        setBookingErrormsg("Your Booking Is Pending Please Contact To Admin")
        handleErrorShow();
      });
  };

  const UpdateTransactions = () => {
    let values = {
      bookingId: dataList.bookingId,
      orderId: orderId, // Assuming order.id is available in the scope
      status: "1"
    }
    FlightSearchService.UpdateTransactions(values).then(async (response) => {
      if (response.status === 200) {

        if (response.data.status) {
          console.log("response", response.data.data)
          if (status === "onhold") {
            ConfirmholdBooking();
          } else {
            BookingConfirm();
          }
        } else {
          let errorMessage = response.data.message ? response.data.message : "someting wrong"
          setErrormsg(true);
          localStorage.removeItem("bookingStatus");
        }
      } else {
        let errorMessage = response.data.message;
        console.log(errorMessage)
      }

    }).catch((error) => {
      let errorMessage = error.message
      console.log(errorMessage)
    });
  }

  return (
    <div>
      <Box>
        <VStack h="100vh" justifyContent={"center"}>

          <Heading textTransform={"uppercase"}> Payment Successfull</Heading>

          <Text>
            Reference No.{referenceNum}
          </Text>

        </VStack>
      </Box>
      <Modal size="md" show={showModal} onHide={handleClose} centered>
        <Modal.Body>
          <p className='text-center text-danger'>{errormsg ? "unable to process your request due to" + { errormsg } + "error. for more information please contact. " : "Pending"} </p>
          <p className='text-center'>Thank You  !</p>
          <Link to={"/agent/flight"}>Back To Home</Link>
        </Modal.Body>
      </Modal>

      <Modal size="md" show={showErrorModal} onHide={handleErrorClose} centered>
        <Modal.Body>
          <p className='text-center text-danger'>{bookingErrormsg ? bookingErrormsg : "Pending"}  etryt</p>
          <p className='text-center'>Thank You ! </p>
          <Link to={"/agent/flight"}>Back To Home</Link>
        </Modal.Body>
      </Modal>
    </div>


  )
}

export default PaymentSuccess;

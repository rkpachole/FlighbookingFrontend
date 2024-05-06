import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { FlightSearchService } from '../../../../../Services/Agent/FlightSearch.Service';
import toast from 'react-hot-toast';
import "./SeatMapModel.css";
export default function SeatMapModel({ showModal, handleClose, proceedForSeat, bookingId, flightMapInfo, flightMapIndex, reInitialValues, setReInitialValues, setAllFlightSeats }) {
    const [passangerInfoModel, setPassangerInfoModel] = useState(reInitialValues.extraInfo);
    const [selectPassanger, setSelectPassanger] = useState(0);
    const [customSeatMap, setCustomSeatMap] = useState();
    const [prices, setPrices] = useState([]);
    const [selectSeat, setSelectSeat] = useState();
    const [seatTab, setSeatTab] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState({});
    const [activePassangerKey, setActivePassangerKey] = useState(null);
    const[totalSelectSeat,setTotalSelectSeat]= useState();
    
    useEffect(() => {
        if (bookingId) {
            getBookingSeatMap(bookingId);
        }
    }, [])


    const getBookingSeatMap = async (bookingId) => {
        var requestData = {
            bookingId: bookingId
        }
        FlightSearchService.BookingSeatMap(requestData).then(async (response) => {
            if (response.data.status) {
                const result = response.data.data[flightMapIndex];
                const sInfo = result.sInfo;
                const mealBaggageInfo = passangerInfoModel[flightMapIndex].mealBaggageInfo;
         
                let seatInfo = [];
                // mealBaggageInfo.forEach((mealBaggageValue, mealBaggageKey) => {
                //     let checkSeatBooked = sInfo.find(seat => {
                //         return (seat.seatNo === mealBaggageValue.seat)
                //     });

                //     console.log("checkSeatBooked",checkSeatBooked);
                // })

                sInfo.forEach((seatValue, seatKey) => {
                    const checkSeatBooked = mealBaggageInfo.find(mealBaggage => {
                        return (seatValue.seatNo === mealBaggage.seat)
                    });
                    if(checkSeatBooked){
                        seatValue.selectedSeat = true;
                    }else{
                        seatValue.selectedSeat = false;
                    }
                    seatInfo.push(seatValue);
                    //sconsole.log("checkSeatBooked",checkSeatBooked);
                })
         


                setPrices(result.prices)
                setAllFlightSeats(response.data.data);
                var customSeatMap = [];
                for (var row = 1; row <= result.sData.row; row++) {
                    var tmp = { column: [] }
                    for (var column = 1; column <= result.sData.column; column++) {
                        const isSeatFound = sInfo.find(seat => {
                            return (seat.seatPosition.column === column && seat.seatPosition.row === row)
                        });
                        if (isSeatFound) {
                            var tmp1 = {
                                seatStatus: 'full',
                                seat: isSeatFound
                            }
                            tmp.column.push(tmp1);
                        } else {
                            var tmp1 = {
                                seatStatus: 'empty',
                                seat: {}
                            }
                            tmp.column.push(tmp1);
                        }
                    }
                    customSeatMap.push(tmp);
                }
                //console.log("customSeatMapCount",customSeatMap.length);
                //console.log("customSeatMap",customSeatMap);
                setCustomSeatMap(customSeatMap)
            } else {
                let errorMsg = response.data.message?response.data.message.message :"Something went wrong"
               toast.error(errorMsg);
            }
        }).catch((e) => {
 toast.error('Something went wrong');
        });
    };





    const handleClickSetPassanger = (selectPassangerKey, seatInfo, seatStatus) => {
        setActivePassangerKey(selectPassangerKey);
        setSeatTab(true)
        if(seatStatus){
            if(seatInfo.seatStatus === 'full'){
                setSelectSeat(seatInfo);
                let newData = [...passangerInfoModel] //copy the object
                
                // Check if the seat is not already occupied
                const isSeatAvailable = newData[flightMapIndex].mealBaggageInfo.every((passenger, index) => {
                    if (index !== selectPassangerKey) {
                        return passenger.seat !== seatInfo.seat.seatNo;
                    }
                    return true;
                });
    
                if (isSeatAvailable) {
                   newData[flightMapIndex].mealBaggageInfo[selectPassangerKey].seat = seatInfo.seat.seatNo;
                    newData[flightMapIndex].mealBaggageInfo[selectPassangerKey].fee = seatInfo.seat.amount;
    
                    let totalSelectSeatFee = newData[flightMapIndex].mealBaggageInfo.reduce(function(prev, current) {
                        if(current.fee){
                            return prev + current.fee
                        }else{
                            return prev;
                        }
                    }, 0);
    
                    let totalSelectSeat = Array.prototype.map.call(newData[flightMapIndex].mealBaggageInfo, function(item) { return item.seat; }).join(",")
                    setTotalSelectSeat(totalSelectSeat);
                    //console.log("totalSelectSeatFee",totalSelectSeatFee);
                    newData[flightMapIndex].totalSelectSeat = totalSelectSeat;
                    newData[flightMapIndex].totalSelectSeatFee = totalSelectSeatFee;
                    setPassangerInfoModel(newData);
                } else {
                    // Handle case where seat is already occupied
                  
                    // You may want to notify the user or handle this case differently
                }
            }
        } else {
            setSelectPassanger(selectPassangerKey);
            setSelectSeat('');
        }
    };
    
    return (
        <>
            <Modal size="xl" show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Select Seats</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row seat-map-model'>
                        <div className='col-lg-3 col-md-3 col-sm-3 border p-2 ' >
                            <div className='d-flex'>
                                <img className='flight-flag' src={flightMapInfo.flightLogo} alt='' />
                                <div className=''>
                                    <div className="flightname" id="">{`${flightMapInfo.flightName} ${flightMapInfo.from} - ${flightMapInfo.to}`}</div>
                                    <div className="flightnumber" id="">{`${flightMapInfo.flightCode} - ${flightMapInfo.flightNumber}`}</div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="table-responsive">
                                <table className="table text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th>Passanger</th>
                                            <th>Seat</th>
                                            <th>Fee</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            passangerInfoModel[flightMapIndex].mealBaggageInfo && passangerInfoModel[flightMapIndex].mealBaggageInfo.length !== 0 && passangerInfoModel[flightMapIndex].mealBaggageInfo.map((passanger, passangerKey) => (

                                                <tr key={passangerKey} onClick={() => handleClickSetPassanger(passangerKey, null, false)}>
                                                    <td className={selectPassanger === passangerKey ? "select-passanger" : ''}>{passanger.memberName}</td>
                                                    <td className={selectPassanger === passangerKey ? "select-passanger" : ''}>{passanger.seat}</td>
                                                    <td className={selectPassanger === passangerKey ? "select-passanger" : ''}>{passanger?.fee}</td>
                                                </tr>
                                            ))
                                        }
                                        <tr>
                                            <td>Total</td>
                                            <td>{passangerInfoModel[flightMapIndex].totalSelectSeat}</td>
                                            <td>{passangerInfoModel[flightMapIndex].totalSelectSeatFee}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className='btn btn-dark w-100' onClick={() => proceedForSeat(passangerInfoModel)}>Proceed</button>
                            <h6 className='fw-bold flightname mt-4'>Proceed Without Seats </h6>
                            <p className='flightnumber'>* Conditions apply. We will try our best to accomodate your seat preferences, however due to operational considerations we can't guarantee this selection. The seat map shown may not be the exact replica of flight layout, we shall not responsible for losses arising from the same. Thank you for your understanding</p>
                        </div>
                        <div className='col-lg-7 col-md-7    col-sm-7'>

                            <div className='cabin fuselage'>
                                {
                                    customSeatMap && customSeatMap.length > 0 && customSeatMap.map((columns, rowKey) => (
                                        <div className='seats' key={rowKey}>
                                            {
                                                columns.column && columns.column.length > 0 && columns.column.map((column, columnKey) => (
                                                    <div className='seat' key={columnKey} >
                                                        <input type="radio" className="" name="options-outlined" id={`${rowKey}-${columnKey}`} onClick={() => handleClickSetPassanger(selectPassanger, column, true)} />

                                                        <label className={column.seatStatus === 'empty' ? 'empty' : column.seat.isBooked ? 'seat-booked' : selectSeat && selectSeat.seat.seatNo === column.seat.seatNo ? 'seat-available seat-selected' : column.seat.selectedSeat ?  'seat-available seat-selected' : 'seat-available'} htmlFor={`${rowKey}-${columnKey}`} style={column.seatStatus !== 'empty' ? { backgroundColor: column?.seat?.color } : {}}>
                                                            {selectPassanger === activePassangerKey && selectSeat && selectSeat.seat.seatNo === column.seat.seatNo ? <i className="fa-solid fa-check me-2 text-white"></i> : ""}
                                                            {column?.seat?.seatNo}
                                                        </label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-2 border'>
                            <h6 className='fs-12 text-center mt-3'>Flight Orientation</h6>
                            <div className='text-center mt-2'>
                                <img className='flight-flag' src={flightMapInfo.flightLogo} alt='' />
                            </div>
                            <hr></hr>
                            <div className=''>
                                <h6 className='text-center seat-status-font'>Seat Status</h6>
                                <span className='seat-status-font'><i class="fa-solid fa-square-check me-1" style={{ color: "#4aa301" }}></i> - Selected</span>
                                <p className='seat-status-font'><i class="fa-solid fa-circle-xmark me-1" style={{ color: "#a4b4c1" }}></i> - Booked</p>
                                <hr></hr>
                                <h6 className='seat-status-font'>Seat Fees</h6>
                            </div>
                            <div>
                                {
                                    prices && prices.length > 0 && prices.map((priceInfo, priceKey) => (
                                        <p className='mb-1 priceInfo' key={priceKey}>
                                            <span className='seat-color-box me-2' style={priceInfo.color ? { backgroundColor: priceInfo?.color } : {}}></span>
                                            <span><i class="fa-solid fa-indian-rupee-sign me-1 fa-sm"></i>{priceInfo.price}</span>
                                        </p>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
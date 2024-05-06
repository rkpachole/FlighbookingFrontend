import React from 'react'
import Header from '../../../../Component/Layout/Agent/Header/Header';
import { Toaster } from 'react-hot-toast';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import icon1 from '../../../../assets/images/holidayicon1.png'
import icon2 from '../../../../assets/images/holidayicon2.png'
import icon3 from '../../../../assets/images/holidayicon3.png'
import icon4 from '../../../../assets/images/holidayicon4.png'
import hotel1 from '../../../../assets/images/hotel1.png'
import './Holidetails.css';
export default function Holidetails() {

    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
        {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];


  return (
    <>
      <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <Header/>
        <div className="container-fluid hotelbt-bar">
            <div className="container">
              <div className="row">
                 <div className="col-12">
                  Home - thailand
                 </div>
              </div>
            </div>
         </div>
{/* -------------------------------------------------------------------------------------------------- */}
        <div className="container Holidetails mt-4">
          <div className="row border-bottom">
            <div className="col-lg-8 col-md-6">
                <span className='heading'>thailand</span>
                <span className='buget'>Budget Friendly</span>
                <p className=''>4 Nights / 5 Days</p>
             </div>
             <div className="col-lg-4 col-md-6 Holidetails d-flex justify-content-end mb-3">
             <div class="hldlpr-main  shadow">
              <div class="hldlpr-main1">
                <p class="m-0 text-end hldetail-para">Start From</p>
                <p class="m-0 text-end  hldetail-para fw-bold">Per Persun </p>
                </div>
                <div class="hldlpr-main2">
                  <h4 class="text-danger mt-2 hldetail-price fw-bold"><i class="fa-solid fa-indian-rupee-sign"></i>1536</h4>
                </div>
                </div>
             </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 d-flex justify-content-start">
               <ul className='holilist'>
                 <li><a href="">OVERVIEW</a></li>
                 <li><a href="">ITINERARY</a></li>
                 <li><a href="">TERMS</a></li>
               </ul>
            </div>
        </div>
{/* ----------------------------------------------------------------- */}
        <div className="row mt-3">
            <div className="col-lg-7 col-md-12">
                <div className="card p-4 shadow-lg holiradius">
                <div className="row ">
                 <div className="col-12 p-0">
                   <ImageGallery items={images} />
                 </div>
               </div>
                </div>

               <div className="card shadow-lg holiradius p-4 mt-4">
                   <div className="row  ">
                 <div className="col-12 p-0">
                     <span className='heading fs-5'>thailand  4N 5D</span>
                     <span className='holiprice fs-5 fw-bolder'>Overview</span>

                     <p className=' mt-2'>With white sand beaches, thriving nightlife, gilded temples and modern skylines, Thailand offers something for everyone. This incredible capacity to delight everyone from rugged backpackers to the jet-setting swish set is why it’s often called the Land of Smiles.</p>
                     <p className=' mt-2'>Our Mono Phuket package takes you to the idyllic seaside resort of Phuket with its palm-fringed beaches, quaint flea markets and colonial villas.</p>

                     <div className="col-lg-8 col-md-8 mt-4">
                       <div className="row">
                          <div className="col-3">
                              <div className="card bg-light p-2">
                                  <img src={icon1} alt=""   className='hldtimg mx-auto' />
                                  <p className='hddloveriew mb-0 text-center'>Hotel</p>
                              </div>
                          </div>

                          <div className="col-3">
                              <div className="card bg-light p-2">
                                <img src={icon2} alt=""  className='hldtimg mx-auto' />
                                <p className='hddloveriew mb-0 text-center'>Sightseeing</p>
                              </div>
                          </div>

                          <div className="col-3">
                              <div className="card bg-light p-2">
                                <img src={icon3} alt=""   className='hldtimg mx-auto' />
                                <p className='hddloveriew mb-0 text-center'>Transfer</p>
                              </div>
                          </div>

                          <div className="col-3">
                              <div className="card bg-light p-2">
                                <img src={icon4} alt=""  className='hldtimg mx-auto' />
                                <p className='hddloveriew mb-0 text-center'>Activity</p>
                              </div>
                          </div>
                       </div>
                     </div>
                 </div>
               </div>
               </div>

               <div className="card shadow-lg holiradius p-4 mt-4">
               <div className="row  ">
                  <div className="col-12 p-0">
                    <span className='heading fs-5'>Thailand  4N 5D</span>
                    <span className='holiprice fs-5 fw-bolder'>Itinerary</span>
                  </div>

                  <div className="col-12 p-1 mt-4 border">
                    <div className="row">
                      <div className="col-2">
                          <div className='holidaydays d-flex justify-content-center'>
                             <p className='text-center m-0'>Day 1</p>
                          </div>
                      </div>
                      <div className="col-10 holidetails">
                          <p className='fw-bold m-0'>Arrival + Marina Cruise</p>
                      </div>
                    </div>
                  </div>
                  <div className="co-12 border ">
                       <p className='p-3'>You will be welcomed at Dubai International Airport by our representative. Transfer to the hotel. in
                        evening Go for an awesome experience of cruising with our marina cruise . This two hours cruising tours
                        has a complete package with entertainment.</p>
                  </div>

                  <div className="col-12 p-1 mt-4 border">
                    <div className="row">
                      <div className="col-2">
                          <div className='holidaydays d-flex justify-content-center'>
                             <p className='text-center m-0'>Day 2</p>
                          </div>
                      </div>
                      <div className="col-10  holidetails">
                          <p className='fw-bold m-0'>Desert Safari With BBQ Dinner</p>
                      </div>
                    </div>
                  </div>
                  <div className="co-12 border ">
                       <p className='p-3'>Desert Safari is the best adventure activity in Dubai. Desert Safari Dubai packages is a 06 hours long tour of the Great Arabian Desert with an extra topping of fun and excitement. Several activities joined together to form a perfect Desert Safari, which includes Belly Dancing, Tanura Dance, Camel Riding, Horse Riding, Quad Biking, Sand Boarding, and Dune Bashing. The tour includes a delectable Barbecue Dinner buffet near a bonfire, exclusive for the Evening Desert Safari.</p>
                  </div>

                  <div className="col-12 p-1 mt-4 border">
                    <div className="row">
                      <div className="col-2">
                          <div className='holidaydays d-flex justify-content-center'>
                             <p className='text-center m-0'>Day 3</p>
                          </div>
                      </div>
                      <div className="col-10 holidetails">
                          <p className='fw-bold m-0'>Burj Khalifa Non Prime Time + Dubai Underwater Zoo And Aquarium</p>
                      </div>
                    </div>
                  </div>
                  <div className="co-12 border ">
                       <p className='p-3'>post a hearty breakfast, .you will get a visit to the 124th ﬂoor of Burj Khalifa, from there see the panoramic views of the stunning city. You will also visit the Dubai Aquarium and Underwater Zoo where you can see the beautiful marine creatures. The second day comes to an end, head back to the hotel for an overnight sleep.</p>
                  </div>

                  <div className="col-12 p-1 mt-4 border">
                    <div className="row">
                      <div className="col-2">
                          <div className='holidaydays d-flex justify-content-center'>
                             <p className='text-center m-0'>Day 4</p>
                          </div>
                      </div>
                      <div className="col-10 holidetails">
                          <p className='fw-bold m-0'>thailand City Tour</p>
                      </div>
                    </div>
                  </div>
                  <div className="co-12 border ">
                       <p className='p-3'>post a hearty breakfast, .you will get a visit to the 124th ﬂoor of Burj Khalifa, from there see the panoramic views of the stunning city. You will also visit the Dubai Aquarium and Underwater Zoo where you can see the beautiful marine creatures. The second day comes to an end, head back to the hotel for an overnight sleep.</p>
                  </div>

                  <div className="col-12 p-1 mt-4 border">
                    <div className="row">
                      <div className="col-2">
                          <div className='holidaydays d-flex justify-content-center'>
                             <p className='text-center m-0'>Day 5</p>
                          </div>
                      </div>
                      <div className="col-10 holidetails">
                          <p className='fw-bold m-0'>Departure Day</p>
                      </div>
                    </div>
                  </div>
                  <div className="co-12 border ">
                       <p className='p-3'>Today, you will say a final goodbye to one of the Luxury City in the world. Later, check out of the hotel and get transferred to the airport for your journey back home with unlimited memories.</p>
                  </div>
               </div>
               </div>

                <div className="card p-3 mt-4 shadow-lg holiradius">
                <div className="row ">
                 <div className="col-12 ">
                   <span className='heading fs-5'>Inclusions</span>

                   <ul className='mt-5'>
                     <li className='mt-4'>Assistance upon arrival / departure at Airport.</li>
                     <li className='mt-4'>Marina Cruise With Dinner</li>
                     <li className='mt-4'>Meal: Breakfast </li>
                     <li className='mt-4'>Desert Safari  With BBQ Dinner</li>
                     <li className='mt-4'>Stay at 3 Star Hotel</li>
                     <li className='mt-4'>Thailand city tour</li>
                     <li className='mt-4'>Burj Khalifa with fountain show Tickets & Transfers And Underwater </li>
                     <li className='mt-4'>Gst</li>
                     <li className='mt-4'>Visa with insurance </li>
                  </ul> 
                 </div>
               </div>
                </div>

                <div className="card p-3 mt-4 shadow-lg holiradius">
                <div className="row ">
                 <div className="col-12 ">
                   <span className='heading fs-5'>Exclusions</span>

                   <ul className='mt-5'>
                     <li className='mt-4'>Assistance upon arrival / departure at Airport.</li>
                     <li className='mt-4'>Marina Cruise With Dinner</li>
                     <li className='mt-4'>Meal: Breakfast </li>
                     <li className='mt-4'>Desert Safari  With BBQ Dinner</li>
                     <li className='mt-4'>Stay at 3 Star Hotel</li>
                     <li className='mt-4'>Thailand city tour</li>
                     <li className='mt-4'>Burj Khalifa with fountain show Tickets & Transfers And Underwater </li>
                     <li className='mt-4'>Gst</li>
                     <li className='mt-4'>Visa with insurance </li>
                  </ul> 
                 </div>
               </div>
                </div>

               <div className="card p-3 mt-4 shadow-lg holiradius">
               <div className="row ">
                 <div className="col-12 ">
                   <span className='heading fs-5'>Payment Policy</span>
                   <p>Advance Booking Fee</p>

                   <ul className='mt-5'>
                     <li className='mt-4'>Assistance upon arrival / departure at Airport.</li>
                     <li className='mt-4'>Marina Cruise With Dinner</li>
                     <li className='mt-4'>Meal: Breakfast </li>
                  </ul> 
                 </div>
               </div>
               </div>

                <div className="card  p-3 mt-4 shadow-lg holiradius">
                <div className="row">
                 <div className="col-12 ">
                   <span className='heading fs-5'>Cancellation Policy</span>
                   <p className='mt-2'>You or any member of your party may cancel their travel arrangements at any time. Written notification or an e-mail to that effect from the person who made the booking must be received at our office. The cancellation charges applicable are as per the published cancellation policy below:</p>
                 </div>
               </div>
                </div>

                <div className="card p-3 mt-4 shadow-lg holiradius">
                  <div className="row  ">
                  <div className="col-12 ">
                    <span className='heading fs-5'>Terms & Conditions</span>
                    <p className='mt-2'>If we change or cancel your holiday We do plan the arrangements in advance. It is unlikely that we will have to make any changes to your travel arrangements. Occasionally, we may have to make changes and we reserve the right to do so at any time. If there are any changes, we will advise you of them at the earliest possible date. We also reserve the right under any circumstances to cancel your travel arrangements by assigning reasons to you.</p>
                  </div>
                </div>
                </div>

            </div>

            <div className="col-lg-5 col-md-12 ">
                
                    <div className="card p-3 m-1 shadow-lg  holiradius">
                      <form action="">
                    <div className="row">
                 <div className="col-12 mt-3 ">
                  <button className='btn btn-danger w-100 fs-5'>Download Itinerary</button>
                 </div>
                 <div className="col-12 bg-gray mt-3 border-bottom mb-2 p-2">
                    <p className='text-center  mb-0 fw-bold'>Want to Go For A Memorable Holiday?</p>
                    <p className='text-center' style={{ fontSize: "11px" }}>Provide Your Details to Know Best Holiday Deals</p>
                 </div>

                 <div className="col-12 bg-gray mt-3">
                    <label className="">Destination</label>
                    <select class="form-select form-control mt-2" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <label className="mt-3">City of Departure</label>
                    <select class="form-select form-control mt-2" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <label className="mt-3">Date of Departure</label>
                    <input type="date" className='form-control mt-2' />

                    <div className="row  hldtlinput">
                        <h5 className='mt-4'>Contact Details</h5>
                        <div className="col-lg-6 col-md-6">
                          <input type="text" className='form-control mt-2' placeholder='Type your full name' />
                        </div>
                        <div className="col-lg-6 col-md-6">
                           <input type="text" className='form-control mt-2' placeholder='Type your full Email' />
                        </div>

                        <div className="col-4">
                          <input type="text" className='form-control mt-2' placeholder='+91' />
                        </div>
                        <div className="col-8">
                          <input type="text" className='form-control mt-2' placeholder='Type your mobile number' />
                        </div>

                        <div className="col-12 mt-3 ">
                            <div className=' d-flex justify-content-center '>
                                        <button className='btn btn-danger w-100 fs-5'>Submite</button>
                            </div>
                        </div>
                    </div>
                 </div>
               </div>
               </form>
                    </div>

                    <div className="card p-4 mt-3 shadow-lg  holiradius">
                       <div className="row">
                         <div className="col-4 d-flex justify-content-center align-items-center">
                          <img src={hotel1} alt=""  width="90px" height="90px" />
                         </div>
                          <div className="col-8">
                              <h6>Hassle Free. 24X7 on-trip assistance</h6>
                              <p className='mb-0'><i class="fa-solid fa-phone"></i> +91-7048207024</p>
                              <p className='m-0'><i class="fa-solid fa-envelope"></i> info@wizotrip.com</p>
                          </div>
                       </div>
                    </div>
                            
            </div>
        </div>
     </div>  
    </>
  )
}

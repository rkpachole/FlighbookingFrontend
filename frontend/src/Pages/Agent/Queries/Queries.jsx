import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../Component/Layout/Agent/AgentLayout';
import './Queries.css';

export default function Queries() {
  return (
    <>
      <Layout />
        <div className="main-content app-content queries">
            <div className="container-fluid">
                <div className="page-header">
                    <h4 className="my-auto mt-4 fw-bold">Queries</h4>
                    <div>
                        <Link to={'/agent/QueriesAdd'}><button className='btn add-btn mt-4'>+ Add New Query</button></Link>
                    </div>
                </div>
                <div className='row'>
                    <div class="col-xl-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-3 mb-3 col-md-4 col-sm-4">
                                        <label class="form-label">From Date</label>
                                        <input type="date" class="form-control"/>
                                    </div>
                                    <div class="col-lg-3 mb-3 col-md-4 col-sm-4">
                                        <label class="form-label">To</label>
                                        <input type="date" class="form-control"/>
                                    </div>
                                    <div class="col-lg-3 mb-3 col-md-4 col-sm-4">
                                        <label class="form-label">Keyword</label>
                                        <input type="search" placeholder="Type a keyword..."  class="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div class="col-xl-12">
                        <div class="card custom-card p-2 pt-3  ">
                            <div className='row justify-content-center '>
                                <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-3'>
                                    <div className='text-center Qu-box'>
                                        <h4>0</h4>
                                        <p>New</p>  
                                    </div>    
                                </div>
                                <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-3'>
                                    <div className='text-center Qu-box2'>
                                        <h4>0</h4>
                                        <p>Active</p>
                                    </div>    
                                </div>
                                <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-3'>
                                    <div className='text-center Qu-box3'>
                                        <h4>0</h4>
                                        <p>No Connect</p>
                                    </div>    
                                </div>
                                <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-3'>
                                    <div className='text-center Qu-box4'>
                                        <h4>0</h4>
                                        <p>Quotation Sent</p>
                                    </div>    
                                </div>
                            </div>
                            <div className='row justify-content-center mt'>
                                <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-3'>
                                    <div className='text-center Qu-box5'>
                                        <h4>0</h4>
                                        <p>Pro. Confirm</p>  
                                    </div>    
                                </div>
                                <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-3'>
                                    <div className='text-center Qu-box6'>
                                        <h4>0</h4>
                                        <p>Confirmed</p>
                                    </div>    
                                </div>
                                <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-3'>
                                    <div className='text-center Qu-box7'>
                                        <h4>0</h4>
                                        <p>Cancelled</p>
                                    </div>    
                                </div>
                                <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2 mb-3'>
                                    <div className='text-center Qu-box8'>
                                        <h4>0</h4>
                                        <p>Lost</p>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='row'>
                    <div class="col-xl-12">
                        <div class="card custom-card p-2">
                            <h4 className='text-center'>No Query</h4>
                        </div> 
                    </div> 
                </div>     
            </div>
        </div>
    </>
  )
}

import React from 'react'
import Layout from '../../../Component/Layout/Admin/AdminLayout'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CountryAPI } from '../../../Services/Country.Service';
import toast from 'react-hot-toast';

import {Link, useNavigate,useParams} from 'react-router-dom';
import {
    Card,
    CardContent,
    Grid,
    InputLabel,
    TextField,
    Button,
    Select,
    MenuItem
} from "@mui/material";

export default function CreateState() {
    const navigate = useNavigate();
    const { slug } = useParams();
    //console.log("slug",slug);
    //console.info("Create country form")
    const countryValidationSchema = Yup.object().shape({
        countryId: Yup.string()
            .required("Country name is required"),
        sortName: Yup.string()
            .required("Sort name is required")
            .max(5, 'Sort name maximum length is 70'),
        code: Yup.string()
            .required("Code is required")
            .max(5, 'Code maximum length is 70'),
    });

    const initialValues = {
        "countryId":"",
        "name":"",
        "sortName":"",
    }
    const nameForm = React.useRef(null)
    // Here store apis data
    const [countryInitialValues, setCountryInitialValues] = React.useState(initialValues);
    const [formTitle, setFormTitle] = React.useState('State');
    const [action, setAction] = React.useState('Add');
    React.useEffect(() => {
        if(slug){
            setFormTitle("State");
            setAction("Edit");
            getData(slug);
        }
    }, [slug])

    const getData = async (slug) => {
        //console.log("slug",slug);
        CountryAPI.get(slug).then(async (response) => {
            if(response.data.status){
                //console.log("response",response.data.data);
                var result = response.data.data;
                let reInitialValuee = {};
                reInitialValuee.name = result.name;
                reInitialValuee.sortName = result.sortName;
                //console.log('reInitialValuee',reInitialValuee);
                setCountryInitialValues(reInitialValuee);
            }else{
                toast.error(response.data.message);
            }
        }).catch((e) => {
  
            toast.error('Something went wrong');
        });
    };
    
    const handleOnSubmit = async (values, { resetForm }) => {
        console.log("values",values);
        if(slug){
            const response = await CountryAPI.update(values,slug);
            console.log("response",response.data.status);
            if(response.data.status){
                toast.success('Country updated successfully');
                navigate(`/country`)
            }else{
                toast.error(response.data.message);
            }
        }else{
            const response = await CountryAPI.create(values);
            console.log("response",response.data.status);
            if(response.data.status){
                toast.success('Country added successfully');
                navigate(`/country`)
            }else{
                toast.error(response.data.message);
            }
        }
    };
  return (
    <>   {/* <AdminLayout /> */}
    <Layout />
        <div className="main-content app-content">
            <div className="container-fluid">
            {/* <!-- PAGE-HEADER --> */}
                <div className="page-header">
                    <h1 className="page-title my-auto">{`${action} ${formTitle}`}</h1>
                    <div>
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                            <Link to={`/`}>Dashboard</Link>
                            </li>
                            <li className="breadcrumb-item">
                            <Link to={`/country/`}>{`${formTitle} List`}</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">{formTitle}</li>
                        </ol>
                    </div>
                </div>
                {/* <!-- PAGE-HEADER END --> */}
                {/* <!-- Start:: row-1 --> */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-header justify-content-between">
                                <div className="card-title"> {formTitle} Information</div>
                            </div>
                            <Formik
                                initialValues={countryInitialValues}
                                validationSchema={countryValidationSchema}
                                onSubmit={handleOnSubmit}
                                enableReinitialize={true}
                            >
                            {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                            <Form ref={nameForm}>
                                <Card>
                                    <CardContent>
                                        <Grid container spacing={4}>
                                            <Grid item xs={6}>
                                                <label className='form-label'>Country</label>
                                                    <select
                                                        id="countryId"
                                                        name="countryId"
                                                        className='form-select'
                                                        onChange={handleChange}
                                                        value={values.countryId}
                                                        helperText={touched.countryId ? errors.countryId : ""}
                                                        error={touched.countryId && Boolean(errors.countryId)}
                                                    >
                                                        <option  value="">Select Country</option>
                                                        <option  value="1">India</option>
                                                        <option  value="2">US</option>
                                                        {
                                                            // country && genders.map((value, key) => (
                                                            //     <MenuItem key={key} value={value.NEMSISCode}>{value.Name}</MenuItem>
                                                            // ))
                                                        }
                                                    </select>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <label className='form-label'>State Name</label>
                                                    <div class="input-group">
                                                        <input
                                                        type="text"
                                                        id="name"
                                                        placeholder="Enter State Name"
                                                        className='form-control'
                                                        onChange={handleChange}
                                                        value={values.name}
                                                        helperText={touched.name ? errors.name : ""}
                                                        error={touched.name && Boolean(errors.name)} 
                                                        />
                                                    </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <label className='form-label'>State Sort Name</label>
                                                    <div class="input-group">
                                                        <input
                                                        id="sortName"
                                                        type="text"
                                                        placeholder="Enter Sort State Name"
                                                        className='form-control'
                                                        onChange={handleChange}
                                                        value={values.sortName}
                                                        helperText={touched.sortName ? errors.sortName : ""}
                                                        error={touched.sortName && Boolean(errors.sortName)}
                                                        />
                                                    </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <button  type="submit" className='btn btn-primary' >Submit</button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Form>
                            )}
                            </Formik> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

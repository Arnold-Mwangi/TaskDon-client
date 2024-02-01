import React, { useState } from "react";
import { AuthContext } from "./AuthContext/AuthContext";
import { success, success1, logo } from "../../assets";
import StarsCanvas from "../canvas/stars";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useMediaQuery } from 'react-responsive'
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
    email: string;
    password: String;
}


export const Login: React.FC = () => {

    const [submitting, setSubmitting] = useState(false);

    const isMediumScreen = useMediaQuery({ maxWidth: 768 });

    const navigate = useNavigate()


    const handleRegister = () => {
        navigate('/signup')
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .min(6, 'Password should be at least 6 characters')
            .max(30, 'Password should not exceed 30 characters')
            .required('password is required')

    })

    const handleSubmit = async (values: FormValues) => {

        try {
            setSubmitting(true);

            console.log(values);
            setSubmitting(false)
        } catch (error) {
            console.error(error);
            setSubmitting(false);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Input changed:', e.target.name, e.target.value);
        formik.handleChange(e);
    };

    const formik = useFormik({
        initialValues: { email: '', password: '' },

        validationSchema,
        onSubmit: handleSubmit,
    });




    return (

        <div className='relative z-0 h-screen bg-[#040d21]'>
            <Navbar />

            <div className="relative z-0 sm:h-full md:h-screen bg-[#040d21]  flex flex-col items-center lg:justify-center" >
                <StarsCanvas />
                {/* login box */}
                <div className=" w-full flex items-center  mx-auto shrink flex-col max-w-7xl align-middle">
                    <div className="  w-full md:w-96 bg-transparent md:bg-[#0c162d]">
                        <div className="text-center">
                            <img
                                className="mx-auto mb-0 w-full"
                                src={isMediumScreen ? success1 : success}
                                // Use success1 for sm and success for md and larger
                                srcSet={`${success1} md:${success}`}
                                style={{ width: '100%' }}
                                alt="Taskdon"
                            />

                            <h4 className="mb-5 pb-1 text-xl font-semibold">
                                We are the TD guys
                            </h4>
                        </div>



                        <form className="text-center mx-3 "
                            onSubmit={formik.handleSubmit}>
                            <p className="mb-4">Login to your Account</p>
                            {/* username */}
                            <div className="relative  mb-4" dT-te-input-wrapper-init>
                                <input
                                    {...formik.getFieldProps('email')}

                                    type="text"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}

                                    className="peer block min-h-[auto] w-full rounded-sm border-b bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-sate-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-acctive])]:placeholder:opacity-0" id="exampleFormControlInput1"
                                    placeholder="Username" />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="error">{formik.errors.email}</div>
                                )}
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className={`pointer-events-none absolute left-3 top-[-0.7rem] 
                                    text-[#68e55d] transition-all duration-200 ease-out 
                            ${formik.values.email || formik.touched.email ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                                >
                                    Username
                                </label>

                            </div>
                            {/* Password input */}
                            <div className="relative mb-4" data-te-input-wrapper-init>
                                <input
                                    {...formik.getFieldProps('password')}
                                    type="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    className="peer block min-h-[auto] w-full rounded-sm border-b bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput11"
                                    placeholder="Password" />
                                {formik.touched.password && formik.errors.password && (
                                    <div className="error">{formik.errors.password}</div>
                                )}
                                <label
                                    htmlFor="exampleFormControlInput1"
                                    className={`pointer-events-none absolute left-3 top-[-0.7rem] text-[#68e55d]transition-all duration-200 ease-out 
                            ${formik.values.email || formik.touched.email ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                                >
                                    Password
                                </label>
                            </div>

                            {/* Submit button */}
                            <div className="mb-12 pb-1 pt-1 text-center">
                                <button
                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                    type="submit"
                                    style={{
                                        background: 'linear-gradient(to right, #325ec1, #5cefba, #50b650)',
                                    }}>
                                    Log in
                                </button>

                                {/* Forgot password link */}
                                <a href="#!">Forgot password?</a>
                            </div>

                            {/* create an account */}
                            <div className="flex items-center flex-col sm:flex-row justify-between pb-6">
                                <p className="mb-0 mr-2">Don't have an account?</p>
                                <button
                                    type="button"
                                    onClick={handleRegister}
                                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-teal-500 transition duration-150 ease-in-out hover:border-danger-600 hover:bg-opacity-10 hover:text-danger-600 focus:ring-0 active-border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                    data-te-ripple-init
                                    data-te-ripple-color='light'>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
        </div>





    )

}
import React from "react";
import { AuthContext } from "./AuthContext/AuthContext";
import { success, logo } from "../../assets";
import StarsCanvas from "../canvas/stars";
import { useNavigate } from "react-router-dom";


export const Login = () => {

    const navigate = useNavigate()

    const handleRegister = () => {
        navigate('/signup')
    }

    return (
    
        <div className="relative z-0 sm:h-full md:h-screen bg-[#040d21]  flex items-center justify-center" >
            <StarsCanvas />
            {/* login box */}
            <div className=" w-full flex items-center justify-center mx-auto shrink flex-col max-w-7xl align-middle">
                <div className="  w-full md:w-96 bg-transparent md:bg-[#0c162d]">
                    <div className="text-center">
                        <img
                            className="mx-auto mb-0 w-full"
                            src={success}
                            style={{width: '100'}}
                            alt="Taskdon" />
                        <h4 className="mb-5 pb-1 text-xl font-semibold">
                            We are the TD guys
                        </h4>
                    </div>

                    <form className="text-center mx-3 ">
                        <p className="mb-4">Login to your Account</p>
                        {/* username */}
                        <div className="relative  mb-4" dT-te-input-wrapper-init>
                            <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded-sm border-b bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-sate-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-acctive])]:placeholder:opacity-0" id="exampleFormControlInput1"
                                placeholder="Username" />
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Username
                            </label>
                        </div>
                        {/* Password input */}
                        <div className="relative mb-4" data-te-input-wrapper-init>
                            <input
                                type="password"
                                className="peer block min-h-[auto] w-full rounded-sm border-b bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlInput11"
                                placeholder="Password" />
                            <label
                                htmlFor="exampleFormControlInput11"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Password
                            </label>
                        </div>

                        {/* Submit button */}
                        <div className="mb-12 pb-1 pt-1 text-center">
                            <button
                                className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                type="button"
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




    )

}
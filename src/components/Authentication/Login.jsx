import React from "react";
import { AuthContext } from "./AuthContext/AuthContext";
import { success, logo } from "../../assets";


export const Login = () => {

    return (

        <div className=" gradient-form flex items-center justify-center h-screen bg-[#040d21]">
            
                <div className=' h-auto lg:w-6/12 mx-w-7xl mx-auto'>

                    {/* login box */}
                    <div className="px-4 md:px-0 lg:w-6/12 block rounded-lg sm:bg-transparent md:bg-[#0c162d] shadow-lg" >
                        <div className="md:mx-6 md:p-12 ">
                            {/* logo */}
                            <div className="text-center">
                                <img
                                    className="mx-auto w-96"
                                    src={success}
                                    alt="Taskdon" />
                                <h4 className="mb-12 mt-1 pb-1 text-xl font-semi">
                                    We are the TD guys
                                </h4>
                            </div>

                            <form className="text-center">
                                <p className="mb-4">Login to your Account</p>
                                {/* username */}
                                <div className="relative mb-4" dT-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded-sm border-b bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-sate-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-acctive])]:placeholder:opacity-0" id="exampleFormControlInput1"
                                        placeholder="Username" />
                                    <label
                                        for="exampleFormControlInput1"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Username
                                    </label>
                                </div>
                                {/* Password input */}
                                <div class="relative mb-4" data-te-input-wrapper-init>
                                    <input
                                        type="password"
                                        class="peer block min-h-[auto] w-full rounded-sm border-b bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput11"
                                        placeholder="Password" />
                                    <label
                                        htmlFor="exampleFormControlInput11"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Password
                                    </label>
                                </div>

                                {/* Submit button */}
                                <div class="mb-12 pb-1 pt-1 text-center">
                                    <button
                                        class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                        type="button"
                                        style={{
                                            background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                                        }}>
                                        Log in
                                    </button>

                                    {/* Forgot password link */}
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>

            

        </div>
    )

}
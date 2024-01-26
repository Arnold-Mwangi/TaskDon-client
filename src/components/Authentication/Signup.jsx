import React, { useState, useEffect, useContext, useCallback } from 'react';
import TypingText from './TypingText';
import StarsCanvas from '../canvas/stars';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from './AuthContext/AuthContext';
import  RenderForm  from './Form';
import forms from './Resources/resources';


import './signup.css';


const Signup = () => {
    const welcomeParagraphs = ["Welcome to TaskDon !!", "Let's begin the adventure"];
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [showCompletedForm, setShowCompletedForm] = useState(false);

    const authContext = useContext(AuthContext)

    const handleContinue = useCallback(() => {
        if (currentStep <= forms.length) {
            setCurrentStep((prevStep) => prevStep + 1);
        } else {
            return
        }

    }, []);

    const handleFormSubmit = useCallback(async () => {
        



        try {
            // ... (your existing code)

            console.log(formData)

            const response = await fetch('https://taskdon-server.onrender.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const contentType = response.headers.get('content-type');

                // If content type is JSON, attempt to parse it
                if (contentType && contentType.includes('application/json')) {
                    try {
                        const errorResponse = await response.json();
                        const errorMessage = errorResponse?.message || 'Unknown error';
                        throw new Error(`Error sending data to server. Server response: ${errorMessage}`);
                    } catch (jsonError) {
                        console.error('Error parsing JSON:', jsonError);
                        // Handle JSON parsing error
                    }
                } else {
                    // If content type is not JSON, treat it as plain text
                    const errorText = await response.text();
                    throw new Error(`Error sending data to server. Server response: ${errorText}`);
                }
            }

            // ... (your existing code)
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show a message to the user)
        }

        // Reset the form data and show the completed form

    }, [formData, authContext.dispatch]);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }, []);

    

    return (
        <div className='relative z-0 h-full bg-[#040d21]'>
            <Navbar />
            <StarsCanvas />
            <div className='w-full flex items-center justify-center mx-auto shrink max-w-7xl relative align-middle '>
                {/* <h1><TypeWriter text='testing type writer' delay={100 }/> </h1> */}
                <div className='h-auto flex  items-center flex-col'>
                    <form className='flex flex-col my-24 border-2 border-[#202637] bg-[#0c162d] w-96 rounded  z-50 overflow-y-auto p-5'>
                        <TypingText paragraphs={welcomeParagraphs} />
                        {showCompletedForm ? (
                            <div className='flex flex-col'>
                                {/* Display the completed form */}
                                <pre>ded{JSON.stringify(formData)}</pre>
                                {/* Action button for the completed form */}
                                <input
                                    type='button'
                                    name='actionButton'
                                    value='Edit Data'
                                    className='mt-4 px-4 py-2 bg-transparent text-white rounded cursor-pointer'
                                    onClick={() => setShowCompletedForm(false)}
                                />
                            </div>
                        ) : (
                            <div className='flex flex-col items-center'>
                                {RenderForm( currentStep, forms, formData, handleInputChange, handleContinue, handleFormSubmit )}
                                <div className='mt-4'>
                                    {/* Action button for the incomplete form */}
                                    <input
                                        type='button'
                                        name='actionButton'
                                        value='Submit'
                                        className='px-4 py-2 bg-blue-500 text-white rounded cursor-pointer'
                                        onClick={handleFormSubmit}
                                    />
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Signup;

import React, { useState, useContext, useCallback } from 'react';
import TypingText from './TypingText';
import StarsCanvas from '../canvas/stars';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from './AuthContext/AuthContext';
import RenderForm from './Form';
import forms from './Resources/resources';

import './signup.css';

const Signup = () => {
    const welcomeParagraphs = ["Welcome to TaskDon !!", "Let's begin the adventure"];
    const [formData, setFormData] = useState({});
    const [showCompletedForm, setShowCompletedForm] = useState(false);

    const authContext = useContext(AuthContext);

    const handleFormSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            // ... (your existing code)

            console.log(formData);

            const response = await fetch('https://taskdon-server.onrender.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // ... (your existing code)
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show a message to the user)
        }
    }, [formData, authContext.dispatch]);

    const handleInputChange = useCallback((e, name, value) => {
        const inputName = e ? e.target.name : name;
        const inputValue = value !== null ? value : (e ? e.target.value : null);

        setFormData((prevData) => ({ ...prevData, [inputName]: inputValue }));
    }, [setFormData]);

    return (
        <div className='relative z-0 h-screen bg-[#040d21]'>
            <Navbar />
            <StarsCanvas />
            <div className='w-full flex items-center justify-center mx-auto shrink max-w-7xl relative align-middle '>
                <div className='h-auto flex items-center flex-col w-full sm:w-96'>
                <TypingText paragraphs={welcomeParagraphs} />
                    <form
                        className='flex flex-col md:my-24 md:border-2 border-[#202637] bg-transparent md:bg-[#0c162d] w-full md:w-96 rounded  z-50 overflow-y-auto p-5'
                        onSubmit={handleFormSubmit}
                    >
                        
                        {showCompletedForm ? (
                            <div className='flex flex-col'>
                                <pre>ded{JSON.stringify(formData)}</pre>
                                <input
                                    type='button'
                                    name='actionButton'
                                    value='Edit Data'
                                    className='mt-4 px-4 py-2 bg-transparent text-white rounded cursor-pointer'
                                    onClick={() => setShowCompletedForm(false)}
                                />
                            </div>
                        ) : (
                            <div className='flex flex-col'>
                               <RenderForm
                                    forms={forms}
                                    formData={formData}
                                    handleInputChange={handleInputChange}
                                />
                                
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;

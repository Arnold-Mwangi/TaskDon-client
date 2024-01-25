import React, { useState, useEffect, useContext, useCallback } from 'react';
import TypeWriter from './TypeWriter/Typewriter';
import forms from './Resources/resources';
import StarsCanvas from '../canvas/stars';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from './AuthContext/AuthContext';


import './signup.css';

const TypingText = ({ paragraphs, interval = 100, onComplete }) => {
    const [currentParagraph, setCurrentParagraph] = useState(0);
    const [currentLetter, setCurrentLetter] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (currentParagraph >= paragraphs.length) {
            return;
        }

        const currentParagraphText = paragraphs[currentParagraph];

        if (currentLetter < currentParagraphText.length) {
            const typingTimeout = setTimeout(() => {
                setDisplayedText((prevText) => prevText + currentParagraphText[currentLetter]);
                setCurrentLetter((prevLetter) => prevLetter + 1);
            }, interval);

            return () => {
                clearTimeout(typingTimeout);
            };
        } else {
            setCurrentParagraph((prevParagraph) => prevParagraph + 1);
            setCurrentLetter(0);
            setDisplayedText((prevText) => prevText + '\n');
        }
    }, [paragraphs, currentParagraph, currentLetter, interval]);

    return (
        <div className='animate-blink'>
            <div className='p-5 text-[#68e55d]' style={{ whiteSpace: 'pre-line' }}>{displayedText}</div>
        </div>
    );
};

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

            const response = await fetch('http://localhost:3000/users', {
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

    const renderForm = () => {

        const form = forms[currentStep];

        return (
            <div className='flex flex-col'>
                {Array.from(Array(currentStep)).map((_, index) => (
                    <React.Fragment key={index}>


                        <span>&nbsp;</span>

                        <div className="relative z-0 w-full mb-5 group">
                            <input

                                name={forms[index].name}
                                id={form.name}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder={forms[index].placeholder}
                                onChange={handleInputChange}
                                value={formData[forms[index].name] || ''}
                            />

                        </div>
                    </React.Fragment>
                ))}
                {currentStep < forms.length && (
                    <>
                        <div className='md: flex md: items-end justify-between gap-2 '>
                            <div className=' '>


                                <div className="relative z-0 w-full mb-5 group">
                                    {form.type === 'select' ? (
                                        <select

                                            name={form.name}
                                            id={form.name}
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            onChange={handleInputChange}
                                            value={formData[form.name] || ''}
                                        >
                                            {form.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type={form.type}
                                            name={form.name}
                                            id={form.name}
                                            className="block text-center py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                                            required={form.type !== 'select'}
                                            onChange={handleInputChange}
                                            value={formData[form.name] || ''}
                                        />
                                    )}
                                    <label
                                        for={form.name}
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        {form.label}
                                    </label>

                                </div>

                            </div>

                            <div className='text-[#098776] ' >
                                {currentStep !== forms.length - 1 ?

                                    <input
                                        type='button'
                                        name='continue'
                                        value='continue'
                                        className='cursor-pointer ml-5 py-2.5 px-0'
                                        onClick={handleContinue}
                                    /> : ''
                                }
                            </div>


                            {console.log(currentStep)}
                        </div>

                    </>
                )}
            </div>
        );
    };

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
                                {renderForm()}
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

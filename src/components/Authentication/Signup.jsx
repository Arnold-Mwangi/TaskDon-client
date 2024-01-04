import React, { useState, useEffect, useCallback } from 'react';
import TypeWriter from './TypeWriter/Typewriter';
import forms from './Resources/resources';

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

    const handleContinue = useCallback(() => {
        setCurrentStep((prevStep) => prevStep + 1);
    }, []);

    const handleFormSubmit = useCallback(() => {
        // Perform any necessary actions with the form data
        // For now, just log the form data
        console.log(formData);

        // Reset the form data and show the completed form
        setFormData({});
        setShowCompletedForm(true);
    }, [formData]);

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
                        <input
                            className='text-[#689b4c] cursor-text'
                            type='text'
                            name={forms[index].name}
                            placeholder={forms[index].placeholder}
                            value={formData[forms[index].name] || ''}
                            onChange={handleInputChange}
                            
                        />
                        <span>&nbsp;</span>
                    </React.Fragment>
                ))}
                {currentStep < forms.length && (
                    <>
                        <div className='flex items-end'>
                            <div className='flex flex-col'>
                                <label className='text-[#3fcfc9]' for={form.name}>{form.name}</label>
                                <input
                                    type='text' className='bg-transparent text-[#689b4c]'
                                    autoFocus

                                    name={form.name}
                                    placeholder={form.placeholder}
                                    onChange={handleInputChange}
                                    value={formData[form.name] || ''}
                                />
                            </div>

                            <input
                                type='button'
                                name='continue'
                                value='continue'
                                className='cursor-pointer ml-5'
                                onClick={handleContinue}
                            />
                        </div>

                    </>
                )}
            </div>
        );
    };

    return (
        <div className='w-full mx-auto max-w-7xl relative align-middle'>
            {/* <h1><TypeWriter text='testing type writer' delay={100 }/> </h1> */}
            <div className='h-auto flex  items-center flex-col'>
                <form className='flex flex-col my-24 border-b-1 border-[#1a2134] bg-[#0c162d] w-96 rounded shadow-sm shadow-stone-50 md:shadow-stone-50 z-50 overflow-y-auto'>
                    <TypingText paragraphs={welcomeParagraphs} />
                    {showCompletedForm ? (
                        <div className='flex flex-col'>
                            {/* Display the completed form */}
                            <pre>{JSON.stringify(formData, null, 2)}</pre>
                            {/* Action button for the completed form */}
                            <input
                                type='button'
                                name='actionButton'
                                value='Action'
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
                                    value='Action'
                                    className='px-4 py-2 bg-blue-500 text-white rounded cursor-pointer'
                                    onClick={handleFormSubmit}
                                />
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Signup;

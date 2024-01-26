import React from "react";



const RenderForm = ( currentStep, forms, formData, handleInputChange, handleContinue, handleFormSubmit ) => {

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
                                    htmlFor={form.name}
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

export default RenderForm;
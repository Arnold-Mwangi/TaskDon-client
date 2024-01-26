import React from "react";
import { useNavigate } from "react-router-dom";

const RenderForm = ({ currentStep, forms, formData, handleInputChange, handleFormSubmit }) => {

  const form = forms[currentStep];
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div className="flex flex-col">
      {forms.map((form, index) => (
        <div key={index} className="relative z-0 w-full mb-5 group">
          {form.type === "select" ? (
            <div className="relative">
              <select
                name={form.name}
                id={form.name}
                className="block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) => handleInputChange(e, form.name, form.type === "select" ? e.target.value : null)}
                required={form.fields[0].required}
                value={formData[form.name] || ""}
                
              >
                <option value="" disabled>
                Select an option
                </option>
                {form.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <input
              type={form.type}
              name={form.name}
              id={form.name}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required={form.fields[0].required}
              onChange={(e) => handleInputChange(e, form.name, form.type === "select" ? e.target.value : null)}
              value={formData[form.name] || ""}
            />
          )}
          <label
            htmlFor={form.name}
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {form.label}
          </label>
        </div>
      ))}
      <div className="mt-4 flex flex-col items-center gap-5 ">
        <input
          type="submit"
          name="actionButton"
          value="Submit"
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        />
        <div>
            <p>Already have an Account? 
                &nbsp;
                 <a
                 onClick = {handleLogin}
                 className="text-blue-500 underline underline-offset-2"
                  href="#">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default RenderForm;

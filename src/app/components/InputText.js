"use client"
import { useState } from 'react';

export default function InputText({ handleInputChange, inputType, inputPlaceholder }) {
    const [isFocused, setIsFocused] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);

    const validateEmail = (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(value);
      setIsValidEmail(isValid);
      //handleInputChange(value);
    };

    return (
        <div className="relative w-full">
            <input
               type={inputType}
               onChange={(e) => (inputType === 'email' ? validateEmail(e.target.value) : handleInputChange(e.target.value))}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full p-3 pt-4 text-lg border border-solid border-gray-300 text-text font-normal rounded outline-none focus:border-[#dac895]"
            />
            <label
                className="absolute top-0 left-5 transform -translate-y-1/2  text-gray-500 bg-white px-2"
            >
                {inputPlaceholder}
                { !isValidEmail  ?  <span className='ml-4 text-sm  text-red-600 '>Introduce un formato de email válido</span> : ""}
            </label>
        </div>
    );
}

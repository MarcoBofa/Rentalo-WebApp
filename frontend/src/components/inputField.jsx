import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputField = ({ label, type, datePicker }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    if (datePicker) {
        return (
            <div className="relative">
                <DatePicker
                    selected={dateOfBirth}
                    onChange={(date) => setDateOfBirth(date)}
                    dateFormat="dd/MM/yyyy"
                    className={`w-full border p-4 rounded transition-all duration-200 outline-none ${focused ? 'border-orange-500 border-3' : 'border-gray-300'
                        }`}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    maxDate={new Date()}
                    showYearDropdown
                    showMonthDropdown
                />
                <label
                    htmlFor={label}
                    className={`absolute left-2 px-1 text-gray-700 transition-all duration-200 ${focused || dateOfBirth ? 'text-xs top-[-8px] border-orange-500 text-orange-500' : 'text-md top-4'
                        } ${focused || dateOfBirth ? 'bg-white' : 'bg-transparent'} py-[2px] pointer-events-none`}
                    style={{
                        zIndex: focused || dateOfBirth ? 1 : 'auto',
                    }}
                >
                    {label}
                </label>
            </div>
        );
    }


    return (
        <div className="relative">
            <input
                type={type}
                value={value}
                onChange={handleInputChange}
                className={`w-full border p-4 rounded transition-all duration-200 ${focused || value ? 'border-orange-500 border-3' : 'border-gray-300'
                    } outline-none`}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                required
            />
            <label
                htmlFor={label}
                className={`absolute left-2 px-1 text-gray-700 transition-all duration-200 ${focused || value ? 'text-xs top-[-8px] text-orange-500' : 'text-md top-4'
                    } ${focused || value ? 'bg-white' : 'bg-transparent'} py-[2px] pointer-events-none`}
                style={{
                    zIndex: focused || value ? 1 : 'auto',
                }}
            >
                {label}
            </label>
        </div>
    );
};

export default InputField;

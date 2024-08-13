import React from 'react';

const InputField = ({ label, type, name, value, onChange, placeholder = '', id, error = '' }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block mb-2">{label}</label>
            <input 
                type={type} 
                name={name} 
                id={id} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}
                className={`w-full p-4 border rounded-lg ${error ? 'border-red-500' : 'border-gray-300'}`} 
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default InputField;

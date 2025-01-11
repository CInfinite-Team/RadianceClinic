import React from 'react'

const FormInput = ({ label, name, type = 'text', value, onChange, required = false, placeholder, options }) => {
    const baseClassName = 'text-[#554075] rounded-[3px] border border-[#B298DC] w-full p-3';
    
    if (type === 'select') {
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor={name} className="text-[#554075] font-bold">{label}</label>
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={baseClassName}
            required={required}
          >
            <option value="">{placeholder}</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    }
  
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-[#554075] font-bold">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClassName}
          required={required}
        />
      </div>
    );
  };

export default FormInput


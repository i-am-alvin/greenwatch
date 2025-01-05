import React from 'react';

export const Checkbox = ({ label, checked, onChange, id }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
      />
      {label && (
        <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
          {label}
        </label>
      )}
    </div>
  );
}; 
import React from 'react';

export const Slider = ({ value, onChange, min, max, step = 1 }) => {
  return (
    <div className="w-full">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        step={step}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
      />
    </div>
  );
}; 
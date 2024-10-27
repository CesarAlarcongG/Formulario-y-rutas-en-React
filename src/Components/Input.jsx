import React, { forwardRef } from 'react';

export const Input = forwardRef(({ nombreLabel, inputType, error, ...props }, ref) => {

  return (

    <div>

      <label htmlFor={nombreLabel}>{nombreLabel}</label>

      <input type={inputType} id={nombreLabel} ref={ref} {...props} />
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
      
    </div>

  );
});

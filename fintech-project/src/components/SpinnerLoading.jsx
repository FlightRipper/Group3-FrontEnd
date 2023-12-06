import React from 'react';

const SpinnerLoading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default SpinnerLoading;

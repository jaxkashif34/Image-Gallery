import ClipLoader from 'react-spinners/BounceLoader';
import React from 'react';

const Loader = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="purple" loading={loading} size={150} aria-label="Loading..." data-testid="loader" />
    </div>
  );
};

export default Loader;

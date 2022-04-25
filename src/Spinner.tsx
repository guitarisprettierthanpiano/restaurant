import React from 'react';

const Spinner: React.FC = () => {
  const Close: () => void = function () {
    document.getElementById('spinner').style.display = 'none';
  };
  setTimeout(Close, 700);

  return <div id="spinner"></div>;
};

export default Spinner;

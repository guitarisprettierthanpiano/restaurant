import React from 'react'

const Spinner = () => {

  const Close = function(){
    document.getElementById('spinner').style.display = 'none';
  };
  setTimeout(Close, 700);

  return (
    <>
      <div id='spinner'>

      </div>
      {


      }
    </>
  )
}

export default Spinner
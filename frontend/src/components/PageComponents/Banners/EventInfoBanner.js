import React from 'react';

function EventInfoBanner() {
  const containerStyle = {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center', 
    // border: '2px solid black',
    // borderRadius: '10px',
    padding: '10px', 
    width: '70%',
    font: 'Avenir',
  };

  return (
    <div class="" style={containerStyle}>
      <p>Join us for Thanksgiving Dinner next Thursday to enjoy a nice meal with your fellow members!</p>
    </div>
  );
}

export default EventInfoBanner;

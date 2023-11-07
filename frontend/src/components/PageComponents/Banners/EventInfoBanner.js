import React from 'react';

function EventInfoBanner() {

  return (
    <div className="flex justify-between p-4 w-3/4 font-Avenir">
      <div className="w-1/2 p-4 text-left">
        <p>Join us for Thanksgiving Dinner next Thursday to enjoy a nice meal with your fellow members!</p>
      </div>
      <div className="w-1/2 p-4 font-bold text-right">
        <p>November 18, 2023</p>
        <p>6 - 8 PM</p>
        <p></p>
      </div>
    </div>
  );
}

export default EventInfoBanner;

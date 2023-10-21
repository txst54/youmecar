import React from 'react';

// displays a list of riders and the name of the driver
const RiderDriverList = ({ riders }) => {
  return (
    <div className="list-container">
      <h2>Riders and Their Drivers</h2>
      <ul>
        {riders.map((rider) => (
          <li key={rider.id}>
            <strong>Rider:</strong> {rider.name} <br />
            <strong>Driver:</strong> {rider.driverName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RiderDriverList;
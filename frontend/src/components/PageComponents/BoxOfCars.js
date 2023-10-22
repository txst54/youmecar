import React from 'react';
import Car from './Car'; // Import your Car component

function BoxOfCars({ carArray }) {
  // Create an array of Car components
  const cars = carArray.map((car, index) => (
    <Car key={`car${index}`} numCols={car.numCols} />
  ));

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    border: '2px solid black',
    borderRadius: '10px',
    padding: '10px', 
    margin: '50px', 
  };

  return (
    <div className="box-of-cars" style={containerStyle}>
      {cars}
    </div>
  );
}

export default BoxOfCars;

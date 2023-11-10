import React, { useState } from 'react';
import Car from './Car'; 

function BoxOfCars({ carArray }) {

  // Create an array of Car components
  const cars = carArray.map((car, index) => (
    <Car key={`car${index}`} numCols={car.numCols} />
  ));

  return (
    <div className="flex justify-center items-center border-2 border-black rounded-lg p-10 mx-20">
      {cars}
    </div>
  );
}

export default BoxOfCars;

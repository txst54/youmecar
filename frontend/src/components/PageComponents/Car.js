import React, { useState } from 'react';

function Car() {
  const numCols = 3;
  const initialSeatStates = Array(2).fill().map(() => Array(numCols).fill(false));
  const [seatStates, setSeatStates] = useState(initialSeatStates);

  const handleSeatClick = (row, col) => {
    const newSeatStates = [...seatStates];
    newSeatStates[row][col] = !newSeatStates[row][col];
    setSeatStates(newSeatStates);
  };

  const carWidth = 100; // Adjust the width as needed
  const carHeight = 80; // Adjust the height as needed
  const carBodyWidth = carWidth * 0.75;
  const carBodyHeight = carHeight * 0.75;
  const seatSize = carBodyWidth / numCols;

  return (
    <div className="car p-4 bg-gray-300 w-[calc(100px*4)] h-[calc(100px*3)] relative cursor-pointer transition-colors duration-300 hover:bg-gray-400">
      <p className="justify-center">DRIVER NAME</p>
      <div className={`car-body w-[${carBodyWidth}px] h-[${carBodyHeight}px] bg-gray-400 mx-auto rounded-lg relative grid grid-cols-2 grid-rows-2 gap-2 flex items-center`}>
        {seatStates.map((row, rowIndex) => 
          row.map((isTaken, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`seat w-10 h-10 rounded-full cursor-pointer transition-colors duration-300 mx-1 ${isTaken ? 'bg-red-500' : 'bg-white'}`}
              onClick={() => handleSeatClick(rowIndex, colIndex)}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default Car;

import React, { useState } from 'react';

function Car({ numCols }) {
  const initialSeatStates = Array(2).fill().map((_, row) =>
    Array(numCols).fill(false).map((_, col) => (row === 0 && col === 0 ? true : false))
  );
  const [seatStates, setSeatStates] = useState(initialSeatStates);

  const handleSeatClick = (row, col) => {
    if (!(row === 0 && col === 0)) {
      const newSeatStates = [...seatStates];
      newSeatStates[row][col] = !newSeatStates[row][col];
      setSeatStates(newSeatStates);
    }
  };

  const carBodyWidth = 75;
  const carBodyHeight = 60;
  const seatSize = `${carBodyWidth / (2 * numCols)}%`;

  return (
    <div className="car p-4 bg-youmeblue w-[calc(140px)] h-[${carWidth}px] rounded-lg relative">
      <p className="text-center">DRIVER NAME</p>
      <div className={`car-body w-[${carBodyWidth}px] h-[${carBodyHeight}px] bg-gray-400 mx-auto rounded-lg relative grid grid-cols-2 grid-rows-2 gap-2 flex items-center`}>
        {seatStates.map((row, rowIndex) => 
          row.map((isTaken, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`seat w-10 h-10 rounded-full cursor-pointer transition-colors duration-300 mx-1 ${isTaken ? 'bg-red-500' : 'bg-white hover:bg-red-300'} `}
              onClick={() => handleSeatClick(rowIndex, colIndex)}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default Car;


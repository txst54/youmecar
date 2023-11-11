import React, { useState } from 'react';

function Car({ numRows }) {
  const initialSeatStates = 
    Array(numRows).fill().map((_, row) =>
    Array(3).fill(false).map((_, col) => (row === 0 && col === 0 ? true : false))
  );
  const [seatStates, setSeatStates] = useState(initialSeatStates);

  const handleCarBodyClick = () => {
    if (!seatStates[0][2]) {
      const newSeatStates = seatStates.map((row, rIndex) =>
        rIndex === 0
          ? [...row.slice(0, 2), true, ...row.slice(2 + 1)]
          : [...row]
      );
      setSeatStates(newSeatStates);
      return;
    } else {
      for (let rowIndex = 1; rowIndex < numRows; rowIndex++) {
        for (let colIndex = 0; colIndex < 3; colIndex++) {
          if (!seatStates[rowIndex][colIndex]) {
            const newSeatStates = seatStates.map((row, rIndex) =>
              rIndex === rowIndex
                ? [...row.slice(0, colIndex), true, ...row.slice(colIndex + 1)]
                : [...row]
            );
    
            setSeatStates(newSeatStates);
            return; 
          }
        }
      }
    }
  };

  return (
    <div className="car p-4 bg-youmeblue rounded-lg relative">
      <p className="text-center">DRIVER NAME</p>
      <div className="car-body bg-gray-400 cursor-pointer transition-colors duration-300 hover:bg-slate-700 mx-auto rounded-lg relative grid grid-rows-${numRows} grid-cols-3" onClick={handleCarBodyClick}>
          {seatStates.map((row, rowIndex) => 
            row.map((isTaken, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`translate-x-2 translate-y-1 flex seat w-3.5 h-3.5 mt-2 mb-5 rounded-full mx-1 ${isTaken ? 'bg-red-500' : (rowIndex === 0 && colIndex === 1 ? 'bg-black' : 'bg-white')}`}
              ></div>
            ))
          )}
      </div>
    </div>
  );
}

export default Car;


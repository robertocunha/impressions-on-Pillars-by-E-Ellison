import React, { useState } from 'react';

const Matrix = () => {
  const [matrix, setMatrix] = useState([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]);

  const updateMatrix = (text, startRow, startCol) => {
    const newMatrix = matrix.map(row => [...row]);
    for (let i = 0; i < text.length; i++) {
      if (startRow < newMatrix.length && startCol + i < newMatrix[startRow].length) {
        newMatrix[startRow][startCol + i] = text[i];
      }
    }
    setMatrix(newMatrix);
  };

  return (
    <div>
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((cell, colIndex) => (
            <div key={colIndex} style={{ padding: '10px', border: '1px solid black' }}>
              {cell}
            </div>
          ))}
        </div>
      ))}
      <button onClick={() => updateMatrix("abc", 0, 0)}>Preencher Linha 1</button>
    </div>
  );
};

export default Matrix;

import React, { useState, useEffect } from 'react';

// Função para criar uma matriz vazia
const createEmptyMatrix = (rows, columns) => {
    return Array.from({ length: rows }, () => Array(columns).fill(' '));
};

// Função para escrever horizontalmente com base no tempo
const writeHorizontal = (text, startRow, startColumn, startTime, endTime, matrix, setMatrix) => {
    // Preencher imediatamente
    for (let i = 0; i < text.length; i++) {
        if (startColumn + i < matrix[0].length) {
            matrix[startRow][startColumn + i] = text[i];
        }
    }

    // Atualizar a matriz para refletir as mudanças imediatamente
    setMatrix([...matrix]);

    // Programar o desaparecimento do texto
    setTimeout(() => {
        // Limpar o texto da matriz existente
        for (let i = 0; i < text.length; i++) {
            if (startColumn + i < matrix[0].length) {
                matrix[startRow][startColumn + i] = ' ';
            }
        }
        // Atualizar a matriz para refletir a limpeza
        setMatrix([...matrix]);
    }, endTime - startTime);
};

// Componente MatrixNew
const MatrixNew = () => {
    const [matrix, setMatrix] = useState(createEmptyMatrix(10, 60));

    // Função para atualizar a matriz
    const updateMatrix = (text, startRow, startColumn, startTime, endTime, direction) => {
        const newMatrix = createEmptyMatrix(10, 60);
        if (direction === "horizontal") {
            writeHorizontal(text, startRow, startColumn, startTime, endTime, newMatrix, setMatrix);
        }
    };

    return (
        <div>
            {matrix.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((cell, colIndex) => (
                        <div key={colIndex} style={{ padding: '5px', border: '1px solid black', width: '20px', height: '20px', textAlign: 'center' }}>
                            {cell}
                        </div>
                    ))}
                </div>
            ))}
            {/* Botões para atualizar a matriz como exemplo */}
            <button onClick={() => updateMatrix("abc", 0, 0, Date.now(), Date.now() + 5000, "horizontal")}>
                Preencher Linha 1
            </button>
        </div>
    );
};

export default MatrixNew;

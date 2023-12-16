import React, { useState } from 'react'


const Operation = ({ handleOperationChange }) => {
    const operation = [
        "+",
        "-",
        "x",
        "/",
    ];

    const setOperation = (op) => {
        handleOperationChange(op); // Call the handleOperationChange received as a prop
    }

  return (
    <>
        <div className='operationStyle' onClick={() => setOperation(operation[0])}>{operation[0]}</div>
        <div className='operationStyle' onClick={() => setOperation(operation[1])}>{operation[1]}</div>
        <div className='operationStyle' onClick={() => setOperation(operation[2])}>{operation[2]}</div>
        <div className='operationStyle' onClick={() => setOperation(operation[3])}>{operation[3]}</div>
    </>

  )
}

export default Operation
import React, { useState } from 'react';

const Calculator = () => {
    const [a, getA] = useState(0);
    const [b, getB] = useState(0);
    const [res, getRes] = useState(0);

    const result = (v) => {
        if (v === "+") {
            getRes(a + b);
        } else if (v === "-") {
            getRes(a - b);
        } else if (v === "*") {
            getRes(a * b);
        } else if (v === "/") {
            getRes(b !== 0 ? a / b : "Infinity");
        } else {
            getRes("error");
        }
    }

    return (
        <div>
            <input type='text' placeholder='first number' onChange={(e) => getA(Number(e.target.value))}></input>
            <input type='text' placeholder='second number' onChange={(e) => getB(Number(e.target.value))}></input>
            <button className='button' onClick={() => result("+")}>+</button>
            <button className='button' onClick={() => result("-")}>-</button>
            <button className='button' onClick={() => result("*")}>*</button>
            <button className='button' onClick={() => result("/")}>/</button>
            <h1>Result: {res}</h1>
        </div>
    );
}

export default Calculator;
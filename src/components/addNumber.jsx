import React, { useState } from 'react';

const AddNumber = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Лічильник: {count}</h1>
            <button className='button' onClick={increment}>Додати</button>
            <button className='button' onClick={decrement}>Відняти</button>
        </div>
    );
};

// npm install astro@latest @astrojs/react@latest react@latest react-dom@latest
export default AddNumber;
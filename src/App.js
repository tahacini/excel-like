import React, { useState } from 'react';
import { Line } from './components';
import './App.css';

function App() {
  const [arr, setArr] = useState([
    { num1: 12, num2: 21, num3: null },
    { num1: 123, num2: 32, num3: null },
    { num1: 123, num2: 32, num3: null },
  ]);

  const handleChange = (newValue, selectedItem, index) => {
    const newArr = arr.map((el, newIndex) => {
      if (newIndex === index) {
        const newObj = {
          ...el,
          [selectedItem]: +newValue,
        };
        return {
          ...newObj,
          num3: newObj.num1 + newObj.num2,
        };
      }
      return el;
    });
    setArr(newArr);
  };

  return (
    <div className="App">
      <div>
        {arr.map((el, index) => (
          <Line rowData={el} rowIndex={index} handleChange={handleChange} />
        ))}
      </div>
    </div>
  );
}

export default App;

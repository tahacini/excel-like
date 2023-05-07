import React, { useState } from 'react';
import { Line, Header } from './components';
import './App.css';
const x = 10;
function App() {
  const [header] = useState([
    { label: 'Unit Ex', key: 'unitEx' },
    { label: 'Discount %', key: 'discount' },
    { label: 'After Discount', key: 'afterDiscount' },
    { label: 'Amount', key: 'amount' },
    { label: 'Purchase Price', key: 'purchasePrice' },
    { label: 'Margin %', key: 'margin' },
    { label: 'Vat %', key: 'vat' },
    { label: 'Total Ex', key: 'totalEx' },
    { label: 'Total', key: 'total' },
  ]);
  const [arr, setArr] = useState([
    {
      productName: 'Product A',
      unitEx: 12.64,
      discount: 11,
      afterDiscount: undefined,
      amount: 4,
      purchasePrice: 7.45,
      margin: undefined,
      vat: 21,
      totalEx: undefined,
      total: undefined,
    },
  ]);

  const times = (num) => num * x;

  const handleDiscount = (num1, num2) => {
    const result = (times(num1) - (times(num1) / times(100)) * times(num2)) / x;
    return result;
  };

  const handleMargin = (num1, num2) => {
    const result =
      (((times(num1) - times(num2)) / times(num2)) * times(100)) / x;
    return result;
  };

  const handleTotalEx = (num1, num2) => {
    const result = num1 * num2;
    return result;
  };

  const handleTotal = (num1, num2) => {
    const result = (times(num1) * (times(num2) / times(100) + 1)) / x;
    return result;
  };

  const handleChange = (newValue, selectedItem, index) => {
    const newArr = arr.map((el, newIndex) => {
      if (newIndex === index) {
        const newObj = {
          ...el,
          [selectedItem]: newValue,
        };
        const afterDiscount = handleDiscount(newObj.unitEx, newObj.discount);
        const margin = handleMargin(afterDiscount, newObj.purchasePrice);
        const totalEx = handleTotalEx(afterDiscount, newObj.amount);
        const total = handleTotal(totalEx, newObj.vat);
        return {
          ...newObj,
          afterDiscount,
          margin,
          totalEx,
          total,
        };
      }
      return el;
    });
    setArr(newArr);
  };

  return (
    <div className="App">
      <div className="grid-container">
        <Header rowData={header} />
        {arr.map((el, index) => (
          <Line
            key={`line-${index}`}
            rowData={el}
            rowIndex={index}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

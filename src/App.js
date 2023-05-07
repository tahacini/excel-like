import React, { useState } from 'react';
import { Line, Header, AddModal } from './components';
import {
  handleDiscount,
  handleMargin,
  handleTotalEx,
  handleTotal,
  handletotalWithoutDiscount,
  handleDiscountAmountWithVat,
} from './utils/utils';
import './App.css';

function App() {
  const [modal, setModal] = useState(false);
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
    { label: 'Total Without Discount', key: 'totalWithoutDiscount' },
    { label: 'Discount Amount With Vat', key: 'discountAmountWithVat' },
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
      totalWithoutDiscount: undefined,
      discountAmountWithVat: undefined,
    },
  ]);

  const handleChange = (newValue, selectedItem, index) => {
    const newArr = arr.map((el, newIndex) => {
      if (newIndex === index) {
        const shoudAdd = selectedItem && { [selectedItem]: newValue * 1 };
        const newObj = {
          ...el,
          ...shoudAdd,
        };
        const afterDiscount = handleDiscount(newObj.unitEx, newObj.discount);
        const margin = handleMargin(afterDiscount, newObj.purchasePrice);
        const totalEx = handleTotalEx(afterDiscount, newObj.amount);
        const total = handleTotal(totalEx, newObj.vat);
        const totalWithoutDiscount = handletotalWithoutDiscount(
          newObj.unitEx,
          newObj.amount,
          newObj.vat
        );
        const discountAmountWithVat = handleDiscountAmountWithVat(
          totalWithoutDiscount,
          total
        );
        return {
          ...newObj,
          afterDiscount,
          margin,
          totalEx,
          total,
          totalWithoutDiscount,
          discountAmountWithVat,
        };
      }
      return el;
    });
    setArr(newArr);
  };

  const handleAdd = (productName) => {
    if (!productName) return;

    setArr((el) => {
      return [
        ...el,
        {
          productName,
          unitEx: undefined,
          discount: undefined,
          afterDiscount: undefined,
          amount: undefined,
          purchasePrice: undefined,
          margin: undefined,
          vat: undefined,
          totalEx: undefined,
          total: undefined,
        },
      ];
    });
    setModal(false);
  };

  const handleDel = (selectedIndex) => {
    setArr((el) => {
      return el.filter((_, rowIndex) => rowIndex !== selectedIndex);
    });
  };

  const openModal = () => setModal(true);

  return (
    <div className="App">
      <div className="grid-container">
        <div>
          <Header
            rowData={header}
            handleAdd={openModal}
            isAddOpen={arr.length}
          />
          {arr.map((el, index) => {
            const arrLenght = arr.length;
            const addBtn =
              arrLenght === 1
                ? 'BOTH'
                : arrLenght - 1 === index
                ? 'ADD'
                : false;
            return (
              <Line
                key={`line-${index}`}
                rowData={el}
                rowIndex={index}
                handleChange={handleChange}
                addBtn={addBtn}
                handleAdd={openModal}
                handleDel={() => handleDel(index)}
              />
            );
          })}
        </div>
      </div>
      {modal && (
        <AddModal onSubmit={handleAdd} onCancel={() => setModal(false)} />
      )}
    </div>
  );
}

export default App;

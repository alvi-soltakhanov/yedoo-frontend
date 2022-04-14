import React from "react";

const Autocomplete = () => {
  return (
    <div>
      <table>
        <tr>
          <td>Номер заказа</td>
          <td>
            <button id={1}>Взять заказ 2</button>
          </td>
        </tr>
        <tr>
          <td>Номер заказа 2</td>
          <td>
            <button id={2}>Взять заказ 2</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Autocomplete;

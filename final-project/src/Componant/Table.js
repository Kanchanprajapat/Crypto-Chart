import React from "react";
import "../App.css";

const Table = ({ data }) => {
  return (
    <table id="Table">
      <tbody>
        {data.map((item) => (
          <tr className="row" key={item.id}>
            <td>
              <div className="logo_name">
                <div className="logo">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="name">{item.name}</div>
              </div>
            </td>
            <td className="symbol">{item.symbol.toUpperCase()}</td>
            <td className="price">{item.current_price}</td>
            <td className="volume">{item.total_volume}</td>
            <td
              className="percentage"
              style={
                item.ath_change_percentage >= 0
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              {item.ath_change_percentage.toFixed(2)}%
            </td>
            <td className="market_cap">Mkt Cap: ${item.market_cap}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

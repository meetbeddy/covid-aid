import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries }) {
  console.log(countries);
  return (
    <table className="table" id="covid-tracker">
      <thead>
        <tr>
          <th>State</th>
          <th>Confirmed Cases</th>
          <th>Recovered</th>
          <th>Death</th>
        </tr>
      </thead>

      {countries.map((country) => (
        <tbody>
          <tr>
            <td>{country.state}</td>
            <td>
              <strong>{numeral(country.confirmedCases).format("0,0")}</strong>
            </td>
            <td>
              <strong>{numeral(country.discharged).format("0,0")}</strong>
            </td>
            <td>
              <strong>{numeral(country.death).format("0,0")}</strong>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;

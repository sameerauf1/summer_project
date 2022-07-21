import React from "react";
import { useState, useEffect } from "react";
import "./Sector.css";

function Sector() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("Sector_industries.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="dropDown">
      <h1> User Interface</h1>
      <p1> &nbsp; Sectors: </p1>
      <select>
        <option> Not Selected </option>
        {Object.keys(data) &&
          Object.keys(data).length > 0 &&
          Object.keys(data).map((key) => <option>{key}</option>)}
      </select>
      <br></br>
      <br></br>
      <p2> &nbsp; Industries: </p2>
      <select>
        <option> Select Capital Good Industry</option>
        {data["Capital Goods"] &&
          data["Capital Goods"].length > 0 &&
          data["Capital Goods"].map((item, i) => (
            <option key={i}>{item}</option>
          ))}
      </select>
      <select>
        <option> Select Basic Industry</option>
        {data["Basic Industries"] &&
          data["Basic Industries"].length > 0 &&
          data["Basic Industries"].map((item, i) => (
            <option key={i}>{item}</option>
          ))}
      </select>
      <select>
        <option>Select Finance Industry</option>
        {data.Finance &&
          data.Finance.length > 0 &&
          data.Finance.map((item, i) => <option key={i}>{item}</option>)}
      </select>
      <select>
        <option>Select Miscellaneous Industry</option>
        {data.Miscellaneous &&
          data.Miscellaneous.length > 0 &&
          data.Miscellaneous.map((item, i) => <option key={i}>{item}</option>)}
      </select>
      <select>
        <option> Select Health Care Industry</option>
        {data["Health Care"] &&
          data["Health Care"].length > 0 &&
          data["Health Care"].map((item, i) => <option key={i}>{item}</option>)}
      </select>
      <select>
        <option> Select Consumer Service Industry</option>
        {data["Consumer Services"] &&
          data["Consumer Services"].length > 0 &&
          data["Consumer Services"].map((item, i) => (
            <option key={i}>{item}</option>
          ))}
      </select>
      <br></br>
      <br></br>
      <p2> &emsp; &emsp; &emsp; &emsp; &nbsp; &nbsp;</p2>
      <select>
        <option>Select Transportation Industry</option>
        {data.Transportation &&
          data.Transportation.length > 0 &&
          data.Transportation.map((item, i) => <option key={i}>{item}</option>)}
      </select>
      <select>
        <option>Select Technology Industry</option>
        {data.Technology &&
          data.Technology.length > 0 &&
          data.Technology.map((item, i) => <option key={i}>{item}</option>)}
      </select>
      <select>
        <option> Select Consumer Durables</option>
        {data["Consumer Durables"] &&
          data["Consumer Durables"].length > 0 &&
          data["Consumer Durables"].map((item, i) => (
            <option key={i}>{item}</option>
          ))}
      </select>
      <select>
        <option> Select Consumer Non-Durables</option>
        {data["Consumer Non-Durables"] &&
          data["Consumer Non-Durables"].length > 0 &&
          data["Consumer Non-Durables"].map((item, i) => (
            <option key={i}>{item}</option>
          ))}
      </select>
      <select>
        <option>Select Energy Industry</option>
        {data.Energy &&
          data.Energy.length > 0 &&
          data.Energy.map((item, i) => <option key={i}>{item}</option>)}
      </select>
      <select>
        <option> Select Public Utilities</option>
        {data["Public Utilities"] &&
          data["Public Utilities"].length > 0 &&
          data["Public Utilities"].map((item, i) => (
            <option key={i}>{item}</option>
          ))}
      </select>
    </div>
  );
}

export default Sector;

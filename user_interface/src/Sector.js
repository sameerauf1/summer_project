import React from "react";
import { useState, useEffect } from "react";

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
      <select>
        <option> Sectors </option>
        {Object.keys(data) &&
          Object.keys(data).length > 0 &&
          Object.keys(data).map((key) => <option>{key}</option>)}
      </select>
      <select>
        <option> Sub-industries</option>
        {Object.keys(data) &&
          Object.keys(data).length > 0 &&
          Object.keys(data).map((key) => <option>{key}</option>)}
        }
      </select>
    </div>
  );
}

export default Sector;

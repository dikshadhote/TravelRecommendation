import "./styles.css";
import { useState } from "react";
var color = "red";

var placeDB = {
  mumbai: [
    { name: "Gate way of India", rating: "4/5" },
    { name: "Marine drive", rating: "4.8/5" }
  ],
  pune: [
    { name: "Shaniwar wada", rating: "3.8/5" },
    { name: "Sinhgad fort", rating: "4/5" }
  ],
  agra: [
    { name: "Taj Mahal", rating: "4.5/5" },
    { name: "Agra fort", rating: "4.3/5" }
  ]
};

//var place = Object.keys(placeDB);
//console.log(place[0]);

export default function App() {
  var [selectedPlace, setPlace] = useState("agra");
  function placeClickHandler(place) {
    setPlace(place);
  }
  return (
    <div className="App">
      <div class="header">
        <h1>
          Travel Recommendation <span>🏝️</span>
        </h1>
        <p style={{ fontSize: "smaller" }}>
          Checkout my favorite places to visit in
          <span style={{ color }}> India</span>.Select a place to get started
        </p>
      </div>
      <div class="button-pallete">
        {Object.keys(placeDB).map((place) => (
          <button
            onClick={() => placeClickHandler(place)}
            style={{
              padding: "0.2rem",
              cursor: "pointer",
              margin: "0.5rem",
              width: "80px"
            }}
          >
            {place}
          </button>
        ))}
      </div>
      <div>
        <ul>
          {placeDB[selectedPlace].map((place) => (
            <li key={place.name}>
              {""}
              <div
                style={{
                  fontsize: "larger",
                  fontWeight: "bold",
                  marginBottom: "0.5rem"
                }}
              >
                {place.name}
              </div>
              <div style={{ fontsize: "2px" }}>{place.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

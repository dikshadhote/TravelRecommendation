import "./styles.css";
var color = "red";
export default function App() {
  return (
    <div className="App">
      <h1>
        Travel Recommendation <span>🏝️</span>{" "}
      </h1>
      <p>
        Checkout my favorite places to visit in{" "}
        <span style={{ color }}>India</span>.Select a place to get started
      </p>
      <div>
        <button
          style={{
            padding: "0.2rem",
            cursor: "pointer",
            margin: "0.5rem",
            width: "80px"
          }}
        >
          Mumbai
        </button>
        <button
          style={{
            padding: "0.2rem",
            cursor: "pointer",
            margin: "0.5rem",
            width: "80px"
          }}
        >
          Pune
        </button>
        <button
          style={{
            padding: "0.2rem",
            cursor: "pointer",
            margin: "0.5rem",
            width: "80px"
          }}
        >
          Agra
        </button>
      </div>
    </div>
  );
}

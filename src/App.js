import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App container-fluid ">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by Magda Tudora and it is open sourced on{" "}
        <a
          href="https://github.com/Magda0006/React-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;

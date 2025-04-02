import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App container-fluid ">
      <Form defaultCity="New York" />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/Magda0006" target="blank">
          Magda Tudora
        </a>{" "}
        and it is open sourced on{" "}
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

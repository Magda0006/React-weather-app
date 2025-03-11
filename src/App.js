import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container m-5">
        <Weather />
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
    </div>
  );
}

export default App;

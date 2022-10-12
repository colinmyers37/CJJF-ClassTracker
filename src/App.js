import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <button className="btn btn-danger">Bootstrap working</button>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <form action="../../post" method="post" className="form">
        <button type="submit">Connected?</button>
      </form>
    </div>
  );
}

export default App;

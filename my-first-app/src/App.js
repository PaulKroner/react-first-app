import logo from './logo.svg';
import './App.css';
import Car from './components/list.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>

      <div>
        <Car />
      </div>

    </div>
  );
}

export default App;

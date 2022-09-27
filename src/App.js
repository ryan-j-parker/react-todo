import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Header from './Header';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <img src={logo} className="App-logo" alt="logo" />

      </div>
    </>
  );
}

export default App;

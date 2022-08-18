import logo from '../logo.svg';
import './App.css';
import BasicTable from './BasicTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div className='container'>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello React app with AWS</h2>
        <BasicTable/>
        </div>
      </body>
    </div>
  );
}

export default App;

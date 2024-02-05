import logo from './logo.svg';
import './App.css';
import { Formulario } from './components/Formulario';
import { useState } from 'react';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const addColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores,colaborador]);
  }

  return (
    <div className="App">

    <Formulario whenFormIsSubmited={colaborador=>addColaborador(colaborador)}/>
    

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

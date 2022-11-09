import Pessoas from './components/Pessoas';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import './App.css';

function App() {
  const name = 'Danilo'
  const idade = '30'
  const email = 'teste@gmail.com'

  return (
    <div className="App">
      <h1>Olá mundo</h1>
      <p>Meu primeiro App!</p>

      {/* Utilizando uma props */}
      <Pessoas nome={name} idade={idade} email={email} />
      <List />
      <Evento />
      <Form />
    </div>
  );
}

export default App;

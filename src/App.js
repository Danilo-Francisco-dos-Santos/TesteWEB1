import HelloWorld from './components/HelloWorld';
import Pessoas from './components/Pessoas';
import './App.css';

function App() {
  const name = 'Danilo'
  const idade = '30'
  const email = 'teste@gmail.com'

  return (
    <div className="App">
      <h1>Olá mundo</h1>
      <p>Meu primeiro App!</p>
      <Pessoas nome={name} idade={idade} email={email} />
    </div>
  );
}

export default App;

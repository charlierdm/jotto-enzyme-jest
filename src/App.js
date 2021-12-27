import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats'


function App() {
  return (
    <div className="App" data-test='component-app'>
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessedWords guessedWords={[]} />
    </div>
  );
}

export default App;

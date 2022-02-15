import {useEffect} from 'react';
import {useSelector} from 'react-redux'
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats'
import Input from './Input';
import {getSecretWord} from './actions';


function App() {
  const success = useSelector(state => state.success)
  const guessedWords = useSelector(state => state.guessedWords)
  const secretWord = 'party'

  useEffect(() => {
    getSecretWord()
  }, [])

  return (
    <div className="App" data-test='component-app'>
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;

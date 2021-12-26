export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetters = secretWord.split('')
  const guessedLetters = new Set(guessedWord)
  return secretLetters.filter(letter => guessedLetters.has(letter)).length
}
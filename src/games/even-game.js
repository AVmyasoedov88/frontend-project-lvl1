import { getRandomNumber, engineGames } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

const getGameData = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => engineGames(gameRules, getGameData);

export default evenGame;

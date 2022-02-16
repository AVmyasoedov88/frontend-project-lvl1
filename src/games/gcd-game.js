import { getRandomNumber, engineGames } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = (`${number1} ${number2}`);
  const correctAnswer = String(getGcd(number1, number2));
  return [question, correctAnswer];
};

const gsdGame = () => engineGames(gameRules, getGameData);

export default gsdGame;

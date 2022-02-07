import { getRandomNumber, commonBrainRules } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const listDivider = (a, b) => {
  if (!b) {
    return a;
  }
  return listDivider(b, a % b);
};

const infoForGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = (`${number1} ${number2}`);
  const correctAnswer = String(listDivider(number1, number2));
  return [question, correctAnswer];
};

const gsdDecription = () => commonBrainRules(gameRules, infoForGame);

export default gsdDecription;

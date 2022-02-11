import { getRandomNumber, commonBrainRules } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

const infoForGame = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenDecription = () => commonBrainRules(gameRules, infoForGame);

export default evenDecription;

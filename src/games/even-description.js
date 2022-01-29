import { getRandomNumber, commonBrainRules } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenLogics = (num) => {
  let result = '';
  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const infoForGame = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const correctAnswer = isEvenLogics(number);
  return [question, correctAnswer];
};

const evenDecription = () => commonBrainRules(gameRules, infoForGame);

export default evenDecription;

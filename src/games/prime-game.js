import { getRandomNumber, commonBrainRules } from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const simpleNumber = (num) => {
  const arr = [];
  let result = '';
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      arr.push(i);
    }
  }

  if (arr.length === 2) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const infoForGame = () => {
  const number = getRandomNumber(2, 100);
  const question = number;
  const correctAnswer = simpleNumber(number);
  return [question, correctAnswer];
};

const primeDecription = () => commonBrainRules(gameRules, infoForGame);

export default primeDecription;

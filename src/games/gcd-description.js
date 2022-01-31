import _ from 'lodash';
import { getRandomNumber, commonBrainRules } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const listDivider = (a, b) => {
  const arrDividerNum1 = [];
  const arrDividerNum2 = [];
  for (let i = 0; i <= a; i += 1) {
    if (a % (a - i) === 0) {
      arrDividerNum1.push(a - i);
    }
  }

  for (let j = 0; j <= b; j += 1) {
    if (b % (b - j) === 0) {
      arrDividerNum2.push(b - j);
    }
  }
  return (_.intersection(arrDividerNum1, arrDividerNum2));
};

const infoForGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = (`${number1} ${number2}`);
  const correctAnswer = String(listDivider(number1, number2)[0]);
  return [question, correctAnswer];
};

const gsdDecription = () => commonBrainRules(gameRules, infoForGame);

export default gsdDecription;

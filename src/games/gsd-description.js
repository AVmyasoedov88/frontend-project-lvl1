import readlineSync from 'readline-sync';
import _ from 'lodash';
import { userName, getRandomNumber } from '../index.js';

const round = 2;

console.log('Find the greatest common divisor of given numbers.');

const commonGsD = () => {
  for (let counter = 0; counter <= round; counter += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const question = (`${number1} ${number2}`);
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('You answer: ');
    const playerAnswerNum = Number(playerAnswer);

    const listDivider = (a, b) => {
      const arrDividerNum1 = [];
      const arrDividerNum2 = [];
      for (let i = 0; i <= a; i += 1) {
        if (a % (a - i) === 0) {
          arrDividerNum1.push(a - i);
        }
      }
      // console.log(arrDividerNum1);

      for (let j = 0; j <= b; j += 1) {
        if (b % (b - j) === 0) {
          arrDividerNum2.push(b - j);
        }
      }
      // console.log(arrDividerNum2);

      // eslint-disable-next-line no-restricted-syntax

      return (_.intersection(arrDividerNum1, arrDividerNum2));
    };

    const result = listDivider(number1, number2);

    if (playerAnswerNum === result[0]) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswerNum} is wrong answer ;(. Correct answer was ${result[0]}. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default commonGsD;

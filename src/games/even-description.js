import readlineSync from 'readline-sync';
import { userName, getRandomNumber, round } from '../index.js';

// eslint-disable-next-line consistent-return
function isNumberEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i <= round; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const playerAnswer = readlineSync.question('You answer: ');
    if (number % 2 === 0) {
      if (playerAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
        return `Let's try again, ${userName}!`;
      }
    }
    if (number % 2 !== 0) {
      if (playerAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
        return `Let's try again, ${userName}!`;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default isNumberEven;

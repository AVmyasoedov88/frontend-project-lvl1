import readlineSync from 'readline-sync';
import { userName, getRandomNumber, round } from '../index.js';

const checkEven = (num) => {
  let result = '';
  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

function isNumberEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i <= round; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const playerAnswer = readlineSync.question('You answer: ');
    const correctAnswer = checkEven(number);

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

export default isNumberEven;
// переписать

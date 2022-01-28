import readlineSync from 'readline-sync';
import {
  userName, getRandomNumber, round,
} from '../index.js';

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

const isPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i <= round; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const playerAnswer = readlineSync.question('You answer: ');
    const correctAnswer = simpleNumber(number);

    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default isPrime;

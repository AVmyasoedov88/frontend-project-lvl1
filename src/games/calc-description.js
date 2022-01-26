import readlineSync from 'readline-sync';
import { userName, getRandomNumber, round } from '../index.js';

const isSumCorrect = () => {
  const simbol = ['+', '-', '*'];

  console.log('What is the result of the expression?');
  for (let i = 0; i <= round; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const randomSimbols = simbol[Math.floor(Math.random() * simbol.length)];
    const question = (`${number1} ${randomSimbols} ${number2}`);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('You answer: ');
    const playerAnswerNum = Number(playerAnswer);
    let correctAnswer;
    if (randomSimbols === '+') {
      correctAnswer = number1 + number2;
    } else if (randomSimbols === '-') {
      correctAnswer = number1 - number2;
    } else if (randomSimbols === '*') {
      correctAnswer = number1 * number2;
    }

    if (correctAnswer === playerAnswerNum) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswerNum} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default isSumCorrect;

import readlineSync from 'readline-sync';
import { userName, getRandomNumberProgression, round } from '../index.js';

const arithmeticProgression = (start, difference, lengthProgression) => {
  const arr = [];
  for (let i = 0; i <= lengthProgression; i += 1) {
    const newNum = start + difference;
    // eslint-disable-next-line no-param-reassign
    start = newNum;
    arr.push(newNum);
  }

  return arr;
};

const progressionQuestion = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i <= round; i += 1) {
    const start = getRandomNumberProgression(1, 100);
    const difference = getRandomNumberProgression(2, 10);
    const lengthProgression = getRandomNumberProgression(5, 10);

    const progression = arithmeticProgression(start, difference, lengthProgression);
    const hiddenSimbol = getRandomNumberProgression(0, progression.length - 1);

    const correctAnswer = `${progression[hiddenSimbol]}`;
    progression[hiddenSimbol] = '..';

    const question = progression.join(' ');
    console.log(question);
    const playerAnswer = readlineSync.question('You answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default progressionQuestion;

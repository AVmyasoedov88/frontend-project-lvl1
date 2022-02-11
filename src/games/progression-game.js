import { getRandomNumber, commonBrainRules } from '../index.js';

const gameRules = 'What number is missing in the progression?';

const arithmeticProgression = (start, difference, lengthProgression) => {
  const arr = [];
  for (let i = 0; i <= lengthProgression; i += 1) {
    const newNum = start + i * difference;
    arr.push(newNum);
  }

  return arr;
};

const infoForGame = () => {
  const start = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 10);
  const lengthProgression = getRandomNumber(5, 20);
  const progression = arithmeticProgression(start, difference, lengthProgression);
  const hiddenSimbol = getRandomNumber(0, progression.length - 1);
  const correctAnswer = `${progression[hiddenSimbol]}`;
  progression[hiddenSimbol] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionDecription = () => commonBrainRules(gameRules, infoForGame);

export default progressionDecription;

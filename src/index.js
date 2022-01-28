import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const round = 2;

const getRandomNumber = () => Math.floor(Math.random() * 100);
// const getRandomNumberProgression = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomNumberProgression = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export {
  userName, getRandomNumber, getRandomNumberProgression, round,
};

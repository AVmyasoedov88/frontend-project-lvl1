import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// eslint-disable-next-line import/prefer-default-export

const getRandomNumber = () => Math.floor(Math.random() * 100);

export { userName, getRandomNumber };
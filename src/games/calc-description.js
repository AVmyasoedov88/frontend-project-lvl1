import { getRandomNumber, commonBrainRules } from '../index.js';

const gameRules = 'What is the result of the expression?';

const isGsdLogics = (num1, num2, simbols) => {
  let result = '';
  if (simbols === '+') {
    result = num1 + num2;
  } else if (simbols === '-') {
    result = num1 - num2;
  } else if (simbols === '*') {
    result = num1 * num2;
  }
  return result;
};

const infoForGame = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const simbol = ['+', '-', '*'];
  const randomSimbols = simbol[Math.floor(Math.random() * simbol.length)];
  const question = (`${number1} ${randomSimbols} ${number2}`);
  const correctAnswer = String(isGsdLogics(number1, number2, randomSimbols));
  return [question, correctAnswer];
};

const calcDecription = () => commonBrainRules(gameRules, infoForGame);

export default calcDecription;

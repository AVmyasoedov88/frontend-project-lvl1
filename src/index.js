import readlineSync from 'readline-sync';

const round = 2;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const commonBrainRules = (gameRules, infoForGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i <= round; i += 1) {
    const [question, correctAnswer] = infoForGame();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('You answer: ');
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default commonBrainRules;

export { getRandomNumber, round, commonBrainRules };

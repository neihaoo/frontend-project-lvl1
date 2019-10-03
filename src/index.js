import { cons, car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const getRandomNumber = (max) => Math.round(Math.random() * max);
const saveAnswer = (answer) => (answerForCheck) => answer === answerForCheck;

const greeting = (description = '') => {
  const welcomeMsg = description !== ''
    ? `Welcome to the Brain Games!\n${description}\n`
    : 'Welcome to the Brain Games!\n';

  console.log(welcomeMsg);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  return userName;
};

const runGame = (userName, game) => {
  const ROUNDS = 3;

  for (let i = 0; i < ROUNDS; i += 1) {
    const gameData = game();
    const gameQuestion = car(gameData);
    const correctAnswer = cdr(gameData);

    console.log(`Question: ${gameQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const isAnswerCorrect = saveAnswer(correctAnswer);

    if (!isAnswerCorrect(userAnswer)) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }

    console.log('Correct!');
  }

  return console.log(`Congratulations, ${userName}!`);
};

export {
  cons,
  getRandomNumber,
  greeting,
  runGame,
};

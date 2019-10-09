import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const isAnswerCorrect = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

const greeting = (description = '') => (description !== ''
  ? `Welcome to the Brain Games!\n${description}\n`
  : 'Welcome to the Brain Games!\n');

const getUserName = () => readlineSync.question('May I have your name? ');

const runGame = (description, game) => {
  const ROUNDS_COUNT = 3;

  console.log(greeting(description));

  const userName = getUserName();

  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const gameData = game();
    const gameQuestion = car(gameData);
    const correctAnswer = cdr(gameData);

    console.log(`Question: ${gameQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (!isAnswerCorrect(userAnswer, correctAnswer)) {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    }

    console.log('Correct!');
  }

  return `Congratulations, ${userName}!`;
};

export {
  getRandomNumber,
  greeting,
  getUserName,
  runGame,
};

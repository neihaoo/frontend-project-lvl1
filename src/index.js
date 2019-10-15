import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export default (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const gameData = getGameData();
    const gameQuestion = car(gameData);
    const correctAnswer = cdr(gameData);

    console.log(`Question: ${gameQuestion}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

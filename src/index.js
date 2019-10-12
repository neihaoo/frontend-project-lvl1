import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const isAnswerCorrect = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export default (description, getGameData) => {
  const ROUNDS_COUNT = 3;

  const greeting = description !== '' ? `Welcome to the Brain Games!\n${description}\n` : 'Welcome to the Brain Games!\n';

  console.log(greeting);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const gameData = getGameData();
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

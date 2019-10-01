import {
  cons,
  getRandomNumber,
  greeting,
  run,
} from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (a === b) {
    return a;
  }

  const x = a > b ? a - b : a;
  const y = b > a ? b - a : b;

  return findGcd(x, y);
};

const gameData = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const question = `${number1} ${number2}`;
  const answer = String(findGcd(number1, number2));

  return cons(question, answer);
};

const startGame = run(greeting(gameDescription));

export default () => startGame(gameData);

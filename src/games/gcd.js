import { cons } from '@hexlet/pairs';
import runGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (a === b) {
    return a;
  }

  const x = a > b ? a - b : a;
  const y = b > a ? b - a : b;

  return findGcd(x, y);
};

const generateGameData = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const answer = String(findGcd(num1, num2));

  return cons(question, answer);
};

export default () => runGame(gameDescription, generateGameData);

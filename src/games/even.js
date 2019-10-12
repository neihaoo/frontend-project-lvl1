import { cons } from '@hexlet/pairs';
import runGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const question = getRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => console.log(runGame(gameDescription, generateGameData));

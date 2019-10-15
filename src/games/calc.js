import { cons } from '@hexlet/pairs';
import runGame from '..';
import getRandomNumber from '../utils';

const operators = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const findResultOfExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const generateGameData = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(findResultOfExpression(num1, num2, operator));

  return cons(question, answer);
};

export default () => runGame(gameDescription, generateGameData);

import { cons } from '@hexlet/pairs';
import runGame from '..';
import getRandomNumber from '../utils';

const OPERATORS = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const findResultOfExpression = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }

  return num1 * num2;
};

const generateGameData = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operator = OPERATORS[getRandomNumber(0, OPERATORS.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(findResultOfExpression(number1, number2, operator));

  return cons(question, answer);
};

export default () => console.log(runGame(gameDescription, generateGameData));

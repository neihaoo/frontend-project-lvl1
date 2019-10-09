import { cons } from '@hexlet/pairs';
import { getRandomNumber, runGame } from '..';

const OPERATORS = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const getRandomOparator = (start, stop, operators) => operators[getRandomNumber(start, stop)];

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
  const operator = getRandomOparator(0, OPERATORS.length - 1, OPERATORS);
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(findResultOfExpression(number1, number2, operator));

  return cons(question, answer);
};

export default () => runGame(gameDescription, generateGameData);

import {
  cons,
  getRandomNumber,
  greeting,
  runGame,
} from '..';

const OPERATORS = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const getRandomOparator = (operators) => operators[getRandomNumber(operators.length - 1)];

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
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const operator = getRandomOparator(OPERATORS);
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(findResultOfExpression(number1, number2, operator));

  return cons(question, answer);
};

export default () => runGame(greeting(gameDescription), generateGameData);

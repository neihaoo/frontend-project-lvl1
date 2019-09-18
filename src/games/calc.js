import {
  ROUNDS,
  greeting,
  showQuestion,
  getAnswer,
  checkAnswer,
  showCorrectMsg,
  showLoseMsg,
  showWinMsg,
} from '..';

const OPERATORS = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const getRandomNumber = (max) => Math.round(Math.random() * max);

const getRandomOparator = (operators) => operators[getRandomNumber(operators.length - 1)];

const getCorrectAnswer = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }

  return num1 * num2;
};

export default () => {
  const userName = greeting(gameDescription);

  for (let i = 0; i < ROUNDS; i += 1) {
    const number1 = getRandomNumber(100);
    const number2 = getRandomNumber(100);
    const operator = getRandomOparator(OPERATORS);

    showQuestion(`${number1} ${operator} ${number2}`);

    const userAnswer = getAnswer();
    const correctAnswer = String(getCorrectAnswer(number1, number2, operator));
    const isAnswerCorrect = checkAnswer(userAnswer, correctAnswer);

    if (!isAnswerCorrect) {
      return showLoseMsg(userAnswer, correctAnswer, userName);
    }

    showCorrectMsg();
  }

  return showWinMsg(userName);
};

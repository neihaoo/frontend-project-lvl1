import {
  ROUNDS,
  getRandomNumber,
  greeting,
  showQuestion,
  getAnswer,
  checkAnswer,
  showCorrectMsg,
  showLoseMsg,
  showWinMsg,
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

export default () => {
  const userName = greeting(gameDescription);

  for (let i = 0; i < ROUNDS; i += 1) {
    const number1 = getRandomNumber(100);
    const number2 = getRandomNumber(100);

    showQuestion(`${number1} ${number2}`);

    const userAnswer = getAnswer();
    const correctAnswer = String(findGcd(number1, number2));
    const isAnswerCorrect = checkAnswer(userAnswer, correctAnswer);

    if (!isAnswerCorrect) {
      return showLoseMsg(userAnswer, correctAnswer, userName);
    }

    showCorrectMsg();
  }

  return showWinMsg(userName);
};

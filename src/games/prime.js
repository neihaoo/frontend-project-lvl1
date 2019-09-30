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

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const userName = greeting(gameDescription);

  for (let i = 0; i < ROUNDS; i += 1) {
    const number = getRandomNumber(100);

    showQuestion(number);

    const userAnswer = getAnswer();
    const correctAnswer = isPrime(number);
    const isAnswerCorrect = checkAnswer(userAnswer, correctAnswer);

    if (!isAnswerCorrect) {
      return showLoseMsg(userAnswer, correctAnswer, userName);
    }

    showCorrectMsg();
  }

  return showWinMsg(userName);
};

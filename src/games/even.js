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

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const userName = greeting(gameDescription);

  for (let i = 0; i < ROUNDS; i += 1) {
    const number = Math.round(Math.random() * 100);

    showQuestion(number);

    const userAnswer = getAnswer();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const isAnswerCorrect = checkAnswer(userAnswer, correctAnswer);

    if (!isAnswerCorrect) {
      return showLoseMsg(userAnswer, correctAnswer, userName);
    }

    showCorrectMsg();
  }

  return showWinMsg(userName);
};

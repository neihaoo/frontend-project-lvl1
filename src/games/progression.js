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

const Progression = {
  LENGTH: 10,
  STEP: (number) => getRandomNumber(number),
};

const generateProgression = (start, length, step) => {
  const progression = [start];

  for (let i = 0; i < length; i += 1) {
    const lastNum = progression[progression.length - 1];

    progression.push(lastNum + step);
  }

  return progression;
};

const makeQuestion = (progression, num) => {
  const question = [...progression];

  question.splice(num, 1, '..');

  return question.join(' ');
};

const gameDescription = 'What number is missing in the progression?';

export default () => {
  const userName = greeting(gameDescription);

  for (let i = 0; i < ROUNDS; i += 1) {
    const startProgression = getRandomNumber(100);
    const stepProgression = Progression.STEP(Progression.LENGTH);
    const progression = generateProgression(startProgression, Progression.LENGTH, stepProgression);
    const hiddenNumber = getRandomNumber(progression.length);

    showQuestion(makeQuestion(progression, hiddenNumber));

    const userAnswer = getAnswer();
    const correctAnswer = String(progression[hiddenNumber]);
    const isAnswerCorrect = checkAnswer(userAnswer, correctAnswer);

    if (!isAnswerCorrect) {
      return showLoseMsg(userAnswer, correctAnswer, userName);
    }

    showCorrectMsg();
  }

  return showWinMsg(userName);
};

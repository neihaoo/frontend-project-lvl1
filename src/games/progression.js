import {
  cons,
  getRandomNumber,
  greeting,
  runGame,
} from '..';

const PROGRESSION_LENGTH = 10;

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start) => (length) => (step) => {
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

const generateGameData = () => {
  const startProgression = generateProgression(getRandomNumber(100));
  const lengthProgression = startProgression(PROGRESSION_LENGTH);
  const progression = lengthProgression(getRandomNumber(100));
  const hiddenNumber = getRandomNumber(progression.length);
  const question = makeQuestion(progression, hiddenNumber);
  const answer = String(progression[hiddenNumber]);

  return cons(question, answer);
};

export default () => runGame(greeting(gameDescription), generateGameData);

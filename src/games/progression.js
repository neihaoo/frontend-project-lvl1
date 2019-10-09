import { cons } from '@hexlet/pairs';
import { getRandomNumber, runGame } from '..';

const PROGRESSION_LENGTH = 10;

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, length, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const makeQuestion = (progression, num) => {
  const question = [...progression];

  question.splice(num, 1, '..');

  return question.join(' ');
};

const generateGameData = () => {
  const progressionStart = getRandomNumber(0, 100);
  const progressionStep = getRandomNumber(0, 100);
  const progression = generateProgression(progressionStart, PROGRESSION_LENGTH, progressionStep);
  const hiddenNumberIndex = getRandomNumber(0, progression.length);
  const question = makeQuestion(progression, hiddenNumberIndex);
  const answer = String(progression[hiddenNumberIndex]);

  return cons(question, answer);
};

export default () => runGame(gameDescription, generateGameData);

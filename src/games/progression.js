import { cons } from '@hexlet/pairs';
import runGame from '..';
import getRandomNumber from '../utils';

const PROGRESSION_LENGTH = 10;

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, length, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const makeQuestion = (progression, indexForHide) => {
  const question = [...progression];

  question.splice(indexForHide, 1, '..');

  return question.join(' ');
};

const generateGameData = () => {
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(0, 100);
  const progression = generateProgression(start, PROGRESSION_LENGTH, step);
  const hiddenValueIndex = getRandomNumber(0, progression.length - 1);
  const question = makeQuestion(progression, hiddenValueIndex);
  const answer = String(progression[hiddenValueIndex]);

  return cons(question, answer);
};

export default () => runGame(gameDescription, generateGameData);

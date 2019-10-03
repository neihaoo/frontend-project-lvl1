import {
  cons,
  getRandomNumber,
  greeting,
  runGame,
} from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const question = getRandomNumber(100);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => runGame(greeting(gameDescription), generateGameData);

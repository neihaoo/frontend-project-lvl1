import {
  cons,
  getRandomNumber,
  greeting,
  run,
} from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const question = getRandomNumber(100);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return cons(question, answer);
};

const startGame = run(greeting(gameDescription));

export default () => startGame(gameData);

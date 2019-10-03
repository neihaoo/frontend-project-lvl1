import {
  cons,
  getRandomNumber,
  greeting,
  runGame,
} from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const generateGameData = () => {
  const question = getRandomNumber(100);
  const answer = isPrime(question);

  return cons(question, answer);
};

export default () => runGame(greeting(gameDescription), generateGameData);

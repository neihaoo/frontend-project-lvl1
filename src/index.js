import readlineSync from 'readline-sync';
import evenGame from './even';

const welcome = () => 'Welcome to the Brain Games!';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  return userName;
};

export { welcome, greeting, evenGame };

import readlineSync from 'readline-sync';

const ROUNDS = 3;

const greeting = (description = '') => {
  const welcomeMsg = description !== ''
    ? `Welcome to the Brain Games!\n${description}\n`
    : 'Welcome to the Brain Games!\n';

  console.log(welcomeMsg);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  return userName;
};

const showQuestion = (question) => console.log(`Question: ${question}`);

const getAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');

  return userAnswer;
};

const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

const showCorrectMsg = () => console.log('Correct!');

const showWinMsg = (userName) => console.log(`Congratulations, ${userName}!`);

const showLoseMsg = (userAnswer, correctAnswer, userName) => console.log(
  `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
);

export {
  ROUNDS,
  greeting,
  showQuestion,
  getAnswer,
  checkAnswer,
  showCorrectMsg,
  showLoseMsg,
  showWinMsg,
};

import readlineSync from 'readline-sync';

export default (user) => {
  console.log('');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);

    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const answer = userAnswer === correctAnswer
      ? 'Correct!'
      : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${user}!`;

    if (answer !== 'Correct!') {
      return answer;
    }

    console.log(answer);
  }

  return `Congratulations, ${user}!`;
};

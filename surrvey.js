const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favorite (e.g., dinner, brunch, etc.)?",
  "What's your favorite thing to eat for that meal?",
  "Which sport is your absolute favorite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const exampleAnswers = [
  "John Doe",
  "Hiking",
  "Jazz",
  "Brunch",
  "Pancakes",
  "Hop-scotch",
  "Cherry Picking"
];
const askQuestion = (question, exampleAnswer) => {
  return new Promise((resolve) => {
    if (exampleAnswer) {
      console.log(`${question} (Example: ${exampleAnswer})`);
      resolve(exampleAnswer);
    } else {
      rl.question(question + ' ', (answer) => {
        resolve(answer);
      });
    }
  });
};

const generateProfile = () => {
  const name = profile.answer1 || "Unknown";
  const activity = profile.answer2 || "Unknown";
  const music = profile.answer3 || "Unknown";
  const meal = profile.answer4 || "Unknown";
  const food = profile.answer5 || "Unknown";
  const sport = profile.answer6 || "Unknown";
  const superpower = profile.answer7 || "Unknown";

  const profileText = `
    Name: ${name}
    Activity: ${activity}
    Music: ${music}
    Favorite Meal: ${meal}
    Favorite Food: ${food}
    Favorite Sport: ${sport}
    Superpower: ${superpower}
  `;

  console.log("Profile generated:");
  console.log(profileText.trim());

  rl.close();
};

const runSurvey = async () => {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const exampleAnswer = exampleAnswers[i];
    const answer = await askQuestion(question, exampleAnswer);
    profile = { ...profile, [`answer${i + 1}`]: answer };
  }

  generateProfile();
};

runSurvey();
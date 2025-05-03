let rounds = [
  {
    title: "🎤 Round 1: Name a reason a baby cries.",
    answers: [
      { answer: "Hungry", points: 40 },
      { answer: "Needs diaper change", points: 30 },
      { answer: "Tired", points: 20 },
      { answer: "Too hot/cold", points: 5 },
      { answer: "Needs attention", points: 3 },
      { answer: "Sick", points: 2 }
    ]
  },
  {
    title: "🎤 Round 2: Name a popular baby toy.",
    answers: [
      { answer: "Rattle", points: 35 },
      { answer: "Teddy bear", points: 25 },
      { answer: "Teething ring", points: 20 },
      { answer: "Building blocks", points: 15 },
      { answer: "Toy car", points: 5 }
    ]
  },
  {
    title: "🎤 Round 3: Name a food babies eat.",
    answers: [
      { answer: "Nestum", points: 40 },
      { answer: "purity", points: 30 },
      { answer: "mash potato", points: 20 },
      { answer: "yogurt", points: 10 }
    ]
  }
];

let fastMoney = [
  { question: "Fast Money Q1: Name a first word a baby might say.", answers: ["Mama - 40 points", "Dada - 30 points", "Hi - 20 points", "Bye - 10 points"] },
  { question: "Fast Money Q2: Name a popular kids' TV show.", answers: ["Cocomelon - 40 points", "Peppa Pig- 30 points", "Bluey - 20 points", "Sesame  Street - 10 points"] },
  { question: "Fast Money Q3: Name something you find in a diaper bag.", answers: ["Diapers- 40 points", "Wipes- 30 points", "Bottles - 20 points", "Pacifier - 10 points"] },
  { question: "Fast Money Q4: Name a baby’s bedtime routine item.", answers: ["Bottle- 40 points", "Storybook- 30 points", "Blanket - 20 points", "Bath - 10 points"] },
  { question: "Fast Money Q5: Name something a baby does often.", answers: ["Cry- 40 points", "Sleep- 30 points", "Eat - 20 points", "Poop - 10 points"] }
];

let stage = 0;
let totalStages = rounds.length + fastMoney.length + 2; // +2 for intro and outro

function nextScript() {
  const title = document.getElementById('script-title');
  const body = document.getElementById('script-body');
  const list = document.getElementById('answers-list');

  list.innerHTML = "";

  if (stage === 0) {
    title.textContent = "🎉 Welcome to Baby Feud!";
    body.textContent = "Today, two teams will face off in the ultimate baby-feud. Host reads the question aloud, teams guess the answers. Host awards points and writes them on the board. Let's begin!";
  } else if (stage > 0 && stage <= rounds.length) {
    let round = rounds[stage - 1];
    title.textContent = round.title;
    body.textContent = "Here are the top answers:";
    round.answers.forEach((a, i) => {
      let li = document.createElement('li');
      li.className = "list-group-item answer";
      li.textContent = `${i + 1}. ${a.answer} — ${a.points} points`;
      list.appendChild(li);
    });
  } else if (stage === rounds.length + 1) {
    title.textContent = "🚨 Final Round: Fast Money!";
    body.textContent = "One player from each team will answer these rapid-fire questions. Score each answer manually. Press Next to view each question.";
  } else if (stage > rounds.length + 1 && stage <= totalStages - 1) {
    let q = fastMoney[stage - (rounds.length + 2)];
    title.textContent = q.question;
    body.textContent = "Top answers:";
    q.answers.forEach((a, i) => {
      let li = document.createElement('li');
      li.className = "list-group-item answer";
      li.textContent = `${i + 1}. ${a}`;
      list.appendChild(li);
    });
  } else {
    title.textContent = "🏁 Game Over!";
    body.textContent = "Add up the total points from all rounds and Fast Money. Declare the winning team. Thanks for playing Baby Feud!";
  }

  stage++;
}

let isDarkMode = false;

const lightBackground = "url('sheep.jpg')";
const darkBackground = "url('Sheep2.jpg')";

document.body.style.backgroundImage = lightBackground;

window.onload = function () {
  showRandomSheepFact();
};

const sheepFacts = [
  "In ancient times, sheep were used as Wi-Fi extenders.",
  "A single sheep produces enough static electricity to power a small toaster.",
  "Sheep believe humans are just tall, confused sheep without coats",
  "A sheep's baa can be heard from space, but only if it really means it.",
  "If you say 'baaa' three times in a mirror, a sheep will appear and judge you silently."
];

function showRandomSheepFact() {
  const fact = sheepFacts[Math.floor(Math.random() * sheepFacts.length)];
  document.getElementById("sheepFact").textContent = `🐑 Fun Fact: ${fact}`;
}

function handleSubmit() {
  const messages = [
    "Consulting the sheep...",
	"Counting sheep..",
	"Wool gathering in progress...",
	"Following the trail of hoofprints..."
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("loadingMessage").textContent = randomMessage;

  document.getElementById("mainContainer").style.display = "none";
  document.getElementById("loadingScreen").style.display = "flex";

  setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("placeholderMessage").style.display = "flex";

    const audio = document.getElementById("soundEffect");
    audio.play();
  }, 1500);
}

function goBack() {
  document.getElementById("placeholderMessage").style.display = "none";
  document.getElementById("mainContainer").style.display = "flex";
  document.getElementById("inputField").focus();
  showRandomSheepFact();
}

function toggleDarkMode() {
isDarkMode = !isDarkMode;

const body = document.getElementById("body");
const modeBtn = document.getElementById("modeToggleBtn");

if (isDarkMode) {
  body.style.backgroundImage = darkBackground;
  modeBtn.textContent = "Toggle Light Mode";
  modeBtn.classList.remove("light-mode-btn");
  modeBtn.classList.add("dark-mode-btn");
} else {
  body.style.backgroundImage = lightBackground;
  modeBtn.textContent = "Toggle Dark Mode";
  modeBtn.classList.remove("dark-mode-btn");
  modeBtn.classList.add("light-mode-btn");
}
}

document.addEventListener("keydown", function(event) {
if (event.key === "Enter") {
  const mainScreen = document.getElementById("mainContainer");
  const placeholderScreen = document.getElementById("placeholderMessage");

  if (mainScreen.style.display !== "none") {
	event.preventDefault();
	handleSubmit();
  } else if (placeholderScreen.style.display === "flex") {
	event.preventDefault();
	goBack();
  }
}
});

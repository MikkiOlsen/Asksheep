let isDarkMode = false;

const lightBackground = "url('sheep.jpg')";
const darkBackground = "url('Sheep2.jpg')";

document.body.style.backgroundImage = lightBackground;

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

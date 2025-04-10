let isDarkMode = false;

// Initial background
const lightBackground = "url('sheep.jpg')";
const darkBackground = "url('Sheep2.jpg')";

document.body.style.backgroundImage = lightBackground;

function handleSubmit() {
const audio = document.getElementById("soundEffect");
audio.play();
document.getElementById("mainContainer").style.display = "none";
document.getElementById("Baa").style.display = "flex";
}

function goBack() {
document.getElementById("Baa").style.display = "none";
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
  const Baascreen = document.getElementById("Baa");

  if (mainScreen.style.display !== "none") {
	event.preventDefault();
	handleSubmit();
  } else if (Baascreen.style.display === "flex") {
	event.preventDefault();
	goBack();
  }
}
});

const toggleButton = document.getElementById("themeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀";
    } else {
        toggleButton.textContent = "🌙";
    }
});
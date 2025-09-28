const newsletterForm = document.querySelector("#buletin form");
const emailInput = document.querySelector("#email_buletin");

const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "🌙 Dark Mode";
darkModeBtn.className = "dark-toggle";
darkModeBtn.style.marginLeft = "1rem";
darkModeBtn.style.padding = "0.4rem 1rem";
darkModeBtn.style.borderRadius = "6px";
darkModeBtn.style.border = "none";
darkModeBtn.style.cursor = "pointer";
darkModeBtn.style.backgroundColor = "#d4af37";
darkModeBtn.style.color = "#3a3a3a";
document.querySelector("header nav").appendChild(darkModeBtn);

function validateEmail(email) 
{
  return /\S+@\S+\.\S+/.test(email);
}

function showMessage(message, color = "green") 
{
  let msg = document.createElement("p");
  msg.textContent = message;
  msg.style.color = color;
  msg.style.fontWeight = "600";
  msg.style.marginTop = "0.5rem";
  newsletterForm.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

function toggleDarkMode() 
{
  document.body.classList.toggle("dark-mode");
  darkModeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
}

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (validateEmail(email)) 
    {
    showMessage("Terima kasih telah mendaftar buletin!", "green");
    emailInput.value = "";
  } 
  else 
    {
    showMessage("Alamat email tidak valid!", "red");
  }
});

darkModeBtn.addEventListener("click", toggleDarkMode);

window.addEventListener("load", fetchActivities);

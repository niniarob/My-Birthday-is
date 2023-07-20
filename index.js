const birthdayMonth = 4; 
const birthdayDay = 16;

function updateCountdown() {

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const nextBirthday = new Date(currentYear, birthdayMonth, birthdayDay);
if (currentDate > nextBirthday) {
  nextBirthday.setFullYear(currentYear + 1);
}
const timeRemaining = nextBirthday - currentDate;


const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);


document.getElementById('days').textContent = days;
document.getElementById('hours').textContent = hours;
document.getElementById('minutes').textContent = minutes;
document.getElementById('seconds').textContent = seconds;
}
updateCountdown();
setInterval(updateCountdown, 1000);
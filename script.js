const newday = new Date();
//document.write(newday);
const hours = newday.getHours();
const minutes = newday.getMinutes();
output = minutes < 10 ? '0' + minutes : minutes;

document.getElementById('clock').innerHTML = hours + ":" + output;

let greeting = "";

if (hours < 12 && hours >= 6) {
  greeting = "Good Morning";
  document.body.style.backgroundImage = "url('morning.jpg')";
}

else if (hours < 19 && hours >= 12) {
  greeting = "Good Afternoon";
  document.body.style.backgroundImage = "url('afternoon.jpg')"
}

else {
  greeting = "Good Night"
  document.body.style.backgroundImage = "url('night.jpg')"
}

document.getElementById('header').innerHTML = greeting + ", Martha";
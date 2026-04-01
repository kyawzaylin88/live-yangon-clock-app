function formatDate(date, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timeZone,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

function formatTime(date, timeZone) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).format(date);
}

function updateClocks() {
  const now = new Date();

  const cities = [
    { id: "yangon", zone: "Asia/Yangon" },
    { id: "tokyo", zone: "Asia/Tokyo" },
    { id: "london", zone: "Europe/London" },
    { id: "newyork", zone: "America/New_York" },
    { id: "dubai", zone: "Asia/Dubai" },
    { id: "sydney", zone: "Australia/Sydney" }
  ];

  cities.forEach(city => {
    document.getElementById(city.id + "-time").innerText =
      formatTime(now, city.zone);

    document.getElementById(city.id + "-date").innerText =
      formatDate(now, city.zone);
  });
}

setInterval(updateClocks, 1000);
updateClocks();
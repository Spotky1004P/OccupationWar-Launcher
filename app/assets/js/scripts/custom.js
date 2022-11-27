const request = require('request');

document.getElementById("launch_button").addEventListener("click", () => {
  document.getElementById("landing__content__before").style.display = "none";
  document.getElementById("landing__content__after").style.display = "";
});

const newsJsonUrl = "https://raw.githubusercontent.com/Spotky1004P/OccupationWar-Launcher/main/news.json";
request({
  url: newsJsonUrl,
  timeout: 2500
}, (err, res, body) => {
  if (!err) {
    console.log(JSON.parse(body));
  } else {

  }
});

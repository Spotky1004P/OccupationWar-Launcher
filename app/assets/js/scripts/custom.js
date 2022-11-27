const request = require('request');

document.getElementById("launch_button").addEventListener("click", () => {
  document.getElementById("landing__content__before").style.display = "none";
  document.getElementById("landing__content__after").style.display = "";
});

const newsJsonUrl = "https://raw.githubusercontent.com/Spotky1004P/OccupationWar-Launcher/main/news.json";
const newsItems = {
  "news1": document.getElementById("landing__news1"),
  "news2": document.getElementById("landing__news2"),
  "news3": document.getElementById("landing__news3")
};
request({
  url: newsJsonUrl,
  timeout: 2500
}, (err, res, body) => {
  if (!err) {
    const newsObj = JSON.parse(body);
    for (const itemName in newsItems) {
      if (!(itemName in newsObj)) continue;
      newsItems[itemName].style.backgroundImage = `url(${newsObj[itemName].image})` 
    }
  } else {

  }
});

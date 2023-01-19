const electron = require('electron');
const request = require('request');

document.getElementById("launch_button").addEventListener("click", () => {
  document.getElementById("landing__content__before").style.display = "none";
  document.getElementById("landing__content__after").style.display = "";
});

function hrefWorker(el) {
  const link = el.getAttribute("href");
  console.log(el, link);
  el.addEventListener("click", () => {
    electron.shell.openExternal(link);
  })
}

const newsJsonUrl = "http://snics-client.kro.kr/news.json";
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
      const newsItem = newsObj[itemName];
      const el = newsItems[itemName];
      el.style.backgroundImage = `url(${newsItem.image})`;
      el.setAttribute("href", newsItem.link);
      hrefWorker(newsItems[itemName]);
    }
  } else {
    console.log("Error occured while loading news :(")
  }
});

hrefWorker(document.getElementById("langing__tabsHompage"));
hrefWorker(document.getElementById("langing__tabsDiscord"));

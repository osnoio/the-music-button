// Node.js
const { google } = require("googleapis");
const youtube = google.youtube("v3");
// const secrets = require("./secrets.json");

youtube.playlistItems.list(
  {
    key: secrets.web.api_key,
    part: "id,snippet",
    playlistId: "PL7DA3D097D6FDBC02",
    maxResult: 10,
  },
  (err, results) => {
    console.log(err ? err.message : results.items[0].snippet);
  }
);

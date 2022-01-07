//Files
const bookmarksControllers = require("./controllers/bookmarksControllers");
// Dependencies.
const express = require("express");
const res = require("express/lib/response");
const app = express();
//Delegate everything that starts with
//`/bookmarks` to the bookmarks controller.
app.use("/bookmarks", bookmarksControllers);
// The home route.
app.get("/", (request, response) => {
  response.send("Welcome to bookmarks are us");
});

//match everything we haven't matched if nothing in url matched.
app.get("*", (request, response) => {
  response.status(404).json({ error: "page not found" });
});

// export app for server.js
module.exports = app;

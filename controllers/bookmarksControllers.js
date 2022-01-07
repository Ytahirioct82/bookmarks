//Dependencies
const express = require("express");
//Files
//`bookmarksArray` is declared but its value is never read. [6133]
const bookmarksArray = require("../models/bookmark");
//`.Router creates a new controller
//that handles a sub-route.
// in this case, it will handle everything
// that starts wi /bookmarks`.
const bookmarks = express.Router();
// Routes
bookmarks.get("/", (request, response) => {
  response.json(bookmarksArray);
});
//Export the bookmarks controller/router
//so that `app` can delegate the `/bookmarks`
module.exports = bookmarks;

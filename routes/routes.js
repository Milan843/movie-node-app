const movieRoutes = require("./movies");
const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("nodeapp running!!");
  });
  movieRoutes(app, fs);
};
module.exports = appRouter;

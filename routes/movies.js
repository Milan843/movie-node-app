const movieRoutes = (app, fs) => {
  const movieJsonPath = "./data/data.json";
  const commentJsonPath = "./data/comment.json";

  //Fetch all movies
  app.get("/movies", (req, res) => {
    try {
      fs.readFile(movieJsonPath, "utf8", (err, data) => {
        if (err) {
          res.status(400).send({ message: "Error while fetching", data: {} });
        } else {
          res.status(200).send({
            message: "Data fetched successfully",
            data: JSON.parse(data),
          });
        }
      });
    } catch (error) {
      console.log("err");
    }
  });

  //post a movie comment
  app.post("/movies", (req, res) => {
    let reqData = req.body;
    if (!reqData || !reqData.movie || !reqData.comment) {
      res
        .status(400)
        .send({ message: "Please fill all fields", data: reqData });
    }
    try {
      fs.writeFile(
        commentJsonPath,
        JSON.stringify(reqData),
        "utf8",
        (err, data) => {
          if (err) {
            throw err;
          }
          res.status(200).send({ message: "Upload success!", data: reqData });
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = movieRoutes;

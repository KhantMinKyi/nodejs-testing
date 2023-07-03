const express = require("express");
const morgan = require("morgan");
//express app

const app = express();

//register view engine

app.set("view engine", "ejs");

//listen for requests

app.listen(3000);

//middlware & static files
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    { title: "KMK First Blogs", snippet: "lorem br nyr tha ta gar" },
    { title: "KMK Second Blogs", snippet: "lorem br nyr tha ta gar" },
    { title: "KMK Third Blogs", snippet: "lorem br nyr tha ta gar" },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});
//404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

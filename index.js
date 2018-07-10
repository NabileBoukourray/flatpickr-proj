const path = require("path");
const express = require("express");
const app = express();

app.use("/static/", express.static(path.resolve(__dirname, "public")));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
    res.render("index.html");
});

app.get("/datetime", (req, res) => {
    res.render("datetime.html");
});

app.get("/time", (req, res) => {
    res.render("time.html");
});

app.get("/date", (req, res) => {
    res.render("date.html");
});

app.listen("5000", () => {
    console.log("app running at port 5000...");
});
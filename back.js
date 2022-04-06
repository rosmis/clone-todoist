/*INIT*/
const express = require("express");
const app = express();
const tasks = require("./taches.json");

app.use(express.json());

app.get("/task", (req, res) => {
  res.status(200).json(tasks);
});

/*AFFICHER TASK EN F° ID*/
app.get("/task/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);
  res.status(200).json(task);
});

app.post("/task", (req, res) => {
  tasks.push(req.body);
  res.status(200).json(tasks);
});

app.put("/task/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  (task.task = req.body.task),
    (task.state = req.body.state),
    (task.timer = req.body.timer);
  res.status(200).json(task);
});

app.delete("/task/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  tasks.splice(tasks.indexOf(task), 1);
  res.status(200).json(tasks);
});

//LISTEN TO THE PORT
app.listen(8080, () => {
  console.log("Serveur à l'écoute");
});

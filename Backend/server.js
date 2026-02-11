const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/portfolioDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String
});
const Project = mongoose.model("Project", projectSchema);

// Routes
app.get("/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New message:", name, email, message);
  res.json({ success: true, message: "Message received!" });
});


app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));

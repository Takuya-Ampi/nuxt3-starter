import express from "express";
const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  console.log('test')
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

export default app;
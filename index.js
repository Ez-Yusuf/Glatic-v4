import express from "express";
import http from "node:http";
import createBareServer from "@tomphttp/bare-server-node";
import path from "node:path";
import * as dotenv from "dotenv";
dotenv.config();


const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const bareServer = createBareServer("/bare/");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
  });

  app.get("/learning", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "learning.html"));
  });

  app.get("/projects", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "projects.html"));
  });

  app.get("/news", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "news.html"));
  });

  app.get("/algebra", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "proxy.html"));
  });

  app.get("/partners", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "partners.html"));
  });

  app.get("/settings", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "settings.html"));
  });
  

  server.on("request", (req, res) => {
    if (bareServer.shouldRoute(req)) {
      bareServer.routeRequest(req, res);
    } else {
      app(req, res);
    }
  });
  
  server.on("upgrade", (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
      bareServer.routeUpgrade(req, socket, head);
    } else {
      socket.end();
    }
  });
  
  server.on("listening", () => {
    console.log(`Glatic Games runnning on port 8080 ${process.env.PORT}`);
  });
  
  server.listen({
    port: process.env.PORT,
  });
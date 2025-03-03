import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";

import { App } from "../src/App";
import { a, b } from '../src/num';

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  fs.readFile(path.resolve(process.cwd(), './dist/index.html'), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App num={a + b} />)}</div>`
      )
    );
  });
});

app.use(
  express.static(path.resolve(process.cwd(), './dist'), { maxAge: "30d" })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const httpsOptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/swaneesoft.com/privkey.pem"),
  //cert: fs.readFileSync("/etc/letsencrypt/live/swaneesoft.com/cert.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/swaneesoft.com/swaneesoft.com.chained.crt")	
};

var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(301, {
      Location: "https://swaneesoft.com" + req.url,
    });
    res.end();
  })
  .listen(80);

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    console.log(req.headers["host"]);
    if (req.headers["host"] === "www.swaneesoft.com") {
      res.writeHead(301, {
        Location: "https://swaneesoft.com" + req.url,
      });
      res.end();
    } else {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }
  }).listen(443, (err) => {
    if (err) throw err;
    console.log("> Server started");
  });
});

const http = require("http");
const myName = "Brian";

function getGreeting(name) {
  return "Hey, " + name + "! Great to have you.";
}

const server = http.createServer((req, res) => {
  res.end(getGreeting(myName));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

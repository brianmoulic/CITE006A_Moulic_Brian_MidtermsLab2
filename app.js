const http = require("http");
const myName = "Brian";

function getGreeting(name) {
  return "Greetings, " + name + "! Glad you're here.";
}

const server = http.createServer((req, res) => {
  res.end(getGreeting(myName));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

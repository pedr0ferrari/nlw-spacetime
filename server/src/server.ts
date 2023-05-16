import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  return console.log("hello world! :)");
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🐱‍💻HTTP server running on localhost:3333");
  });

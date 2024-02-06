// import Elysia bun framework to use in project
import { Elysia } from "elysia";

// create a new instance of Elysia
new Elysia()
  // create a get route with the using the parameter id
  .get("/id:id", ({ params: { id } }) => id)
  .listen(3000, () => console.log("Server is running on port 3000"));

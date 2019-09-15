import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer, gql } from "apollo-server-express";
import api from "./routes";
import { User } from "./models";
import { connect } from "./db/index";
import schema from "./schema";
import resolvers from "./resolvers";

const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;

// telling app to use cors.
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(api);

// setting the port.
app.set("port", port);

// mongodb connection
connect();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({ req }) => {
    return {
      User
    };
  }
});

server.applyMiddleware({ app, path: "/graphql" });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port }, () => {
  console.log(`listening on ${port}`);
});

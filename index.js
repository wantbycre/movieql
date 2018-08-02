import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// 1. New server 선언
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});


// 2. server 실행
server.start(() => console.log("Graphql Server Running"));
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import GlobalStyles from "./styles";

const client = new ApolloClient({
  uri: "https://apollo-liftoff-server-test.herokuapp.com/", // change to YOUR own production server
  cache: new InMemoryCache(),
  name: "web",
  version: "1.0",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);

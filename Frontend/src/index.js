/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import App from "./App";
import { setContext } from "@apollo/client/link/context";
import Cookie from "universal-cookie";
const CookieService = new Cookie();
export const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  fetchOptions: "include",
});

const authLink = setContext((Cookie, { headers }) => {
  const token = CookieService.get("userSession");
  // const temp=CookieService.getAll("connect.sid")
  // console.log(temp,'temptemptemp',)
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

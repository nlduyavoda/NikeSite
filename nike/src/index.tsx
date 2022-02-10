import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";
const pokemonApi = "https://graphql-pokeapi.graphcdn.app/";

const client = new ApolloClient({
  uri: pokemonApi,
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// render(
//   <ApolloClient client={client}>
//     <App />
//   </ApolloClient>,
//   document.getElementById("root")
// );

// src/main.tsx
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ApolloProvider } from "@apollo/client"
import client from "./apolloClient"
import { BrowserRouter } from "react-router"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)

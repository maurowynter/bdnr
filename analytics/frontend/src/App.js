import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cassandra from "./pages/cassandra";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/*" element={<Cassandra />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;

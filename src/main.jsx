import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import "./assets/fonts.css";
import AppProvider from "./context/AppContext";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
      enabled: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 5000,
      cacheTime: 5000,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  </QueryClientProvider>
);

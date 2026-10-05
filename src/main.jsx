import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * ============================================================================
 * PUNTO DE ENTRADA PRINCIPAL DE REACT (VITE)
 * ============================================================================
 * Inicializa la aplicación React montándola en el elemento '#root' de index.html
 * con StrictMode habilitado para asegurar las mejores prácticas de desarrollo.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

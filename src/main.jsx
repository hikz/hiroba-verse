// main.jsx
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

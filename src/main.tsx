import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AppProvider } from "./context/app/app.provider.tsx";
import { ToastContainer } from "react-toastify";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
      <ToastContainer/>
    </AppProvider>
  </StrictMode>
);

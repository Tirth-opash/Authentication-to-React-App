import ReactDOM from "react-dom";
// import  {createRoot}  from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <AuthContextProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </AuthContextProvider>
// );

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);

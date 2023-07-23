import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap";
import AppRouter from "./Router.tsx";
import { RecoilRoot } from "recoil";

// style
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./assets/style/main.css";

// root
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  </React.StrictMode>
);

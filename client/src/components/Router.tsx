import { Routes, Route, Form } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Confession from "./confession";
import Misdemeanour from "./misdemeanours";
import NotFound from "./notFound";
import MainLayout from "./mainLayout";
import Help from "./help";
//import App from "../App";
//import ReactDOM from "react-dom";

const Router = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />} />
      <Route path="confession" element={<Confession />} />
      <Route path="misdemeanour" element={<Misdemeanour />} />
      <Route path="Form" element={<Form />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;

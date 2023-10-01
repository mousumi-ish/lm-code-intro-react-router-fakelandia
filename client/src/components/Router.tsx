import Confessions from "./confession";
import Home from "./home";

import Misdemeanour from "./misdemeanours";
import NotFound from "./notFound";
import { Route, Routes } from "react-router-dom";

const Router = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="misdemeanour" element={<Misdemeanour />} />
    <Route path="confession" element={<Confessions />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;

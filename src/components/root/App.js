import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Dashboard />} />
        <Route path="/cart" element={<CartDetail />} />
        {/* component yerine element  */}
      </Routes>
    </Container>
  );
}

export default App;

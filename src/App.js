import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <NavLink to={"/"}>
        <b>HOME</b>
      </NavLink>
      <br />
      <NavLink to="/character/:id">
        <b>DETAILS</b>
      </NavLink>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

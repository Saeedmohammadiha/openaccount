import { Route, Routes } from "react-router";
import "./App.css";
import BasicInfo from "./pages/BasicInfo";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/BasicInfo" element={<BasicInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CafeProfile from "./CafeProfile/CafeProfile";

const App = () => {
  return (
    <div className="App">
      <CafeProfile />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

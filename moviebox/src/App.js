import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

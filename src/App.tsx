import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

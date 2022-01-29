import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Detail from "./routes/movie/Detail";
import Home from "./routes/movie/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/movie" element={<Home />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

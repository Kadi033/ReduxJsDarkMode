import { Route, Routes } from "react-router-dom";
import ConcFilterHome from "./functions/ConcFilterHome";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen ">
      <Header />
      <Routes>
        <Route path="/" element={<ConcFilterHome />} />
      </Routes>
    </div>
  );
}

export default App;

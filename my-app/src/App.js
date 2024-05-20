import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Sections from "./components/sections/sections";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/*" element={<Sections/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

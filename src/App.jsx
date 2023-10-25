import { useState } from "react";
import "./App.css";
import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import useLoco from "./hooks/useLoco";

function App() {
  const [preloader, setPreloader] = useState(true);
  useLoco(!preloader);
  return (
    <>
      <CustomCursor />
      {preloader ? (
        <Preloader preloader={preloader} setPreloader={setPreloader} />
      ) : (
        <div className="main" data-scroll-contaianer>
          <Navbar />
          <Header />
          <Featured />
          <About />
        </div>
      )}
    </>
  );
}

export default App;

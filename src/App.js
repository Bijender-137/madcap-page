import "./App.css";
import "./about.css";
import "./master.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import Madcap from "./components/Madcap";
import Header from "./components/Header";
import Tokenomics from "./components/Tokenomics";
import RoadMap from "./components/RoadMap";
import Skating from "./components/Skating";
import Main from "./components/common/Main";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <div className="bg_img_hero min_h_100 position-relative">
        <Main />
        <Container className="custom_container px-0 min_h_100 ">
          <Header />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/madcap" Component={Madcap} />
            <Route exact path="/tokenomics" Component={Tokenomics} />
            <Route exact path="/roadmap" Component={RoadMap} />
            <Route exact path="/skating" Component={Skating} />
          </Routes>
          
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default App;

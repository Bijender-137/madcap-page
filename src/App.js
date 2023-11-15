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
import Skating from "./components/Staking";
import Main from "./components/common/Main";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <div className="bg_img_hero min_h_100 min-vh-100">
        <div className="max-w-1920 position-relative mx-auto">
          <Main />
          <Container className="custom_container min_h_100 d-flex flex-column justify-content-center align-items-center">
            <Header />
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/madcap" Component={Madcap} />
              <Route exact path="/tokenomics" Component={Tokenomics} />
              <Route exact path="/roadmap" Component={RoadMap} />
              <Route exact path="/skating" Component={Skating} />
              <Route exact path="/nft" Component={Home} />
              <Route exact path="/whitepaper" Component={Home} />
            </Routes>

            <Footer />
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;

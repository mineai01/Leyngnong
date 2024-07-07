import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Carousal from "./components/Carousal";
import "./App.css";
import Login from "./page/Login";

function App() {
  // [headText, setHeadText] = useState("");

  return (
    <div className="app">
      <Navbar />
      <Carousal />
      <Header />
      <Content />
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;

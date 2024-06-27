import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Carousal from "./components/Carousal";
import "./App.css";

function App() {
  // [headText, setHeadText] = useState("");

  return (
    <div className="app">
      <Navbar />
      <Carousal />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

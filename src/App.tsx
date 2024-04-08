import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Home } from "./pages";
import "./styles/app.scss";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
};

export default App;

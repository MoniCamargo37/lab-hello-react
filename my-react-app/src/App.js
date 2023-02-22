import "./App.css";
import Heading from "./components/Heading";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="first-container">
          <Navbar />
          <Heading />
        </div>
        <div className="features">
          <Feature />
        </div>
      </div>
    </>
  );
};

export default App;

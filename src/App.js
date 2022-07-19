import { Link } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <nav className="home-nav">
        <Link to={"/discover"}>Discover</Link>
        <Link to={"/store"}>Store</Link>
      </nav>

      <div className="content">
        <h1>HERMES</h1>
        <p className="desc">Steam Keys and more</p>
        <Link className="btn discover-btn" to={"/discover"}>Discover</Link>
      </div>
    </div>
  );
}

export default App;


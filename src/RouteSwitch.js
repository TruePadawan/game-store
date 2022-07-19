import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Discover from "./components/pages/Discover";
import Store from "./components/pages/Store";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/game-store" element={<App />} />
        <Route path="/game-store/discover" element={<Discover />} />
        <Route path="/game-store/store" element={<Store />} />
        <Route
          path="/game-store/*"
          element={
            <main>
              <p>There's nothing here.</p>
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;

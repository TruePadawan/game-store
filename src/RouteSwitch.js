import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Discover from "./components/pages/Discover";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="discover" element={<Discover />} />
                <Route path="*" element={
                <main>
                    <p>There's nothing here.</p>
                </main>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;
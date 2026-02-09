import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import StateDemo from "./pages/StateDemo";
import EffectsDemo from "./pages/EffectDemo";
import FormsDemo from "./pages/FormsDemo";

function ComingSoon({ title }) {
  return (
    <div className="page">
      <h2>{title}</h2>
      <p>Coming next 👇</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/state" element={<StateDemo />} />
          <Route path="/effects" element={<EffectsDemo />} />
          <Route path="/forms" element={<FormsDemo />} />
          <Route path="/context" element={<ComingSoon title="Context" />} />
          <Route path="/hooks" element={<ComingSoon title="Custom Hooks" />} />
          <Route path="/performance" element={<ComingSoon title="Performance" />} />
        </Routes>
      </main>
    </>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./components/onboarding";
function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

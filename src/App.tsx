import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import CarDiagnosticsPage from "./pages/CarDiagnosticsPage/CarDiagnosticsPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import OccupationalHealthPage from "./pages/OccupationalHealthPage/OccupationalHealthPage";
import WorkerTrainingPage from "./pages/WorkerTrainingPage/WorkerTrainingPage";
import WorkshopPage from "./pages/WorkshopPage/WorkshopPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/occupational-health"
            element={<OccupationalHealthPage />}
          />
          <Route path="/worker-training" element={<WorkerTrainingPage />} />
          <Route path="/workshop" element={<WorkshopPage />} />
          <Route path="/car-diagnostics" element={<CarDiagnosticsPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

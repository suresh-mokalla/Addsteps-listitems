import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StepForm from "./StepForm";  // Import your StepForm component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the steps */}
          <Route path="/steps" element={<StepForm />} />
          
          {/* Default Route (optional) */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/layots/footer";
import Virtualtour from "./components/virtualtour/virtualtour";
// import Virtualtour from "./components/virtualtour/virtualtour";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Virtualtour />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>

    </>
  );
}

export default App;

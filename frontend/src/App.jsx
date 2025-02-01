import React from "react";
import Header from "./components/Header";
import SearchPaper from "./components/SearchPaper";
import UploadPaper from "./components/UploadPaper";
import ShowPaper from "./components/ShowPaper";
import Home from "./pages/user/Home";

import { Routes, Route } from "react-router-dom";
import UnderDevelopment from "./pages/user/UnderDevlopment";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>

        {/* <UploadPaper /> */}
      </div>
    </>
  );
};

export default App;

import React from "react";
import Header from "./components/Header";
import SearchPaper from "./components/SearchPaper";
import UploadPaper from "./components/UploadPaper";
import ShowPaper from "./components/ShowPaper";
import Home from "./pages/user/Home";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Home />
        {/* <SearchPaper />
        <ShowPaper /> */}
        {/* <UploadPaper /> */}
      </div>
    </>
  );
};

export default App;

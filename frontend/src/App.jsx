import React from "react";
import Header from "./components/Header";
import SearchPaper from "./components/SearchPaper";
import UploadPaper from "./components/UploadPaper";
import ShowPaper from "./components/ShowPaper";

const App = () => {
  return (
    <>
      <div>
        <Header />
        {/* <SearchPaper /> */}
        {/* <ShowPaper /> */}
        <UploadPaper />
      </div>
    </>
  );
};

export default App;

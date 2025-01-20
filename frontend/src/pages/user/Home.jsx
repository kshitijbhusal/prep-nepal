import { React, useState } from "react";
import SearchPaper from "../../components/SearchPaper";
import ShowPaper from "../../components/ShowPaper";

const Home = () => {
  const [paper, setPaper] = useState(""); //Lifting the state

  return (
    <>
      <div className=" ">
        <SearchPaper setPaper={setPaper} />
        <ShowPaper paper={paper} />
      </div>
    </>
  );
};

export default Home;

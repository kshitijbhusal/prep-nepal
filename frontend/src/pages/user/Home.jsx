import { React, useState } from "react";
import SearchPaper from "../../components/SearchPaper";
import ShowPaper from "../../components/ShowPaper";

const Home = () => {
  const [paper, setPaper] = useState({}); //Lifting the state

  return (
    <>
      <div className="bg-pink-500 grid grid-cols-2">
        <SearchPaper setPaper={setPaper} />
        <ShowPaper paper={paper} />
      </div>
    </>
  );
};

export default Home;

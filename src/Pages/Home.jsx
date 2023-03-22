import React from "react";
import VideoGrid from "../Component/Grid/VideoGrid";
import Pagination from "../Component/Pagination/Pagination";
import Tags from "../Component/Tags/Tags";

const Home = () => {
  return (
    <div>
      <Tags />
      <VideoGrid />
      <Pagination />
    </div>
  );
};

export default Home;

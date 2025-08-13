import React from "react";
import { BsSearch } from "react-icons/bs";
// import { BsFilePlayFill } from "react-icons/bs";
import "./VideoListingPage.css";
import VideoListingCard from "../components/VideoListingCard";
import Filters from "../components/Filters";
import { useMainContext } from "../context/MainContext";
const VideoListingPage = () => {
  const { setSearchInput } = useMainContext();
  return (
    <>
      <div className="video-listing-page">
        <div className="flex-row">
          <div className="search-input-container-two ">
            <div className="search flex-row-only">
              <BsSearch size={22} color="var(--green-color)" />
              <input
                className="search-input"
                type="text"
                placeholder="Explore..."
                onChange={(event) => setSearchInput(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex category-chips-container">
          <Filters />
        </div>

        <VideoListingCard />
      </div>
    </>
  );
};
export default VideoListingPage;

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link component
import { videos } from "../backend/videos";
import { BsThreeDotsVertical } from "react-icons/bs";
// import VideoOptionsDrawer from "./VideoOptionsDrawer/VideoOptionsDrawer";
import { useMainContext } from "../context/MainContext";
import "./VideoListingCard.css";

const VideoListingCard = () => {
  // const [isDialogOpen, setIsDialogOpen] = useState({});

  const { searchInput, selectedCategory, addtohistory, historyvideos } =
    useMainContext();

  // const toggleDialog = (videoId) => {
  //   setIsDialogOpen((prevOpenDialogs) => ({
  //     ...prevOpenDialogs,
  //     [videoId]: !prevOpenDialogs[videoId],
  //   }));
  // };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleVideoClick = (video) => {
    if (!historyvideos.some((historyVideo) => historyVideo._id === video._id)) {
      addtohistory(video);
    }
  };

  const displayVideos =
    selectedCategory === "All"
      ? filteredVideos
      : filteredVideos.filter(
          (video) => video.categoryName === selectedCategory
        );

  return (
    <div className="card-display-grid">
      {displayVideos.map((video) => (
        <div key={video._id} className="video-card">
          <Link
            to={`/video/${video._id}`}
            className="video-link"
            onClick={() => handleVideoClick(video)}
          >
            <img
              src={video.img}
              alt={video.title}
              className="video-thumbnail"
            />
          </Link>
          <h3 className="video-title">{video.title}</h3>
          <p className="video-owner">Owner: {video.owner}</p>
          <p className="video-views">Views: {video.views}</p>
          <p className="video-date">Date: {video.date}</p>
          <p className="video-category">Category: {video.categoryName}</p>

          {/* <BsThreeDotsVertical onClick={() => toggleDialog(video._id)} /> */}
          {/* {isDialogOpen[video._id] && (
            <div className="dialog-box">
              <button>Create Playlist</button>
              <button>Add to Playlist</button>
              <button onClick={() => toggleDialog(video._id)}>Close</button>
            </div>
          )} */}
          {/* <VideoOptionsDrawer video={video} onClose={toggleDrawer} /> */}
        </div>
      ))}
    </div>
  );
};

export default VideoListingCard;

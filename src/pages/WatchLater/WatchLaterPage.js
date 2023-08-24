import React from "react";
import "../History/HistoryPage.css";
import "../Likes/LikePage.css";
import { useMainContext } from "../../context/MainContext";

const WatchLaterPage = () => {
  const { bookmarkvideos } = useMainContext();

  return (
    <div className="history-page">
      <h2 className="heading">Bookmarked Videos</h2>
      <div className="history-video-list">
        {bookmarkvideos.map((video) => (
          <div key={video._id} className="history-video">
            <img
              src={video.img}
              alt={video.title}
              className="history-video-thumbnail"
            />
            <h3>{video.title}</h3>
            <p>Owner: {video.owner}</p>
            <p>Views: {video.views}</p>
            <p>Date: {video.date}</p>
            <p>Category: {video.categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchLaterPage;

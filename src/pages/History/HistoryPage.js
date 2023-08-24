import React from "react";
import "./HistoryPage.css";
import "../Likes/LikePage.css";
import { MdCancel } from "react-icons/md";
import { useMainContext } from "../../context/MainContext";

const HistoryPage = () => {
  const { historyvideos, sethistoryvideos } = useMainContext();

  const deleteFromHistory = (videoId) => {
    try {
      const updatedHistoryVideos = historyvideos.filter(
        (video) => video._id !== videoId
      );

      sethistoryvideos(updatedHistoryVideos);
    } catch (error) {
      console.error("Error deleting video from history:", error);
    }
  };

  return (
    <div className="history-page">
      {/* <h2 className="heading">History Videos</h2> */}

      {historyvideos && historyvideos.length > 0 ? (
        <div className="history-video-list">
          {historyvideos.map((video) => (
            <div key={video._id} className="history-video">
              <MdCancel
                size={23}
                onClick={() => deleteFromHistory(video._id)}
              />
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
      ) : (
        <p className="paragraph">No history videos</p>
      )}
    </div>
  );
};

export default HistoryPage;

import React from "react";
import { useParams } from "react-router-dom";
import clipboard from "clipboard-copy";
import { Link } from "react-router-dom";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import {
  BsFillBookmarkFill,
  // BsCollectionPlayFill,
  BsDot,
  // BsFillBookmarkDashFill,
  BsBookmark,
  // BsShare,
  BsFillShareFill,
} from "react-icons/bs";
import "./SingleVideoPage.css";
import { videos } from "../backend/videos";
import { useMainContext } from "../context/MainContext";

export const SingleVideoPage = () => {
  // const [singlePageModal, setSinglePageModal] = useState(false);
  const { addtolikes, likevideos, addtobookmark, bookmarkvideos, searchInput } =
    useMainContext();
  const videoId = useParams();
  const video = videos.find((item) => item._id === videoId.videoId);
  const isLiked = likevideos.some((item) => item._id === videoId.videoId);
  const isBookmarked = bookmarkvideos.some(
    (item) => item._id === videoId.videoId
  );

  const handleLikeClick = () => {
    if (isLiked) {
      addtolikes(video, isLiked);
    } else {
      addtolikes(video, isLiked);
    }
  };
  const handleBookmark = () => {
    if (isBookmarked) {
      addtobookmark(video, isBookmarked);
    } else {
      addtobookmark(video, isBookmarked);
    }
  };
  const handleShareClick = async () => {
    try {
      const videoShareLink = `https://www.youtube.com/embed/${videoId.videoId}?autoplay=1`;

      await clipboard(videoShareLink);

      alert("Video link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy video link: ", error);
    }
  };
  return (
    <div className="single-video-page flex">
      <div className="video-iframe flex">
        <iframe
          src={`https://www.youtube.com/embed/${videoId.videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="singlepage-video-title">{video?.title}</div>
        <div className="singlepage-video-section-two flex">
          <div>
            <p className="flex margin-top-bottom-zero singlepage-video-card-genre">
              {video?.categoryName} <BsDot /> {video?.views} <BsDot />
              {video?.date}
            </p>
          </div>
          <span className="video-iframe-icons-container flex">
            {isLiked ? (
              <AiFillLike
                size={23}
                color="var(--green-color)"
                onClick={handleLikeClick}
              />
            ) : (
              <AiOutlineLike
                size={23}
                color="var(--green-color)"
                onClick={handleLikeClick}
              />
            )}

            {isBookmarked ? (
              <BsFillBookmarkFill
                size={23}
                color="var(--green-color)"
                onClick={handleBookmark}
              />
            ) : (
              <BsBookmark
                size={23}
                color="var(--green-color)"
                onClick={handleBookmark}
              />
            )}

            <BsFillShareFill
              size={23}
              color="var(--green-color)"
              onClick={handleShareClick}
            />
          </span>
        </div>
      </div>
      <div className="single-video-page-videoList flex">
        {searchInput === ""
          ? // Show all videos if searchInput is empty
            videos.map((video) => (
              <Link key={video._id} to={`/video/${video._id}`}>
                <div key={video._id}>
                  {/* Render video item here */}
                  <img src={video.img} alt={video.title} />
                  <h3>{video.title}</h3>
                  <p>Owner: {video.owner}</p>
                  <p>Views: {video.views}</p>
                  <p>Date: {video.date}</p>
                  <p>Category: {video.categoryName}</p>
                </div>
              </Link>
            ))
          : // Show videos based on searchInput
            videos
              .filter((video) =>
                video.title.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((filteredVideo) => (
                <Link
                  key={filteredVideo._id}
                  to={`/video/${filteredVideo._id}`}
                >
                  <div key={filteredVideo._id}>
                    {/* Render filtered video item here */}
                    <img src={filteredVideo.img} alt={filteredVideo.title} />
                    <h3>{filteredVideo.title}</h3>
                    <p>Owner: {filteredVideo.owner}</p>
                    <p>Views: {filteredVideo.views}</p>
                    <p>Date: {filteredVideo.date}</p>
                    <p>Category: {filteredVideo.categoryName}</p>
                  </div>
                </Link>
              ))}
      </div>
    </div>
  );
};

export default SingleVideoPage;

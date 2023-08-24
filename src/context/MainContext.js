import React, { useContext, createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { BsCheckCircleFill } from "react-icons/bs";
const MainContext = createContext();

const useMainContext = () => useContext(MainContext);

const MainProvider = ({ children }) => {
  const addtohistory = (video) => {
    sethistoryvideos((prevHistory) => [...prevHistory, video]);
  };
  const addtolikes = (video, isLiked) => {
    if (isLiked) {
      setlikevideos((prevLike) =>
        prevLike.filter((item) => item._id !== video._id)
      );
      toast("removed from like videos");
    } else {
      setlikevideos((prevLike) => [...prevLike, video]);
      toast("Added to liked videos.", { icon: <BsCheckCircleFill /> });
    }
  };
  const addtobookmark = (video, isBookmarked) => {
    if (isBookmarked) {
      setbookmarkvideos((prevMark) =>
        prevMark.filter((item) => item._id !== video._id)
      );
      toast("removed from watch later");
    } else {
      setbookmarkvideos((prevMark) => [...prevMark, video]);
      toast("Added to watch later", { icon: <BsCheckCircleFill /> });
    }
  };

  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initialize with "All"
  const [historyvideos, sethistoryvideos] = useState([]);
  const [likevideos, setlikevideos] = useState([]);
  const [bookmarkvideos, setbookmarkvideos] = useState([]);
  return (
    <MainContext.Provider
      value={{
        searchInput,
        setSearchInput,
        selectedCategory,
        setSelectedCategory,
        addtohistory,
        sethistoryvideos,
        historyvideos,
        addtolikes,
        likevideos,
        addtobookmark,
        bookmarkvideos,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { useMainContext, MainProvider };
export default MainProvider;

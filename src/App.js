import "./App.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";
import SingleVideoPage from "./pages/SingleVideoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HistoryPage from "./pages/History/HistoryPage";
import LikePage from "./pages/Likes/LikePage";
import SignUpPage from "./pages/SignUpPage";
import VideoListingPage from "./pages/VideoListingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainProvider from "./context/MainContext";
import WatchLaterPage from "./pages/WatchLater/WatchLaterPage";
import RequiresAuth from "./components/RequiresAuth";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="App">
      <Router>
        <MainProvider>
          <AuthProvider>
            <Navbar />
            <Sidebar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/video"
                element={
                  <RequiresAuth>
                    <VideoListingPage />
                  </RequiresAuth>
                }
              />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route
                path="/history-videos"
                element={
                  <RequiresAuth>
                    <HistoryPage />
                  </RequiresAuth>
                }
              />
              <Route
                path="/liked-videos"
                element={
                  <RequiresAuth>
                    <LikePage />
                  </RequiresAuth>
                }
              />
              <Route
                path="/watch-later"
                element={
                  <RequiresAuth>
                    <WatchLaterPage />
                  </RequiresAuth>
                }
              />
              <Route path="/video/:videoId" element={<SingleVideoPage />} />
            </Routes>
            <Toaster
              position="top-right"
              toastOptions={{
                className: "toast",
                duration: 2000,
              }}
            />
          </AuthProvider>
        </MainProvider>
      </Router>
    </div>
  );
}

export default App;

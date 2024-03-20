import { useState } from "react";
import "./App.scss";
import video from "./assets/video-5.mp4";
import ContentTree from "./components/content-tree/content-tree";
import { data_tree } from "./constant/data-tree";
import { ContentContext } from "./context/content-context";

function App() {
  const [openContent, setOpenContent] = useState<{ [key: string]: boolean }>({
    root: true,
  });
  const toggleOpenContent = (id: string) => {
    setOpenContent({ ...openContent, [id]: !openContent[id] });
  };
  return (
    <ContentContext.Provider value={{ openContent, toggleOpenContent }}>
      <div className="main-page">
        <div className="text-section">
          <div className="text-container">
            <ContentTree data={data_tree} />
          </div>
        </div>
        <div className="video-section">
          <video
            src={video}
            loop
            muted
            controls={false}
            disablePictureInPicture
            autoPlay
            preload="auto"
            className="video"
          />
        </div>
      </div>
    </ContentContext.Provider>
  );
}

export default App;

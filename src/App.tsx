import { useRef, useState } from "react";
import "./App.scss";
import ContentTree from "./components/content-tree/content-tree";
import { data_tree } from "./constant/data-tree";
import { ContentContext } from "./context/content-context";
import ScreenTexture from "./components/screen-texture/screen-texture";
import Header from "./components/header/header";
import Route from "./routes/route";

function App() {
  const [openContent, setOpenContent] = useState<{ [key: string]: boolean }>({
    root: true,
  });
  const [buttonCount, setButtonCount] = useState(0);
  const toggleOpenContent = (id: string) => {
    const newCountState = { ...openContent, [id]: !openContent[id] };
    setButtonCount(newCountState[id] ? buttonCount + 1 : buttonCount - 1);
    setOpenContent(newCountState);
  };
  return (
    <ContentContext.Provider
      value={{ openContent, toggleOpenContent, setButtonCount, buttonCount }}
    >
      <Route />
    </ContentContext.Provider>
  );
}

export default App;

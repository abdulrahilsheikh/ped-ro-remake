import { useContext, useEffect } from "react";
import { ContentContext } from "../../context/content-context";
import "./reveal-btn.scss";
const RevealButton = ({ text, id }: { text: string; id: string }) => {
  const { toggleOpenContent, openContent } = useContext(ContentContext);

  return (
    <button
      data-open={openContent[id] ? "open" : "closed"}
      className={`reveal-btn `}
      onClick={() => {
        toggleOpenContent(id);
      }}
    >
      {text}
    </button>
  );
};
export default RevealButton;

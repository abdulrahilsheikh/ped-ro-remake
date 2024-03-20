import { PropsWithChildren, useContext } from "react";
import { ContentContext } from "../../context/content-context";
import "./content.scss";

const ContentContainer = ({
  id,
  children,
}: PropsWithChildren<{ id: string }>) => {
  const { openContent } = useContext(ContentContext);
  return (
    <span
      data-open={openContent[id] ? "open" : "close"}
      className={`content-container`}
    >
      {children}
    </span>
  );
};

export default ContentContainer;

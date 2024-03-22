import ContentTree from "../../components/content-tree/content-tree";
import { data_tree } from "../../constant/data-tree";
import video from "../../assets/video-5.mp4";
import "./home.page.scss";
const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;

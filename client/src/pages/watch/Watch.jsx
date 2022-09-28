import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <iframe  src="https://www.youtube.com/embed/8E2l4K0OvMc"  title="YouTube video player" frameborder="0" allowFullScreen={true}></iframe>
      {/* <video src="" className="vide" autoPlay progress controls/>  */}
    </div>
  )
}

export default Watch

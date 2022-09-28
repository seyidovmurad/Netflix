import { PlayArrow, Add, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import { useState } from "react"
import "./listItem.scss"

const ListItem = ({index}) => {
  const [hovered, setHovered] = useState(false);
  const trailer = "https://www.imdb.com/video/vi440910361/?listId=ls053181649?ref_=ext_shr_lnk";
  return (
    <div 
        className="listItem" 
        style={{left: hovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}>
        <img src="https://parade.com/.image/t_share/MTkwNTc2MDM5NzU0Mjc4MDEz/netflix.jpg" alt="" />
        {hovered && (
          <>
          <iframe  src="https://www.youtube.com/embed/8E2l4K0OvMc"  title="YouTube video player" frameborder="0" ></iframe>
          {/* <video src={trailer} autoPlay={true} loop /> */}
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="infoTop">
                <span>1hour 30mins</span>
                <span className="limit">16+</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pe corrupti nisi. Nulla, perferendis!
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
        
    </div>
  )
}

export default ListItem
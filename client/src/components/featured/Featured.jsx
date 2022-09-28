import "./featured.scss";
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
const Featured = ({type}) => {
  return (
    <div className="featured">
        { type && (
            <div className="category">
                <span>{type === "movie" ? "Movie" : "Series"}</span>
                <select name="genre" id="genre">
                    <option >Genre</option>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                </select>
            </div>
        )}
        <img src="https://parade.com/.image/t_share/MTkwNTc2MDM5NzU0Mjc4MDEz/netflix.jpg" alt="" />
        <div className="info">
            <img src="https://images.fanart.tv/fanart/the-umbrella-academy-5c55fb56bda34.png" alt="" />
            <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, possimus porro. Voluptate veritatis dolorem aspernatur autem impedit excepturi cumque nobis?</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useRef } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = () => {
    const listRef = useRef();
    const [isMoved, setIsMoved] = useState(true);
    const handleClick = (direction) => {
        let distance = Number(listRef.current.getBoundingClientRect().x - 50);
        let width = listRef.current.getBoundingClientRect().width;
        // setIsMoved(distance < -200);

        if((direction > 0 && distance >= 0) || (direction < 0 && -distance > width - 1490)) 
            return;
        
        else 
            listRef.current.style.transform = `translateX(${distance + (230 * direction)}px)` 

    }
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="slider left" style={{display: isMoved ? "block" : "none"}} onClick={() => handleClick(1)}/>
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <ArrowForwardIosOutlined className="slider right" onClick={() => handleClick(-1)}/>
            </div>
        </div>
    )
}

export default List
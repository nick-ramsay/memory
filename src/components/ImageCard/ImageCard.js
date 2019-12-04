import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
        <div className="col-md-4 imageContainer">
            <img src={props.src} alt={props.name} id={props.id} className="img-thumbnail mb-2 imageDiv"></img>
        </div>
    );
}

export default ImageCard;

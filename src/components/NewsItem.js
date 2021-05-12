import React from "react";
import "../style.css";

export default class NewsItem extends React.Component{


    render() {
        const { imageSource, description } = this.props;
        
        return (
            <div className="news-container">
                <img className="news-image" alt="img" src={imageSource}/>
                < p> {description} </p>
                <p/>
            </div>
        )
    }
}
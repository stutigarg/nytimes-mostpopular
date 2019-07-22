import React from 'react';
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import './ArticleItem.css';

const ArticleItem = ({item, onSelectHandler}) => {

    return (
        <Media as="li" onClick={() => onSelectHandler(item)} className={item.selected ? "selectedBg": ''}>
            <Image
                className="mr-3"
                src={item.image}
                alt="Thumbnail placeholder"
                roundedCircle
            />
            <Media.Body>
                <h5>{item.title}</h5>
                <p>
                    {item.summary}
                    <span className="lineBreak"/>
                    {item.author}
                    <span className="date">{item.publishedOn}</span>
                </p>
            </Media.Body>
        </Media>
    )
};

export default ArticleItem;
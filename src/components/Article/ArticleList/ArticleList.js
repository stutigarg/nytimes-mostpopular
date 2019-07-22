import React from 'react';
import ArticleItem from "./ArticleItem";

const ArticleList = ({articles, onSelectHandler}) =>{
        const renderedArticles =  articles.map((article) => {
            return (
                <ArticleItem
                    item={article}
                    key={article.id}
                    onSelectHandler={onSelectHandler}
                />
            )
        });
        return  <ul className="list-unstyled">{renderedArticles}</ul>;
    }

export default ArticleList;
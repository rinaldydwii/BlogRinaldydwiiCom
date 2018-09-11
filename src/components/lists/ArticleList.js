import React from 'react';
import ArticleItem from '../items/ArticleItem';

const ArticleList = (props) => {
    let list = props.data.map((article, index) => {
        if (index < props.max) {
            return (
                <ArticleItem data={ article } key={ index }></ArticleItem>
            )
        }
    })
    return (
        <div className="article__list">
            { list }
        </div>
    )
}

export default ArticleList;
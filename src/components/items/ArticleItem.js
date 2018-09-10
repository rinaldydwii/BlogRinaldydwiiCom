import React from 'react';

const ArticleItem = (prop) => {
    return (
        <a className="article__item" href={ '/article/'+prop.data.canonical }>
            <div className="item__left">
                <div className="item__thumbnail">
                    <img src={ prop.data.thumbnail } alt={ prop.data.title } />
                </div>
            </div>
            <div className="item__right">
                <div className="item__title">{ prop.data.title }</div>
                <div className="item__date-publish">{ prop.data.date }</div>
            </div>
            
        </a>
    )
}

export default ArticleItem;
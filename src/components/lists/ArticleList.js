import React from 'react';
import LazyLoad from 'react-lazyload';

import imgPlaceholder from '../../assets/placeholder-3x2.jpg';

const ArticlePlaceholder = () => {
    return (
        <a className="article__item article__placeholder">
            <div className="item__left">
                <div className="item__thumbnail">
                    <img src={ imgPlaceholder } alt="Image Placeholder" />
                </div>
            </div>
            <div className="item__right">
                <div className="item__title">&nbsp;</div>
                <div className="item__date-publish">&nbsp;</div>
            </div>
        </a>
    )
}

const ArticleItem = (prop) => {
    return (
        <LazyLoad height="200" placeholder={<ArticlePlaceholder />} offset={[-50, 0]}>
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
        </LazyLoad>
    )
}

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
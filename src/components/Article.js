import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import LazyLoad from 'react-lazyload';

import TagList from './lists/TagList';
import NotFound from './NotFound';

import imgPlaceholder from '../assets/placeholder-3x2.jpg';

const ThumbnailPlaceholder = () => {
    return (
        <div className="header__thumbnail">
            <img src={ imgPlaceholder } alt="Image Placeholder" />
        </div>
    )
}

const ArticleContent = (props) => {
    return (
        <article>
            <header className="article-content__header">
                <LazyLoad height="200" placeholder={<ThumbnailPlaceholder />} offset={[-50, 0]}>
                <div className="header__thumbnail">
                    <img src={ props.data.thumbnail } alt={ props.data.title } />
                </div>
                </LazyLoad>
                <div className="header__title">
                    <h1>{ props.data.title }</h1>
                </div>
                <div className="header__date-publish">
                    <small>{ props.data.date }</small>
                </div>
                <hr />
            </header>
            <section className="article-content__content">
                { ReactHtmlParser(props.data.content) }
            </section>
            <footer className="article-content__footer">
                <div className="footer__title">
                    <h4>Tag:</h4>
                </div>
                <div className="footer__content">
                    <TagList data={ props.data.tags }></TagList>
                </div>
            </footer>
        </article>
    )
}

const Article = (props) => {
    
    let content = props.data == null ? <NotFound name="Tulisan"/> : <ArticleContent data={props.data}/>;
    return (
        <section id="article-content">
            <div className="container">
                {content}
            </div>
        </section>
    )
}

Article.propTypes = {
    data: PropTypes.object
}


export default Article;
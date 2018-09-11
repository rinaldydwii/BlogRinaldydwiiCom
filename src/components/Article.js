import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import TagList from './lists/TagList';

const Article = (props) => {
    return (
        <section id="article-content">
            <div className="container">
                <article>
                    <header className="article-content__header">
                        <div className="header__thumbnail">
                            <img src={ props.data.thumbnail } alt={ props.data.title } />
                        </div>
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
            </div>
        </section>
    )
}

export default Article;
import React from 'react';

import ArticleList from './lists/ArticleList';

const RecentArticle = (props) => {
    let max = 10;
    let readmore = (
        <a href="#" className="button button__read-more">Lihat Berikutnya</a>
    );
    
    if (props.type != undefined) {
        if (props.type == 'article') {
            max = 4;
            readmore = (
                <a href="/" className="button button__read-more">Lihat Selengkapnya</a>
            );
        }
    }
    return (
        <section id="recent-article">
            <div className="container">
                <div className="section__title"><span>Tulisan Terbaru</span></div>
                <div className="section__content">
                    <ArticleList data={ props.data } max={ max } type={ props.type }></ArticleList>
                    { props.data.length < max ? '' : readmore }
                </div>
            </div>
        </section>
    )
}

export default RecentArticle;
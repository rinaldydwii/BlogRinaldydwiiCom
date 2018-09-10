import React from 'react';

import ArticleList from './lists/ArticleList';

const RecentArticle = (props) => {
    return (
        <section id="recent-article">
            <div className="container">
                <div className="section__title"><span>Tulisan Terbaru</span></div>
                <div className="section__content">
                    <ArticleList data={ props.data }></ArticleList>
                    <a href="#" className="button button__read-more">Lihat Berikutnya</a>
                </div>
            </div>
        </section>
    )
}

export default RecentArticle;
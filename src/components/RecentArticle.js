import React from 'react';
import PropTypes from 'prop-types';

import ArticleList from './lists/ArticleList';

const ReadMore = (props) => {
    let readmore;
    if (props.type == 1) {
        readmore = <a href="/article" className="button button__read-more">Lihat Selengkapnya</a>;
    }
    else if (props.type == 2) {
        readmore = <a href="#" className="button button__read-more">Lihat Berikutnya</a>
    }
    return (
        readmore
    )
}

ReadMore.propTypes = {
    type: PropTypes.number.isRequired
}

const RecentArticle = (props) => {
    let max = 8;
    let type = 2;
    let title = <div className="section__title"><span>Tulisan Terbaru</span></div>;
    
    if (props.max) {
        max = props.max;
        type = 1;
    }
    
    return (
        <section id="recent-article">
            <div className="container">
                { props.title ? title : '' }
                <div className="section__content">
                    <ArticleList data={ props.data } max={ max }></ArticleList>
                    { props.data.length < max ? '' : <ReadMore type={type}></ReadMore> }
                </div>
            </div>
        </section>
    )
}

RecentArticle.propTypes = {
    data: PropTypes.array,
    title: PropTypes.bool,
    max: PropTypes.number
}

export default RecentArticle;
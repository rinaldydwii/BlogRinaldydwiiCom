import React from 'react';
import { connect } from 'react-redux';

import { fetchArticleInfo, fetchArticlesExcept } from '../actions/ArticleAction';

import Loading from '../components/Loading';
import Container from '../components/Container';
import ArticleInfo from '../components/Article';

class Article extends React.Component {
    componentDidMount() {
        let canonical_ori = this.props.match.params.canonical, 
            max = canonical_ori.length, 
            canonical = canonical_ori.substr(0, max - 11),
            canonical_code = canonical_ori.substr(max - 10, max);

        this.props.dispatch(fetchArticleInfo(canonical, canonical_code));
        this.props.dispatch(fetchArticlesExcept(canonical, canonical_code));
    }
    render() {
        let metaTags = {};
        if (this.props.article) 
            metaTags = {
                metatitle: this.props.article.meta_title,
                metadesc: this.props.article.meta_desc,
                keywords: this.props.article.tags.map(tag => tag.tag_name).join(),
                thumbnail: this.props.article.thumbnail
            };
        return (
            this.props.loadingArticle && this.props.loadingArticles ? <Loading></Loading> : 
            <Container pageClass="article-content-page" 
                breadcrumb={{component: true, page: 'article'}}
                content={<ArticleInfo data={this.props.article}/>}
                recentArticle={{component: true, title: true, data: this.props.articles, max: 4}} 
                metaTags={metaTags}
                >
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loadingArticle: state.articleInfoReducer.loading,
        article: state.articleInfoReducer.article,
        loadingArticles: state.articleReducer.loading,
        articles: state.articleReducer.articles
    }
};

export default connect(mapStateToProps)(Article);
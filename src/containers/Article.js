import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchArticleInfo, fetchArticlesExcept } from '../actions/ArticleAction';

import Loading from '../components/Loading';
import Nav from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleInfo from '../components/Article';
import RecentArticle from '../components/RecentArticle';
import Breadcrumb from '../components/Breadcrumb';

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
        return (
            this.props.loadingArticle && this.props.loadingArticles ? <Loading></Loading> : 
            <div id="article">
                <Helmet>
                    <title>{ this.props.article.title + ' - Blog Rinaldy'}</title>
                </Helmet>
                <Nav></Nav>
                <Breadcrumb></Breadcrumb>
                <ArticleInfo data={ this.props.article }></ArticleInfo>
                <RecentArticle data={ this.props.articles } type="article"></RecentArticle>
                <Footer></Footer>
            </div>
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
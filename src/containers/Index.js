import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchArticles } from '../actions/ArticleAction';

import Loading from '../components/Loading';
import Header from '../components/Header';
import RecentArticle from '../components/RecentArticle';
import Footer from '../components/Footer';

class Index extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchArticles());
    }
    render() {
        console.log('props home', this.props.articles);
        return (
            this.props.loading ? <Loading></Loading> : 
            <div id="homepage">
                <Helmet>
                    <title>Home - Blog Rinaldy</title>
                </Helmet>
                <Header></Header>
                <RecentArticle data={ this.props.articles }></RecentArticle>
                <Footer></Footer>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        articles: state.articles,
    }
};

export default connect(mapStateToProps)(Index);
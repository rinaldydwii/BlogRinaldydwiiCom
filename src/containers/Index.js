import React from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../actions/ArticleAction';

import Loading from '../components/Loading';
import Container from '../components/Container';

class Index extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchArticles());
    }
    render() {
        let metaTags = {
            metatitle: 'Home'
        };
        return (
            this.props.loading ? <Loading></Loading> : 
            <Container pageClass='home-page' 
                recentArticle={{component: true, title: true, data: this.props.articles}} 
                metaTags={metaTags}
                >
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.articleReducer.loading,
        articles: state.articleReducer.articles,
    }
};

export default connect(mapStateToProps)(Index);
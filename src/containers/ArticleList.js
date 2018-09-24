import React from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../actions/ArticleAction';

import Loading from '../components/Loading';
import Container from '../components/Container';

class ArticleList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchArticles());
    }
    render() {
        let metaTags = {
            metatitle: 'Tulisan',
            metadesc: 'Daftar tulisan di Blog Rinaldy - Tempat mencurahkan kebahagiaan, kesedihan dan kegalauan.',
            keywords: 'website, personal, blog, rinaldydwii, rinaldydwiicom, sad, happy, confused, story, tulisan, article'
        };
        return (
            this.props.loading ? <Loading></Loading> : 
            <Container pageClass='articles-list-page' 
                breadcrumb={{component: true, page: 'article'}}
                recentArticle={{component: true, data: this.props.articles}}
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

export default connect(mapStateToProps)(ArticleList);
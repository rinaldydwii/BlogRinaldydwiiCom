import React from 'react';
import { connect } from 'react-redux';

import { fetchArticlesByTag } from '../actions/ArticleAction';

import Loading from '../components/Loading';
import Container from '../components/Container';
import NotFound from '../components/NotFound';

class Tag extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchArticlesByTag(this.props.match.params.id));
    }
    render() {
        let metaTags = {}, recentArticle = {component: false}, breadcrumb = {component: false, page: 'tag', tag: null}, content = <NotFound name='Tag'/>;
        if (this.props.articles) {
            metaTags = {
                metatitle: this.props.tag + ' - Tag',
                metadesc: 'Daftar tulisan dengan tag '+this.props.tag+', Blog Rinaldy - Tempat mencurahkan kebahagiaan, kesedihan dan kegalauan.',
                keywords: 'website, personal, blog, rinaldydwii, rinaldydwiicom, sad, happy, confused, story, tag'
            };
            recentArticle = {component: true, data: this.props.articles};
            breadcrumb = {component: true, page: 'tag', tag: this.props.tag}
            content = null;
        }
            
        
        return (
            this.props.loading ? <Loading></Loading> : 
            <Container pageClass='tag-page' 
                breadcrumb={breadcrumb}
                recentArticle={recentArticle}
                content={content}
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
        tag: state.articleReducer.tag
    }
};

export default connect(mapStateToProps)(Tag);
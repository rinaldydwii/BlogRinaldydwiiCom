import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Nav from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import RecentArticle from './RecentArticle';

const MetaTags = (props) => {
    let title = '', desc = '', keywords = '', thumbnail = '';
    title = props.data.metatitle ? props.data.metatitle : 'Tidak Ditemukan';
    desc = props.data.metadesc ? props.data.metadesc : 'Blog Rinaldy - Tempat mencurahkan kebahagiaan, kesedihan dan kegalauan.';
    keywords = props.data.keywords ? props.data.keywords : 'website, personal, blog, rinaldydwii, rinaldydwiicom, sad, happy, confused, story';
    thumbnail = props.data.thumbnail ? props.data.thumbnail : 'https://assets.rinaldydwii.com/image.jpg';

    return (
        <Helmet>
            <title>{ title + ' - Blog Rinaldy' }</title>
            <meta name="description" content={ desc } />
            <meta name="keywords" content={ keywords } />
            <meta name="copyright" content="Rinaldy Dwi Istanto" />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />
            <meta property="og:site_name" content={ window.location.origin + window.location.pathname } />
            <meta property="og:title" content={ title + ' - Blog Rinaldy'} />
            <meta property="og:image" content={ thumbnail } />
            <meta property="og:description" content={ desc } />
            <meta property="og:url" content={ window.location.origin + window.location.pathname } />
            <link rel="canonical" href={ window.location.origin + window.location.pathname } />
        </Helmet>
    )
}

MetaTags.propTypes = {
    data: PropTypes.shape({
        metatitle: PropTypes.string,
        metadesc: PropTypes.string,
        keywords: PropTypes.string,
        thumbnail: PropTypes.string
    }),
}

const Container = (props) => {
    let breadcrumb = '', recentArticle = '', recentArticleTitle = false, header = '', metaTags = {};
    
    if (props.breadcrumb)
        breadcrumb = <Breadcrumb page={props.breadcrumb.page} tag={props.breadcrumb.tag}></Breadcrumb>;
    if (props.recentArticle) {
        if (props.recentArticle.component) {
            if (props.recentArticle.title)
                recentArticleTitle = true;
            recentArticle = <RecentArticle title={ recentArticleTitle } data={ props.recentArticle.data } max={ props.recentArticle.max }></RecentArticle>;
        }
    }
    if (props.pageClass == 'home-page')
        header = <Header></Header>;
    if (props.metaTags)
        metaTags = props.metaTags;
    return (
        <div id={ props.pageClass }>
            <MetaTags data={ metaTags }></MetaTags>
            <Nav></Nav>
            { header }
            { breadcrumb }
            { props.content }
            { recentArticle }
            <Footer></Footer>
        </div>
    )
}

Container.propTypes = {
    pageClass: PropTypes.string.isRequired,
    breadcrumb: PropTypes.shape({
        component: PropTypes.bool,
        page: PropTypes.string,
        tag: PropTypes.string
    }),
    recentArticle: PropTypes.shape({
        component: PropTypes.bool,
        title: PropTypes.bool,
        data: PropTypes.array
    }),
    metaTags: PropTypes.shape({
        metatitle: PropTypes.string,
        metadesc: PropTypes.string,
        keywords: PropTypes.string,
        thumbnail: PropTypes.string
    }),
    content: PropTypes.object,
    page: PropTypes.string,
};

export default Container;
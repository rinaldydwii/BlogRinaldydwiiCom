import { REQUEST_ARTICLES, RECEIVE_ARTICLES, FAILURE_ARTICLES, REQUEST_ARTICLES_EXCEPT, REQUEST_ARTICLE_INFO, RECEIVE_ARTICLE_INFO, FAILURE_ARTICLE_INFO } from '../actions/ArticleAction';

let initialStateArticles = {
    loading: false,
    articles: [],
    canonical: null,
    canonical_code: null,
    error: ''
};

let initialStateArticleInfo = {
    loading: false,
    article: {
        tags: [],
    },
    error: ''
};

export const articleReducer = (state = initialStateArticles, action) => {
    switch (action.type) {
        case REQUEST_ARTICLES:
            return {
                ...state,
                loading: true,
            }
        case REQUEST_ARTICLES_EXCEPT:
            return {
                ...state,
                canonical: action.canonical,
                canonical_code: action.canonical_code,
                loading: true,
            }
        case RECEIVE_ARTICLES:
            return {
                ...state,
                articles: action.articles,
                loading: false
            }
        case FAILURE_ARTICLES:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}

export const articleInfoReducer = (state = initialStateArticleInfo, action) => {
    switch (action.type) {
        case REQUEST_ARTICLE_INFO:
            return {
                ...state,
                canonical: action.canonical,
                canonical_code: action.canonical_code,
                loading: true,
            }
        case RECEIVE_ARTICLE_INFO:
            return {
                ...state,
                article: action.article,
                loading: false
            }
        case FAILURE_ARTICLE_INFO:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}

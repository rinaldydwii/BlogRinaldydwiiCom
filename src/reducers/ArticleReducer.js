import { REQUEST_ARTICLES, RECEIVE_ARTICLES, FAILURE_ARTICLES } from '../actions/ArticleAction';

let initialState = {
    loading: false,
    articles: [],
    error: ''
};

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ARTICLES:
            return {
                ...state,
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

export default articleReducer;
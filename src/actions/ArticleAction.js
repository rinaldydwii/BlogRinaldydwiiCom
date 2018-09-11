export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const FAILURE_ARTICLES = 'FAILURE_ARTICLES';
export const REQUEST_ARTICLES_EXCEPT = 'REQUEST_ARTICLES_EXCEPT';
export const REQUEST_ARTICLE_INFO = 'REQUEST_ARTICLE_INFO';
export const RECEIVE_ARTICLE_INFO = 'RECEIVE_ARTICLE_INFO';
export const FAILURE_ARTICLE_INFO = 'FAILURE_ARTICLE_INFO';

function requestArticles() {
    return {
        type: REQUEST_ARTICLES,
    }
}
function requestArticlesExcept(canonical, canonical_code) {
    return {
        type: REQUEST_ARTICLES_EXCEPT,
        canonical,
        canonical_code
    }
}
function receiveArticles(articles) {
    return {
        type: RECEIVE_ARTICLES,
        articles,
    }
}
function failureArticles(error) {
    return {
        type: FAILURE_ARTICLES,
        error
    }
}
function requestArticleInfo(canonical, canonical_code) {
    return {
        type: REQUEST_ARTICLE_INFO,
        canonical,
        canonical_code
    }
}
function receiveArticleInfo(article) {
    return {
        type: RECEIVE_ARTICLE_INFO,
        article,
    }
}
function failureArticleInfo(error) {
    return {
        type: FAILURE_ARTICLE_INFO,
        error
    }
}
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function fetchArticles() {
    return dispatch => {
        dispatch(requestArticles());
        let url = 'http://localhost:8000/api/article/recent';
        return fetch(url)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receiveArticles(json.data)))
            .catch(error => dispatch(failureArticles(error)));
    }
}

export function fetchArticlesExcept(canonical, canonical_code) {
    return dispatch => {
        dispatch(requestArticlesExcept(canonical, canonical_code));
        let url = 'http://localhost:8000/api/article/except/'+canonical+'/'+canonical_code;
        return fetch(url)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receiveArticles(json.data)))
            .catch(error => dispatch(failureArticles(error)));
    }
}

export function fetchArticleInfo(canonical, canonical_code) {
    return dispatch => {
        dispatch(requestArticleInfo(canonical, canonical_code));
        let url = 'http://localhost:8000/api/article/'+canonical+'/'+canonical_code;
        return fetch(url)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receiveArticleInfo(json.data)))
            .catch(error => dispatch(failureArticleInfo(error)));
    }
}
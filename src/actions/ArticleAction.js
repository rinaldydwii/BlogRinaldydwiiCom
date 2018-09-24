export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const FAILURE_ARTICLES = 'FAILURE_ARTICLES';
export const REQUEST_ARTICLES_EXCEPT = 'REQUEST_ARTICLES_EXCEPT';
export const REQUEST_ARTICLES_BY_TAG = 'REQUEST_ARTICLES_BY_TAG';
export const RECEIVE_ARTICLES_BY_TAG = 'RECEIVE_ARTICLES_BY_TAG';
export const REQUEST_ARTICLE_INFO = 'REQUEST_ARTICLE_INFO';
export const RECEIVE_ARTICLE_INFO = 'RECEIVE_ARTICLE_INFO';
export const FAILURE_ARTICLE_INFO = 'FAILURE_ARTICLE_INFO';

let urlApi = '';

switch (process.env.NODE_ENV) {
    case 'development': urlApi = 'http://localhost:8000/api/';
                        break;
    case 'production' : urlApi = 'https://editor.rinaldydwii.com/api/';
                        break;
}

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
function requestArticlesByTag(id) {
    return {
        type: REQUEST_ARTICLES_BY_TAG,
        id
    }
}
function receiveArticles(articles) {
    return {
        type: RECEIVE_ARTICLES,
        articles,
    }
}
function receiveArticlesByTag(articles) {
    return {
        type: RECEIVE_ARTICLES_BY_TAG,
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
        let url = urlApi + 'article/recent';
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
        let url = urlApi + 'article/except/'+canonical+'/'+canonical_code;
        return fetch(url)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receiveArticles(json.data)))
            .catch(error => dispatch(failureArticles(error)));
    }
}
export function fetchArticlesByTag(id) {
    return dispatch => {
        dispatch(requestArticlesByTag(id));
        let url = urlApi + 'tag/'+id;
        return fetch(url)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receiveArticlesByTag(json)))
            .catch(error => dispatch(failureArticles(error)));
    }
}

export function fetchArticleInfo(canonical, canonical_code) {
    return dispatch => {
        dispatch(requestArticleInfo(canonical, canonical_code));
        let url = urlApi + 'article/'+canonical+'/'+canonical_code;
        return fetch(url)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receiveArticleInfo(json.data)))
            .catch(error => dispatch(failureArticleInfo(error)));
    }
}
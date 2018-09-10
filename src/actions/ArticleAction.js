export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const FAILURE_ARTICLES = 'FAILURE_ARTICLES';

function requestArticles() {
    return {
        type: REQUEST_ARTICLES,
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
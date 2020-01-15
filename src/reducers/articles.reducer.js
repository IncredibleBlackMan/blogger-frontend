import { combineReducers } from 'redux';
import constants from '../constants';
import initialState from './initialState';

const { LIST_ARTICLES, FETCH_ARTICLE } = constants;

const listArticles = (state = initialState.listArticles, action) => {
    const { payload, type } = action;

    switch (type) {
        case `${LIST_ARTICLES}_PENDING`:
            return {
                ...state,
                loading: true,
            };
        case `${LIST_ARTICLES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
                articles: payload.data.articles,
            };
        case `${LIST_ARTICLES}_REJECTED`:
            return {
                ...state,
                loading: false,
                success: false,
                error: payload,
            };
        default:
            return state;
    }
};

const fetchArticle = (state = initialState.article, action) => {
    const { payload, type } = action;

    switch (type) {
        case `${FETCH_ARTICLE}_PENDING`:
            return {
                ...state,
                loading: true,
            };
        case `${FETCH_ARTICLE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                success: true,
                article: {
                    ...payload.data.article,
                    comments: payload.data.article.comments,
                }
            };
        case `${FETCH_ARTICLE}_REJECTED`:
            return {
                ...state,
                loading: false,
                success: false,
                error: payload,
            };
        default:
            return state;
    }
};

export default combineReducers({
    fetchArticle,
    listArticles
})

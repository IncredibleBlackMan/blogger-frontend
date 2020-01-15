import api from '../api';
import constants from '../constants';

const { LIST_ARTICLES, FETCH_ARTICLE } = constants;

export const listArticles = () => ({
    type: LIST_ARTICLES,
    payload: api({
        url: '/articles',
        method: 'GET',
    }),
});

export const fetchArticle = id => ({
    type: FETCH_ARTICLE,
    payload: api({
        url: `/articles/${id}`,
        method: 'GET',
    }),
});

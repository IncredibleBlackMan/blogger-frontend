import { connect } from 'react-redux';
import { fetchArticle } from '../actions/articles.action';
import articleComponent from '../components/Articles/ArticleComponent';

export const mapStateToProps = ({ articlesReducer }) => ({ ...articlesReducer.fetchArticle });

export default connect(
    mapStateToProps,
    { fetchArticle },
)(articleComponent);

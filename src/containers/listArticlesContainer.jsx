import { connect } from 'react-redux';
import { listArticles } from '../actions/articles.action';
import listArticlesComponent from '../components/Articles/ListArticlesComponent';

export const mapStateToProps = ({ articlesReducer }) => ({ ...articlesReducer.listArticles });

export default connect(
    mapStateToProps,
    { listArticles },
)(listArticlesComponent);

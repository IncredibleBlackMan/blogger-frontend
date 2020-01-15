import React, { useEffect } from 'react';
import Navbar from '../NavBar';
import PropTypes from 'proptypes';

const ArticleComponent = (props) => {
    const {  article, fetchArticle, match } = props;

    useEffect(() => {
        const { id } = match.params;
        fetchArticle(id);
    }, [fetchArticle, match.params])
    return(
        <div>
            <Navbar />
            <div className="container">
                <h4 className="article-title">{article.title}</h4>
                <p className="article-body">{article.body}</p>
                {article.comments.length !== 0
                    ? (
                        <div>
                            {article.comments.map(comment => (
                                <p>{comment.body}</p>
                            ))}
                        </div>
                    ) : <div className="no-data"><p>Be the first to comment.</p></div>
                }
            </div>
        </div>
    );
}

ArticleComponent.propTypes = {
    fetchArticle: PropTypes.func.isRequired,
    article: PropTypes.shape({}).isRequired,
};

export default ArticleComponent;

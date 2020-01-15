import React, { useEffect } from 'react';
import PropTypes from 'proptypes';
import Navbar from '../NavBar';

const ListArticlesComponent = (props) => {
    const { articles, listArticles } = props;
    
    useEffect(() => {
        listArticles();
    }, [listArticles]);

    return (
        <div>
            <Navbar />
            

            <div className="stories container">
                <div id="stories-title">
                    <p>Stories By Me</p>
                </div>
                
                {articles.length !== 0
                    ? (
                        <div>
                            {
                                articles.map(article => (
                                    <div id="stories-content" >
                                        <div className="the-story-content">
                                            <div id="user-information">
                                                <div className="user-image">
                                                    <a href={`/profiles/${article.username}`}><img src={ article.user_avatar } alt="avatar" /></a>
                                                </div>
                                                <div className="user">
                                                    <div id="user-username">
                                                        <p>{article.username}</p>
                                                    </div>
                                                    <div id="date-created">
                                                        <p>{article.created_at}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="title">
                                                <a href={`/articles/${article.id}`}>{article.title}</a>
                                            </div>
                                            <div id="content">
                                                <p>{article.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>    
                    ) : <div className="no-data"><p>You have no articles yet</p></div>
                }
            </div>    
        </div>
    );
}

ListArticlesComponent.propTypes = {
    listArticles: PropTypes.func.isRequired,
    articles: PropTypes.arrayOf(PropTypes.object),
};

ListArticlesComponent.defaultProps = {
    articles: [],
};

export default ListArticlesComponent;

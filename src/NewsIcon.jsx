import PropTypes from 'prop-types';
import './NewsIcon.css';

const NewsIcon = ({ picture, articleType, author, releaseDate, title }) => {
    return (
        <div className="news-icon-container">
            <img src={picture} alt={title} className="news-icon-image"/>
            <span className="news-icon-type">{articleType}</span>
            <h2 className="news-icon-title">{title}</h2>
            <div className="news-icon-footer">
                <span>By {author}</span>
                <span>{releaseDate}</span>
            </div>
        </div>
    );
}

NewsIcon.propTypes = {
    picture: PropTypes.string.isRequired,
    articleType: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default NewsIcon;

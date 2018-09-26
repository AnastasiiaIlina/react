import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Post.css';
import userPic from './assets/userpic.jpg';


class Post extends React.Component {
    render() {
        const { name, text, date, liked } = this.props;

        const postCls = classNames({
            'Post': true,
            'Post--liked': liked,
        });
        return (
            <div className={postCls}> 
                <h3>{ name }</h3>
                <img src={ userPic } alt="" className="Post_img"/>
               
                <p>{ text }</p>
                <span>{date.toDateString() }</span>
            </div>
        )
    }
}

Post.propTypes = {
    name: PropTypes.string.isRequeried,
    text: PropTypes.string.isRequeried,
    // date: PropTypes.shape().isRequeried,

}

export default Post;
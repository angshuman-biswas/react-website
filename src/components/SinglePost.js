import React from 'react';

const SinglePost = ({ post }) => {
    return (
        <li className="single-post">
            <div className="post-title">
                <span>
                    <strong>{post.title}</strong>
                </span>
            </div>
            <div className="post-tag">
                {post.tag}
            </div>
            <div className="flex-container">
                <div>
                    <img className="post-img" src={'../images/' + post.id + '.jpg'} width="350" height="200"></img>
                </div>
                <div>
                    {post.content}
                </div>
            </div>
        </li>
    );
}

export default SinglePost;

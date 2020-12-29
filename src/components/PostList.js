import React, { useState } from 'react';
import { Posts } from './PostData';
import SinglePost from './SinglePost';

const PostList = () => {
    const [posts, setPosts] = useState(Posts);

    const handleTagChange = (tagName) => {
        if (tagName.length) {
            setPosts(Posts.filter(post => post.tag === tagName));
        } else {
            setPosts(Posts);
        }
    };

    return (
        <div className="list-container">
            <div>
                <div className="filter-btns">
                    <button type="button" className="tag-btn" onClick={() => handleTagChange('lifestyle')}>Lifestyle</button>
                    <button type="button" className="tag-btn" onClick={() => handleTagChange('technology')}>Technology</button>
                    <button type="button" className="tag-btn" onClick={() => handleTagChange('politics')}>Politics</button>
                    <button type="button" className="tag-btn" onClick={() => handleTagChange('sports')}>Sports</button>
                    <button type="button" className="clr-btn" onClick={() => handleTagChange('')}>Clear</button>
                </div>
                {!posts.length ?
                    <div className="no-posts">No Posts available</div> :
                    <ul className="post-list">
                        {
                            posts.map(post => {
                                return <SinglePost post={post} key={post.id} />;
                            })
                        }
                    </ul>}
            </div>
        </div>
    );
}

export default PostList;

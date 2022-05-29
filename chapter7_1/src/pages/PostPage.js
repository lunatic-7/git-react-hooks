import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'
import Post from '../post/Post'


const PostPage = ({ id }) => {

    const [post, getPost] = useResource(() => ({
        url: `/posts/${id}`,
        method: 'get'
    }))

    useEffect(getPost, [id, getPost])
    
    return (
        <div>
            {(post && post.data) ? <Post {...post.data}/> : 'Loading...'}
            <hr />
        </div>
    )
}

export default PostPage
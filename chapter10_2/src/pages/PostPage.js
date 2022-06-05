import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'
import Post from '../post/Post'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import FooterBar from './FooterBar';


const PostPage = () => {

    const params = useParams();
    const {id} = params;
    
    const [post, getPost] = useResource(() => ({
        url: `/posts/${id}`,
        method: 'get'
    }))

    useEffect(getPost, [id, getPost])
    
    return (
        <div>
            <Link to='/'>Go back</Link>
            {(post && post.data) ? <Post {...post.data}/> : 'Loading...'}
            <hr />
            <FooterBar/>
        </div>
    )
}

export default PostPage
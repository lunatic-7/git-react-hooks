import React, { useEffect, useContext } from 'react'
import { StateContext } from '../contexts'
import { useResource } from 'react-request-hook';
import PostList from '../post/PostList';

const HomePage = () => {

    const { state, dispatch } = useContext(StateContext);
    const { error } = state;

    const [posts, getPosts] = useResource(() => ({
        url: '/posts',
        method: 'get'
    }))

    useEffect(getPosts, [getPosts])

    useEffect(() => {
        if (posts && posts.error) {
            dispatch({ type: 'POSTS_ERROR' })
        }
        if (posts && posts.data) {
            dispatch({ type: 'FETCH_POSTS', posts: posts.data.reverse() })
        }
    }, [posts, dispatch])

    return (
        <div>
            {error && <b>{error}</b>}
            <PostList />
        </div>
    )
}

export default HomePage
import { useResource } from 'react-request-hook';

export function useAPILogin() {
    return useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
        // Please note that it is not secure to send the password in cleartext via a GET
        // request. We only do this for the sake of simplicity when configuring our
        // dummy server. In a real world application, use a POST request for login
        // instead and send the password as part of the POST data. Also make sure
        // to use Hypertext Transfer Protocol Secure (HTTPS) so that the POST
        // data will be encrypted.
    }))
}

export function useAPIRegister() {
    return useResource((username, password) => ({
        url: '/users',
        method: 'post',
        data: { username, password }
    }))
}

export function useAPICreatePost() {
    return useResource(({ title, content, author }) => ({
        // Here, we are using a shorthand syntax for array destructuring: we are
        // ignoring the first element of the array, by not specifying a value name.
        // Instead of writing const [ post, createPost ], and then not using
        // post, we just put a comma, as follows: const [ , createPost ].
        url: '/posts',
        method: 'post',
        data: { title, content, author }
    }))
}

export function useAPIThemes() {
    return useResource(() => ({
        url: '/themes',
        method: 'get'
    }))
    // Here, we are using the shorthand syntax for () => { return { } },
    // which is () => ({ }). Using this shorthand syntax allows us to
    // concisely write functions that only return an object.
}
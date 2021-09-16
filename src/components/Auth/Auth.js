import axios from 'axios';
import { useState } from 'react';

export default function Auth({ render }) {
    // Store the token in a state variable.
    // In real apps perhaps you'd store it somewhere else, e.g. localStorage (see https://usehooks.com/useLocalStorage for hook example)
    // so that it persists after page refresh
    const [token, setToken] = useState(null);

    const login = async(username, password) => {
        // assuming we have a `api/login` endpoint which takes username & password
        // TODO: real error handling
        const { data } = await axios.post('api/login', { username, password });

        if (data.valid) {
            setToken(data.token);
        }
    }

    const logout = () => setToken(null);

    // Expose a function to call the posts API using the token
    const listPosts = () => axios.get('api/posts', { headers: { Authorization: `JWT ${token}` } }).then(resp => resp.data);

    const api = {
        login,
        logout,
        listPosts,
        isLoggedIn: token !== null,
    };

    // render is a method which consumes the api object and renders a component that uses it
    return render(api);
}

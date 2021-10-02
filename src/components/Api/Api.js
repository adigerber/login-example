import axios from 'axios';
import { createContext, useState } from 'react';

const ApiContext = createContext({});

export default function Api({ children }) {
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

    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    )
}

export { ApiContext };
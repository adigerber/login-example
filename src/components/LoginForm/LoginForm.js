import { useState } from "react"

export default function LoginForm({ login }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <input
                type='text'
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder='Username'
            />
            <input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Password'
            />
            <button onClick={() => login(username, password)}>
                Login
            </button>
        </div>
    )
}
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions/allActions';

const Login = ({ loginAction: login }) => {
    const [email, setEmail] = useState('admin@yaari.com');
    const [password, setPassword] = useState('admin123');
    const [error, setError] = useState(null);
    const handleLogin = async () => {
        if (email && password) {
            await login(email, password);
        } else {
            setError('Missing data.');
        }
    };
    return (
        <form>
            <div>
                <label htmlFor="email">Enter username</label>
                <input onChange={(e) => setEmail(e.target.value)} name="email" type="text" value={email} />
            </div>
            <div>
                <label htmlFor="password">Enter password</label>
                <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" value={password} />
            </div>
            <span>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </span>
            {error && <p>{error}</p>}
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        accessCode: state.all.accessCode,
    };
};

const mapActionsToProps = {
    loginAction,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);

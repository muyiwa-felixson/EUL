import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from 'src/redux/modules/user';
import { selectLoggedInUser } from 'src/redux/modules/user/selector';
import { COOKIE_NAME } from 'src/utils/constants';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(selectLoggedInUser);
    // @ts-ignore
    const token = useSelector(state => state.users.token);
    const [_, setCookie] = useCookies([COOKIE_NAME]);

    const onLogin = async () => {
        if (password && username) {
            await dispatch(login({
                username,
                password
            }));
        }
    };

    useEffect(() => {
        if(token && user) {
            setCookie(COOKIE_NAME, token, { path: '/' }); 
            history.push('/users');
        }
    }, [token]);

    return (
        <div>
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
            <br></br>
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={onLogin}>
                Login
            </button>
        </div>
    );
};

export default Login;
import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { singInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ marginBottom: '20px' }}>
                <button onClick={singInWithGoogle}>Google Sing In</button>
            </div>
            <form>
                <input type="email" placeholder='Your email' />
                <br />
                <input type="passwrod" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            </form>

        </div>
    );
};

export default Login;
import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register Now</h2>
            <form>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='Your email' />
                <br />
                <input type="passwrod" placeholder='Your password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;
import React from 'react';

function Login({isLoggedIn,setIsLoggedIn}){
    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(!isLoggedIn);
    }
    return (
        <div>
            {!isLoggedIn && <form onSubmit={submitHandler}>
            <label htmlFor='username'>Username:</label>
            <input type="text" placeholder='username' id="username"  />
            <br/>
            <label htmlFor='password'>Password:</label>
            <input type="text" placeholder='Password' id="password"  />
            <br/>
            <input type="submit" value="Login" />
        </form>}
            {isLoggedIn && <p>You are Logged In</p>}
        </div>
        
    )
}

export default Login;
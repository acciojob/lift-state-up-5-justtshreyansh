import React from 'react';

function Login({isLoggedIn,setIsLoggedIn}){
    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(!isLoggedIn);
    }
    return (
        <div>
            {!isLoggedIn && <form>
            <label htmlFor='username'>Username:</label>
            <input type="text" placeholder='username' id="username"  />
            <br/>
            <label htmlFor='password'>Password:</label>
            <input type="text" placeholder='Password' id="password"  />
            <br/>
            <button onClick={submitHandler}>Login</button>
        </form>}
            {isLoggedIn && <p>You are Logged In</p>}
        </div>
        
    )
}

export default Login;
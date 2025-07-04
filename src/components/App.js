
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";
const App = () => {
  const[isLoggedin,setIsLoggedIn] = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent component</h1>
        <Login isLoggedIn={isLoggedin} setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}

export default App

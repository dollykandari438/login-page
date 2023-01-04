import React,{useState} from 'react'

const Loginform = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userame, setUsername] = useState('')
    const [password, setPassword] = useState('')

   function handleUsernameChange(event){
    setUsername(event.target.value)
    }
   function handlePasswordChange(event) {
    setPassword(event.target.value)
    }

    function handleLogin(event){
     event.preventDefault()
     setIsLoggedIn(true);
    }
    function handleLogout(event){
setIsLoggedIn(false)
    }

    if(isLoggedIn){
        return(
        <div>
            <p>Welcome, {userame}</p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
        )
    }else{  
    

  return (
    <div>
        
        <form onSubmit={handleLogin} >
    <label>
      UserName :
      <input
       type="text"
        value={userame} 
        onChange={handleUsernameChange} />
    </label>
    <label>
    Password :
      <input
       type="password"
        value={password} 
        onChange={handlePasswordChange} />
    </label>
    <br />
    <button type='submit'>Login</button>
  </form>
    </div>
  )
    }
}

export default Loginform
import { useState } from "react";
 function LoginForm() {
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  const [error, setError] = useState("");  function name(a){
    setUsername(a.target.value);
  }
  function Password(a){
    setPassword(a.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!username){    
      setError("Enter Username Properly!!!")  
      return;
    }
    if (!password){
     setError("Enter password Properly!!!")  

      return;
    }
    setError("")
    alert("Login successful");
    
  }


  return (
    <div style={{ maxWidth:"300px", margin:"auto", padding:"20px", border:"1px solid black", borderRadius:"5px" }}>
      <h2>Login Form!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={name} style={{ width: "90%", padding: "8px", marginBottom: "10px" }} />
        <input type="password" placeholder="Password" value={password} onChange={Password} style={{ width:"90%",padding:"8px", marginBottom: "10px" }} />
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        <button type="submit" style={{width:"96%", padding:"8px",backgroundColor:"green", color:"white",border:"none", cursor:"pointer"}}>Login</button>
      </form>
    </div>
  );
}
export default LoginForm
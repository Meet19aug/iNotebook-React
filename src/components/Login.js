import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login =  () => {

    const [credentials, setCredentials] = useState({email : "", password : ""})
    let history = useNavigate();

    // const host = "http://localhost:5000";
    //`${host}/api/auth/login`
    const handleSubmit = async (e)=>{
        e.preventDefault();
        //"http://localhost:5000/api/auth/login"
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email : credentials.email , password : credentials.password })
        });
        const json = await response.json();
        console.log(json);

        if(json.success){
            //save the token to local storage and redirect
            localStorage.setItem('tiken', json.authtoken)
            history('/');
        }
        else{
            alert("Invalid Credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login

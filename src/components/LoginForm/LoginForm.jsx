import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser, setUpdate }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setUpdate({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
         
          <input className='loginInput' type="text" name="email" value={credentials.email} onChange={handleChange} placeholder='Email' required />
        
          <input className='loginInput' type="password" name="password" placeholder='Password' value={credentials.password} onChange={handleChange} required />
          <button className='loginButton' type="submit">Sign In</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
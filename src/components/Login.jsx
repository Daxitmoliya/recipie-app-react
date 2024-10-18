import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  // Handle Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User signed in with Google:', result.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to Yummly</h2>
        {error && <p className="error-message">{error}</p>}
        
        {/* Email/Password Form */}
        <form onSubmit={handleLogin}>
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>
        
        {/* Divider */}
        <div className="divider">or</div>
        
        {/* Google Login Button */}
        <button onClick={handleGoogleLogin} className="google-login-btn">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

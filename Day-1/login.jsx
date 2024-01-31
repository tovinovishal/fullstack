import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const preventRefresh = (e) => {
    e.preventDefault();

    // Perform form validation before submitting
    if (validateForm()) {
      // Your form submission logic here, e.g., redirect to "/home"
      console.log('Form submitted successfully', { email, password});
    }
  };

  const validateForm = () => {
    let isValid = true;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation (add more conditions as needed)
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  return (
    <div className='p_container'>
    <div className='c_container'>
    <div className='c1'></div>
    <div className="wrapper__login">
        <div className="form">
          <div className="heading">LOGIN</div>
          <form>
            <div className='loginField'>
              <label htmlFor="e-mail">E-Mail</label>
              <input
                type="email"
                id="e-mail"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error">{emailError}</p>}
            </div>
            <div className='loginField'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <button className='sbButton' type="submit" onClick={preventRefresh}>
              Submit
            </button>
          </form>
          <p>
            Don`t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div> 
      </div>
      </div>
   
  );
}

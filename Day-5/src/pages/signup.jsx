import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/sin.css';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userType, setUserType] = useState('user');

  const onsubmit = (e) => {
    e.preventDefault();

    // Perform form validation before submitting
    if (validateForm()) {
      // Your form submission logic here
      console.log('Form submitted successfully');
      navigate('/home');

      
     
    }
  };

  const validateForm = () => {
    let isValid = true;

    // Name validation
    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
    if (!passwordPattern.test(password)) {
      setPasswordError('Password should contain at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  return (
    <div className='parent_container'>
    <div className='child_container'>
    <div className='c2'></div>
    <div className="new-wrapper__signup">
      <div className="new-form">
        <div className="new-heading">CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="newName">Name </label>
            <input
              type="text"
              id="newName"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="new-error">{nameError}</p>}

          </div><br/>
          <div >
            <label htmlFor="newEmail">E-Mail </label>
            <input
              type="text"
              id="newEmail"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           {emailError && <p className="new-error">{emailError}</p>}

          </div><br/>
          <div>
            <label htmlFor="newPassword">Password </label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="new-error">{passwordError}</p>}

          </div><br/>
          <div>
            <label htmlFor="newUserType">User Type </label>
            <select
              className='ddown'
              id="newUserType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button className='sbButton' type="submit" onClick={onsubmit}>
            Submit
          </button>
          <h2 style={{ textAlign: 'center', fontSize: '15px' }}>OR</h2>
        </form>
        <p>
          Have an account ? <Link to="/login"> Login </Link>
        </p>
      </div>
    </div>
    </div>
    </div>
  );
}

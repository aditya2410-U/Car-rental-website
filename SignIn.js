// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "../dist/signInUp.css";

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = async () => {
//     try {
//       const checkResponse = await fetch('http://localhost:3001/api/checkRegistration', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const checkData = await checkResponse.json();

//       if (!checkResponse.ok || !checkData.isRegistered) {
//         alert('User not registered. Please register first.');
//         return;
//       }

//       const trimmedEmail = email.trim();
//       const trimmedPassword = password.trim();

//       const response = await fetch('http://localhost:3001/api/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log('Authentication successful');
//         alert('Authentication successful');
//       } else {
//         console.error('Authentication failed:', data.error);
//       }
//     } catch (error) {
//       console.error('Error during authentication:', error);
//     }
//   };

//   return (
//     <div className="signin-container">
//       <h2>Sign In</h2>
//       <form>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//         <button type="button" onClick={handleSignIn}>
//           Sign In
//         </button>

//         <p>
//           Not registered? <Link to="/register">Create new account</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../dist/signInUp.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const checkResponse = await fetch('http://localhost:3001/api/checkRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const checkData = await checkResponse.json();

      if (!checkResponse.ok || !checkData.isRegistered) {
        alert('User not registered. Please register first.');
        return;
      }

      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      const response = await fetch('http://localhost:3001/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Authentication successful');
        alert('Authentication successful');

        // Redirect to the home page
        navigate('/');
      } else {
        console.error('Authentication failed:', data.error);
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>

        <p>
          Not registered? <Link to="/register">Create a new account</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;

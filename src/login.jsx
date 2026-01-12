import { useState, useEffect } from "react";
import CourseList from "./CourseList";

const initialUsers = {
  'test@example.com': { password: 'test', purchasedCourses: ['Java'] }
};

function Login() {
const [loggedIn, setLoggedIn] = useState(false);
const [mode, setMode] = useState('login'); // 'login' or 'register'
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [error, setError] = useState('');
const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : initialUsers;
});
const [currentUser, setCurrentUser] = useState(null);

useEffect(() => {
    // Removed auto login
}, [users]);

function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (mode === 'register') {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (users[email]) {
            setError('User already exists');
            return;
        }
        const newUsers = {...users, [email]: { password, purchasedCourses: [] }};
        setUsers(newUsers);
        localStorage.setItem('users', JSON.stringify(newUsers));
        localStorage.setItem('currentUser', email);
        setCurrentUser(email);
    } else {
        if (!users[email] || users[email].password !== password) {
            setError('Invalid email or password');
            return;
        }
        localStorage.setItem('currentUser', email);
        setCurrentUser(email);
        setLoggedIn(true);
    }
}


if (loggedIn) return <CourseList users={users} currentUser={currentUser} updateUsers={setUsers} />;


return (
     <div className="login-container">

      {/* Top Section */}
      <div className="login-header">
        <h1>Learn with Batman</h1>
        <p>Master your skills with Ashwin’s most elite academy.</p>
      </div>

      {/* Institute Info */}
      <div className="login-info">
        <h3>About Our Institute</h3>
        <p>
          Learn with Batman offers practical and world-class training in
          technology, detective reasoning, stealth, and leadership. Build real
          skills with guidance inspired by the Dark Knight.
        </p>
      </div>
<div>
    <button onClick={() => setMode('login')}>Login</button>
    <button onClick={() => setMode('register')}>Register</button>
</div>
<form className="my-5" style={{ width: "50%", margin: "auto" }} onSubmit={handleSubmit} >
<div className="mb-3">
<label className="form-label">Email address</label>
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
</div>

<div className="mb-3">
<label className="form-label">Password</label>
<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" required />
</div>

{mode === 'register' && (
<div className="mb-3">
<label className="form-label">Re-Enter Password</label>
<input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control" required />
</div>
)}

{error && <p style={{color: 'red'}}>{error}</p>}

<button type="submit" className="btn btn-primary">
{mode === 'login' ? 'Login' : 'Register'}
</button>
</form>
</div>
);
}
export default Login;

// import CourseList from './CourseList'
// function Login (){
//     return(
//         <>
//         <form className="my-5"style={{width:"50%" , margin:"auto"}}>
//                 <div className="mb-3">
//                     <label  className="form-label">Email address</label>
//                     <input type="email" className="form-control" required/>
//                 </div>
//                 <div className="mb-3">
//                     <label  className="form-label">Password</label>
//                     <input type="password" className="form-control" required />
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" required/>
//                     <label className="form-check-label" >Check me out</label>
//                 </div>
//                 <button onClick={CourseList} type="submit" className="btn btn-primary">Submit</button>
//         </form>
//         </>
//     )
// }


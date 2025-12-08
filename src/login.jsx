import { useState } from "react";
import CourseList from "./CourseList";


function Login() {
const [loggedIn, setLoggedIn] = useState(false);


function handleSubmit(e) {
e.preventDefault();
setLoggedIn(true);
}
const [pwd1 , setpwd1] = useState();
const [pwd2 , setpwd2] = useState();
const [match, setmatch] = useState(true);
function handlepwd1(event){
    setpwd1(event.target.value)
}
function handlepwd2(event){
    setpwd2(event.target.value)
    if(pwd1 == event.target.value ){
        setmatch(true)
    }else{
        setmatch(false)
    }
}


if (loggedIn) return <CourseList />;


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
<form className="my-5" style={{ width: "50%", margin: "auto" }}
onSubmit={handleSubmit} >
<div className="mb-3">
<label className="form-label">Email address</label>
<input type="email" className="form-control" required />
</div>

<div className="mb-3">
<label className="form-label">Password</label>
<input value={pwd1} onChange={handlepwd1}type="password" className="form-control" required />
</div>

<div className="mb-3">
<label className="form-label">Re-Enter Password</label>
<input value={pwd2} onChange={handlepwd2}type="password" className="form-control" required />
</div>
{!match && <p>Password Miss-Match</p>}

<button type="submit" className="btn btn-primary">
Submit
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


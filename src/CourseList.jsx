import Login from './login'
import { useEffect, useState  } from "react";
import Course from './Course';
import useFetch from './usefetch';
import NavBarCourse from './navBarCourse';

function CourseList(){
    const [Courses , Error] = useFetch('http://localhost:3000/couses')
  const [list, setList] = useState([]);
  // copy fetched data into list
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (Courses) setList(Courses);
  }, [Courses]);

  function handlecourse(id) {
    setList(prev => prev.filter(course => course.id !== id));
  }

   //  Courses.sort((x,y)=> parseInt(y.coursePrice) -parseInt(x.coursePrice))
    // const vmfCourses = Courses.filter((course)=>course.coursePrice<50)
   if(!Courses){
      return (
         <>
         {!Error && <img className="Loading" src="/data/assets/200 (2).gif"></img>}
         {Error && <p>{Error}</p>}
         </>
      )
   }
    const coursesList = list.map((course)=>
    <Course
    key={course.id} 
    courseName={course.courseName}
    coursePrice ={course.coursePrice}
    image = {course.image} 
    rating = {course.rating}
    show={true}
    id ={course.id}
    display ={handlecourse}
    />)
    return(
       <div className="wrapper">

      {/* ---- SIMPLE FIXED SIDEBAR ---- */}
      <div className="sidebar-simple">
        <h3>Menu</h3>
        <ul>
          <li> Home</li>
          <li>All Courses</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>

      {/* ---- RIGHT SIDE CONTENT ---- */}
      <div className="right-content">
        {coursesList}
      </div>

    </div>
    )
    }

export default CourseList
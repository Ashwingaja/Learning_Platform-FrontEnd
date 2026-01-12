import Login from './login'
import { useEffect, useState  } from "react";
import Course from './Course';
import NavBarCourse from './navBarCourse';
import coursesData from '../data/course.json';

function CourseList(props){
  const [list, setList] = useState(coursesData.couses);
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  useEffect(() => {
    if (props.currentUser && props.users[props.currentUser]) {
      setPurchasedCourses(props.users[props.currentUser].purchasedCourses || []);
    }
  }, [props.currentUser, props.users]);

  function handlecourse(id) {
    setList(prev => prev.filter(course => course.id !== id));
  }

  const handlePurchase = (courseName) => {
    const newPurchased = [...purchasedCourses, courseName];
    setPurchasedCourses(newPurchased);
    const newUsers = {...props.users, [props.currentUser]: {...props.users[props.currentUser], purchasedCourses: newPurchased}};
    props.updateUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
  };

   //  Courses.sort((x,y)=> parseInt(y.coursePrice) -parseInt(x.coursePrice))
    // const vmfCourses = Courses.filter((course)=>course.coursePrice<50)
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
    isPurchased={purchasedCourses.includes(course.courseName)}
    onPurchase={handlePurchase}
    />)
    return(
       <div className="wrapper">

      {/* ---- SIMPLE FIXED SIDEBAR ---- */}
      <div className="sidebar-simple">

        <h3>Purchased</h3>
        <ul>
          {purchasedCourses.map(course => <li key={course}>{course}</li>)}
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
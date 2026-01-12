import PropTypes from 'prop-types';
import useFetch from './usefetch';
import { useNavigate } from 'react-router-dom';
import Post from './post';
function NavBarCourse() {
  const [courses, error] = useFetch('https://cloud-backend-git-main-ashwingajas-projects.vercel.app/api/courses');
  const navigate = useNavigate()
  if (error) {
    return <p>Error loading courses.</p>;
  }

  if (!courses) {
    return <img className="Loading" src="/data/assets/200 (2).gif"/>;
  }

  return (
   <div className="container mt-4">
  <h3 className="mb-4 CourseTitle">Available Courses </h3>

  <div className="row">
    {courses.map((course) => (
      <div key={course.id} className="col-md-4 mb-3"  >
        <div className="card" onClick={()=>(navigate('/Post/'+ course.id))} >
          <div className="card-body">
            <h5 className="card-title" >{course.courseName}</h5>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default NavBarCourse;

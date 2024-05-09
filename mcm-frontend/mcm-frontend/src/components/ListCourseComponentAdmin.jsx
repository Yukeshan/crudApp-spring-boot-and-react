import React,{useEffect, useState} from 'react'
import { deleteCourse, listCourses } from '../services/courseService'
import { useNavigate } from 'react-router-dom'



const ListCourseComponentAdmin = () => {

  const navigator = useNavigate();

    const [courses,setCourses] = useState([])

    useEffect(() => {

      getAllCourses();
    
    },[])

    function getAllCourses(){
      listCourses().then((response)=>{
        setCourses(response.data);
  }).catch(error =>{
    console.error(error);
  })
    }

    function addNewCourse(){
        navigator('/add-course')
    }

    
function updateCourse(id){
  navigator(`/update-course/${id}`)
  }

  function removeCourse(id){
    console.log(id)
  
    deleteCourse(id).then((response)=>{
  
      getAllCourses();
    
    }).catch(error=>{
      console.error(error)
    })
  
  }


  return (
    <div className='container'>
    <h2 className='text-center'>List of Courses</h2>
    <button className='btn btn-primary mb-2' onClick={addNewCourse}>Add Course</button>
    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th>Course ID</th>
          <th>Course name</th>
          <th>Course duration</th>
          <th>teacher name</th>
          <th>Actions</th>
          </tr>
      </thead>
      <tbody>
        {
          courses.map(course =>
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.courseName}</td>
            <td>{course.duration}</td>
            <td>{course.teacher}</td>
            <td><button className='btn btn-info' onClick={()=>updateCourse(course.id)}>Update</button></td>
            <td><button className='btn btn-danger' onClick={()=>removeCourse(course.id)}>Delete</button></td>

          </tr>
          )
        }
        <tr>

        </tr>

      </tbody>
    </table>
  </div>
  )
}

export default ListCourseComponentAdmin
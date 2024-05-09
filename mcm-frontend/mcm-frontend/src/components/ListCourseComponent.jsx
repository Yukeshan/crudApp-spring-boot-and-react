import React,{useEffect, useState} from 'react'
import { listCourses } from '../services/courseService'

const ListCourseComponent = () => {

    const [courses,setCourses] = useState([])

    useEffect(() => {
        listCourses().then((response)=>{
            setCourses(response.data);
      }).catch(error =>{
        console.error(error);
      })
    
    
    },[])



  return (
    <div className='container'>
    <h2 className='text-center'>List of Courses</h2>
    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th>Course ID</th>
          <th>Course name</th>
          <th>Course duration</th>
          <th>teacher name</th>
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

export default ListCourseComponent
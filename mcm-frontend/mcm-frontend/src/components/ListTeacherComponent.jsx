import React,{useEffect, useState} from 'react'
import { listTeachers } from '../services/teacherService'

const ListTeacherComponent = () => {

    const [teachers,setTeachers] = useState([])

    useEffect(() => {
      listTeachers().then((response)=>{
        setTeachers(response.data);
      }).catch(error =>{
        console.error(error);
      })
    
    
    },[])


  return (
    <div className='container'>
    <h2 className='text-center'>List of Teachers</h2>
    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th>Teacher ID</th>
          <th>Teacher first name</th>
          <th>Teacher last name</th>
          <th>Teacher email</th>
          </tr>
      </thead>
      <tbody>
        {
          teachers.map(teacher =>
          <tr key={teacher.id}>
            <td>{teacher.id}</td>
            <td>{teacher.firstName}</td>
            <td>{teacher.lastName}</td>
            <td>{teacher.email}</td>

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

export default ListTeacherComponent
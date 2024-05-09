import React,{useEffect, useState} from 'react'
import { deleteStudent, listStudents } from '../services/studentService'

import { useNavigate } from 'react-router-dom'



const ListStudentComponentAdmin = () => {
  const navigator = useNavigate();

const [students,setStudents] = useState([])

useEffect(() => {
  getAllStudents();


},[])


function getAllStudents(){

  listStudents().then((response)=>{
    setStudents(response.data);
  }).catch(error =>{
    console.error(error);
  })
}

function addNewStudent(){
    navigator('/add-student')

}

function updateStudent(id){
navigator(`/update-student/${id}`)
}

function removeStudent(id){
  console.log(id)

  deleteStudent(id).then((response)=>{

    getAllStudents();
  
  }).catch(error=>{
    console.error(error)
  })

}



  return (
    <div className='container'>
      <h2 className='text-center'>List of students</h2>
      <button className='btn btn-primary mb-2' onClick={addNewStudent}>Add Student</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student first name</th>
            <th>Student last name</th>
            <th>Student email</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {
            students.map(student =>
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td><button className='btn btn-info' onClick={()=>updateStudent(student.id)}>Update</button></td>
              <td><button className='btn btn-danger' onClick={()=>removeStudent(student.id)}>delete</button></td>

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

export default ListStudentComponentAdmin
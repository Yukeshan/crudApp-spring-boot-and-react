import React,{useEffect, useState} from 'react'
import { deleteTeacher, listTeachers } from '../services/teacherService'
import { useNavigate } from 'react-router-dom'



const ListTeacherComponentAdmin = () => {
  const navigator = useNavigate();

    const [teachers,setTeachers] = useState([])

    useEffect(() => {

      getAllTeachers();
    
    },[])

    function getAllTeachers(){

      listTeachers().then((response)=>{
        setTeachers(response.data);
      }).catch(error =>{
        console.error(error);
      })

    }

    function addNewTeacher(){
        navigator('/add-teacher')
    
    }

    
function updateTeacher(id){
  navigator(`/update-teacher/${id}`)
  }


  function removeTeacher(id){
    console.log(id)
  
    deleteTeacher(id).then((response)=>{
  
      getAllTeachers();
    
    }).catch(error=>{
      console.error(error)
    })
  
  }


  return (
    <div className='container'>
    <h2 className='text-center'>List of Teachers</h2>
    <button className='btn btn-primary mb-2' onClick={addNewTeacher}>Add Teacher</button>
    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th>Teacher ID</th>
          <th>Teacher first name</th>
          <th>Teacher last name</th>
          <th>Teacher email</th>
          <th>Actions</th>
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
            <td><button className='btn btn-info' onClick={()=>updateTeacher(teacher.id)}>Update</button></td>
            <td><button className='btn btn-danger' onClick={()=>removeTeacher(teacher.id)}>Delete</button></td>

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

export default ListTeacherComponentAdmin
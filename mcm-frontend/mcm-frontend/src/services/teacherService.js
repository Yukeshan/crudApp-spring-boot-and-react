import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/teachers';

export const listTeachers =()=> axios.get(REST_API_BASE_URL);

export const createTeacher = (teacher) => axios.post(REST_API_BASE_URL,teacher)

export const getTeacher = (teacherid) => axios.get(REST_API_BASE_URL+'/'+teacherid);

export const updateTeacher = (teacherid,teacher) => axios.put(REST_API_BASE_URL+'/'+teacherid,teacher);

export const deleteTeacher = (teacherid) => axios.delete(REST_API_BASE_URL+'/'+teacherid);
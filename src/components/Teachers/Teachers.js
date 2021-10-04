import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(()=>{
        fetch('./teachers.JSON')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    },[]);
    return (
        <div className="container py-5 text-center">
            <div className="teachers-heading">
                <h2 className="heading fw-bold">OUR TEACHERS</h2>
                <p>Some Special Teachers From The Industry!</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                {
                    teachers.map(teacher=><Teacher key={teacher.id} teacher={teacher}></Teacher>)
                }
            </div>       
        </div>
    );
};

export default Teachers;
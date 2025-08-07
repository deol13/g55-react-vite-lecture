  import React, {useState} from "react";
  
  const studentData = [
     { id: 1, name: "Alice", subject: "Math", grade: "A" },
     { id: 2, name: "Bob", subject: "Science", grade: "B" },
     { id: 3, name: "Charlie", subject: "History", grade: "A-" },
     { id: 4, name: "Diana", subject: "English", grade: "B+" },
     { id: 5, name: "Edward", subject: "Math", grade: "C" },
   ];
/*
const [studentData, setStudentData] = useState(
    initialStudentData
);
*/

const HeaderTable = () => {
    return (
        <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Subject</th>
                <th scope="col">Grade</th>
            </tr>
        </thead>
    );
};

const BodyTable = () => {
    return (
        <tbody>
            {studentData.map((student) => (
            <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>
                    {student.name}
                </td>
                <td>
                    {student.subject}
                </td>
                <td >
                    {student.grade}
                </td>
            </tr>
            ))}
        </tbody>
    );
};

const StudentTable = () => {
    return (
        <>
        <div>
            <h3>Table of students</h3>
            <table className="table table-striped table-bordered ">
                <HeaderTable/>
                <BodyTable/>
            </table>
        </div>
        <div>
            <StudentForm />
        </div>
        </>
    );
};

export const StudentForm = () => {


    return (
        <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" id="name" name="name" className="form-control"></input> 
            </div>
            <div className="form-group">
                <label>Subject</label>
                <input type="text" id="subject" name="subject" className="form-control"></input>
            </div>
            
            <div className="form-group">
                <label>Grade</label>
                <input type="text" id="grade" name="grade" className="form-control"></input>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary"></input>
        </form>
    );
};

export default StudentTable;
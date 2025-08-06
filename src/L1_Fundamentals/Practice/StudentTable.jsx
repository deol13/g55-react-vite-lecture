  import React from "react";
  
  const studentData = [
     { id: 1, name: "Alice", subject: "Math", grade: "A" },
     { id: 2, name: "Bob", subject: "Science", grade: "B" },
     { id: 3, name: "Charlie", subject: "History", grade: "A-" },
     { id: 4, name: "Diana", subject: "English", grade: "B+" },
     { id: 5, name: "Edward", subject: "Math", grade: "C" },
   ];

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
            <tr>
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

const ContentTable = () => {
    return (
        <table className="table table-striped table-bordered ">
            <HeaderTable/>
            <BodyTable/>
        </table>
    );
};

const StudentTable = () => {
    return (
        <div col-md-12>
            <h3>Table of students</h3>
            <ContentTable/>
        </div>
    );
};

export default StudentTable;
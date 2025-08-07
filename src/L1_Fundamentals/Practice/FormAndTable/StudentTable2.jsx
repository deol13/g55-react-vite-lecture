import React, {useState} from 'react';
import StudentForm from './StudentForm';
import jsonData from './TestData/data.json';

const StudentTable2 = () => {
    // Initial data for this array is the data from the json file data.json
    const [studentData, setStudentData] = useState(jsonData);

    // Goes through the array studentData in a similar mannar as foreach and creates a part of the table from each index's data.
    const tableRows = studentData.map((info) => {
        return (
            <tr key={info.id}>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.subject}</td>
                <td>{info.grade}</td>
            </tr>
        );
    });

    // Check the length of the studentData array to know what id to give the new student.
    // Then create a new copy of the student array, updatedStudentData and push the new student into updatedStudentData.
    // Then updated studentData with updatedStudentData by calling studentData set method.

    // It get's it's data from StudentForm because addRows is sent to StudentForm as a property (prop)
    // And StudentForm calls that property when the submit button is clicked on and sends along form data.
    const addRows = (data) => {
        const totalStudents = studentData.length;
        data.id = totalStudents + 1;
        const updatedStudentData = [...studentData];
        updatedStudentData.push(data);
        setStudentData(updatedStudentData);
    }

    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
            <StudentForm func={addRows} />
        </div>
    );
}

export default StudentTable2;
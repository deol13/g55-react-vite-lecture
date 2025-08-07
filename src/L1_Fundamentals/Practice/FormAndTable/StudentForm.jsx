import React, {useState} from 'react';

const StudentForm = (props) => {
    // Sets up variables and their set methods.
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');

    // Event listeners, they listen to any changes in name, subject and grade inputs.
    // Saves the new data to the variables above.
    const changeName = (event) => {
        setName(event.target.value);
    };
    const changeSubject = (event) => {
        setSubject(event.target.value);
    };
    const changeGrade = (event) => {
        setGrade(event.target.value);
    };

    // This is called when the submit button is clicked, 
    // it sends all the data to the prop gotten from StudentTable which is addRows method that adds a new row with the data.
    // It also clears the variables of any values.
    const transferValue = (event) => {
        event.preventDefault();
        const val = {
            name,
            subject,
            grade,
        };
        props.func(val);
        clearState();
    };

    const clearState = () => {
        setName('');
        setSubject('');
        setGrade('');
    };

    return (
        <div>
            <label>Name</label>
            <input type="text" value={name} onChange={changeName} />
            <label>Subect</label>
            <input type="text" value={subject} onChange={changeSubject} />
            <label>Grade</label>
            <input type="text" value={grade} onChange={changeGrade} />
            <button className="btn btn-primary" onClick={transferValue}>Submit</button>
        </div>
    );
};

export default StudentForm;
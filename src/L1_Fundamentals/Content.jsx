import React from "react";
import StudentTable, {StudentForm}  from "./Practice/StudentTable";
import StudentTable2 from "./Practice/FormAndTable/StudentTable2";

const Sidebar = () => {
  return (
    <div className="col-md-4">
      <h3>Sidebar</h3>
      <p>This is a sidebar section. Add extra links or information here.</p>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="col-md-8">
      <h2>Main Content</h2>
      <p>
        This is the main content section. You can add more details or features
        here.
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <main className="container my-5">
      <div className="row">
        <Sidebar />
        <MainContent />
      </div>
      <div>
        <StudentTable />
        <StudentTable2 /> 
      </div>
    </main>
  );
};

export default Content;
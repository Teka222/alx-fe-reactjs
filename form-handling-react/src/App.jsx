import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

const App = () => {
  return (
    <div>
      <h1>Registration Form</h1>
      <RegistrationForm />
      <h1>Formik Registration Form</h1>
      <FormikForm />
    </div>
  );
};

export default App;

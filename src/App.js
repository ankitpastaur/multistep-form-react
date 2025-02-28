import { useState } from "react";
import UserForm from "./UserForm";
import FormData from "./FormData";
import "./App.css";

function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      placeholder: "Enter name...",
      buttonName: "Next",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      placeholder: "Enter Your Email...",
      buttonName: "Next",
    },
    {
      id: "dob",
      label: "Date of Birth",
      inputType: "date",
      placeholder: "Enter your Date of Birth...",
      buttonName: "Next",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      placeholder: "Enter password...",
      buttonName: "Submit",
    },
  ];

  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log("Form Submitted");
      setIsFormSubmit(true);
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    // console.log("input id", id, val);
    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  };

  console.log("form data>>>>>", formData);

  return (
    <div className="App">
      {!isFormSubmit ? (
        <UserForm
          index={index}
          handleBack={handleBack}
          forms={forms}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      ) : (
        <FormData formData={formData} />
      )}
    </div>
  );
}

export default App;

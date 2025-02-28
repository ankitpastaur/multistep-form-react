const FormData = (props) => {
  const { formData } = props;
  return (
    <div className="formData">
      <h1>Success!</h1>
      <hr />
      <span>Name : {formData.name}</span>
      <br />
      <span>email : {formData.email}</span>
      <br />
      <span>dob : {formData.dob}</span>
      <br />
      <span>password : {formData.password}</span>
      <br />
    </div>
  );
};

export default FormData;

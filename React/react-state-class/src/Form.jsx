import { useState } from "react";

export default function Form() {
  let [FormData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(FormData);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="Enter full name"
        type="text"
        value={FormData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="username">Username</label>
      <input
        placeholder="Enter username"
        type="text"
        value={FormData.userName}
        id="username"
        name="userName"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        placeholder="Enter password"
        type="password"
        value={FormData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}

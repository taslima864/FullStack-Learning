import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("Kuuro");

  let handleNameChange = (event) => {
    console.log(event.target.value);
    setFullName(event.target.value);
  };

  return (
    <form>
      <label htmlFor="username">Full Name</label>
      <input
        placeholder="Enter full name"
        type="text"
        value={fullName}
        onChange={handleNameChange}
        id="username"
      />
      <button>Submit</button>
    </form>
  );
}

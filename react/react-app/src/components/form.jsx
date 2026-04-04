import React, { useState } from "react";

function Form() {
  let [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        className="border border-gray-400 rounded-md p-2"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter your name"
      />
      <label htmlFor="name">{value}</label>
    </>
  );
}

export default Form;

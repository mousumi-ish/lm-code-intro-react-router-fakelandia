//import Confession from "./confession";

//import { useState } from "react";
const handleSubmit = (event: any) => {
  event.PreventDefault();
  //const formData = new FormData(event.target);
  //const name = formData.get("name");
  console.log("Message message");
};
const Form = () => {
  return (
    <>
      <h1>Form Elements</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Confession:
          <input type="text" name="name" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
      </form>
    </>
  );
};

export default Form;

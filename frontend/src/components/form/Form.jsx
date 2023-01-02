import { useRef } from "react";
import axios from "axios";

export default function Form() {
  const inputRef = useRef();
  const hsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);
    axios.post(`http://localhost:5000/api/avatar`, formData);
  };
  return (
    <>
      <h2>Ajout avatar</h2>
      <form encType="multipart/form-data" onSubmit={hsubmit}>
        <label htmlFor="fileInput">
          Your avatar picture:
          <input name="fileInput" type="file" ref={inputRef} />
        </label>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

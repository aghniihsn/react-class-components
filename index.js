// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import Functional from "./Functional";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <Functional /> */}
//   </React.StrictMode>
// );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function MyForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [addres, setAddres] = useState("");
  const [Days, setDays] = useState("");

  const mySubmitHandler = (e) => {
    e.preventDefault();
    if (!Number(age)) {
      alert("Usia Kamu Harusnya Berupa Angka");
    } else {
      alert("data terkirim!");
      console.log(username);
      var formValue = {
        username: username,
        age: age,
        addres: addres,
        Days: Days,
      };
      console.log(formValue);
    }
  };
  return (
    <form onSubmit={mySubmitHandler}>
      <h1>Hello!</h1>
      <select name="Days" value={Days} onChange={(e) => setDays(e.target.value)}>
        <option value="Senin">Senin</option>
        <option value="Selasa">Selasa</option>
        <option value="Rabu">Rabu</option>
        <option value="Kamis">Kamis</option>
        <option value="Jumat">Jumat</option>
      </select>
      <p>Masukan Nama:</p>
      <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
      <p>Masukan Usia Anda: </p>
      <input type="text" name="age" onChange={(e) => setAge(e.target.value)} />
      <p>Alamat: </p>
      <input type="textarea" name="address" value={addres} onChange={(e) => setAddres(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  );
}
ReactDOM.render(<MyForm />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", age: null, address: "", Days: "" };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Usia Kamu Harusnya Berupa Angka");
    } else {
      alert("Data Terkirim");
      console.log(this.state);
    }
  };
  myChangeHandler = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    this.setState({ address: event.target.address });
    this.setState({ [nam]: val });
  };
  render() {
    let header = "";
    if (this.state.username) {
      header = <h1> Hai {this.state.username}</h1>;
    } else {
      header = "";
    }
    return (
      <form onSubmit={this.mySubmitHandler}>
        {header}
        <select name="Days" value={this.state.Days} onChange={this.myChangeHandler}>
          <option value="Ford">Senin</option>
          <option value="Selasa">Selasa</option>
          <option value="Rabu">Rabu</option>
          <option value="Kamis">Kamis</option>
          <option value="Jumat">Jumat</option>
        </select>
        <p>Masukan Nama:</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        <p>Masukan Usia Anda: </p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
        <p>Alamat: </p>
        <input type="textarea" name="address" value={this.state.address} onChange={this.myChangeHandler} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById("root"));
export default MyForm;

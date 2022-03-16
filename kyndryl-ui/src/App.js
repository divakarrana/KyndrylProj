import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {

  const [formData, setFormData] = useState({vmId:"", vmName:"", vmLocation:"", vmStatus:""});

  const formUpdate = (e) => {
    let updateFieldName = e.target.name;
    let updatedValue = e.target.value;
    let updatedState = {...formData};
    updatedState[updateFieldName] = updatedValue;
    setFormData(updatedState);
  }

  const submitFormData = (e) => {
    e.preventDefault();
    //call API for insert operation
    axios.post("http://localhost:3002/api/user/create", formData)
      .then((data) => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <label htmlFor="vmId">VM-ID</label>
      <input type="text" id="vmId" name="vmId" onChange={formUpdate} value={formData.vmId}></input>
      <label htmlFor="vmName">VM-NAME</label>
      <input type="text" id="vmName" name="vmName" onChange={formUpdate} value={formData.vmName}></input>
      <select name="vmLocation" onChange={formUpdate} value={formData.vmLocation}>
        <option vlaue="A">A</option>
        <option vlaue="B">B</option>
        <option vlaue="C">C</option>
        <option vlaue="D">D</option>
      </select>
      <select name="vmStatus" onChange={formUpdate} value={formData.vmStatus}>
        <option value="on">On</option>
        <option value="off">Off</option>
      </select>
      <button onClick={submitFormData}>Submit</button>
    </div>
  );
}

export default App;

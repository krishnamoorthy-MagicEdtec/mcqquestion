import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Mcqscreen1.css";

function Mcqscreen1() {
  const [data, setData] = useState({
    userName: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleStart = () => {
    navigate("/mcqcsreen", { state: data });
  };

  return (
    <div className="container" >
      <div className="intro bd-primary">
        <div className="introduction">
          <div className="center">
            <h1>MCQ</h1>
            <div class="mb-3 row">
              <label class="col col-form-label">Username:</label>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter UserName"
                  value={data.value}
                  onChange={handleChange}
                  name="userName"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label class="col col-form-label">Category:</label>
              <div class="col">
                <select
                  class="form-select"
                  aria-label="Drapdown list"
                  name="category"
                  value={data.value}
                  onChange={handleChange}
                >
                  <option selected>Drapdown list</option>
                  <option value="Science">Science</option>
                  <option value="Social">Social</option>
                  <option value="Mathamatics">Mathamatics</option>
                </select>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary" onClick={handleStart}>
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mcqscreen1;

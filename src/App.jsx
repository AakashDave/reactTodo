import React, { useState } from "react";
import List from "./List";
import { DeleteForever } from "@material-ui/icons";
import { AddOutlined } from "@material-ui/icons";

const App = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState([]);

  let inputEvent = (e) => {
    let value = e.target.value;
    setInput(value);
  };

  let submitData = (e) => {
    setData((preVal) => {
      return [...preVal, input];
    });
    setInput("");
  };

  let dltLists = (id) => {
    setData((preVal) => {
      return preVal.filter((val, index) => {
        return id !== index;
      });
    });
  };

  let removeAll = () => {
    setData((preval) => {
      return [];
    });
  };
  return (
    <>
      <nav className="navbar bg-danger navbar-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">ToDo Lists</span>
        </div>
      </nav>

      <div
        className="container-fluid d-flex w-100 justify-content-center align-items-center"
        style={{ height: "93vh" }}
      >
        <div className="box d-flex justify-content-center align-items-center flex-column">
          <div className="card border-0">
            <div className="input-group mb-3 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Add Text Here"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={input}
                onChange={inputEvent}
              />
              <button
                onClick={submitData}
                className="btn btn-danger"
                type="button"
                id="button-addon2"
              >
                <AddOutlined />
              </button>
            </div>
            {data.length === 0 ? (
              <h1 className="text-center text-secondary">List is Empty</h1>
            ) : (
              <div
                className="list-group border-3 border"
                style={{ height: "50vh", overflowY: "scroll" }}
              >
                {data.map((val, index) => {
                  return (
                    <List
                      text_data={val}
                      key={index}
                      id={index}
                      dltItem={dltLists}
                    />
                  );
                })}
              </div>
            )}
          </div>
          {
            data.length===0 ? null : (
            <button
            onClick={removeAll}
            className="btn btn-outline-danger mt-3 w-40">
            Remove All <DeleteForever />
          </button>
          )}
          
        </div>
      </div>
    </>
  );
};

export default App;

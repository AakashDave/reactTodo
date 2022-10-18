import React from "react";
import { DeleteOutline } from "@material-ui/icons";

const List = (props) => {
    let dltList=()=>{
        return props.dltItem(props.id)
    }
  return (
    <p
      id={props.id}
      className="mt-2 border-bottom border-0 d-flex justify-content-between list-group-item list-group-item-action list-group-item-light text-dark"
    >
      <span>{props.text_data}</span>
      <button
        className="btn btn-outline-danger"
        type="button"
        id="button-addon2"
        onClick={dltList}
      >
        <DeleteOutline/>
      </button>
    </p>
  );
};

export default List;

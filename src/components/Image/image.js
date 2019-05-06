import React from "react";

function Images(props) {
  console.log(props.img);
  return (
    <div className="img-container" onClick={() => props.clickHandler()}>
      <img alt={props.id} src={props.img} />
    </div>
  );
}

export default Images;
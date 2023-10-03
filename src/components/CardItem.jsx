import React from "react";
import "../style/cardstyle.css";
function CardItem(props) {
  return (
    <div className="card-item">
      <h2> {props.name} </h2>
      <h3> {props.description}</h3>

      <img src={props.url} width="250px" height="250px" />
      <h4> {props.nationality}</h4>
      <h5> {props.age} </h5>
      <p> {props.number}</p>
    </div>
  );
}

CardItem.defaultProps = {
  name: "player",
  description: "this is a default description ",
  url: "",
  nationality: "",
  age: "",
  number: "",
};

export default CardItem;

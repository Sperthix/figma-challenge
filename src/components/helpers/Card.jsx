import { Fragment } from "react";

const Card = (props) => {
  return (
    <Fragment>
      <div>
        <img src={props.img} alt="icon"></img>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <span>{props.price}</span>
        <button>Try it</button>
      </div>
    </Fragment>
  );
};

export default Card;

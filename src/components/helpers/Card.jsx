import "../../styles/PricingCard.css";

const PricingCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="icon"></img>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <span>{props.price}</span>
      <button>Try it</button>
    </div>
  );
};

export default PricingCard;

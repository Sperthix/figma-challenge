import "../../styles/helpers/benefitsCard/BenefitsCard.css";

const BenefitsCard = (props) => {
  return (
    <div className="BenefitsCard">
      <div className="BenefitsCardLeft">
        <span>{props.numbers}</span>
      </div>
      <div className="BenefitsCardRight">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default BenefitsCard;

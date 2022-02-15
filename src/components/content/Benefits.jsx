import "../../styles/content/benefits/Benefits.css";

import graph from "../../assets/benefits/Graph.svg";
import BenefitsCard from "../helpers/BenefitsCard";
import Button from "../helpers/Button";

const Benefits = () => {
  const buttonStyle = {
    display: "flex",
    "align-items": "center",
  };

  return (
    <section className="BenefitsContainer">
      <div className="benefitsLeft">
        <span>Helpdesk benefits</span>
        <h1>How can live chat software help your business?</h1>
        <p>
          Chat conversations can help your contact center improve your sales
          process and empower your online businesses
        </p>
        <div className="graphContainer">
          <img src={graph} alt="graph" />
        </div>
      </div>
      <div className="benefitsRight">
        <div className="BenefitCardWrapper">
          <BenefitsCard
            numbers="17-30%"
            title="Decrease in costs"
            text="Save costs on agent per month with the right pricing plan"
          />
        </div>
        <div className="BenefitCardWrapper">
          <BenefitsCard
            numbers="20%"
            title="Conversion rate increase"
            text="Empower your sales team with online chat and increase sales"
          />
        </div>
        <div className="BenefitCardWrapper">
          <BenefitsCard
            numbers="73%"
            title="Higher satisfaction rates"
            text="Improve customer satisfaction and decrease cart abandonment"
          />
        </div>

        <Button text="Make your business goals a reality" style={buttonStyle} />
        {/* <button>Make your business goals a reality</button> */}
      </div>
    </section>
  );
};

export default Benefits;

import "../../styles/content/benefits/Benefits.css";

import graph from "../../assets/benefits/Graph.svg";

const Benefits = () => {
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
      <div className="benefitsRight"></div>
    </section>
  );
};

export default Benefits;

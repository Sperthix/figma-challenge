import "../../styles/content/pricing/Pricing.css";
import PricingCard from "../helpers/PricingCard";

import envelope from "../../assets/pricing/pricing-icon-ticket.svg";
import envelopeChat from "../../assets/pricing/pricing-icon-ticketchat.svg";
import Button from "../helpers/Button";

const Pricing = () => {
  const buttonStyle = {
    width: "30%",
  };

  return (
    <section className="pricingContainer">
      <div className="pricingLeft">
        <span>Best price</span>
        <h1>A fair knowledge base software</h1>
        <p>
          Creating your own knowledge center doesn’t have to be an expensive
          feat. LiveAgent offers multiple pricing plans that cater to all
          support needs. Get our standalone knowledge base software with the
          least expensive plan or take a look at other plans that offer
          additional features.
        </p>
        <Button text="Pricing" style={buttonStyle} />
      </div>
      <div className="pricingRight">
        <PricingCard
          img={envelope}
          title="Ticket"
          text="For Small Businesses and Entrepreneurs"
          price="15$ / mo"
        />
        <PricingCard
          img={envelopeChat}
          title="Ticket+Chat"
          text="For Medium-sized Businesses and Professional Agencies"
          price="29$ / mo"
        />
      </div>
    </section>
  );
};

export default Pricing;

import "../../styles/content/layout/Layout.css";
import Intro from "../content/Intro";
import Pricing from "../content/Pricing";
import Benefits from "../content/Benefits";

const Layout = () => {
  return (
    <main className="pageLayout">
      <div className="IntroSection">
        <Intro />
      </div>
      <div className="PricingSection">
        <Pricing />
      </div>
      <div className="BenefitsSection">
        <Benefits />
      </div>
    </main>
  );
};

export default Layout;

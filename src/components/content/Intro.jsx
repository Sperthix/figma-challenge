import "../../styles/Intro.css";

import bg from "../../assets/intro/bg-women.jpg";
import play from "../../assets/intro/play-icon.svg";
import airbus from "../../assets/intro/logos/Airbus.svg";
import forbes from "../../assets/intro/logos/Forbes.svg";
import nascar from "../../assets/intro/logos/Nascar.svg";
import usc from "../../assets/intro/logos/USC.svg";

const Intro = () => {
  return (
    <section className="intro">
      <div className="left">
        <h1>
          Provide excellent
          <br /> <span>customer</span> service.
        </h1>
        <p>
          Answer more tickets with all-in-
          <br />
          one help desk software.
        </p>
        <p className="checkmarks">
          ✓ No setup fee  ✓ Customer service 24/7 <br />✓ No credit card required
          ✓ Cancel any time
        </p>
        <div>
          <button>Get Started | 14 days free</button>
          <span className="circle">
            <span>
              <span>
                <img src={play} alt="play icon" />
              </span>
            </span>
          </span>
          <p className="play">See It In Action</p>
        </div>

        <div className="logo">
          <span>Used by</span>
          <img src={airbus} alt="airbus logo" />
          <img src={forbes} alt="airbus logo" />
          <img src={nascar} alt="airbus logo" />
          <img src={usc} alt="airbus logo" />
        </div>
      </div>
      <div className="right">
        <img src={bg}></img>
      </div>
    </section>
  );
};

export default Intro;

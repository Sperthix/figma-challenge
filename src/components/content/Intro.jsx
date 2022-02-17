import "../../styles/content/intro/Intro.css";

import bg from "../../assets/intro/bg-women.jpg";
import play from "../../assets/intro/play-icon.svg";
import airbus from "../../assets/intro/logos/Airbus.svg";
import forbes from "../../assets/intro/logos/Forbes.svg";
import nascar from "../../assets/intro/logos/Nascar.svg";
import usc from "../../assets/intro/logos/USC.svg";
import Button from "../helpers/Button";
import Chat from "../helpers/Chat";
import pic from "../../assets/chat/Pic.svg";

const Intro = () => {
  const buttonStyle = {
    // width: "30%",
    padding: "1em 2em",
  };

  return (
    <section className="intro">
      <div className="introLeft">
        <h1>
          Capture more leads with <span>live chat</span>
        </h1>
        <p>Take customer engagement to the next level with LiveAgent</p>
        <p className="checkmarks">
          ✓ No setup fee ✓ Customer service 24/7 <br />✓ No credit card required
          ✓ Cancel any time
        </p>
        <div>
          <Button text="Get Started | 14 days free" style={buttonStyle} />

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
          <img src={forbes} alt="forbes logo" />
          <img src={nascar} alt="nascar logo" />
          <img src={usc} alt="usc logo" />
        </div>
      </div>
      <div className="introRight">
        <section className="chat">
          <Chat left={true} pic={pic} message="Hello, I'm John, how may I help you?" />
          <Chat left={false} message="I'd like to check my order status." />
          <Chat left={true} pic={pic} message="No problem, please provide me with your order ID." />
          <Chat left={false} message="My order ID is GQ34566" />
          <Chat left={true} bubles={true} pic={pic} />
        </section>
        <img src={bg} alt="women typing on a phone"></img>
      </div>
    </section>
  );
};

export default Intro;

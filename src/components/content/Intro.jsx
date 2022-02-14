import { Fragment } from "react";

import "../../styles/Intro.css";

import bg from "../../assets/intro/bg-women.jpg";

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
      </div>
      <div className="right">
        <img src={bg}></img>
      </div>
    </section>
  );
};

export default Intro;

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

const Feature = () => {
  return (
    <div className="feature-container">
      <div className="feature">
        <img src={icon1} alt="Icon1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="feature">
        <img src={icon2} alt="Icon2" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="feature">
        <img src={icon3} alt="Icon3" />
        <h3>Single-way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="feature">
        <img src={icon4} alt="Icon4" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
};

export default Feature;

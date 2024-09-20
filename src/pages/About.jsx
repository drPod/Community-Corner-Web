import logo from "../assets/logo.png";

export default function About() {
  return (
    <div>
      <div>
        <h1 id="about-heading">About Us</h1>

        <div className="about-section">
          <div>
            <h3 className="sub-heading">What is Community Corner?</h3>
            <p>Enter stuff about who we are, our purpose, etc</p>
          </div>
          <img src={logo} alt="Image" width="200"  />
        </div>

        <div className="about-section">
          <div>
            <h3 className="sub-heading">Who Are We?</h3>
            <p>Enter stuff about who we are, our purpose, etc</p>
          </div>
          <img src={logo} alt="Image" width="200" />
        </div>

        <div className="about-section">
          <div>
            <h3 className="sub-heading">What Do We Publish?</h3>
            <p>Enter stuff about who we are, our purpose, etc</p>
          </div>
          <img src={logo} alt="Image" width="200"  />
        </div>

        <div className="about-section">
          <div>
            <h3 className="sub-heading">History of Community Corner</h3>
            <p>Enter stuff about who we are, our purpose, etc</p>
            <br/>
          </div>
          <img src={logo} alt="Image" width="200" />
        </div>
      </div>
    </div>
  );
}

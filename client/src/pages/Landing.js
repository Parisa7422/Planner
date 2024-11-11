import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="background-img">
      <div className="header-position">
        <h1>
          Don’t call it a dream,
          <br />
          call it a plan
        </h1>
        {/* <h3> ― Alexander Graham Bell</h3> */}
        <Link to="/register" className="btn-login btn">
          log in
        </Link>
      </div>
    </div>
  );
};
export default Landing;

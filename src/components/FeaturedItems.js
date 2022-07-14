import Left from "../resources/images/left.png";
import Right from "../resources/images/right.png";

import "../css/featured-items.css";

const FeaturedItems = ({ children }) => {
  return (
    <div className="featured-items">
      <div className="backdrop"></div>
      {children}
      <button type="button" className="btn-control left" title="left">
        <img src={Left} alt="" />
      </button>
      <button type="button" className="btn-control right" title="right">
        <img src={Right} alt="" />
      </button>
    </div>
  );
};

export default FeaturedItems;

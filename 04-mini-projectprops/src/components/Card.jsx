import { Bookmark } from "lucide-react";

const Card = (props) => {
  

  return (
    <>
      <div className="card">
        <div className="top">
          <img src={props.brandLogo} />
          <button>
            Save <Bookmark size={18} />
          </button>
        </div>

        <div className="center">
          <h2>
            {props.company} <span>{props.datePosted}</span>
          </h2>

          <p>{props.post}</p>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

        <div className="bottom ">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location},India</p>
          </div>

          <button>Apply now</button>
        </div>
      </div>
    </>
  );
};

export default Card;

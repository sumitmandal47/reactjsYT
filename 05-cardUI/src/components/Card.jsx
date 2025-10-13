import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <h4>avaliable</h4>
          <h3>{props.pay}</h3>
        </div>
        <div className="center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsbmTZu_uMrmJ0z--CrG-o1UIXytu1OCizQ&s" />
          <div className="cen1">
            <h3>{props.name}</h3>
            <p>{props.work}</p>
            <p> {props.role}</p>
          </div>
          <div className="cen2">
            <h3>{props.experience}</h3>

            <span>+4</span>
          </div>
          <div className="cen3">
            <p>{props.description}</p>
          </div>
        </div>
        <div className="bottom">
          <button>VIEW PROFILE</button>
        </div>
      </div>
    </>
  );
}

export default Card

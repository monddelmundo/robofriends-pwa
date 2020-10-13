import React from "react";

const Card = ({ email, name, id }) => {
  //tc=text center, dib=div, br=border, pa=padding, ma=margin, br=border radius
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

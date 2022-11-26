import React from "react";
import "./Style/Card.css";
function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={props.partdetails.Logo} alt="nishan" />
        </div>
        <div className="card-components">
          <div className="card-name">
            <p>{props.partdetails.PoliticalPartyName}</p>
          </div>
          <div className="votes">
            <p>Samanupatik Votes: {props.partdetails.TotalVoteReceived}</p>
          </div>
          <div className="samanupatik-seats">
            <p>
              Samanupatik Seats:{" "}
              {Math.round(props.partdetails.SamanupatikSeats)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

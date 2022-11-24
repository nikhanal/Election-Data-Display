import React from "react";
import "./Style/Card.css";
function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={props.logos} alt="nishan" />
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
              {Math.round(
                (props.partdetails.TotalVoteReceived / props.totalvote) * 110
              )}
            </p>
          </div>
          <div className="direct-seats">
            <p>Direct Seats: 48</p>
          </div>
          <div className="total-seats">
            <p>Total Seats: 78</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar";
import "./index.css";
function App() {
  const logos = [
    "https://assets-generalelection2079.ekantipur.com/parties/party-1668772767.png",
    "https://assets-generalelection2079.ekantipur.com/parties/party-1668772996.png",
    "https://assets-generalelection2079.ekantipur.com/parties/party-1668772863.png",
    "	https://assets-generalelection2079.ekantipur.com/parties/party-1668772801.png",
    "	https://assets-generalelection2079.ekantipur.com/parties/party-1668772896.png",
    "	https://assets-generalelection2079.ekantipur.com/parties/party-1668772838.png",
    "	https://assets-generalelection2079.ekantipur.com/parties/party-1668773357.png",
    "	https://assets-generalelection2079.ekantipur.com/parties/party-1668773651.png",
    "https://assets-generalelection2079.ekantipur.com/parties/party-1668773343.png",
    " https://assets-generalelection2079.ekantipur.com/parties/party-1667284351.png",
  ];
  const [data, setData] = useState([]);
  const [totalvotes, setTotalvotes] = useState();

  useEffect(() => {
    const url = "https://samanupatik-api.onrender.com/";
    fetch(url)
      .then((res) => res.json())
      .then((itm) => {
        setData(itm);
        console.log(itm);
      });
  }, []);
  const counttotalvotes = () => {
    let count = 0;
    data.map((itm) => {
      count = count + itm.TotalVoteReceived;
    });
    setTotalvotes(count);
  };
  useEffect(() => {
    counttotalvotes();
    console.log(totalvotes);
  }, [data]);
  return (
    <div>
      <NavBar />
      <div className="container">
        {data
          .filter((data) => data.TotalVoteReceived > 50000)
          .map((itms, index) => (
            <Card
              partdetails={itms}
              totalvote={totalvotes}
              logos={logos[index]}
            />
          ))}
      </div>
    </div>
  );
}
export default App;

import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar";
import "./index.css";
import ClimbingBoxLoader from "react-spinners/ClipLoader";
function App() {
  const [loading, setLoading] = useState(false);
  // const defaultLogo =
  //   "https://assets-generalelection2079.ekantipur.com/parties/party-1666157053.png";
  // const logos = [
  //   {
  //     id: 2,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668772767.png",
  //   },
  //   {
  //     id: 1,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668772996.png",
  //   },
  //   {
  //     id: 3,
  //     logo: "	https://assets-generalelection2079.ekantipur.com/parties/party-1668772801.png",
  //   },
  //   {
  //     id: 2279,
  //     logo: "	https://assets-generalelection2079.ekantipur.com/parties/party-1668772896.png",
  //   },

  //   {
  //     id: 2278,
  //     logo: "	https://assets-generalelection2079.ekantipur.com/parties/party-1668772838.png",
  //   },
  //   {
  //     id: 2445,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668772863.png",
  //   },
  //   {
  //     id: 1020,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1667284351.png",
  //   },
  //   {
  //     id: 2306,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668773651.png",
  //   },
  //   {
  //     id: 2289,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668773357.png",
  //   },
  //   {
  //     id: 92,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668772910.png",
  //   },
  //   {
  //     id: 2319,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1669349789.png",
  //   },
  //   {
  //     id: 10,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1667284594.png",
  //   },
  //   {
  //     id: 35,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668772925.png",
  //   },
  //   {
  //     id: 9,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1669349904.png",
  //   },
  //   {
  //     id: 13,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668772972.png",
  //   },
  //   {
  //     id: 29,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668773850.png",
  //   },
  //   {
  //     id: 56,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668772952.png",
  //   },
  //   {
  //     id: 85,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1667370041.jpg",
  //   },
  //   {
  //     id: 2332,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668773251.png",
  //   },
  //   {
  //     id: 2324,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668773637.png",
  //   },
  //   {
  //     id: 86,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1667368940.jpg",
  //   },
  //   {
  //     id: 64,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668772279.png",
  //   },
  //   {
  //     id: 2327,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668772436.png",
  //   },
  //   {
  //     id: 62,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1669354447.png",
  //   },
  //   {
  //     id: 12,
  //     logo: "https://assets-generalelection2079.ekantipur.com/parties/party-1668773343.png",
  //   },
  // ];
  const [data, setData] = useState([]);
  const [totalvotes, setTotalvotes] = useState();

  const calc = () => {
    let total = 0;
    data.map((item) => {
      total += item.TotalVoteReceived;
    });
    setTotalvotes(total);
  };
  useEffect(() => {
    setLoading(true);
    const url = "https://samanupatik-api.onrender.com/";
    fetch(url)
      .then((res) => res.json())
      .then((itm) => {
        setLoading(false);
        setData(itm);
        console.log(itm);
      });
  }, []);
  useEffect(() => {
    calc();
  }, [data]);
  return (
    <div>
      <NavBar />
      {loading ? (
        <div className="loader">
          <ClimbingBoxLoader
            color={"#d05c6c"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container">
          {data
            .filter((itms) => itms.TotalVoteReceived > 0)
            .map((itm) => {
              console.log(totalvotes);
              return <Card partdetails={itm} />;
            })}
        </div>
      )}
    </div>
  );
}
export default App;

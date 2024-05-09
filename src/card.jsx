import axios from "axios";
import React, { useEffect, useState } from "react";
import Tile from "./Tile";
function Card() {
  const [country, setCountry] = useState([]);

  const handleCountry = async () => {
    try {
      let res = await axios.get(`https://restcountries.com/v3.1/all`);
      console.log("res", res.data);
      setCountry(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCountry();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      {country.map((item) => {
        return (
          <Tile
            key={item.ccn3}
            flag={item.flags.png}
            name={item.name.common}
            alt={item.flags.alt}
          />
        );
      })}
    </div>
  );
}
export default Card;

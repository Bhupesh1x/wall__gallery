import React, { useState, useEffect } from "react";
import "./App.css";
import Gallery from "./Gallery";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState([]);
  const [imageSize, setImageSize] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await axios
        .get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
        .then(function (response) {
          setApiData(response.data);
        });
    }
    fetchData();
  }, []);

  const imageSizeHandler = () => {
    setImageSize(!imageSize);
  };

  console.log(imageSize);

  return (
    <div className="app">
      <div className="gallery">
        {apiData.map(
          (value, index) =>
            index < 8 && (
              <Gallery src={value.urls.full} />
            )
        )}
      </div>
    </div>
  );
}

export default App;

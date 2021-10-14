import React from "react";
import { useState } from 'react';

const Index = () => {
  const [isfull, setIsfull] = useState(false);
  const handleClick = (color) => {
    if (isfull === false) {
      const elem = document.getElementById(color);
      console.log(elem);
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
      setIsfull(true);
    }else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
      setIsfull(false);
    }
  };
  return (
    <>
      <main className="main">
        <div className="header">
          <h1>Color Test Online</h1>
        </div>
        <div className="gridColors">
          <button onClick={() => handleClick("green_sc")}>
            <div id="green_sc"></div>
          </button>
          <button onClick={() => handleClick("red_sc")}>
            <div id="red_sc"></div>
          </button>
          <button onClick={() => handleClick("orange_sc")}>
            <div id="orange_sc"></div>
          </button>
          <button onClick={() => handleClick("yellow_sc")}>
            <div id="yellow_sc"></div>
          </button>
          <button onClick={() => handleClick("black_sc")}>
            <div id="black_sc"></div>
          </button>
          <button onClick={() => handleClick("blue_violet_sc")}>
            <div id="blue_violet_sc"></div>
          </button>
          <button onClick={() => handleClick("white_sc")}>
            <div id="white_sc"></div>
          </button>
          <button onClick={() => handleClick("gold_sc")}>
            <div id="gold_sc"></div>
          </button>
        </div>
        <div className="footer">Developed By Shams</div>
      </main>
    </>
  );
};
export default Index;

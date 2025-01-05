import React from "react";
import colorNames from "colornames"


const Colordisplay = ({ color, hexcolor, Offset, changebg, hex, setcolors }) => {
    return (
        <div className="colorbox">
          <div
            className="colorboxcont"
            style={{
              backgroundColor: hexcolor,
              color: Offset? "black":"white",
              padding: "10px",
            }}
          >
            {color || "Enter a color name"}
          </div>
    
          <input
            type="text"
            placeholder="Enter color name"
            value={color}
            onChange={(e)=>{setcolors(e.target.value);
                   hex(colorNames(e.target.value))
            }}
          />
    
          <button onClick={changebg}>
            {Offset ? "Offset On" : "Offset Off"}
          </button>
        </div>
      );
}

export default Colordisplay
import React, { useState } from "react";
import "./Calculatorstyle.css";

const Calculater = () => {
  const num = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "+", "-", "*", "/"];
  const [value, setvalue] = useState("");
  return (
    <div className="calculator-body">
      <div className="container">
        <div>
          <div className="calc-input">
            <input type={"text"} value={value} />
          </div>
          <div className="calc-btn">
            {num.map((v) => {
              return (
                <button
                  value={v}
                  onClick={(e) => setvalue(value + e.target.value)}
                >
                  {v}
                </button>
              );
            })}
            <button
              className="cut"
              value={"AC"}
              onClick={() => setvalue(value.slice(0, -1))}
            >
              AC
            </button>
            <button
              value={"="}
              style={{ width: "217px", fontSize: "26px" }}
              onClick={() => {
                try {
                  setvalue(eval(value));
                } catch {
                  console.log("error");
                }
              }}
            >
              =
            </button>
            <button className="cut" value={"CA"} onClick={() => setvalue("")}>
              CA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculater;

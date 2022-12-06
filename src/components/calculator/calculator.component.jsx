import React, { useState } from "react";
import "./calculator.styles.scss";

// components
import Key from "../key/key.component";

const Calculator = () => {
  const operators = ["*", "/", "+", "-", "="];
  const topRowOperators = ["C"];
  const numerals = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];

  // STATES
  const [inputCalc, setInputCalc] = useState("");
  const [ans, setAns] = useState("0");

  return (
    // CALCULATOR SCREEN
    <div className="fl-wrapper">
      <div className="fl-calculator">
        <div className="fl-screen">
          <span className="fl-ans-preview">
            {ans !== "0" ? `(${ans})` : null}
          </span>
          &nbsp; {inputCalc}
        </div>

        {/* CALCULATOR BODY */}
        <div className="fl-body">
          <div className="fl-numpad">
            {/* RENDER TOP ROW OPERATORS */}
            {topRowOperators.map((operator, indx) => (
              <Key
                key={indx}
                setAns={setAns}
                inputCalc={inputCalc}
                setInputCalc={setInputCalc}
              >
                {operator}
              </Key>
            ))}

            {/* RENDER NUMPAD */}
            {numerals.map((num, indx) => (
              <Key
                key={indx}
                setAns={setAns}
                inputCalc={inputCalc}
                setInputCalc={setInputCalc}
              >
                {num}
              </Key>
            ))}

            {/* RENDER OPERATIONPAD */}
          </div>
          <div className="fl-operation-pad">
            {operators.map((operator, indx) => (
              <Key
                key={indx}
                setAns={setAns}
                inputCalc={inputCalc}
                setInputCalc={setInputCalc}
              >
                {operator}
              </Key>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

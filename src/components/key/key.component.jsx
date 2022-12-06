import React from "react";
import "./key.styles.scss";

const Key = ({ setAns, inputCalc, setInputCalc, children }) => {
  const operators = ["*", "/", "+", "-", "="];

  const handleClick = (e) => {
    const value = e.target.innerText;
    // DO NOT ADD OPERATOR AT THE BEGINNING OR TWO OPERATORS ONE AFTER ANOTHER
    if (
      (operators.includes(value) && inputCalc === "") ||
      (operators.includes(value) && operators.includes(inputCalc.slice(-1)))
    ) {
      return;
    }

    if (value == "C") {
      setInputCalc("");
      setAns("0");
    } else if (value == "=") {
      setInputCalc(eval(inputCalc));
      setAns("0");
    } else {
      setInputCalc((inputCalc += children));
      setAns(eval(inputCalc));
    }
  };

  return (
    <div
      className={`${children === "0" ? "fl-w-2x" : ""} ${
        children === "C" ? "fl-bg-red fl-w-3x" : ""
      }  fl-key`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Key;

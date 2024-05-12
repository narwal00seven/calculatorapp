import { useState } from "react";
import "./Buttones.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleOperator = (value) => {
    if (input.slice(-1) === value || input.slice(-1) === "=") {
      setInput(input.slice(0, -1));
    }
    const lastChar = input.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) {
      setInput(input.slice(0, -1) + value);
    } else {
      setInput(input + value);
    }
  };

  const handleEqual = () => {
    try {
      const result =eval(input.replace(/x/g, "*").replace(/÷/g, "/"));
      setOutput(result);
    } catch (error) {
      setOutput("Error");
    }
  };

  return (
    <>
      <div className="calculator">
        <h1>React Calculator</h1>
        <input type="text" value={input} readOnly />
        <div className="resultinput">
          {output && <div className="result">{output}</div>}
        </div>
        <div className="buttons">
          <button onClick={() => handleInput("7")}>7</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleOperator("+")}>+</button>
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleOperator("-")}>-</button>
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleOperator("*")}>*</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={handleEqual}>=</button>
          <button onClick={() => handleOperator("/")}>/</button>
        </div>
      </div>
    </>
  );
}
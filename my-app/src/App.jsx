import { useState } from "react";
import * as math from "mathjs";

import Button from "./component/Button";
import Input from "./component/Input";
import "./App.css";

function App() {
  // const [text, setText] = useState("")
  const [result, setResult] = useState("");

  const addToResult = (value) => {
    setResult((result) => [...result, value + ""]);

    console.log("come");
  };
  const resetButton = (value) => {
    setResult((value = ""));
  };
  const deleteButton = () => {
    setResult(result?.slice(0, -1));
    // setResult(calculate().slice(0, -1));
  };
  const calculate = () => {
    let input = result?.join("");
    setResult(math.evaluate(input).toString());
    // setResult(Number(math.evaluate(input)));

    console.log("go");
  };
  // const operators = () => {
  //   // let value = result >= 1 ? result : "";
  //   // setResult((result) => [...value, value + ""]);
  //   setResult(result >= 1 ? result : "");
  //   console.log("middle");
  // };

  // const handleChange = (e) => {
  //   setResult(result.concat(e.target.name));
  // };

  return (
    <div className="App">
      <div className="headerText">
        <h2>calc</h2>
        <p>THEME</p>
      </div>
      <div className="result-wrapper">
        <div className="result-row">
          <Input result={result} />
        </div>
      </div>

      <div className="calc-wrapper">
        <div className="calc-rows">
          <Button
            symbol="7"
            color="hsl(30, 25%, 89%)"
            name="7"
            handleClick={addToResult}
            buttonHover="blue"

            // onClick={handleChange}
          />
          <Button
            name="8"
            symbol={8}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
          <Button
            symbol={9}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
          <Button
            symbol={"DEL"}
            color="hsl(224, 28%, 35%)"
            handleClick={deleteButton}
          />
        </div>
        <div className="calc-rows">
          <Button
            symbol={4}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
          <Button
            symbol={5}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
          <Button
            symbol={6}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
          <Button
            symbol={"+"}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
        </div>
        <div className="calc-rows">
          <Button
            symbol={1}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
          <Button
            symbol={2}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
          <Button
            symbol={3}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
          <Button
            symbol={"-"}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
        </div>
        <div className="calc-rows">
          <Button
            symbol={"."}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
          <Button
            symbol={0}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
          <Button
            symbol={"/"}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
          <Button
            symbol={"*"}
            color="hsl(30, 25%, 89%)"
            handleClick={addToResult}
          />
        </div>
        <div className="calc-rows">
          <Button
            symbol={"RESET"}
            color="hsl(224, 28%, 35%)"
            handleClick={resetButton}
            width="50%"
          />
          <Button
            symbol={"="}
            color="hsl(6, 63%, 50%)"
            handleClick={calculate}
            width="50%"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

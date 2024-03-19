import { evaluate } from "mathjs";
import React, { useState } from "react";

function Calculator() {
  const [operation, setOperation] = useState([]);

  const clickNumber = (event) => {
    setOperation([...operation, parseInt(event.target.value)]);
  };

  const clickOperation = (event) => {
    if (typeof operation[operation.length - 1] !== "string") {
      setOperation([...operation, event.target.value]);
    }
  };

  const clickEqual = () => {
    let equalOperation = [];
    operation.forEach((item) => {
      if (item === "x") {
        equalOperation.push("*");
      } else {
        equalOperation.push(item);
      }
    });

    if (typeof equalOperation[equalOperation.length - 1] !== "string") {
      setOperation([evaluate(equalOperation.join(""))]);
    }
  };

  const clearOperation = (event) => {
    setOperation([]);
  };
  console.log(operation);
  return (
    <>
      <div className="grid grid-cols-4 mx-80 ">
        <div className="col-span-4 bg-gray-300 text-4xl font-bold py-8 border-t-2 border-l-2 border-r-2 border-gray-400 rounded-t-md text-right px-3">
          <p>{operation.length > 0 ? operation : 0}</p>
        </div>

        {/* ROW 1 */}
        <button
          onClick={clickNumber}
          value="7"
          className="bg-blue-200 hover:bg-blue-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          7
        </button>
        <button
          onClick={clickNumber}
          value="8"
          className="bg-blue-200 hover:bg-blue-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          8
        </button>
        <button
          onClick={clickNumber}
          value="9"
          className="bg-blue-200 hover:bg-blue-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          9
        </button>
        <button
          onClick={clickOperation}
          value="x"
          className="bg-orange-200 hover:bg-orange-400 py-10 border-l-2 border-t-2 border-r-2 border-gray-400 text-3xl font-semibold"
        >
          X
        </button>

        {/* ROW 2 */}
        <button
          onClick={clickNumber}
          value="4"
          className="bg-blue-200 hover:bg-blue-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          4
        </button>
        <button
          onClick={clickNumber}
          value="5"
          className="bg-blue-200 hover:bg-blue-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          5
        </button>
        <button
          onClick={clickNumber}
          value="6"
          className="bg-blue-200 hover:bg-blue-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          6
        </button>
        <button
          onClick={clickOperation}
          value="-"
          className="bg-orange-200 hover:bg-orange-400 py-10 border-l-2 border-t-2 border-r-2 border-gray-400 text-3xl font-semibold"
        >
          -
        </button>

        {/* ROW 3 */}
        <button
          onClick={clickNumber}
          value="1"
          className="bg-blue-200 hover:bg-blue-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          1
        </button>
        <button
          onClick={clickNumber}
          value="2"
          className="bg-blue-200 hover:bg-blue-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          2
        </button>
        <button
          onClick={clickNumber}
          value="3"
          className="bg-blue-200 hover:bg-blue-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          3
        </button>
        <button
          onClick={clickOperation}
          value="+"
          className="bg-orange-200 hover:bg-orange-400 py-10 border-l-2 border-t-2 border-r-2 border-gray-400 text-3xl font-semibold"
        >
          +
        </button>

        {/* ROW 4 */}
        <button
          onClick={clickNumber}
          value="0"
          className="bg-blue-200 hover:bg-blue-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          0
        </button>
        <button
          onClick={clickOperation}
          value="."
          className="bg-orange-200 hover:bg-orange-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          .
        </button>
        <button
          onClick={clickEqual}
          className="bg-orange-200 hover:bg-orange-400 py-10 border-l-2 border-t-2 border-gray-400 text-3xl font-semibold"
        >
          =
        </button>
        <button
          onClick={clickOperation}
          value="/"
          className="bg-orange-200 hover:bg-orange-400 py-10 border-l-2 border-t-2 border-r-2 border-gray-400 text-3xl font-semibold"
        >
          /
        </button>

        <button
          onClick={clearOperation}
          value="clear"
          className="col-span-4 bg-red-200 hover:bg-red-400 py-10 border-2 border-gray-400 text-3xl font-semibold"
        >
          Clear
        </button>
      </div>
    </>
  );
}

export default Calculator;

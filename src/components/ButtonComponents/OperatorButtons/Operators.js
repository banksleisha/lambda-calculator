import React, { useState } from "react";
import { Operators } from "./components/ButtonComponents/OperatorButtons/Operators";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState] = useState(operators);
  return (
    <div>
      {/* STEP 3*/ operatorsState.map((Operators, index) => {
        return <OperatorButton key ={index} Operators={Operators} />
      })}
    </div>
  );
};

export default Operators;
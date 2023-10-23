import React, { useState, useEffect } from "react";
import Title from "./Title";
import BeautifulScreen from "./BeautifulScreen";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import ItSOverNineThousand from "./ItSOverNineThousand";
import FonctionButton from "./FonctionButton";

function Calculator() {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);
  const [easter, setEaster] = useState(false);
  const [arrayNumb, setArrayNumb] = useState([]);

  const handleClick = (value) => {
    if (value == "=") {
      calculate(operation);
    } else if (value == "C") {
      clearInput();
    } else {
      console.log(value)
      updateOperation(value);
    }
  };
  
  const handleKeyboard = (event) => {
    let validChars = ["7","8","9","4","5","6","1","2","3","0","*","+","-","/","c","Enter"];
    let keyPressed = event.key;

    if (validChars.includes(keyPressed)) {

      if(keyPressed == "Enter"){
        calculate(operation)
      }
      else if(keyPressed == "c"){
        clearInput();
      }
      else{
            console.log(keyPressed);
            updateOperation(keyPressed);
      }
    }
  };
// ----------------------------------------------------------------------------------------------------
// -------------------------------------USE EFFECT-----------------------------------------------------
// ----------------------------------------------------------------------------------------------------

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  });



  // useEffect(() => {

  //   console.log(arrayNumb);
  //   cleanArray(arrayNumb);
  // }, [arrayNumb]);

// ----------------------------------------------------------------------------------------------------
// -------------------------------------USE EFFECT-----------------------------------------------------
// ----------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------
// ---------------------------------------Function-----------------------------------------------------
// ----------------------------------------------------------------------------------------------------
  // fonction pour set l'opération

  const updateOperation = (value) => {
    let newOperation = operation.concat(value);
    setOperation(newOperation);
  };

  // fonction pour calculer

  const calculate = (operation) => {
    let tempResult = eval(operation);
    setResult(tempResult);

    if (tempResult > 9000) {
      setEaster(true);
    }
  };

  const clearInput = () => {
    setOperation("");
    setResult("0");
    setEaster(false);
  };

// ----------------------------------------------------------------------------------------------------
// ---------------------------------------Function-----------------------------------------------------
// ----------------------------------------------------------------------------------------------------

  // const cleanArray = (value) => {

  //   let toClean = value;
  //   console.log(toClean);
  //   // let cleaned = toClean.replace(",", "");
  //   // console.log(arrayNumb);
  //   // setOperation(cleaned);
  // };

  return (
    <div className="calculatorDisplay">
      <Title text="Calculator 9000" />
      <div className="list">
        <div>
          <BeautifulScreen operation={operation} result={result} />
        </div>
        <div className="losBouton">
          <FonctionButton handleClick={handleClick} />
          <NumberButton handleClick={handleClick} />
          <OperatorButton handleClick={handleClick} />
        </div>
      </div>
      {easter && <ItSOverNineThousand setEaster={setEaster} />}
    </div>
  );
}

export default Calculator;

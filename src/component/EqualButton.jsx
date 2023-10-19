import React from "react";

function EqualButton({handleClick}) {
  const equal = "="
  return <button  id="equalButton" className="equalButton" onClick={() => handleClick(equal)}>{equal}</button>;
}

export default EqualButton;

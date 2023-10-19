
import React from 'react';

function OperatorButton({handleClick}){
    let operators = ["*","+", "-", "/"];




    const listOperator = operators.map((operator, id) =>( 
        <button className='opeButton' onClick={()=>handleClick(operator)} data-operator={operators} key={id}>{operator}</button>
    ))

    return(
        <div  id="operatorList"  className="operatorList">
            {listOperator}
        </div>
    )
}
export default OperatorButton;
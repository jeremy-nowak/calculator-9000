
import React from 'react';
import EqualButton from './EqualButton';
import { useState } from 'react';
function NumberButton({handleClick}){

    let numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

    const listbuttons = numbers.map((number, id)=>(   
    
        <button className='numButton' onClick={()=>handleClick(number)} data-id={number} key={id}>{number}  </button>
    ))
    return(
        <div id="buttonList" className="buttonList">
            {listbuttons}
            <EqualButton handleClick={handleClick}/>
        </div>
    )
}
export default NumberButton;
import React from 'react';

function BeautifulScreen(props){

    return (
        <div className='divScreen' >
            <input type='text' className='screen' value={props.operation} readOnly/>
            <input type='text' className='screen' value={props.result} readOnly/>
        </div>
    );


}

export default BeautifulScreen;
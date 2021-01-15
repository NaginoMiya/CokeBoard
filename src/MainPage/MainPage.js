import React from 'react';
import Test from './Components/Test'

function MainPage(props) {
    return (
        <div className="MainPage">
            <Test uid={props.uid} />
        </div>
    );
}

export default MainPage;
